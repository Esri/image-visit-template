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
                "label":"Title:",
                "fieldName":"title",
                "type":"string",
                "tooltip":"Provide App Name"
        },
        {
        "placeHolder":"Description",
                "label":"Description:",
                "fieldName":"description",
                "type":"string",
                "tooltip":"Provide exciting info for the App title tooltip.",
                "stringFieldOption":"textarea"
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
        "type":"options",
                "fieldName":"toolOnByDefault",
                "label":"Specify active tool at app startup",
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
        "type":"paragraph",
                "value":"<span style='text-align: justify;font-family: verdana;'>Use the About tool to give your app context. Use this widget to explain to the user what the purpose of the app is and how to get started.</span>"
        },
        {
        "type": "conditional",
                "condition": false,
                "fieldName": "aboutFlag",
                "label": "Enable about tool",
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
        "type":"boolean",
                "label":"Enable Basemap Gallery",
                "fieldName":"basemapFlag",
                "tooltip":"Basemap Selector"
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"scalebarFlag",
                "label":"Enable Scalebar",
                "tooltip":"Display Scalebar",
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
                "label":"Enable Layer Toggle",
                "fieldName":"layerFlag",
                "tooltip":"Layer Toggle"
        },
        {
        "type": "appproxies"
        }
        ]
},
{
"category": "Imagery",
        "fields": [
        {
        "type":"layerAndFieldSelector",
                "fieldName":"imageLayer",
                "label": "Imagery Layer",
                "tooltip":"Select an image layer",
                "layerOptions":{
                "supportedTypes":[
                        "ImageServiceLayer"
                ]
                },
                "fields": [

                ]
        },
        {
        "type":"scaleList",
                "fieldName":"zoomLevel",
                "label":"Choose Zoom Level",
                "tooltip":""
        },
        {
        "type":"paragraph",
                "value":"<p style='text-align:justify;font-family: verdana;'>The Image Measurement tool allows you to perform measurements on image services with mensuration capability. Mensuration applies geometric rules to find the height, area, or location of a feature.</p>"
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"measurementFlag",
                "label":"Image Measurement",
                "tooltip": "Enable Image Measurement",
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
        },
        {
        "type": "paragraph",
                "value": "<span style='font-weight: bold; font-size: 14px;'>Image Visit</span>"
        },
        {
        "type":"layerAndFieldSelector",
                "fieldName":"visitLayer",
                "label":"Visit Layer",
                "tooltip":"Select Visit Layer",
                "fields":[
                {
                "multipleSelection":false,
                        "fieldName":"visitOrderField",
                        "label":"Visit Order (Optional)",
                        "tooltip":"Select a visit order field",
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
                        "label":"Status (Optional)",
                        "tooltip":"Select a status field",
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
        "type":"conditional",
                "condition": false,
                "fieldName":"imageFilterFlag",
                "label":"Image Filter",
                "tooltip": "Enable Image Filter",
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
        "type":"conditional",
                "condition": false,
                "fieldName":"userNotesFlag",
                "label":"User Notes",
                "items":[
                {
                "type":"layerAndFieldSelector",
                        "fieldName":"notesLayer",
                        "label":"Notes Layer",
                        "tooltip":"Select editable Notes Layer",
                        "fields":[
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
                        "tooltip": "Select Notes Mode",
                        "label": "Notes Mode:",
                        "options": [{
                        "label": "Copy visit feature",
                                "value": "copy"
                        }, {
                        "label": "User adds one feature",
                                "value": "one"
                        }, {
                        "label": "User adds many features",
                                "value": "many"
                        }]
                }

                ]
        }

        ]
},
{
"category": "Search",
        "fields": [
        {
        "type":"paragraph",
                "value":"<span style='text-align: justify;font-family: verdana;'>Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc.</span>"
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"search",
                "label":"Enable search tool",
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
                "imageLayer": {"id": null},
                "zoomLevel": "",
                "visitLayer": {"id": null, "fields":[]},
                "imageFilterFlag": false,
                "visitFilterField":"",
                "imageFilterField":"",
                "userNotesFlag": false,
                "notesLayer": {"id": null},
                "notesMode":"",
                "measurementFlag":false,
                "angularUnit":"esriDUDecimalDegrees",
                "linearUnit":"esriMeters",
                "areaUnit":"esriSquareMeters",
                "search":false,
                "units":"english"
        }
}