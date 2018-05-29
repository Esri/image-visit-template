///////////////////////////////////////////////////////////////////////////
// Copyright 2018 Esri. All Rights Reserved.
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

define([
    'dojo/_base/declare',
    "dojo/Evented",
    "dojo/dom",
    'esri/dijit/BasemapGallery',
    'dojo/_base/lang',
    "dojo/dom-style", "dijit/registry",
    "dojo/_base/html",
    "dojo/query"

],
        function (
                declare, Evented,
                dom,
                BasemapGallery,
                lang, domStyle, registry,
                html,
                query

                ) {
            return declare("application.Basemap", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null
                    };
                    lang.mixin(this, defaults, parameters);
                },
                basemapGallery: null,
                spatialRef: null,
                startup: function () {
                   
                    this.inherited(arguments);
                  //  this.initBasemaps();
                   
                },
                postCreate:function() {
                      this.initBasemaps();
                },
               resize: function () {
                    //this._responsive();
                    
                },
                _responsive: function () {
                    var paneNode = dom.byId("toolsContentContainer");
                    var width = html.getStyle(paneNode, 'width');
                    var column = parseInt(width / 105, 10);
                    if (column > 0) {
                        var margin = width % 105;
                        var addWidth = parseInt(margin / column, 10);
                        query('.esriBasemapGalleryNode', this.id).forEach(function (node) {
                            html.setStyle(node, 'width', 85 + addWidth + 'px');
                        });
                    }
                },
                initBasemaps: function () {
                    var config = {};
                    config.map = this.map;
                    config.portalUrl = "http://www.arcgis.com/";
                    config.showArcGISBasemaps = true;
                    //window.addEventListener("resize", lang.hitch(this, this.resize));

                    this.basemapGallery = new BasemapGallery(config, "basemapGalleryDiv");
                    this.basemapGallery.startup();
                      //this._responsive();
                   // this.resize();
                     //this.map.on("click", lang.hitch(this, this.closeDialog));
                },
                onOpen: function() {
                  
                },
                onClose: function() {
                    
                }




            });

        });