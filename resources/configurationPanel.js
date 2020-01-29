{
"configurationSettings":[
        {
        "category":"General",
                "fields":[
                {
                "type":"webmap",
                        "conditions":["imagelayer"]
                },
               {
        "placeHolder":"Enter the title",
                "label":"Title for ArcGIS Online item:",
                "fieldName":"title",
                "type":"string",
                "tooltip":"Provide App Name"
        },
        {
        "placeHolder":"Description",
                "label":"Description for ArcGIS Online item:",
                "fieldName":"description",
                "type":"string",
                "tooltip":"Provide exciting info for the App title tooltip.",
                "stringFieldOption":"textarea"
        },{
                "type": "appproxies"
                }
                ]
                },
        {
        "category":"Theme",
                "fields":[
                {
                "type":"paragraph",
                        "value":"<span style='text-align: justify;font-family: verdana;'>Define title header color for the app</span>"
                },
                {
                "type":"color",
                        "fieldName":"background",
                        "tooltip":"Choose a title header color",
                        "label":"Title Header color"
                },
                {
                "type":"color",
                        "fieldName":"color",
                        "tooltip":"Choose a text color for the app",
                        "label":"Text color"
                },
                {
                "type":"color",
                        "fieldName":"widgetTitleColor",
                        "tooltip":"Choose a title header color",
                        "label":"Widget header color"
                },
                {
                "type":"color",
                        "fieldName":"toolsIconColor",
                        "tooltip":"Choose an icon background color",
                        "label":"Icon background color"
                },
                {
                "type":"paragraph",
                        "value":"<span style='text-align: justify;font-family: verdana;'>Use the Custom css option to paste css that overwrites rules in the app.</span>"
                },
                {
                "type":"string",
                        "fieldName":"customstyle",
                        "tooltip":"Enter custom css",
                        "label":"Custom css"
                }

                ]
                },
        {
        "category": "Options",
                "fields": [
                {
                "type": "conditional",
                        "condition": false,
                        "fieldName": "aboutFlag",
                        "label": "Add the About tool to tell users what your app does",
                        "items": [
                        {
                        "type": "string",
                                "fieldName": "aboutText",
                                "label": "Text",
                                "stringFieldOption": "richtext",
                                "placeHolder": "Enter about text here."
                        }
                        ]
                },
                {
                "type":"options",
                        "fieldName":"toolOnByDefault",
                        "label":"Pick a tool to open automatically when the app loads",
                        "tooltip":"",
                        "options":[
                        {
                        "label":"None",
                                "value":"none"
                        },
                        {
                        "label":"Visit",
                                "value":"visit"
                        },
                        {
                        "label":"About",
                                "value":"about"
                        }
                        ]
                },
                {
                "type":"boolean",
                        "label":"Add the basemap Gallery to let users choose a basemap",
                        "fieldName":"basemapFlag",
                        "tooltip":"Basemap Selector"
                },
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"scalebarFlag",
                        "label":"Add a scalebar to your map",
                        "tooltip":"",
                        "items":[
                        {
                        "type":"options",
                                "fieldName":"scalebarPosition",
                                "label":"Scalebar Position",
                                "toolbar":"Select the Scalebar position on the map.",
                                "options":[
                                {
                                "label":"Top Left",
                                        "value":"top-left"
                                },
                                {
                                "label":"Top Right",
                                        "value":"top-right"
                                },
                                {
                                "label":"Bottom Left",
                                        "value":"bottom-left"
                                },
                                {
                                "label":"Bottom Right",
                                        "value":"bottom-right"
                                },
                                {
                                "label":"Top Center",
                                        "value":"top-center"
                                },
                                {
                                "label":"Bottom Center",
                                        "value":"bottom-center"
                                }
                                ]
                        },
                        {
                        "type":"options",
                                "fieldName":"scalebarStyle",
                                "label":"Scalebar Style",
                                "toolbar":"Select the style for the scalebar.",
                                "options":[
                                {
                                "label":"Ruler",
                                        "value":"ruler"
                                },
                                {
                                "label":"Line",
                                        "value":"line"
                                }
                                ]
                        },
                        {
                        "type":"options",
                                "fieldName":"scalebarUnit",
                                "label":"Scalebar Unit",
                                "toolbar":"Select the Scalebar units.",
                                "options":[
                                {
                                "label":"English",
                                        "value":"english"
                                },
                                {
                                "label":"Metric",
                                        "value":"metric"
                                },
                                {
                                "label":"Both",
                                        "value":"dual"
                                }
                                ]
                        }
                        ]
                },
                {
                "type":"boolean",
                        "label":"Add a Layer Toggle tool so users can turn imagery, notes, and visit layers on and off",
                        "fieldName":"layerFlag",
                        "tooltip":"Layer Toggle"
                },
				{
					"type":"boolean",
                        "label":"Add the Add Data widget to let users add data from ArcGIS Online",
                        "fieldName":"addDataFlag",
                        "tooltip":"Add data from ArcGIS Online"
				}
                
                ]
                },
        {
        "category": "Imagery",
                "fields": [
                {
                "type":"layerAndFieldSelector",
                        "fieldName":"imageLayer",
                        "label": "Choose your app's Imagery layer:",
                        "tooltip":"Choose the imagery layer users will see.",
                        "layerOptions":{
                        "supportedTypes":[
                                "ImageServiceLayer"
                        ]
                        },
                        "fields": [

                        ]
                },
                {
                        "type":"paragraph",
                        "value":"<p style='text-align:justify;font-family:verdana;'>Note: The app will use the topmost imagery layer from your web map. To use a different imagery layer, reorganize your web map. Also, if Image Attributes aren�t appearing in your app, be sure the imagery layer popup is configured in your web map.</p>"
                        },
                {
                "type":"scaleList",
                        "fieldName":"zoomLevel",
                        "label":"Use the dropdown to choose the default zoom level to view imagery at each predetermined location.",
                        "tooltip":"Choose the default zoom level to view imagery at each predetermined location"
                },
                {
                    
                         "type": "number",
                         "fieldName": "customZoomLevel",
                         "label": "or define a custom scale:",
                         "tooltip": "Enter scale number",
                         "constraints" :{"min":0,"places":0}

                },
                {
                "type":"layerAndFieldSelector",
                        "fieldName":"visitLayer",
                        "label":"Choose a Visit layer. This is a hosted feature layer where each feature corresponds to a predetermined location your app will 'visit'.",
                        "tooltip":"",
                        "fields":[
                        {
                        "multipleSelection":false,
                                "fieldName":"visitOrderField",
                                "label":"(Optional) Select an Order field to control the order in which your app visits your predetermined locations:",
                                "tooltip":"",
                                "supportedTypes":[
                                        "esriFieldTypeSmallInteger",
                                        "esriFieldTypeInteger",
                                        "esriFieldTypeSingle",
                                        "esriFieldTypeDouble",
                                        "esriFieldTypeOID"
                                ]
                        },
                        {
                        "multipleSelection":false,
                                "fieldName":"statusField",
                                "label":"(Optional) Select a Status field for users to record the status of predetermined locations(use your own schema, or rely on the default):",
                                "tooltip":"",
                                "supportedTypes":[
                                        "esriFieldTypeSmallInteger",
                                        "esriFieldTypeInteger",
                                        "esriFieldTypeSingle",
                                        "esriFieldTypeDouble",
                                        "esriFieldTypeString",
                                        "esriFieldTypeDate",
                                        "esriFieldTypeOID",
                                        "esriFieldTypeGeometry",
                                        "esriFieldTypeBlob",
                                        "esriFieldTypeRaster",
                                        "esriFieldTypeGUID",
                                        "esriFieldTypeGlobalID",
                                        "esriFieldTypeXML"
                                ]
                        }, 
                        {
                                "multipleSelection": false,
                                "fieldName": "additionalField",
                                "label": "(Optional) Select an additional field to filter the results:",
                                "tooltip": "",
                                "supportedTypes":[
                                        "esriFieldTypeSmallInteger",
                                        "esriFieldTypeInteger",
                                        "esriFieldTypeSingle",
                                        "esriFieldTypeDouble",
                                        "esriFieldTypeString",
                                        "esriFieldTypeDate",
                                        "esriFieldTypeOID",
                                        "esriFieldTypeGeometry",
                                        "esriFieldTypeBlob",
                                        "esriFieldTypeRaster",
                                        "esriFieldTypeGUID",
                                        "esriFieldTypeGlobalID",
                                        "esriFieldTypeXML"
                                ]
                        }
                        ],
                        "layerOptions":{
                        "supportedTypes":[
                                "FeatureLayer"
                        ]
                        }
                },
                {
                "type": "string",
                        "fieldName":"visitStatusFilter",
                        "label":"(Optional) Choose a default Status value to filter the initial Visit locations:",
                        "stringFieldOption": "textbox",
                        "placeHolder": ""
                },
                {
                "type":"conditional",
                        "condition": false,
                        "fieldName":"imageFilterFlag",
                        "label":"Filter the imagery in your app based on a Visit layer field",
                        "tooltip": "",
                        "items":[
                        {
                        "type":"string",
                                "fieldName": "visitFilterField",
                                "label":"Display imagery only if",
                                "tooltip": "",
                                "stringFieldOption": "textbox",
                                "placeHolder": "Enter visit layer field"
                        },
                        {
                        "type": "string",
                                "fieldName":"imageFilterField",
                                "label":"matches",
                                "stringFieldOption": "textbox",
                                "placeHolder": "Enter imagery layer field"
                        }
                        ]
                },
                {
                    
                        "type":"paragraph",
                                "value":"<p style='text-align:justify;font-family:verdana;'>Note: If you don't choose a Visit layer, the app will navigate by proceeding through your web map's bookmarks.</p>"
                        },
                {
                "type":"conditional",
                        "condition": false,
                        "fieldName":"userNotesFlag",
                        "label":"Choose a User Notes layer. This is a hosted feature layer users can use to annotate imagery or record attributes.",
                        "items":[
                        {
                        "type":"layerAndFieldSelector",
                                "fieldName":"notesLayer",
                                "label":"User Notes layer:",
                                "tooltip":"",
                                "fields":[
                                    {
                        "multipleSelection":false,
                                "fieldName":"notesLayerField",
                                "label":"(Optional) Select a field to record the FID/OBJECTID of the Visit feature (disabled without a Visit Layer):",
                                "tooltip":"",
                                "supportedTypes":[
                                         "esriFieldTypeSmallInteger",
                                        "esriFieldTypeInteger",
                                        "esriFieldTypeSingle",
                                        "esriFieldTypeDouble",
                                        "esriFieldTypeString",
                                        "esriFieldTypeDate"
                                ]
                        },
                        {
                                "multipleSelection": false,
                                "fieldName": "imageLayerField",
                                "label": "(Optional) Select a field to record the FID/OBJECTID of the imagery layer:",
                                "tooltip": "",
                                "supportedTypes":[
                                        "esriFieldTypeSmallInteger",
                                       "esriFieldTypeInteger",
                                       "esriFieldTypeSingle",
                                       "esriFieldTypeDouble",
                                       "esriFieldTypeString",
                                       "esriFieldTypeDate"
                               ]
                        }
                                ],
                                "layerOptions":{
                                "supportedTypes":[
                                        "FeatureLayer"
                                ]
                                }
                        },
                        {
                        "type": "options",
                                "fieldName": "notesMode",
                                "tooltip": "",
                                "label": "Choose how users will record notes:",
                                "options": [{
                                "label": "User adds many features",
                                        "value": "many"
                                },
                                {
                                "label": "User adds one feature",
                                        "value": "one"
                                },
                            {
                                "label": "Copy visit feature",
                                        "value": "copy"
                                }]
                        },
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align:justify;font-family:verdana;'>Note: For each predetermined location, you can allow the user to<br />(1) add/edit unlimited Notes features,<br/>(2) add/edit only one Notes feature, or<br/>(3) edit a pre-generated copy of the Visit layer feature for that location.</p>"
                        }

                        ]
                }, {
                  "type":"conditional",
                  "condition": false,
                  "fieldName": "distanceCircleFlag",
                  "label": "Turn on a reference circle or square to help with image interpretation",
                  "items": [
                      {
                "type": "radio",
                        "fieldName":"graphicType",
                        "tooltip": "",
                        "label": "Graphic: ",
                        "items": [
                        {
                        "label": "Circle",
                                "value":"circle",
                                "checked": true
                        },
                        {
                        "label": "Square",
                                "value":"square"
                        }
                        ]
                },
                      {
                          "type": "number",
                          "fieldName":"radius",
                          "label": "Radius | Side (in meters):",
                          "tooltip": "Define radius of circle or side length of square",
                          "constraints": {"min":1}
                      },
                      {
                          "type": "color",
                          "label": "Choose a color:",
                          "fieldName":"circleColor"
                      },
                      {
                          "type":"number",
                          "label":"Choose line thickness (in pixels):",
                          "fieldName":"thickness",
                          "constraints": {"min":1}
                      }
                  ]
                }, 
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"measurementFlag",
                        "label":"Add the Image Measurement tool",
                        "tooltip": "",
                        "items":[
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align:justify;font-family: verdana;margin-bottom:0px;'>Select the units that will be displayed in-app using the dropdown menus.</p>"
                        },
                        {
                        "type":"options",
                                "fieldName":"angularUnit",
                                "label":"Default Angular Unit",
                                "tooltip":"Unit of measure for angular measurement.",
                                "options":[
                                {
                                "label":"Radians",
                                        "value":"esriDURadians"
                                },
                                {
                                "label":"Degrees",
                                        "value":"esriDUDecimalDegrees"
                                }
                                ]
                        },
                        {
                        "type":"options",
                                "fieldName":"linearUnit",
                                "label":"Default Linear Unit",
                                "tooltip":"Unit of measure for linear measurement.",
                                "options":[
                                {
                                "label":"Inches",
                                        "value":"esriInches"
                                },
                                {
                                "label":"Feet",
                                        "value":"esriFeet"
                                },
                                {
                                "label":"Yards",
                                        "value":"esriYards"
                                },
                                {
                                "label":"Miles",
                                        "value":"esriMiles"
                                },
                                {
                                "label":"Nautical Miles",
                                        "value":"esriNauticalMiles"
                                },
                                {
                                "label":"Millimeters",
                                        "value":"esriMillimeters"
                                },
                                {
                                "label":"Centimeters",
                                        "value":"esriCentimeters"
                                },
                                {
                                "label":"Decimeters",
                                        "value":"esriDecimeters"
                                },
                                {
                                "label":"Meters",
                                        "value":"esriMeters"
                                },
                                {
                                "label":"Kilometers",
                                        "value":"esriKilometers"
                                }
                                ]
                        },
                        {
                        "type":"options",
                                "fieldName":"areaUnit",
                                "label":"Default Area Unit",
                                "tooltip":"Unit of measure for area measurement.",
                                "options":[
                                {
                                "label":"Sq Inches",
                                        "value":"esriSquareInches"
                                },
                                {
                                "label":"Sq Feet",
                                        "value":"esriSquareFeet"
                                },
                                {
                                "label":"Sq Yards",
                                        "value":"esriSquareYards"
                                },
                                {
                                "label":"Acres",
                                        "value":"esriAcres"
                                },
                                {
                                "label":"Sq Miles",
                                        "value":"esriSquareMiles"
                                },
                                {
                                "label":"Sq Millimeters",
                                        "value":"esriSquareMillimeters"
                                },
                                {
                                "label":"Sq Centimeters",
                                        "value":"esriSquareCentimeters"
                                },
                                {
                                "label":"Sq Decimeters",
                                        "value":"esriSquareDecimeters"
                                },
                                {
                                "label":"Sq Meters",
                                        "value":"esriSquareMeters"
                                },
                                {
                                "label":"Ares",
                                        "value":"esriAres"
                                },
                                {
                                "label":"Hectares",
                                        "value":"esriHectares"
                                },
                                {
                                "label":"Sq Kilometers",
                                        "value":"esriSquareKilometers"
                                }
                                ]
                        }
                        ]
                }

                ]
                },
        {
"category": "Search",
        "fields": [
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"search",
                "label":"Add the Search tool so users can search for a location or data in the app",
                "items":[
                {
                "type":"search",
                        "fieldName":"searchConfig",
                        "label":"Configure search tool"
                }
                ]
        }
        ]


}
],
        "values":{
        "title": "Image Visit",
                "description":"",
                "background":"#000",
                "color":"#fff",
                "widgetTitleColor":"#008299",
                "toolsIconColor":"#008299",
                "toolOnByDefault": "none",
                "aboutFlag": false,
                "aboutText":"",
                "basemapFlag":true,
                "scalebarFlag":true,
                "scalebarUnit":"metric",
                "scalebarStyle":"ruler",
                "scalebarPosition":"bottom-left",
                "layerFlag":true,
                "addDataFlag": false,
                "imageLayer": {"id": null},
                "zoomLevel": "",
                "customZoomLevel":"",
                "visitLayer": {"id": null, "fields":[]},
                "visitStatusFilter": "All",
                "imageFilterFlag": false,
                "visitFilterField":"",
                "imageFilterField":"",
                "userNotesFlag": false,
                "notesLayer": {"id": null,"fields":[]},
                "notesMode":"",
                "distanceCircleFlag":false,
                "graphicType": "circle",
                "radius":"",
                "circleColor": "",
                "thickness": "",
                "measurementFlag":false,
                "angularUnit":"esriDUDecimalDegrees",
                "linearUnit":"esriMeters",
                "areaUnit":"esriSquareMeters",
                "search":false,
                "units":"english"
        }
}