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
  "map": {
    "error": "Kan ikke oprette kort",
    "licenseError": {
      "message": "Din konto har ikke licens til at bruge Konfigurérbare apps, der ikke er offentlige. Bed din organisationsadministrator om at knytte dig til en brugertype, der omfatter Essential Apps eller en add-on Essential Apps-licens.",
      "title": "Ikke licenseret"
    }
  },
  "nav": {
    "close": "Luk"
  },
  "basemap": {
    "title": "Galleri over baggrundskort"
  },
  "visit": {
    "title": "Besøg",
    "visit": "Besøgsattributter",
    "image": "Billedattributter",
    "addText": "Vælg et symbol, og klik på kortet.",
    "next": "Næste",
    "prev": "Forrige",
    "error": "Adgang nægtet. Laget kan ikke redigeres.",
    "edit": "Redigér noter",
    "save": "Gem",
    "filter": "Filtrer efter besøgsstatus",
    "all": "Alle",
    "record": "Post",
    "of": "af",
    "error1": "Angiv en gyldig numerisk værdi.",
    "layer": "Skift mellem lag",
    "imageLayer": "Billeder",
    "visitLayer": "Besøg",
    "notesLayer": "Noter",
    "layerError": "Der er ingen lag i kortet.",
    "follow": "Følg op",
    "okay": "OK",
    "noStat": "Ingen status",
    "left": "Venstre",
    "up": "Op",
    "down": "Ned",
    "right": "Højre",
    "center": "Midt",
    "press": "Tryk",
    "scan": "Scan billede",
    "scale": "Nulstil skala",
    "view": "Nulstil visning",
    "search": "Søger...",
    "additionalFilter": "Filtrér efter"
  },
  "measurement": {
    "title": "Billedmåling",
    "error": "Målefunktioner understøttes ikke."
  },
  "about": {
    "title": "Om"
  },
  "addData": {
    "_widgetLabel": "Tilføj data",
    "noOptionsConfigured": "Der blev ikke konfigureret nogen indstillinger.",
    "tabs": {
      "search": "Søg",
      "url": "URL",
      "file": "Fil"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Laget er utilgængeligt.",
      "loadError": "AddData, kan ikke indlæse:",
      "searchBox": {
        "search": "Søg",
        "placeholder": "Søg..."
      },
      "bboxOption": {
        "bbox": "Inden for kortet"
      },
      "scopeOptions": {
        "anonymousContent": "Indhold",
        "myContent": "Mit indhold",
        "myOrganization": "Min organisation",
        "curated": "Vedligeholdt",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortér efter:",
        "relevance": "Relevans",
        "title": "Titel",
        "owner": "Ejer",
        "rating": "Vurdering",
        "views": "Visninger",
        "date": "Dato",
        "switchOrder": "Skift"
      },
      "typeOptions": {
        "prompt": "Type",
        "mapService": "Korttjeneste",
        "featureService": "Featuretjeneste",
        "imageService": "Billedtjeneste",
        "vectorTileService": "Vektor-tile-tjeneste",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Ingen resultater fundet."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Første",
        "previous": "<",
        "previousTip": "Forrige",
        "next": ">",
        "nextTip": "Næste",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Element",
        "itemPlural": "Elementer"
      },
      "item": {
        "actions": {
          "add": "Tilføj",
          "close": "Luk",
          "remove": "Fjern",
          "details": "Detaljer",
          "done": "Udført",
          "editName": "Redigér navn"
        },
        "messages": {
          "adding": "Tilføjer...",
          "removing": "Fjerner...",
          "added": "Tilføjet",
          "addFailed": "Tilføjelse mislykkedes",
          "unsupported": "Ikke understøttet"
        },
        "typeByOwnerPattern": "{type} efter {owner}",
        "dateFormat": "MMMM d, åååå",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "vurderinger\", \"kommentarer\": \"kommentarer\", \"visninger\": \"visninger"
        },
        "types": {
          "Map Service": "Korttjeneste",
          "Feature Service": "Featuretjeneste",
          "Image Service": "Billedtjeneste",
          "Vector Tile Service": "Vektor-tile-tjeneste",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Type",
      "url": "URL",
      "types": {
        "ArcGIS": "En ArcGIS Server-webtjeneste",
        "WMS": "En WMS OGC-webservice",
        "WMTS": "En WMTS OGC-webservice",
        "WFS": "En WFS OGC-webtjeneste",
        "KML": "En KML-fil",
        "GeoRSS": "En GeoRSS-fil",
        "CSV": "En CSV-fil"
      },
      "samplesHint": "Eksempel-URL(er)"
    },
    "addFromFile": {
      "intro": "Du kan slippe eller browse til én af følgende filtyper:",
      "types": {
        "Shapefile": "En shapefil (.-zip, ZIP-arkiv, der indeholder alle shapefiler)",
        "CSV": "En CSV-fil (.csv, med adresse eller længde- og breddegrader samt komma-, semikolon- eller tabulatorsepareret)",
        "KML": "En KML-fil (.kml)",
        "GPX": "En GPX-fil (.gpx, GPS Exchange Format)",
        "GeoJSON": "En GeoJSON-fil (.geo.json eller .geojson)"
      },
      "generalizeOn": "Generalisér objekter til webvisning",
      "dropOrBrowse": "Slip eller gennemse",
      "browse": "Gennemse",
      "invalidType": "Denne filtype understøttes ikke.",
      "addingPattern": "{filename}: tilføjer...",
      "addFailedPattern": "{filename}: tilføjelse mislykkedes",
      "featureCountPattern": "{filename}: {count} objekt(er)",
      "invalidTypePattern": "{filename}: denne type understøttes ikke",
      "maxFeaturesAllowedPattern": "Højst {count} objekter er tilladt",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Der opstod et problem.",
      "kmlProjectionMismatch": "Den spatiale reference for kortet og KML-laget passer ikke sammen, og konverteringen kan ikke udføres for klienten."
    },
    "layerList": {
      "caption": "Lag",
      "noLayersAdded": "Ingen lag er blevet tilføjet.",
      "removeLayer": "Fjern lag",
      "back": "Bagside"
    }
  }
});