/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2018 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
//Default configuration settings for the application. This is where you'll define things like a bing maps key,
//default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    //"appid": "c092e2e099194c609350c0976540800f",
    "appid":"",
    "webmap": "12c82a217dda41a2aae7ba166345d990",
    "oauthappid":  "",
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    // Define the title and description text that appears on the panel
    "title": "Image Visit",
    "description": "",
    "background": "#005ce6",
    "color": "#fff",
    "widgetTitleColor": "#00a884",
    "toolsIconColor": "#00a884",
    "toolOnByDefault": "about",
    "visitStatusFilter": "All",
    "aboutFlag": false,
    "aboutText":  "",
    "basemapFlag": true,
    "scalebarFlag": true,
    "scalebarUnit": "metric",
    "scalebarStyle": "ruler",
    "scalebarPosition": "bottom-left",
    "layerFlag": true,
    "imageLayer": {"id": null},
    "zoomLevel": "",
    "customZoomLevel":"",
    "visitLayer": {"id": null, "fields": []},
    "imageFilterFlag": false,
    "visitFilterField": "",
    "imageFilterField": "",
    "userNotesFlag": true,
    "notesLayer":{"id": null,"fields":[]},
    "notesMode": "",
    "distanceCircleFlag": false,
    "graphicType": "circle",
    "radius": 20,
    "circleColor": "red",
    "thickness": 2,
    "measurementFlag": false,
    "angularUnit": "esriDUDecimalDegrees",
    "linearUnit": "esriMeters",
    "areaUnit": "esriSquareMeters",
    "units": "english",
    "editable": true,
    "disableGeometryUpdate": false,
    // Define background and text colors for the app.
    "mapZoom": true, // set to false to disable map zoom slider
    "search": true, // Search Tool
    "searchExtent": true,
    "searchLayers": [{
            "id": "",
            "fields": []
        }],
    "find": null,
    //Replace these with your own bitly key
    "bitlyLogin": "arcgis",
    "bitlyKey": "R_b8a169f3a8b978b9697f64613bf1db6d",
    "helperServices": {
        "geometry": {
            "url": "null"
        },
        "printTask": {
            "url": "null"
        },
        "elevationSync": {
            "url": "null"
        },
        "geocode": [{
                "url": "null"
            }]
    },
    "customstyle": null,
    "addDataFlag":false,
    "portalUrl": "www.arcgis.com"
});
