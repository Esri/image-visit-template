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
    'dojo/_base/declare', "dojo/Evented",
    "dojo/html","dojo/dom",
    "dijit/registry",
    "dojo/_base/lang",
    "dojo/dom-style","dojo/dom-construct",
     "dijit/form/CheckBox"


],
        function (
                declare, Evented,
                html,dom,
                registry,
                lang, domStyle,domConstruct,CheckBox) {
            return declare("application.LayerToggle", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null,
                        i18n: null,
                        imageLayer: {"id": ""},
                        visitLayer: {"id": ""},
                        notesLayer: {"id":""}
                    };
                    lang.mixin(this, defaults, parameters);
                },
                postCreate: function () {
                    window.addEventListener("resize", lang.hitch(this, this.resizeContainer));
                    this.resizeContainer();
                    if(this.imageLayer.id)
                        this.createCheckBox("imageLayer", "Imagery");
                    
                    if(this.visitLayer.id)
                        this.createCheckBox("visitLayer","Visit");
                    
                    if(this.notesLayer.id)
                        this.createCheckBox("notesLayer","Notes");
                },
                createCheckBox: function(value,label) {
                    
                    domConstruct.place("<div style='margin: 0.3em 0px;'><div id='"+value+"'></div><label for='"+value+"'>"+label+"</label></div>","layerDiv","last");
                    var layer = this.map.getLayer(this[value].id);
                    new CheckBox({
                     checked: layer.visible,
                     onChange: lang.hitch(this,function(flag) {
                         if(flag)
                         this.map.getLayer(this[value].id).show();
                         else
                         this.map.getLayer(this[value].id).hide();     
                     })
                    },value).startup();
                },
                resizeContainer: function () {
                    if (window.innerWidth > 1200) {
                        domStyle.set("layerDialog", "left", "auto");
                        domStyle.set("layerDialog", "right", "20px");
                        domStyle.set("layerDialog", "top", "210px");
                    } else if (window.innerWidth > 1000) {
                        domStyle.set("layerDialog", "left", "auto");
                        domStyle.set("layerDialog", "right", "20px");
                        domStyle.set("layerDialog", "top", "210px");
                    } else if (window.innerWidth > 800) {
                        domStyle.set("layerDialog", "left", "auto");
                        domStyle.set("layerDialog", "right", "20px");
                        domStyle.set("layerDialog", "top", "208px");
                    } else if (window.innerWidth > 600) {
                        domStyle.set("layerDialog", "left", "auto");
                        domStyle.set("layerDialog", "right", "20px");
                        domStyle.set("layerDialog", "top", "206px");
                    } else if (window.innerWidth > 400) {
                        domStyle.set("layerDialog", "left", "auto");
                        domStyle.set("layerDialog", "right", "20px");
                        domStyle.set("layerDialog", "top", "204px");
                    } else {
                        domStyle.set("layerDialog", "left", "auto");
                        domStyle.set("layerDialog", "right", "20px");
                        domStyle.set("layerDialog", "top", "204px");
                    }
                }
               
               
               
            });


        });