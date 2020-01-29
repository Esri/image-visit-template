///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(["dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/aspect",
    "dojo/Deferred",
    "dojo/dom-class",
    "./jimu/portalUrlUtils",
    "./jimu/portalUtils",
    "./jimu/tokenUtils",
    "./jimu/dijit/TabContainer3",
    "dijit/_WidgetsInTemplateMixin",
    "./search/SearchContext",
    "./search/util",
    "./search/SearchPane",
    "./search/AddFromUrlPane",
    "./search/AddFromFilePane",
    "./search/LayerListPane",
    "dojo/_base/array",
    "dojo/dom",
    "dijit/Destroyable",
    "esri/arcgis/Portal"
    
  ],
  function(declare, lang, on, aspect, Deferred, domClass, portalUrlUtils, portalUtils,
    tokenUtils, TabContainer3, _WidgetsInTemplateMixin, SearchContext,
    util, SearchPane, AddFromUrlPane, AddFromFilePane, LayerListPane, array, dom, Destroyable, portal) {
    return declare("application.AddData", [_WidgetsInTemplateMixin, Destroyable], {

      name: "AddData",
      baseClass: "jimu-widget-add-data",

      batchGeocoderServers: null,
      isPortal: false,

      _isOpen: false,
      _searchOnOpen: false,

      tabContainer: null,
      searchPane: null,
      addFromUrlPane: null,
      addFromFilePane: null,

      constructor: function (parameters) {
        var defaults = {
            map: null,
            config: null,
            i18n: null
        };
        lang.mixin(this, defaults, parameters);
    },
      postCreate: function() {
        this.inherited(arguments);
        this.startup();
      },


      startup: function() {
        if (this._started) {
          return;
        }
        this.portalUrl = this.config.portalUrl;
        var self = this,  args = arguments;
        this.userSignIn().then(function(user) {
          
          //console.warn("AddData.user=",user);
          self._checkConfig();
          self._initTabs();
          return self._initContext(user);
        }).then(function() {
          /* CHANGE self.inherited(args);
          if (self.tabContainer) {
            self.tabContainer.startup();
          } else if (self.searchPane) {
            self.searchPane.startup();
            self.scopeOptions.startup();
          } else if (self.addFromUrlPane) {
            self.addFromUrlPane.startup();
          } else if (self.addFromFilePane) {
            self.addFromFilePane.startup();
          }*/

          self.inherited(args);
          if (self.tabContainer) {
            self.tabContainer.startup();
          } 
          if (self.searchPane) {
            self.searchPane.startup();
            self.searchPane.scopeOptions.startup();
            self.searchPane.sortOptions.startup();
            self.searchPane.sortOptions.startup();
          } 
          if (self.addFromUrlPane) {
            self.addFromUrlPane.startup();
          } 
          if (self.addFromFilePane) {
            self.addFromFilePane.startup();
          }
          self._initFooter(self.tabContainer, {
            "searchWidget": self.searchPane,
            "addFromUrlWidget": self.addFromUrlPane,
            "addFromFileWidget": self.addFromFilePane
          });
          self._initListeners();
          self.resize();
          //console.warn("AddData.startup",this);
        }).otherwise(function(error) {
          console.warn("AddData.startup error:", error);
          self.inherited(args);
          
          
          self.resize();
        });
      },
      _userSignIn: function(){
        this.portal = new portal.Portal("http://www.arcgis.com");
        return this.portal.signIn();
      },
      userSignIn: function(){
        var dfd = new Deferred();
        this._userSignIn().then(function(user){
          dfd.resolve(user);
        }).otherwise(function(error){
          dfd.resolve(null);
        });
        return dfd;
      },
     
      _checkConfig: function() {
        if (!this.config) {
          this.config = {};
        }
        var initOption = function(options,name) {
          var opt = options[name];
          if (!opt) {
            opt = options[name] = {
              allow: true,
              label: null
            };
          }
          if (typeof opt.allow !== "boolean") {
            opt.allow = true;
          }
          if (name === "Curated") {
            if (typeof opt.filter !== "string" || lang.trim(opt.filter).length === 0) {
              opt.allow = false;
            }
          }
        };
        var config = this.config;
        if (!config.scopeOptions) {
          config.scopeOptions = {};
        }
        var options = config.scopeOptions;
        initOption(options,"MyContent");
        initOption(options,"MyOrganization");
        initOption(options,"Curated");
        initOption(options,"ArcGISOnline");
        initOption(config,"addFromUrl");
        initOption(config,"addFromFile");
      },

      getSharingUrl: function() {
        var p = portalUtils.getPortal(this.config.portalUrl);
        return portalUrlUtils.getSharingUrl(p.portalUrl);
      },

      _getUser: function() {
        var dfd = new Deferred();
        var portalUrl = this.config.portalUrl;
        //CHANGE Do I change this to portals
        tokenUtils.setPortalUrl(portalUrl);
        if (tokenUtils.userHaveSignInPortal(portalUrl)) {
          portalUtils.getPortal(portalUrl).getUser().then(function(user) {
            dfd.resolve(user);
          }).otherwise(function(error) {
            console.warn("AddData._getUser error:", error);
            dfd.resolve(null);
          });
        } else {
          dfd.resolve(null);
        }
        return dfd;
      },

      _initBatchGeocoder: function(portal,user) {
        //console.warn("_initBatchGeocoder.portal",portal);
        //console.warn("_initBatchGeocoder.user",user);
        var roleOK = false;
        var regexWorld = /(arcgis.com\/arcgis\/rest\/services\/world\/geocodeserver).*/ig;
        var regexWorldProxy = /(\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/ig;
        var geocodeServers = portal && portal.helperServices && portal.helperServices.geocode || [];
        var isWorld, isWorldProxy, batchGeocodeServers = [];
        if (user && user.privileges) {
          roleOK = array.indexOf(user.privileges, "premium:user:geocode") > -1;
        }
        array.forEach(geocodeServers, function (server) {
          isWorld = !!server.url.match(regexWorld);
          isWorldProxy = !!server.url.match(regexWorldProxy);
          if ((isWorld && !portal.isPortal && roleOK) || isWorldProxy || !!server.batch) {
            batchGeocodeServers.push({
              "isWorldGeocodeServer": isWorld || isWorldProxy,
              "isWorldGeocodeServerProxy": isWorldProxy,
              "label": server.name,
              "value": server.url,
              "url": server.url,
              "name": server.name
            });
          }
        });
        this.batchGeocoderServers = batchGeocodeServers;
        //console.warn("batchGeocoderServers",this.batchGeocoderServers);
      },

      _initContext: function(user) {
        var dfd = new Deferred(), bResolve = true;
        // TODO configure this?
        var arcgisOnlineUrl = util.checkMixedContent("http://www.arcgis.com");
        var scopeOptions = this.config.scopeOptions;
        var hasUsername = (user && typeof user.username === "string" && user.username.length > 0);
        var searchContext = new SearchContext();
       
        var portal = portalUtils.getPortal(this.config.portalUrl);
        this.isPortal = portal.isPortal;
        searchContext.portal = portal;

        // Issue #14908
        if (portal.isPortal) {
          searchContext.orgId = portal.id;
        }

        if (user) {
          if (typeof user.orgId === "string" && user.orgId.length > 0) {
            searchContext.orgId = user.orgId;
          }
        }
        if (hasUsername) {
          searchContext.username = user.username;
        } else {
          scopeOptions.MyContent.allow = false;
        }
       
        if (this.searchPane) {
          this.searchPane.searchContext = searchContext;
          this.searchPane.portal = portal;
        }
        this._initBatchGeocoder(portal,user);

        // KML and GeoRSS utility services
        if (portal.isPortal) {
          try {
            var kmlsvc = portalUrlUtils.getSharingUrl(portal.portalUrl) + "/kml";
            kmlsvc = kmlsvc.replace("/sharing/rest/kml","/sharing/kml");
            window.esri.config.defaults.kmlService = kmlsvc;
            window.esri.config.defaults.geoRSSService = kmlsvc.replace("/kml","/rss");
          } catch(ex) {
            console.error(ex);
          }
        }

        //console.warn("AddData.portal",portal);
        var msg = this.i18n.search.loadError + arcgisOnlineUrl;
        var arcgisOnlineOption = scopeOptions.ArcGISOnline;
        searchContext.allowArcGISOnline = arcgisOnlineOption.allow;
        if (portal.isPortal && searchContext.allowArcGISOnline) {
          var arcgisOnlinePortal = portalUtils.getPortal(arcgisOnlineUrl);
          if (!arcgisOnlinePortal) {
            console.warn(msg);
            searchContext.allowArcGISOnline = false;
            arcgisOnlineOption.allow = false;
          } else {
            if (!arcgisOnlinePortal.helperServices) {
              bResolve = false;
              arcgisOnlinePortal.loadSelfInfo().then(function() {
                if (!arcgisOnlinePortal.helperServices) {
                  console.warn(msg);
                  searchContext.allowArcGISOnline = false;
                  arcgisOnlineOption.allow = false;
                } else {
                  searchContext.arcgisOnlinePortal = arcgisOnlinePortal;
                  //console.warn("searchContext.arcgisOnlinePortal",arcgisOnlinePortal);
                }
                dfd.resolve();
              }).otherwise(function(error) {
                searchContext.allowArcGISOnline = false;
                arcgisOnlineOption.allow = false;
                console.warn(msg);
                console.warn(error);
                dfd.resolve();
              });
            }
          }
          //console.warn("arcgisOnlinePortal",arcgisOnlinePortal);
        } else {
          if (!hasUsername && !portal.isPortal) {
            // MyOrganization and ArcGISOnline are equivalent, - PUBLIC
            if (scopeOptions.MyOrganization.allow && scopeOptions.ArcGISOnline.allow) {
              scopeOptions.MyOrganization.allow = false;
            }
          }
        }
        if (bResolve) {
          dfd.resolve();
        }
        return dfd;
      },

      _initFooter: function(parentNode, widgets) {
        if(parentNode) {
          var searchWidget = widgets.searchWidget,
              hasSearchFooter = false;
          if(searchWidget &&
             searchWidget.footerNode &&
             searchWidget.footerNode.nodeName) {
            hasSearchFooter = true;
          }
          var footerContainer = this.footerContainer = document.createElement("DIV");
          footerContainer.className = this.baseClass + "-footer";
          if(hasSearchFooter) {
            footerContainer.appendChild(searchWidget.footerNode);
          }
          var layerListBtn = document.createElement("A");
          layerListBtn.className = "layerlist-button jimu-float-trailing";
          layerListBtn.href = "#";
          layerListBtn.innerHTML = "<span class='esri-icon-layers'></span>" + this.i18n.layerList.caption;
          this.own(on(layerListBtn, "click", lang.hitch(this, function(evt) {
            evt.preventDefault();
            this.showLayers();
          })));
          footerContainer.appendChild(layerListBtn);
          var messageNode = this.messageNode = document.createElement("SPAN");
          messageNode.className = "message";
          footerContainer.appendChild(messageNode);
          var targetNode = parentNode.containerNode || parentNode.domNode || parentNode;
          if(targetNode.nodeName) {
            targetNode.appendChild(footerContainer);
          }
          this.own(on(this.tabContainer, "tabChanged", lang.hitch(this, function(title) {
            this._setStatus("");
            if(hasSearchFooter) {
              searchWidget.footerNode.style.display = title === this.i18n.tabs.search ? "" : "none";
            }
            if(this.i18n.tabs.search === title) {
              if(hasSearchFooter) {
                searchWidget.footerNode.style.display = "";
              }
              messageNode.style.display = "none";
            } else {
              if(hasSearchFooter) {
                searchWidget.footerNode.style.display = "none";
              }
              messageNode.style.display = "";
            }
          })));
        }
      },

      _initListeners: function() {
        var self = this;
        if (this.map) {
          this.own(this.map.on("extent-change", function() {
            try {
              if (self.searchPane && self.searchPane.bboxOption.bboxToggle.get("checked")) {
                if (self._isOpen) {
                  self.searchPane.search();
                } else {
                  self._searchOnOpen = true;
                }
              }
            } catch (ex) {
              console.warn(ex);
            }
          }));
        }
      },

      _initTabs: function(){
        var config = this.config, tabs = [];
        //console.warn("config",config);

        var supportsFile = !!(window.File && window.FileReader && window.FormData);
        var allowSearch = false, options = config.scopeOptions;
        var chkAllowSearch = function(name) {
          if (!allowSearch) {
            if (options && options[name] && options[name].allow) {
              allowSearch = true;
            }
          }
        };
        chkAllowSearch("MyContent");
        chkAllowSearch("MyOrganization");
        chkAllowSearch("Curated");
        chkAllowSearch("ArcGISOnline");

        if (allowSearch) {
          this.searchPane = new SearchPane({
            wabWidget: this
          },dom.byId("searchNode"));
          tabs.push({
            title: this.i18n.tabs.search,
            content: this.searchPane.domNode
          });
        }
        if (config.addFromUrl && config.addFromUrl.allow) {
          this.addFromUrlPane = new AddFromUrlPane({
            wabWidget: this
          },
          );
          tabs.push({
            title: this.i18n.tabs.url,
            content: this.addFromUrlPane.domNode
          });
        }
        if (supportsFile && config.addFromFile && config.addFromFile.allow) {
          this.addFromFilePane = new AddFromFilePane({
            wabWidget: this
          },dom.byId("fileNode"));
          tabs.push({
            title: this.i18n.tabs.file,
            content: this.addFromFilePane.domNode
          });
        }

        var self = this;
        if (tabs.length > 0) {
          this.tabContainer = new TabContainer3({
            average: true,
            tabs: tabs
          }, dom.byId("tabsNode"));
          try {
            if (tabs.length === 1 && this.tabContainer.controlNode &&
              this.tabContainer.containerNode) {
              this.tabContainer.controlNode.style.display = "none";
              this.tabContainer.containerNode.style.top = "0px";
              //console.warn("this.tabContainer",this.tabContainer);
            }
          } catch(ex1) {}
          //this.tabContainer.hideShelter();
          aspect.after(this.tabContainer,"selectTab",function(title){
            //console.warn("selectTab",title);
            if (self.searchPane && title === self.i18n.tabs.search) {
              self.searchPane.resize();
            }
          },true);
        } else if (tabs.length === 0) {
          dom.byId("tabNode").appendChild(document.createTextNode(this.i18n.noOptionsConfigured));
        }
      },

      _setStatus: function(msg) {
        if (!this.messageNode) {
          return;
        }
        util.setNodeText(this.messageNode, msg);
        this.messageNode.title = msg;
      },

      onClose: function() {
        this._isOpen = false;
      },

      onOpen: function() {
        var bSearch = (this.searchPane && this._searchOnOpen);
        this._isOpen = true;
        this._searchOnOpen = false;
        this.resize();
        if (bSearch) {
          this.searchPane.search();
        }
      },

      resize: function() {
        var widgetWidth = dom.byId("addDataContainer").clientWidth,
            widgetHeight = dom.byId("addDataContainer").clientHeight;
        if (widgetWidth > 1000) {
          domClass.remove(dom.byId("addDataContainer"), "width-768");
          domClass.add(dom.byId("addDataContainer"), "width-1200");
        } else if (widgetWidth > 768) {
          domClass.remove(dom.byId("addDataContainer"), "width-1200");
          domClass.add(dom.byId("addDataContainer"), "width-768");
        } else {
          domClass.remove(dom.byId("addDataContainer"), ["width-768", "width-1200"]);
        }

        if (widgetWidth < 420) {
          domClass.remove(dom.byId("addDataContainer"), "width-medium");
          domClass.add(dom.byId("addDataContainer"), "width-small");
        } else if (widgetWidth < 750) {
          domClass.remove(dom.byId("addDataContainer"), "width-small");
          domClass.add(dom.byId("addDataContainer"), "width-medium");
        } else {
          domClass.remove(dom.byId("addDataContainer"), ["width-small", "width-medium"]);
        }

        //console.warn("widgetWidth",widgetWidth);
        if (widgetWidth < 340) {
          domClass.add(dom.byId("addDataContainer"),"filter-placeholder-on");
        } else {
          domClass.remove(dom.byId("addDataContainer"),"filter-placeholder-on");
        }

        if(widgetHeight < 400) {
          domClass.add(dom.byId("addDataContainer"), "height-small");
        } else {
          domClass.remove(dom.byId("addDataContainer"), "height-small");
        }

        if (this.searchPane) {
          this.searchPane.resize();
        }
      },

      showLayers: function(){
        if (!this.layerListPane) {
          this.layerListPane = new LayerListPane({
            wabWidget: this
          });
          this.layerListPane.placeAt(dom.byId("addDataContainer"));
        }
        this.layerListPane.show();
      }
    });

  });
