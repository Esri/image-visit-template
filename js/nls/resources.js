/*global define */
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
    root: ({
        map: {
            error: "Unable to create map",
			licenseError: {
				message: "Your account is not licensed to use Configurable Apps that are not public. Please ask your organization administrator to assign you a user type that includes Essential Apps or an add-on Essential Apps license.",
				title: "Not Licensed"
			}
        },
        nav: {
            "close": "Close"
        },
        basemap: {
            title: "Basemap Gallery"
        },
        visit: {
            title: "Visit",
            visit: "Visit Attributes",
            image: "Image Attributes",
            addText: "Select a symbol and click on the map.",
            next: "Next",
            prev: "Previous",
            error: "Access denied. Layer cannot be edited.",
            edit: "Edit Notes",
            save: "Save",
            filter: "Filter by visit status",
            all: "All",
            record: "Record",
            of: "of",
            error1:"Please enter a valid numeric value.",
            layer: "Layer Toggle",
            imageLayer: "Imagery",
            visitLayer: "Visit",
            notesLayer: "Notes",
            layerError: "No layers present in the map.",
            follow: "Follow Up",
            okay: "Okay",
            noStat: "No Status",
            left:"Left",
            up:"Up",
            down:"Down",
            right:"Right",
            center:"Center",
            press: "Press",
            scan: "Scan Image",
            scale:"Reset Scale",
            view:"Reset View",
            search: "Searching...",
            additionalFilter: "Filter by"
        },
        measurement: {
            title: "Image Measurement",
            error: "Mensuration Capabilities not supported."
        },
        about: {
            title: "About"
        },
        addData:{
            _widgetLabel: "Add Data",

    noOptionsConfigured: "No options were configured.",

    tabs: {
      search: "Search",
      url: "URL",
      file: "File"
    },

    search: {
      featureLayerTitlePattern: "{serviceName} - {layerName}",
      layerInaccessible: "The layer is inaccessible.",
      loadError: "AddData, unable to load:",
      searchBox: {
        search: "Search",
        placeholder: "Search..."
      },
      bboxOption: {
        bbox: "Within map"
      },
      scopeOptions: {
        anonymousContent: "Content",
        myContent: "My Content",
        myOrganization: "My Organization",
        curated: "Curated",
        ArcGISOnline: "ArcGIS Online"
      },
      sortOptions: {
        prompt: "Sort By:",
        relevance: "Relevance",
        title: "Title",
        owner: "Owner",
        rating: "Rating",
        views: "Views",
        date: "Date",
        switchOrder: "Switch"
      },
      typeOptions: {
        prompt: "Type",
        mapService: "Map Service",
        featureService: "Feature Service",
        imageService: "Image Service",
        vectorTileService: "Vector Tile Service",
        kml: "KML",
        wms: "WMS"
      },
      resultsPane: {
        noMatch: "No results were found."
      },
      paging: {
        first: "<<",
        firstTip: "First",
        previous: "<",
        previousTip: "Previous",
        next: ">",
        nextTip: "Next",
        pagePattern: "{page}"
      },
      resultCount: {
        countPattern: "{count} {type}",
        itemSingular: "Item",
        itemPlural: "Items"
      },

      item: {
        actions: {
          add: "Add",
          close: "Close",
          remove: "Remove",
          details: "Details",
          done: "Done",
          editName: "Edit Name"
        },
        messages: {
          adding: "Adding...",
          removing: "Removing...",
          added: "Added",
          addFailed: "Add failed",
          unsupported: "Unsupported"
        },
        typeByOwnerPattern: "{type} by {owner}",
        dateFormat: "MMMM d, yyyy",
        datePattern: "{date}",
        ratingsCommentsViewsPattern: "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        ratingsCommentsViewsLabels: {"ratings": "ratings", "comments": "comments", "views": "views"},
        types: {
          "Map Service": "Map Service",
          "Feature Service": "Feature Service",
          "Image Service": "Image Service",
          "Vector Tile Service": "Vector Tile Service",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },

    addFromUrl: {
      type: "Type",
      url: "URL",
      types: {
        "ArcGIS": "An ArcGIS Server Web Service",
        "WMS": "A WMS OGC Web Service",
        "WMTS": "A WMTS OGC Web Service",
        "WFS": "A WFS OGC Web Service",
        "KML": "A KML File",
        "GeoRSS": "A GeoRSS File",
        "CSV": "A CSV File"
      },
      samplesHint: "Sample URL(s)"
    },

    addFromFile: {
      intro: "You can drop or browse for one the following file types:",
      types: {
        "Shapefile": "A Shapefile (.zip, ZIP archive containing all shapefile files)",
        "CSV": "A CSV File (.csv, with address or latitude, longitude and comma, semi-colon or tab delimited)",
        "KML": "A KML File (.kml)",
        "GPX": "A GPX File (.gpx, GPS Exchange Format)",
        "GeoJSON": "A GeoJSON File (.geo.json or .geojson)"
      },
      generalizeOn: "Generalize features for web display",
      dropOrBrowse: "Drop or Browse",
      browse: "Browse",
      invalidType: "This file type is not supported.",
      addingPattern: "{filename}: adding...",
      addFailedPattern: "{filename}: add failed",
      featureCountPattern: "{filename}: {count} feature(s)",
      invalidTypePattern: "{filename}: this type is not supported",
      maxFeaturesAllowedPattern: "A maximum of {count} features is allowed",
      layerNamePattern: "{filename} - {name}",
      generalIssue: "There was an issue.",
      kmlProjectionMismatch: "The spatial reference of the map and KML layer do not match, and the conversion cannot be done on the client."
    },

    layerList: {
      caption: "Layers",
      noLayersAdded: "No layers have been added.",
      removeLayer: "Remove Layer",
      back: "Back"
    }


        }


    }),
    "ar": 1,
	"bs": 1,
	"ca": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hr": 1,
	"hu": 1,
	"id": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sl": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"uk": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});
