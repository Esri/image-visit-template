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
    "dojo/html", "dojo/store/Memory",
    "dojo/dom-class",
    "dojo/dom", "esri/renderers/jsonUtils", 'dojo/json', "dojo/_base/array",
    "esri/dijit/editing/Editor",
    "esri/dijit/editing/TemplatePicker",
    "dojo/on", "dojo/query",
    "esri/layers/MosaicRule", "esri/geometry/Point",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/geometry/Extent",
    "dojo/date/locale",
    "dojo/dom-construct",
    "esri/graphic",
    "dojo/dom-style", "esri/geometry/Circle", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color", "esri/geometry/webMercatorUtils",
    "esri/layers/FeatureLayer",
    "esri/geometry/Polygon", "esri/SpatialReference", "esri/tasks/ImageServiceIdentifyParameters", "esri/tasks/IdentifyTask",
    "esri/geometry/Point",
    "esri/request", "dijit/Tooltip",
    "dijit/form/Select", "dijit/form/FilteringSelect",
    "dijit/form/Button",
    "dijit/form/CheckBox",
    "dijit/form/NumberSpinner",
    "dijit/form/NumberTextBox",
    "dijit/form/TextBox",
    "dijit/form/DropDownButton",
    "dijit/TooltipDialog",
], function (declare, lang, Evented, Deferred, TimeExtent, registry, connect,
    html, Memory,
    domClass,
    dom, rendererJsonUtils, Json, array,
    Editor,
    TemplatePicker,
    on, query,
    MosaicRule, Point,
    Query, QueryTask, Extent, locale, domConstruct, Graphic, domStyle, Circle, SimpleFillSymbol, SimpleLineSymbol, Color, webMercatorUtils, FeatureLayer, Polygon, SpatialReference, ImageServiceIdentifyParameters, IdentifyTask, Point, esriRequest, Tooltip, Select, FilteringSelect, Button, CheckBox) {

    return declare("application.Visit", [Evented], {
        constructor: function (parameters) {
            var defaults = {
                map: null,
                config: null,
                i18n: null,
                itemInfo: null,
                main: null
            };
            lang.mixin(this, defaults, parameters);
        },
        timeFormats: ["shortDateShortTime", "shortDateLEShortTime", "shortDateShortTime24", "shortDateLEShortTime24", "shortDateLongTime", "shortDateLELongTime", "shortDateLongTime24", "shortDateLELongTime24"],
        visitPopupFields: [],
        imageryPopupFields: [],
        //filterFields: this.config.additionalField,
        filterFieldValues: {},
        notesAttributes: {},
        postCreate: function () {
            document.getElementById("visitAttributeBtn").addEventListener("click", lang.hitch(this, this.expandMenu, "visit"));
            document.getElementById("imageAttributeBtn").addEventListener("click", lang.hitch(this, this.expandMenu, "image"));
            document.getElementById("layerAttributeBtn").addEventListener("click", lang.hitch(this, this.expandMenu, "layer"));
            //CHANGE
            //int8n
            //registry.byId("fieldFilter").addOption({label: "None", value: "None"});
            // for(var a in this.filterFields) {
            //     registry.byId("fieldFilter").addOption({label: this.filterFields[a], value: this.filterFields[a]});
            // }
            registry.byId("nextBtn").on("click", lang.hitch(this, function () {
                if (this.recordIndex < this.features.length - 1) {
                    this.recordIndex++;
                    if (registry.byId("recordIndex").get("value") !== this.recordIndex + 1)
                        registry.byId("recordIndex").set("value", this.recordIndex + 1);
                    else
                        this.moveToNewRecord(this.recordIndex + 1);
                }
            }));

            registry.byId("prevBtn").on("click", lang.hitch(this, function () {
                if (this.recordIndex > 0) {
                    this.recordIndex--;
                    if (registry.byId("recordIndex").get("value") !== this.recordIndex + 1)
                        registry.byId("recordIndex").set("value", this.recordIndex + 1);
                    else
                        this.moveToNewRecord(this.recordIndex + 1);
                }
            }));
            registry.byId("recordIndex").on("change", lang.hitch(this, this.moveToNewRecord));
            registry.byId("recordIndex").on("keyup", lang.hitch(this, function (evt) {
                if (evt.key === "Enter" || evt.keyCode === 13)
                    this.moveToNewRecord(registry.byId("recordIndex").get("value"));
            }));
            registry.byId("editToggle").on("change", lang.hitch(this, function (value) {
                if (value) {
                    domStyle.set("notesEditor", "display", "block");
                    this.map.infoWindow.set("popupWindow", false);
                    this.createEditor();

                } else {
                    domStyle.set("notesEditor", "display", "none");
                    this.map.infoWindow.set("popupWindow", true);
                    this._destroyEditor();
                    this.map.setMapCursor("default");
                }
            }));

            this.imageryLayer = this.config.imageLayer.id ? this.map.getLayer(this.config.imageLayer.id) : null;
            this.visitLayer = this.config.visitLayer.id ? this.map.getLayer(this.config.visitLayer.id) : null;
            this.notesLayer = this.config.notesLayer.id ? this.map.getLayer(this.config.notesLayer.id) : null;
            if (this.config.layerToggle)
                domStyle.set("layerContainer", "display", "block");

            if (this.imageryLayer) {

                this.createCheckBox("imageryLayer", this.i18n.imageLayer);
                this.defaultMosaicRule = (this.imageryLayer.mosaicRule || this.imageryLayer.defaultMosaicRule || "");
                var fieldInfos = this.imageryLayer.infoTemplate && this.imageryLayer.infoTemplate.info && this.imageryLayer.infoTemplate.info.fieldInfos ? this.imageryLayer.infoTemplate.info.fieldInfos : [];
                for (var a in fieldInfos) {
                    if (fieldInfos[a].visible) {
                        this.imageryPopupFields.push(fieldInfos[a].fieldName);
                    }
                }
                if (this.imageryPopupFields.length > 0)
                    domStyle.set("imageAttributeContainer", "display", "block");
                else
                    domStyle.set("imageAttributeContainer", "display", "none");
            }
            

            if (this.visitLayer) {
                this.createCheckBox("visitLayer", this.i18n.visitLayer);
                for (var c in this.itemInfo.operationalLayers) {
                    if (this.itemInfo.operationalLayers[c].id === this.config.visitLayer.id) {
                        if (this.itemInfo.operationalLayers[c].layerDefinition)
                            this.filterVisit = this.itemInfo.operationalLayers[c].layerDefinition.definitionExpression;
                        break;
                    }
                }
                for (var b in this.config.visitLayer.fields) {
                    if (this.config.visitLayer.fields[b].id === "visitOrderField") {
                        this.config.orderField = this.config.visitLayer.fields[b].fields[0];
                    }
                    if (this.config.visitLayer.fields[b].id === "statusField") {
                        this.config.statusField = this.config.visitLayer.fields[b].fields[0];
                    }
                    if (this.config.visitLayer.fields[b].id === "additionalField") {
                        this.config.additionalField = this.config.visitLayer.fields[b].fields[0];
                    }

                }
                if (this.config.additionalField) {
                    domStyle.set("filterValueStatus", "display", "block");
                    dom.byId("filterFieldName").innerHTML = this.config.additionalField;
                    //this.queryFields();
                    //setTimeout(function() {}, 5000);
                }
                if (!this.config.orderField) {
                    this.config.orderField = this.visitLayer.objectIdField;
                }
                var fieldInfos = this.visitLayer.infoTemplate && this.visitLayer.infoTemplate.info && this.visitLayer.infoTemplate.info.fieldInfos ? this.visitLayer.infoTemplate.info.fieldInfos : [];
                var options = this.createStatusList();
                if (options.length > 0) {
                    registry.byId("selectFilter").addOption({ label: this.i18n.all, value: "All" });
                    for (var a in options) {
                        registry.byId("selectFilter").addOption({ label: options[a].label, value: options[a].value });
                    }
                    if (this.config.visitStatusFilter && this.config.visitStatusFilter !== registry.byId("selectFilter").get("value")) {
                        var queryFlag = true;
                        registry.byId("selectFilter").set("value", this.config.visitStatusFilter);
                    }
                    domStyle.set("filterVisitStatus", "display", "block");
                }
                for (var a in fieldInfos) {
                    if (fieldInfos[a].visible) {
                        this.visitPopupFields.push(fieldInfos[a].fieldName);
                    }
                    if (this.config.statusField && fieldInfos[a].fieldName === this.config.statusField && fieldInfos[a].isEditable)
                        var editStatus = true;
                    if (this.config.visitField && fieldInfos[a].fieldName === this.config.visitField && fieldInfos[a].visible)
                        var visitFieldFlag = true;

                }
                if (this.visitPopupFields.length > 0) {
                    domStyle.set("visitAttributeContainer", "display", "block");
                    document.getElementById("visitAttributeBtn").click();
                } else
                    domStyle.set("visitAttributeContainer", "display", "none");
                if (!visitFieldFlag)
                    this.visitPopupFields.push(this.config.visitField);
                if (this.config.statusField && editStatus && options.length > 0) {
                    new Select({
                        options: options,
                        onChange: lang.hitch(this, this.updateVisitLayer)
                    }, "setStatus").startup();
                    domStyle.set("setStatusField", "display", "block");
                }
            }

            if (this.notesLayer) {
                this.createCheckBox("notesLayer", this.i18n.notesLayer);
                var fieldInfos = this.notesLayer.infoTemplate && this.notesLayer.infoTemplate.info && this.notesLayer.infoTemplate.info.fieldInfos ? this.notesLayer.infoTemplate.info.fieldInfos : [];
                for (var a in fieldInfos) {
                    if (fieldInfos[a].visible && fieldInfos[a].isEditable) {
                        for (var b in this.notesLayer.fields) {
                            if (this.notesLayer.fields[b].name === fieldInfos[a].fieldName) {
                                this.notesAttributes[fieldInfos[a].fieldName] = this.notesLayer.fields[b].defaultValue;
                                break;
                            } else
                                this.notesAttributes[fieldInfos[a].fieldName] = "";
                        }
                    }

                }

                for (var b in this.config.notesLayer.fields) {
                    if (this.config.notesLayer.fields[b].id === "notesLayerField") {
                        this.recordVisitOBJECTID = this.config.notesLayer.fields[b].fields[0];
                    }
                    if (this.config.notesLayer.fields[b].id === "imageLayerField") {
                        this.recordImageOBJECTID = this.config.notesLayer.fields[b].fields[0];
                    }
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
            } else
                this.config.imageFilter = false;

            this.templateLayers = [];
            this._layerInfoParamArrayUseForRervertRenderer = [];

            if (this.config.notesFlag)
                this.setupEditor();
            else {
                this.config.notesMode = null;
                this.notesLayer = null;
            }

            var popup = this.map.infoWindow;

            connect.connect(popup, "onSetFeatures", lang.hitch(this, function () {
                this.showAttributes(popup);
            }));

            registry.byId("selectFilter").on("change", lang.hitch(this, this.getFeatures));
            if (!queryFlag) {
                if (this.config.additionalField) {
                    this.queryFields().then(lang.hitch(this, this.getFeatures));
                } else {
                    this.getFeatures();
                }
                
            }
             
            
                
            this.main.resizeTemplate();
            window.addEventListener("keydown", lang.hitch(this, this.keyPressEvent));

            if (this.config.circleProperties.enable) {
                var node = domConstruct.toDom("<span class='graphicInfoContainer'><span style='font-weight:bold;color: " + this.config.circleProperties.color + "'>" + (this.config.circleProperties.type === 'circle' ? "r:" : "s:") + "</span>  " + this.config.circleProperties.radius + "m</span>");
                domConstruct.place(node, "mapDiv_root");
            }
            //this.getFieldValues();
            //registry.byId("fieldFilter").on("change", lang.hitch(this, this.updateFieldValueList));
            //registry.byId("fieldFilterValue").on("change", lang.hitch(this, this.getFeatures));
            this.createTooltips();
            
            


        },
        createTooltips: function () {
            var temp = [{ node: document.getElementById("prevBtn"), label: this.i18n.press + " Alt + P", position: ["below", "before", "above", "after"] },
            { node: document.getElementById("nextBtn"), label: this.i18n.press + " Alt + N", position: ["after", "below", "above", "before"] }
            ];
            for (var a in temp) {
                new Tooltip({
                    connectId: [temp[a].node],
                    label: temp[a].label,
                    position: temp[a].position
                });
            }
        },
        moveToNewRecord: function (value) {
            if (value && value > 0 && value <= this.features.length) {
                this.recordIndex = value - 1;
                this.zoomToRecord();
            }
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
        // getFieldValues: function() {
        //     this.fieldValues = [];

        //     if(this.visitLayer.fields) {
        //     for(var a in this.visitLayer.fields) {
        //         this.filterFieldValues[this.visitLayer.fields[a]] = [];
        //     }
        //       //this.queryFieldCount();
        //       this.queryFields();

        //     }

        // },
        getFeatures: function () {
            this.features = [];
            if (this.visitLayer) {
                this.queryCountFeatureService();
            } else if (this.itemInfo.bookmarks) {
                domStyle.set("bookmarkName", "display", "block");
                this.readBookmarks();
            }
        },

        queryFields: function () {
            var deferred = new Deferred();
            //registry.byId("fieldFilterValue").store.setData([]);
            var query = new Query();

            query.where = "1=1"
            query.outFields = [this.config.additionalField];


            //query.orderByFields = [this.config.orderField];
            query.returnGeometry = false;
            //query.outSpatialReference = new SpatialReference(this.map.spatialReference);
            query.returnDistinctValues = true;
            var queryTask = new QueryTask(this.visitLayer.url);
            queryTask.execute(query, lang.hitch(this, function (result) {

                if (result && result.features && result.features.length > 0) {

                    var setResults = [];
                    setResults.push({ name: "All", id: "All" });
                    for (let i = 0; i < result.features.length; i++) {
                        //registry.byId("fieldFilterValue").addOption({label: result.feature[i] , value: result.feature[i]});
                        setResults.push({ name: result.features[i].attributes[this.config.additionalField], id: result.features[i].attributes[this.config.additionalField] });


                    }
                    //registry.byId("fieldFilterValue").store.setData(setResults);
                    // setTimeout(function() {
                    //     registry.byId("fieldFilterValue").set("value", "All");
                    // }, 500);
                    var filteringSelectBox = new FilteringSelect({
                        id: "fieldFilterValue",
                        store: new Memory({ data: setResults }),
                        required: false,
                        value: "All",
                        onChange: lang.hitch(this, this.getFeatures)
                    }, "fieldFilterValue").startup();
                    
                }
                return deferred.resolve();
            }), lang.hitch(this, this.errorNotification));
            return deferred.promise;
        },



        queryCountFeatureService: function () {
            var query = new Query();
            if (domStyle.get("filterVisitStatus", "display") === "block") {
                if (registry.byId("selectFilter").get("value") !== "All") {
                    var statusFilter = this.config.statusField + " = '" + registry.byId("selectFilter").get("value") + "'";
                }
            }
            if (domStyle.get("filterValueStatus", "display") === "block") {
                if (registry.byId("fieldFilterValue").get("value") !== "All") {
                    var secondFilter = this.config.additionalField + " = '" + registry.byId("fieldFilterValue").get("value") + "'";//CHANGe
                }

            }
            if (statusFilter) {
                if (this.filterVisit)
                    query.where = this.filterVisit + " AND (" + statusFilter + ")";
                else
                    query.where = statusFilter;
            } else {
                query.where = (this.filterVisit || "1=1");
            }
            if (secondFilter) {
                query.where = query.where + " AND (" + secondFilter + ")";
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
                    if (registry.byId("selectFilter").get("value") !== "All")
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
                if (domStyle.get("filterValueStatus", "display") === "block") {
                    if (registry.byId("fieldFilterValue").get("value") !== "All") {
                        var secondFilter = this.config.additionalField + " = '" + registry.byId("fieldFilterValue").get("value") + "'";//CHANGe
                    }

                }
                if (secondFilter) {
                    query.where = query.where + " AND (" + secondFilter + ")";
                }
                if (this.visitPopupFields.length > 0)
                    query.outFields = this.visitPopupFields;
                query.outFields.push(this.visitLayer.objectIdField);


                query.orderByFields = [this.config.orderField];
                query.returnGeometry = true;
                query.outSpatialReference = new SpatialReference(this.map.spatialReference);
                query.start = this.index;
                query.num = this.noOfRecords;
                var queryTask = new QueryTask(this.visitLayer.url);
                queryTask.execute(query, lang.hitch(this, function (result) {

                    if (result && result.features && result.features.length > 0) {
                        this.index += result.features.length;
                        for (var a in result.features) {
                            this.features.push(result.features[a]);
                            if (!this.features[this.features.length - 1].geometry.spatialReference)
                                this.features[this.features.length - 1].geometry.spatialReference = this.map.spatialReference;
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
                    attributes: { name: bookmarks[a].name }

                };
            }
            this.selectFirstRecord();
        },
        selectFirstRecord: function () {
            this.recordIndex = -1;
            registry.byId("prevBtn").set("disabled", true);
            if (this.features.length > 0) {
                registry.byId("nextBtn").set("disabled", false);
                document.getElementById("nextBtn").click();
                html.set(document.getElementById("noOfRecords"), " " + this.features.length);
                registry.byId("recordIndex").set("constraints", { min: 1, max: this.features.length, place: 0 });
                domStyle.set("recordDisplay", "display", "block");
            } else {
                domStyle.set("recordDisplay", "display", "none");
                html.set(document.getElementById("noOfRecords"), "");
                registry.byId("recordIndex").set("constraints", { min: 0, max: 0, place: 0 });
                registry.byId("nextBtn").set("disabled", true);
            }
        },
        zoomToRecord: function () {
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
                this.centerPoint = point;
                if (this.config.circleProperties.enable) {
                    this.createAndDisplayCircle(point);
                }
                registry.byId("visitContentDiv").set("content", "");
                registry.byId("imageAttributesContent").set("content", domConstruct.toDom("<div class='searchingImageAttributes'><span style='font-size:inherit;'>" + this.i18n.search + "</span></div>"));
                if (domStyle.get("bookmarkName", "display") === "block") {
                    document.getElementById("bookmarkName").innerHTML = "<span class='titleLabel'>" + this.i18n.title + ":  </span><span>" + this.features[this.recordIndex].attributes.name + "<span>";
                }
                if (this.features[this.recordIndex].noteAdded)
                    this.hideTemplateDiv = true;
                else
                    this.hideTemplateDiv = false;
                if (this.visitLayer) {
                    this.selectFeature().then(lang.hitch(this, function () {
                        this.setMapExtent(point);
                    }));
                } else {
                    this.currentVisitFeature = { "geometry": point, attributes: this.notesAttributes };
                    this.setMapExtent(point);
                }

                if (this.imageryLayer && this.recordImageOBJECTID) {
                    var content = {
                        f: "json",
                        geometry: JSON.stringify(point),
                        geometryType: "esriGeometryPoint",
                        returnFirstValueOnly: true,
                        outFields: [this.imageryLayer.objectIdField]
                    };
                    var params = {
                        url: this.imageryLayer.url + "/getSamples",
                        content: content,
                        handleAs: "json",
                        callbackParamName: "callback"
                    };
                    esriRequest(params).then(lang.hitch(this, function (response) {

                        this.imageLayerID = response.samples[0].attributes.OBJECTID;
                    }));
                }


            }

        },
        setMapExtent: function (point) {
            this._destroyEditor();
            this.map.centerAt(point).then(lang.hitch(this, function () {
                if (!this.config.zoomLevel || this.config.zoomLevel === "") {
                    this.config.zoomLevel = this.map.getScale();
                }
                this.map.setScale(parseInt(this.config.zoomLevel)).then(lang.hitch(this, function () {
                    if (this.config.imageFilter && this.config.visitField && this.config.imageField) {
                        this.queryImageService(this.map.extent, this.recordIndex).then(lang.hitch(this, function (result) {
                            this.imageryLayer.setMosaicRule(result.mosaicRule);
                            if (this.imageryLayer) {
                                this.makeIdentifyRequest(point);
                            }
                            if (registry.byId("editToggle").checked || this.config.notesMode === "copy") {
                                this.createEditor();
                            }

                        }));
                    } else {
                        if (this.imageryLayer)
                            this.makeIdentifyRequest(point);
                        if (registry.byId("editToggle").checked || this.config.notesMode === "copy") {
                            this.createEditor();
                        }

                    }

                    if (this.recordIndex >= 0 && this.recordIndex < this.features.length - 1 /*&& mode !== "prev"*/) {
                        this.makeImageRequest(this.recordIndex + 1);
                    }
                }));
            }));

            if (registry.byId("editToggle").checked) {
                domStyle.set("notesEditor", "display", "block");
                this.map.infoWindow.set("popupWindow", false);
                this.createEditor();

            }
        },
        selectFeature: function () {
            this.map.infoWindow.set("popupWindow", false);
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
                this.identifyRequest(point);
            }
        },
        identifyRequest: function (point) {
            var identify = new IdentifyTask(this.imageryLayer.url);
            var parameters = new ImageServiceIdentifyParameters();
            parameters.geometry = point;
            parameters.mosaicRule = this.imageryLayer.mosaicRule;
            parameters.renderingRule = this.imageryLayer.renderingRule;
            parameters.returnGeometry = false;
            parameters.returnCatalogItems = true;
            identify.execute(parameters);
        },
        makeIdentifyRequest: function (geometry) {
            if (this.imageryLayer.visible) {
                this.showImageAttributes = true;
                this.map.emit("click", { bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry });
                this.map.infoWindow.set("popupWindow", true);
            }
        },
        showAttributes: function (popup) {
            var visit = this.visitLayer && this.visitLayer.visible ? false : true;
            var imagery = this.imageryLayer && this.imageryLayer.visible ? false : true;
            for (var a in popup.features) {
                if (visit && imagery)
                    break;
                /*   if (!visit && popup.features[a]._layer.id === this.config.visitLayer.id) {
                 visit = true;
                 this.fillVisitAttributes(popup.features[a]);
                 }*/
                if (!imagery && this.showImageAttributes && popup.features[a]._layer.id === this.config.imageLayer.id) {
                    imagery = true;
                    this.showImageAttributes = false;
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
                if (this.config.statusField && registry.byId("setStatus")) {
                    registry.byId("setStatus").set("value", this.visitAttributes[this.config.statusField]);
                }
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
                                options.push({ "label": codedValues[b].name, value: codedValues[b].code });
                            }
                        } else {
                            var options = [{ "label": this.i18n.noStat, value: this.i18n.noStat }, { "label": this.i18n.follow, value: this.i18n.follow }, { "label": this.i18n.okay, value: this.i18n.okay }];
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
            if (graphic.attributes[this.config.statusField] !== registry.byId("setStatus").get("value")) {
                graphic.attributes[this.config.statusField] = registry.byId("setStatus").get("value");
                this.visitLayer.applyEdits(null, [graphic], null, lang.hitch(this, function () {
                    this.visitLayer.refresh();
                    this.selectFeature().then(lang.hitch(this, function () {
                        this.map.infoWindow.set("popupWindow", true);
                    }));
                }));
                if (!this.notesLayer) {
                    document.getElementById("nextBtn").click();
                }
            }
        },
        addToNotesLayer: function () {
            this.map.infoWindow.set("popupWindow", false);
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
                    this.map.emit("click", { bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry });
                } else {
                    this.fillDefaultValues();

                    setTimeout(lang.hitch(this, function () {
                        layer.applyEdits([graphic], null, null, lang.hitch(this, function () {
                            layer.redraw();
                            layer.refresh();
                            this.map.emit("click", { bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry });
                            setTimeout(lang.hitch(this, function () {
                                this.map.infoWindow.set("popupWindow", true);
                                this.map.setInfoWindowOnClick(true);
                            }), 5000);

                        }));
                    }), 2000);
                }
            }), lang.hitch(this, function () {
                this.fillDefaultValues();
                setTimeout(lang.hitch(this, function () {
                    layer.applyEdits([graphic], null, null, lang.hitch(this, function () {
                        layer.redraw();
                        layer.refresh();
                        this.map.emit("click", { bubbles: true, cancelable: true, screenPoint: this.map.toScreen(geometry), mapPoint: geometry });
                        setTimeout(lang.hitch(this, function () {
                            this.map.infoWindow.set("popupWindow", true);
                            this.map.setInfoWindowOnClick(true);
                        }), 5000);
                    }));
                }), 2000);

            }));

        },
        queryImageService: function (extent, recordIndex) {
            var dfd = new Deferred();

            var query = new Query();
            query.geometry = extent;
            if (this.config.imageFieldType === "esriFieldTypeDate") {
                query.where = "(Category = 1)";
                var date = new Date(this.features[recordIndex].attributes[this.config.visitField]);
                var d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                var d2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

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
                return dfd.resolve({ mosaicRule: mosaicRule, flag: temp });
            }), lang.hitch(this, function () {
                return dfd.resolve({ mosaicRule: this.defaultMosaicRule, flag: false });
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
                    if (layer.arcgisProps.title) {
                        layer.name = layer.arcgisProps.title;
                    }
                    this.templateLayers.push(layer);
                    layer.on("edits-complete", lang.hitch(this, function (response) {
                        if (this.config.notesMode === "one") {
                            this.features[this.recordIndex].noteAdded = response.adds[0].objectId;
                        }
                        layer.refresh();
                    }));
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
                            if (field.isEditable) {
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
                var serviceDefJson = Json.parse(layerInfo.featureLayer._json);
                var serviceRendererJson = serviceDefJson.drawingInfo.renderer;
                layerInfo._layerRenderer = layerRenderer;
                this._layerInfoParamArrayUseForRervertRenderer.push(layerInfo);
                layerInfo.featureLayer.setRenderer(rendererJsonUtils.fromJson(serviceRendererJson));
                layerInfo.featureLayer.redraw();
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
            var notesFields = {};
            for (let a = 0; a < this.config.notesLayer.fields.length; a++) {
                //notesFields.push(this.config.notesLayer.fields[a].fields[0]);
                notesFields[this.config.notesLayer.fields[a].fields[0]] = "";
            }
            for (let i = 0; i < this.templateLayers[0].fieldInfos.length; i++) {
                if (this.templateLayers[0].fieldInfos[i].fieldName in notesFields) {
                    this.templateLayers[0].fieldInfos[i].isEditable = false;
                }
            }
            var settings = {
                map: this.map,
                templatePicker: templatePicker,
                layerInfos: [{ "featureLayer": this.templateLayers[0], "fieldInfos": this.templateLayers[0].fieldInfos, "disableAttributeUpdate": false }],
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
                this.map.infoWindow.set("popupWindow", false);

                if (this.config.notesMode === "copy")
                    this.addToNotesLayer();
            }));

            this.changeToServiceRenderer(settings);
            this.editor.startup();
            this.editor.templatePicker.on("selection-change", lang.hitch(this, function (value) {

                if (this.editor.templatePicker.getSelected()) {
                    this.map.setMapCursor("crosshair");
                    this.templateActive = value.target._selectedCell.children[0];
                    this.fillDefaultValues();
                } else {

                    if (this.config.notesMode === "many" && this.keepTemplateActive) {
                        this.keepTemplateActive = false;
                        if (this.templateActive) {
                            on.emit(this.templateActive, "click", {
                                bubbles: true,
                                cancelable: true
                            });
                        }
                    } else {
                        this.map.setMapCursor("default");
                    }
                }
            }));

            this.editor._drawToolbar.on("draw-complete", lang.hitch(this, function (value) {
                if (value) {
                    if (this.config.notesMode === "many")
                        this.keepTemplateActive = true;
                }
            }));

            this.editor.templatePicker.update(true);
            this.editor.attributeInspector.on("delete", lang.hitch(this, function (evt) {
                if (this.config.notesMode === "one" && this.features[this.recordIndex].noteAdded && this.features[this.recordIndex].noteAdded === evt.feature.attributes[this.notesLayer.objectIdField]) {
                    this.hideTemplateDiv = false;
                    this.features[this.recordIndex].noteAdded = false;
                    setTimeout(lang.hitch(this, function () {
                        this.createEditor();
                    }), 1000);
                }
            }));
            if (this.notesAttributes !== {})
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
                /*var query = new Query();
                query.geometry = evt.adds[0].geometry;
                var queryTask = new QueryTask(this.imageryLayer.url);
                queryTask.executeForIds(query, lang.hitch(this, function (response) {
                console.log(response);
                }));
                */




                if (evt.adds && evt.adds[0] && evt.adds.length > 0) {
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
                    if (this.recordVisitOBJECTID && this.visitLayer) {
                        var objectId = this.visitLayer.objectIdField || "OBJECTID";
                        evt.adds[0].attributes[this.recordVisitOBJECTID] = this.visitAttributes[objectId];
                        evt.adds[0].attributes[this.recordImageOBJECTID] = this.imageLayerID;
                    }


                    if (this.editor) {
                        this.editor.attributeInspector.refresh();
                    }


                }





            }));
        },
        errorNotification: function (error) {
            console.log(error);
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
        createCheckBox: function (value, label) {
            if (value) {
                domConstruct.place("<div style='margin: 0.6em;'><div id='" + value + "'></div><label for='" + value + "'>" + label + "</label></div>", "layerAttributesContent", "last");
                var layer = this.map.getLayer(this[value].id);
                new CheckBox({
                    checked: layer.visible,
                    onChange: lang.hitch(this, function (flag) {
                        if (flag)
                            this.map.getLayer(this[value].id).show();
                        else
                            this.map.getLayer(this[value].id).hide();
                    })
                }, value).startup();
            } else {
                domConstruct.place("<div id='" + label+"_" + "' style='margin: 0.6em;'><div id='" + label + "'></div><label for='" + label + "'>" + this.map.getLayer(label).title + "</label></div>", "layerAttributesContent", "last");
                var layer = this.map.getLayer(label);
                new CheckBox({
                    checked: layer.visible,
                    onChange: lang.hitch(this, function (flag) {
                        if (flag)
                            this.map.getLayer(label).show();
                        else
                            this.map.getLayer(label).hide();
                    })
                }, label).startup();
            }
        },
        destroyCheckBox: function (label) {
            domConstruct.destroy(label+"_");
        },
        createAndDisplayCircle: function (point) {
            for (var s = this.map.graphics.graphics.length - 1; s >= 0; s--) {
                if (this.map.graphics.graphics[s].attributes && this.map.graphics.graphics[s].attributes.distanceCircle) {
                    this.map.graphics.remove(this.map.graphics.graphics[s]);
                    break;
                }
            }
            if (point.spatialReference.wkid && (point.spatialReference.wkid === 102100 || point.spatialReference.wkid === 3857)) {
                var WMSF = 1 / Math.cos((Math.PI / 2) - (2 * Math.atan(Math.exp((-1 * point.y) / 6378137))));
            } else
                var WMSF = 1;
            if (this.config.circleProperties.type === "circle") {
                var geometry = new Circle(point, {
                    "radius": (this.config.circleProperties.radius * WMSF)
                });
            } else {
                if (point.spatialReference.wkid && point.spatialReference.wkid === 4326) {
                    point = webMercatorUtils.geographicToWebMercator(point);
                    var convertToWebM = true;
                }


                var side = (this.config.circleProperties.radius / 2) * WMSF;

                var xmin = point.x - side;
                var xmax = point.x + side;
                var ymin = point.y - side;
                var ymax = point.y + side;

                var polygonJson = { "rings": [[[xmin, ymin], [xmin, ymax], [xmax, ymax], [xmax, ymin], [xmin, ymin]]], "spatialReference": point.spatialReference.toJson() };
                var geometry = new Polygon(polygonJson);
                if (convertToWebM)
                    geometry = webMercatorUtils.webMercatorToGeographic(geometry);
            }
            var circleSymbol = new SimpleFillSymbol();
            circleSymbol.setStyle(SimpleFillSymbol.STYLE_NULL);
            circleSymbol.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(this.config.circleProperties.color), this.config.circleProperties.width));
            var graphic = new Graphic(geometry, circleSymbol, { distanceCircle: true });
            this.map.graphics.add(graphic);
        },

        keyPressEvent: function (event) {
            var keyCode = event.which;
            if (event.altKey) {
                switch (keyCode) {
                    case 80:
                        {
                            document.getElementById("prevBtn").click();
                            break;
                        }
                    case 78:
                        {
                            document.getElementById("nextBtn").click();
                            break;
                        }

                }
            }
        },
        showLoading: function () {
            domStyle.set("mapLoadingOverlay", "display", "block");
        },
        hideLoading: function () {
            domStyle.set("mapLoadingOverlay", "display", "none");
        }
    });
});