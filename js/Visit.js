///////////////////////////////////////////////////////////////////////////
// Copyright 2018 Esri. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
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
    "dojo/_base/declare",
    "dojo/_base/lang", "dojo/Evented", "dojo/Deferred", "esri/TimeExtent",
    "dijit/registry", "dojo/_base/connect",
    "dojo/html",
    "dojo/dom-class",
    "dojo/dom", "esri/renderers/jsonUtils", 'dojo/json', "dojo/_base/array",
    "esri/dijit/editing/Editor",
    "esri/dijit/editing/TemplatePicker", "esri/dijit/AttributeInspector",
    "dojo/on", "dojo/query",
    "esri/layers/MosaicRule",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/geometry/Extent",
    "dojo/date/locale",
    "dojo/dom-construct",
    "esri/graphic",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/Color",
    "esri/InfoTemplate",
    "esri/geometry/mathUtils",
    "dojo/dom-style",
    "esri/layers/ArcGISImageServiceLayer", "esri/layers/FeatureLayer",
    "esri/layers/ImageServiceParameters",
    "esri/tasks/ImageServiceIdentifyTask",
    "esri/tasks/ImageServiceIdentifyParameters",
    "esri/geometry/Polygon", "esri/SpatialReference",
    "esri/geometry/Point",
    "esri/request", "dijit/Tooltip",
    "dijit/form/Select",
    "dijit/form/Button",
    "dijit/form/NumberSpinner",
    "dijit/form/CheckBox",
    "dijit/form/TextBox",
    "dijit/form/DropDownButton",
    "dijit/TooltipDialog",
], function (declare, lang, Evented, Deferred, TimeExtent, registry, connect,
        html,
        domClass,
        dom, rendererJsonUtils, Json, array,
        Editor,
        TemplatePicker, AttributeInspector,
        on, query,
        MosaicRule,
        Query, QueryTask, Extent, locale, domConstruct, Graphic, SimpleLineSymbol, SimpleFillSymbol, Color, InfoTemplate, mathUtils, domStyle, ArcGISImageServiceLayer, FeatureLayer, ImageServiceParameters, ImageServiceIdentifyTask, ImageServiceIdentifyParameters, Polygon, SpatialReference, Point, esriRequest, Tooltip, Select, Button) {

    return declare("application.SingleLayerViewer", [Evented], {
        constructor: function (parameters) {
            var defaults = {
                map: null,
                config: null,
                i18n: null,
                itemInfo: null
            };
            lang.mixin(this, defaults, parameters);
        },
        timeFormats: ["shortDateShortTime", "shortDateLEShortTime", "shortDateShortTime24", "shortDateLEShortTime24", "shortDateLongTime", "shortDateLELongTime", "shortDateLongTime24", "shortDateLELongTime24"],
        visitPopupFields: [],
        imageryPopupFields: [],
        postCreate: function () {
            document.getElementById("visitAttributeBtn").addEventListener("click", lang.hitch(this, this.expandMenu, "visit"));
            document.getElementById("imageAttributeBtn").addEventListener("click", lang.hitch(this, this.expandMenu, "image"));
            registry.byId("nextBtn").on("click", lang.hitch(this, function () {
                if (this.recordIndex < this.features.length - 1) {
                    this.recordIndex++;
                    this.zoomToRecord("next");
                }
            }));
            registry.byId("prevBtn").on("click", lang.hitch(this, function () {
                if (this.recordIndex > 0) {
                    this.recordIndex--;
                    this.zoomToRecord("prev");
                }
            }));
            registry.byId("editToggle").on("change", lang.hitch(this, function (value) {
                if (value) {
                    domStyle.set("notesEditor", "display", "block");
                    this.createEditor();
                } else {
                    domStyle.set("notesEditor", "display", "none");
                    this._destroyEditor();
                }
            }));
            registry.byId("selectFilter").on("change", lang.hitch(this, this.getFeatures));
            registry.byId("saveVisitBtn").on("click", lang.hitch(this, this.updateVisitLayer));
            this.imageryLayer = this.config.imageLayer.id ? this.map.getLayer(this.config.imageLayer.id) : null;
            this.visitLayer = this.config.visitLayer.id ? this.map.getLayer(this.config.visitLayer.id) : null;
            if (this.imageryLayer) {
                domStyle.set("imageAttributeContainer", "display", "block");
                this.defaultMosaicRule = (this.imageryLayer.mosaicRule || this.imageryLayer.defaultMosaicRule || "");
                var fieldInfos = this.imageryLayer.infoTemplate && this.imageryLayer.infoTemplate.info && this.imageryLayer.infoTemplate.info.fieldInfos ? this.imageryLayer.infoTemplate.info.fieldInfos : [];
                for (var a in fieldInfos) {
                    if (fieldInfos[a].visible) {
                        this.imageryPopupFields.push(fieldInfos[a].fieldName);
                    }
                }
               
            }
            if (this.visitLayer) {
                domStyle.set("visitAttributeContainer", "display", "block");
                /*   this.visitLayer.on("selection-complete", lang.hitch(this, function(result){
                 this.fillVisitAttributes(result);
                 
                 }));*/
                for (var c in this.itemInfo.operationalLayers) {
                    if (this.itemInfo.operationalLayers[c].id === this.config.visitLayer.id) {
                        if (this.itemInfo.operationalLayers[c].layerDefinition)
                            this.filterVisit = this.itemInfo.operationalLayers[c].layerDefinition.definitionExpression;
                        break;
                    }
                }
                for (var b in this.config.visitLayer.fields) {
                    if (this.config.visitLayer.fields[b].id === "visitOrderField")
                        this.config.orderField = this.config.visitLayer.fields[b].fields[0];
                    if (this.config.visitLayer.fields[b].id === "statusField")
                        this.config.statusField = this.config.visitLayer.fields[b].fields[0];

                }
                if (!this.config.orderField) {
                    this.config.orderField = this.visitLayer.objectIdField;
                }
                var fieldInfos = this.visitLayer.infoTemplate && this.visitLayer.infoTemplate.info && this.visitLayer.infoTemplate.info.fieldInfos ? this.visitLayer.infoTemplate.info.fieldInfos : [];
                var options = this.createStatusList();
                if (options.length > 0) {
                    for (var a in options) {
                        registry.byId("selectFilter").addOption({label: options[a].label, value: options[a].value});
                    }
                    domStyle.set("filterVisitStatus", "display", "block");
                }
                for (var a in fieldInfos) {
                    if (fieldInfos[a].visible) {
                        this.visitPopupFields.push(fieldInfos[a].fieldName);
                    }
                    if (this.config.statusField && fieldInfos[a].fieldName === this.config.statusField && fieldInfos[a].isEditable)
                        var editStatus = true;
                }

                if (this.config.statusField && editStatus && options.length > 0) {
                    new Select({
                        options: options
                    }, "setStatus").startup();
                    domStyle.set("setStatusField", "display", "block");
                }
            }
             if (this.config.imageFilter && this.config.imageField && this.config.visitField && this.imageryLayer && this.visitLayer) {
                    for (var a in this.imageryLayer.fields) {
                        if (this.imageryLayer.fields[a].name === this.config.imageField) {
                            this.config.imageFieldType = this.imageryLayer.fields[a].type;
                            break;
                        }
                    }
                    for (var a in this.visitLayer.fields) {
                        if (this.visitLayer.fields[a].name === this.config.visitField) {
                            this.config.visitFieldType = this.visitLayer.fields[a].type;
                            break;
                        }
                    }
                    if (this.config.imageFieldType !== this.config.visitFieldType)
                        this.config.imageFilter = false;
                }else
                    this.config.imageFilter = false;
            this.templateLayers = [];
            this._layerInfoParamArrayUseForRervertRenderer = [];
            if (this.config.notesFlag)
                this.setupEditor();
            else {
                this.config.notesMode = null;
            }

            var popup = this.map.infoWindow;


            /*  connect.connect(popup, "onSelectionChange", function() {
             //   displayPopupContent(popup.getSelectedFeature());
             this.showAttributes(popup);
             });*/
            connect.connect(popup, "onSetFeatures", lang.hitch(this, function () {
                this.showAttributes(popup);
            }));
            /* connect.connect(popup,"onShow", lang.hitch(this, function(){
             console.log(popup.getSelectedFeature());
             }));*/
            this.getFeatures();

        },
        expandMenu: function (id) {
            var node = document.getElementById(id + "AttributeBtn").children[1];
            if (domClass.contains(node, "launchpad-icon-arrow-right")) {
                domClass.remove(node, "launchpad-icon-arrow-right");
                domClass.add(node, "launchpad-icon-arrow-down");
                domStyle.set(id + "AttributesContent", "display", "block");
            } else {
                domStyle.set(id + "AttributesContent", "display", "none");
                domClass.remove(node, "launchpad-icon-arrow-down");
                domClass.add(node, "launchpad-icon-arrow-right");
            }
        },
        getFeatures: function () {
            this.features = [];
            if (this.visitLayer) {
                this.queryCountFeatureService();
            } else if (this.itemInfo.bookmarks) {
                domStyle.set("bookmarkName","display","block");
                this.readBookmarks();
            }
        },
        queryCountFeatureService: function () {
            var query = new Query();
            if (domStyle.get("filterVisitStatus", "display") === "block") {
                var statusFilter = this.config.statusField + " = '" + registry.byId("selectFilter").get("value") + "'";
            }
            if (statusFilter) {
                if (this.filterVisit)
                    query.where = this.filterVisit + " AND (" + statusFilter + ")";
                else
                    query.where = statusFilter;
            } else {
                query.where = (this.filterVisit || "1=1");
            }
            var queryTask = new QueryTask(this.visitLayer.url);
            queryTask.executeForCount(query, lang.hitch(this, function (response) {
                this.noOfRecords = response;
                this.index = 0;
                this.queryFeatures();
            }), lang.hitch(this, function () {
                this.errorNotification();
            }));

        },
        queryFeatures: function () {
            if (this.index < this.noOfRecords) {
                var query = new Query();
                if (domStyle.get("filterVisitStatus", "display") === "block") {
                    var statusFilter = this.config.statusField + " = '" + registry.byId("selectFilter").get("value") + "'";
                }
                if (statusFilter) {
                    if (this.filterVisit)
                        query.where = this.filterVisit + " AND (" + statusFilter + ")";
                    else
                        query.where = statusFilter;
                } else {
                    query.where = (this.filterVisit || "1=1");
                }
                if (this.visitPopupFields.length > 0)
                    query.outFields = this.visitPopupFields;
                query.orderByFields = [this.config.orderField];
                query.returnGeometry = true;
                query.outSpatialReference = new SpatialReference(this.map.spatialReference);
                query.start = this.index;
                var queryTask = new QueryTask(this.visitLayer.url);
                queryTask.execute(query, lang.hitch(this, function (result) {
                    if (result && result.features && result.features.length > 0) {
                        this.index += result.features.length;
                        for (var a in result.features) {
                            this.features.push(result.features[a]);
                        }
                        this.queryFeatures();
                    } else {
                        this.errorNotification();
                    }
                }), lang.hitch(this, this.errorNotification));
            } else {
                this.selectFirstRecord();
            }
        },
        readBookmarks: function () {

            var bookmarks = this.itemInfo.bookmarks;
            for (var a in bookmarks) {
                this.features[a] = {
                    geometry: (new Extent(bookmarks[a].extent)).getCenter(),
                    attributes: {name:bookmarks[a].name}

                };
            }
            this.selectFirstRecord();
        },
        selectFirstRecord: function () {
            this.recordIndex = 0;
            this.zoomToRecord("next");
            registry.byId("prevBtn").set("disabled", true);
            if (this.features.length > 0)
                registry.byId("nextBtn").set("disabled", false);
            else
                registry.byId("nextBtn").set("disabled", true);
        },
        zoomToRecord: function (mode) {
            if (this.recordIndex >= 0 && this.recordIndex < this.features.length) {
                if (this.recordIndex === 0) {
                    registry.byId("prevBtn").set("disabled", true);
                } else
                    registry.byId("prevBtn").set("disabled", false);
                if (this.recordIndex === this.features.length - 1) {
                    registry.byId("nextBtn").set("disabled", true);
                } else
                    registry.byId("nextBtn").set("disabled", false);
                if (this.features[this.recordIndex].geometry.x) {
                    var point = this.features[this.recordIndex].geometry;
                } else {
                    var point = ((this.features[this.recordIndex].geometry).getExtent()).getCenter();

                }
                registry.byId("visitContentDiv").set("content", "");
                registry.byId("imageAttributesContent").set("content", "");
                if(domStyle.get("bookmarkName","display") === "block"){
                    document.getElementById("bookmarkName").innerHTML = "<span class='titleLabel'>"+this.i18n.title+":  </span><span>"+this.features[this.recordIndex].attributes.name+"<span>";
                }
                if (this.features[this.recordIndex].noteAdded)
                    this.hideTemplateDiv = true;
                else
                    this.hideTemplateDiv = false;
                if (this.visitLayer) {
                    this.selectFeature().then(lang.hitch(this, function () {
                        this.setMapExtent(point, mode);
                    }));
                } else {
                    this.currentVisitFeature = {"geometry": point, attributes: this.notesAttributes};
                    this.setMapExtent(point, mode);
                }
            }

        },
        setMapExtent: function (point, mode) {
            this._destroyEditor();
            this.map.centerAt(point).then(lang.hitch(this, function () {
                this.map.setScale(parseInt(this.config.zoomLevel)).then(lang.hitch(this, function () {
                    if (this.config.imageFilter && this.config.visitField && this.config.imageField) {
                        this.queryImageService(this.map.extent, this.recordIndex).then(lang.hitch(this, function (result) {
                            this.imageryLayer.setMosaicRule(result.mosaicRule);
                            if (this.imageryLayer) {
                                this.makeIdentifyRequest(point);
                            }
                            if (registry.byId("editToggle").checked || this.config.notesMode === "copy")
                                this.createEditor();

                        }));
                    } else {
                        if (this.imageryLayer)
                            this.makeIdentifyRequest(point);
                        if (registry.byId("editToggle").checked || this.config.notesMode === "copy")
                            this.createEditor();

                    }

                    if (this.recordIndex >= 0 && this.recordIndex < this.features.length - 1 && mode !== "prev") {
                        this.makeImageRequest(this.recordIndex + 1);
                    }
                }));
            }));
        },
        selectFeature: function () {
            var dfd = new Deferred();
            var query = new Query();
            query.objectIds = [this.features[this.recordIndex].attributes[this.visitLayer.objectIdField]];
            this.visitLayer.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this, function (result) {
                if (result.length > 0)
                    this.fillVisitAttributes(result[0]);
                return dfd.resolve();
            }));
            return dfd.promise;
        },
        makeImageRequest: function (recordIndex) {
            if (this.imageryLayer) {
                if (this.features[recordIndex].geometry.x) {
                    var point = this.features[recordIndex].geometry;
                } else {
                    var point = ((this.features[recordIndex].geometry).getExtent()).getCenter();

                }
                var extent = (this.map.extent).centerAt(point);
                if (this.config.imageFilter && this.config.visitField && this.config.imageField) {
                    this.queryImageService(extent, recordIndex).then(lang.hitch(this, function (result) {


                        this.imageryLayer.getImageUrl(extent, this.map.width, this.map.height, function (response) {
                            var decode = decodeURIComponent(response);
                            var parameters = decode.split("mosaicRule=")[1].split("&");
                            parameters[0] = JSON.stringify(result.mosaicRule.toJson());

                            var temp = "";
                            for (var a = 1; a < parameters.length; a++) {
                                temp = temp + "&" + parameters[a]

                            }
                            var url = decode.split("mosaicRule=")[0] + "mosaicRule=" + parameters[0] + temp;
                            var request = new esriRequest({
                                url: url
                            });
                        });

                    }));

                } else {
                    this.imageryLayer.getImageUrl(extent, this.map.width, this.map.height, function (response) {
                        var request = new esriRequest({
                            url: response
                        });
                    });
                }
            }
        },
        makeIdentifyRequest: function (geometry) {
            if (this.imageryLayer.visible) {
                this.map.emit("click", {bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry});
            }
        },
        showAttributes: function (popup) {
            var visit = this.visitLayer && this.visitLayer.visible ? false : true;
            var imagery = this.imageryLayer && this.imageryLayer.visible ? false : true;
            for (var a in popup.features) {
                if (visit && imagery)
                    break;
                if (!visit && popup.features[a]._layer.id === this.config.visitLayer.id) {
                    visit = true;
                    this.fillVisitAttributes(popup.features[a]);
                }
                if (!imagery && popup.features[a]._layer.id === this.config.imageLayer.id) {
                    imagery = true;
                    this.fillImageryAttributes(popup.features[a]);
                }
            }
        },
        fillVisitAttributes: function (result) {
            if (result) {
                if (result.features)
                    var feature = result.features[0];
                else if (result.geometry)
                    var feature = result;
                this.visitAttributes = feature.attributes;
                this.currentVisitFeature = feature;
                var content = feature.getContent();
                registry.byId("visitContentDiv").set("content", content);
                if (this.config.statusField)
                    registry.byId("setStatus").set("value", this.visitAttributes[this.config.statusField]);
            }
        },
        fillImageryAttributes: function (feature) {
            this.imageryAttributes = feature.attributes;
            var content = feature.getContent();
            registry.byId("imageAttributesContent").set("content", content);
        },
        createStatusList: function () {
            if (this.config.statusField) {
                for (var a in this.visitLayer.fields) {
                    if (this.visitLayer.fields[a].name === this.config.statusField) {
                        domConstruct.place("<label for='setStatus'>" + this.visitLayer.fields[a].name + ": </label><div id='setStatus' style='margin-left:5px;'></div>", "setStatusField", "first");
                        if (this.visitLayer.fields[a].domain) {
                            var options = [];
                            var codedValues = this.visitLayer.fields[a].domain.codedValues;
                            for (var b in codedValues) {
                                options.push({"label": codedValues[b].name, value: codedValues[b].code});
                            }
                        } else {
                            var options = [{"label": "Follow up", value: "-1"}, {"label": "Okay", value: "1"}, {"label": "No Status", value: "0"}];
                        }
                        break;

                    }
                }

            } else
                var options = [];
            return options;
        },
        updateVisitLayer: function () {
            var graphic = this.currentVisitFeature;
            graphic.attributes[this.config.statusField] = registry.byId("setStatus").get("value");
            this.visitLayer.applyEdits(null, [graphic], null, lang.hitch(this, function () {
                this.visitLayer.refresh();
                this.selectFeature();
            }));
        },
        addToNotesLayer: function () {
            var attributes = {};
            var graphic = new Graphic(this.currentVisitFeature.geometry, null, this.notesAttributes);

            var layer = this.map.getLayer(this.config.notesLayer.id);
            var geometry = graphic.geometry;
            if (!geometry.x) {
                geometry = (geometry.getExtent()).getCenter();
            }
            var query = new Query();
            query.geometry = geometry;
            query.spatialRelationship = Query.SPATIAL_REL_WITHIN;
            layer.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this, function (result) {
                if (result && result.length > 0) {
                    this.map.emit("click", {bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry});
                } else {
                    this.fillDefaultValues();

                    layer.applyEdits([graphic], null, null, lang.hitch(this, function () {
                        layer.redraw();
                        layer.refresh();
                        this.map.emit("click", {bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry});

                    }));
                }
            }), lang.hitch(this, function () {
                this.fillDefaultValues();
                layer.applyEdits([graphic], null, null, lang.hitch(this, function () {
                    layer.redraw();
                    layer.refresh();
                    this.map.emit("click", {bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry});

                }));
            }));

        },
        queryImageService: function (extent, recordIndex) {
            var dfd = new Deferred();

            var query = new Query();
            query.geometry = extent;
            if (this.config.imageFieldType === "esriFieldTypeDate") {
                query.where = "(Category = 1)";
                var date = new Date(this.features[recordIndex].attributes[this.config.visitField]);
                
                var d = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);
                var d2 = new Date(date.getFullYear(),date.getMonth(),date.getDate(),23,59,59);
                
                query.timeExtent = new TimeExtent(d, d2);
            } else if (this.config.imageFieldType === "esriFieldTypeString") {
                query.where = "(Category = 1) AND (" + this.config.imageField + " = '" + this.features[recordIndex].attributes[this.config.visitField] + "')";
            } else
                query.where = "(Category = 1) AND (" + this.config.imageField + " = " + this.features[recordIndex].attributes[this.config.visitField] + ")";

            var queryTask = new QueryTask(this.imageryLayer.url);
            queryTask.executeForIds(query, lang.hitch(this, function (response) {

                if (response.length > 0) {
                    var mosaicRule = new MosaicRule();
                    mosaicRule.method = "esriMosaicLockRaster";
                    mosaicRule.lockRasterIds = response;
                    mosaicRule.ascending = true;
                    mosaicRule.operation = MosaicRule.OPERATION_FIRST;
                    var temp = true;
                } else {
                    var mosaicRule = this.defaultMosaicRule;
                    var temp = false;
                }
                return dfd.resolve({mosaicRule: mosaicRule, flag: temp});
            }), lang.hitch(this, function () {
                return dfd.resolve({mosaicRule: this.defaultMosaicRule, flag: false});
            }));
            return dfd.promise;
        },
        onOpen: function () {

        },
        onClose: function () {
            this._destroyEditor();
            this.revertToLayerRenderer();
        },
        setupEditor: function () {
            if (this.config.notesLayer.id) {
                var layer = this.map.getLayer(this.config.notesLayer.id);
                if (this.config.notesMode !== "copy")
                    domStyle.set("editCheckbox", "display", "block");
                else
                    domStyle.set("notesEditor", "display", "block");
                registry.byId("editToggle").set("disabled", false);
                if (layer && layer.isEditable()) {
                    this.templateLayers.push(layer);
                    layer.on("edits-complete", lang.hitch(this, function () {
                        layer.refresh();
                    }));
                    this.notesAttributes = {};

                    for (var a in layer.fields) {

                        if (layer.fields[a].editable) {
                            this.notesAttributes[layer.fields[a].name] = layer.fields[a].defaultValue;
                        }
                    }

                    if (layer && layer.infoTemplate && layer.infoTemplate.info && layer.infoTemplate.info.fieldInfos) {
                        //only display visible fields
                        var fields = layer.infoTemplate.info.fieldInfos;

                        var fieldInfos = [];

                        array.forEach(fields, lang.hitch(this, function (field) {
                            //add date support
                            if (field.format && field.format.dateFormat && array.indexOf(this.timeFormats, field.format.dateFormat) > -1) {
                                field.format = {
                                    time: true
                                };
                            }
                            if (field.visible) {
                                fieldInfos.push(field);
                            }
                        }));
                        layer.fieldInfos = fieldInfos;
                    }

                    dom.byId("errorEditor").innerHTML = "";

                } else {
                    registry.byId("editCheckBox").set("disabled", true);
                    dom.byId("errorEditor").innerHTML = this.i18n.error;
                }
            } else {
                domStyle.set("editCheckbox", "display", "none");
            }
        },
        changeToServiceRenderer: function (settings) {
            array.forEach(settings.layerInfos, function (layerInfo) {
                if (!layerInfo.featureLayer._json) {
                    return;
                }
                var layerRenderer = layerInfo.featureLayer.renderer;
                //var layerRendererJson = layerRenderer.toJson();
                var serviceDefJson = Json.parse(layerInfo.featureLayer._json);
                var serviceRendererJson = serviceDefJson.drawingInfo.renderer;
                // if (!jimuUtils.isEqual(layerRendererJson, serviceRendererJson)) {
                layerInfo._layerRenderer = layerRenderer;
                this._layerInfoParamArrayUseForRervertRenderer.push(layerInfo);
                layerInfo.featureLayer.setRenderer(rendererJsonUtils.fromJson(serviceRendererJson));
                layerInfo.featureLayer.redraw();
                //  }
            }, this);
        },
        createEditor: function () {
            this._destroyEditor();


            var templatePicker = new TemplatePicker({
                featureLayers: this.templateLayers,
                grouping: true,
                rows: "auto",
                //   style: "width: 100%",
                columns: 3
            }, domConstruct.create("div"));
            domConstruct.place(templatePicker.domNode, dom.byId("templateDiv"));
            templatePicker.startup();
            if (this.config.notesMode === "copy" || this.hideTemplateDiv) {
                domStyle.set("templateDiv", "display", "none");
                domStyle.set("textEditor", "display", "none");
            } else {
                domStyle.set("templateDiv", "display", "block");
                domStyle.set("textEditor", "display", "block");
            }
            //domStyle.set(templatePicker.domNode.childNodes[1], "width", "100%");
            var settings = {
                map: this.map,
                templatePicker: templatePicker,
                layerInfos: [{"featureLayer": this.templateLayers[0], "disableAttributeUpdate": false}],
                enableUndoRedo: false,
                toolbarVisible: false,
                createOptions: {
                    polylineDrawTools: [Editor.CREATE_TOOL_FREEHAND_POLYLINE, Editor.CREATE_TOOL_POLYLINE],
                    polygonDrawTools: [Editor.CREATE_TOOL_FREEHAND_POLYGON, Editor.CREATE_TOOL_POLYGON, Editor.CREATE_TOOL_ELLIPSE, Editor.CREATE_TOOL_AUTOCOMPLETE,
                        Editor.CREATE_TOOL_CIRCLE,
                        Editor.CREATE_TOOL_TRIANGLE,
                        Editor.CREATE_TOOL_RECTANGLE
                    ]
                },
                toolbarOptions: {
                    reshapeVisible: false,
                    mergeVisible: false,
                    cutVisible: false
                }
            };
            this.map.enableSnapping();
            this.editor = new Editor({
                id: "featureEditor",
                settings: settings
            }, domConstruct.create("div"));
            domConstruct.place(this.editor.domNode, dom.byId("editorDiv"));
            this.editor.on("load", lang.hitch(this, function () {

                query(".templatePicker .dojoxGrid")[0].tabIndex = -1;
                query(".templatePicker .dojoxGrid")[0].children[3].tabIndex = -1;
                var nodes = query(".dojoxGridHiddenFocus");
                for (var a = 0; a < nodes.length; a++) {
                    nodes[a].tabIndex = -1;
                }

                if (this.config.notesMode === "copy")
                    this.addToNotesLayer();
            }));

            this.changeToServiceRenderer(settings);
            this.editor.startup();
            this.editor.templatePicker.on("selection-change", lang.hitch(this, function () {
                if (this.editor.templatePicker.getSelected())
                    this.fillDefaultValues();
            }));
            this.editor.templatePicker.update(true);
            this.editor.attributeInspector.on("delete", lang.hitch(this, function () {
                if (this.config.notesMode === "one") {
                    this.hideTemplateDiv = false;
                    this.features[this.recordIndex].noteAdded = false;
                    setTimeout(lang.hitch(this, function () {
                        this.createEditor();
                    }), 1000);
                }
            }));
            /*       var saveButton = new Button({ label: "Save", "class": "saveButton"},domConstruct.create("div"));
             domConstruct.place(saveButton.domNode, this.editor.attributeInspector.deleteBtn.domNode, "before");
             saveButton.on("click", lang.hitch(this,function() {
             console.log(this.editor.attributeInspector);
             }));*/
            registry.byId("attributeInspectorDiv").set("content", this.editor.attributeInspector.domNode);

        },
        fillDefaultValues: function (value) {
            var layer = this.map.getLayer(this.config.notesLayer.id);
            on.once(layer, "before-apply-edits", lang.hitch(this, function (evt) {
                if (this.config.notesMode === "one") {
                    this.hideTemplateDiv = true;
                    domStyle.set("templateDiv", "display", "none");
                    domStyle.set("textEditor", "display", "none");
                    this.features[this.recordIndex].noteAdded = true;
                }
                if (evt.adds[0] && evt.adds.length > 0) {
                    for (var a in evt.adds[0].attributes) {
                        for (var b in this.imageryPopupFields) {
                            if (a === this.imageryPopupFields[b]) {
                                evt.adds[0].attributes[a] = this.imageryAttributes[this.imageryPopupFields[b]];
                                break;
                            }
                        }
                        for (var c in this.visitPopupFields) {
                            if (a === this.visitPopupFields[c]) {
                                evt.adds[0].attributes[a] = this.visitAttributes[this.visitPopupFields[c]];
                                break;
                            }
                        }
                    }

                    if (this.editor)
                        this.editor.attributeInspector.refresh();
                }
            }));
        },
        errorNotification: function (error) {
            
        },
        _destroyEditor: function () {
            if (this.editor) {
                this.editor.destroy();
                this.editor = null;

            }
        },
        revertToLayerRenderer: function () {
            array.forEach(this._layerInfoParamArrayUseForRervertRenderer, function (layerInfo) {
                if (layerInfo._layerRenderer) {
                    layerInfo.featureLayer.setRenderer(layerInfo._layerRenderer);
                    layerInfo.featureLayer.redraw();
                }
            }, this);
            this._layerInfoParamArrayUseForRervertRenderer = [];
        },
        showLoading: function () {
            domStyle.set("loadingContentPane", "display", "block");
        },
        hideLoading: function () {
            domStyle.set("loadingContentPane", "display", "none");
        }
    });
});