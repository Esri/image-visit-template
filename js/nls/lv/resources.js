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
    "error": "Nevar izveidot karti",
    "licenseError": {
      "message": "Jūsu kontam nav licences, lai izmantotu konfigurējamās lietotnes, kas nav publiskas. Pieprasiet savas organizācijas administratoram piešķirt jums lietotāja veidu, kurā iekļauts lietotņu komplekts Essential Apps vai papildinājumlietotņu Essential Apps licence.",
      "title": "Nav licences"
    }
  },
  "nav": {
    "close": "Aizvērt"
  },
  "basemap": {
    "title": "Pamatkaršu galerija"
  },
  "visit": {
    "title": "Doties uz",
    "visit": "Doties uz atribūtiem",
    "image": "Attēlu atribūti",
    "addText": "Izvēlieties simbolu un uzklikšķiniet uz kartes",
    "next": "Nākošais",
    "prev": "Iepriekšējais",
    "error": "Piekļuve liegta. Slāni nevar rediģēt.",
    "edit": "Rediģēt piezīmes",
    "save": "Saglabāt",
    "filter": "Filtrēt pēc apmeklējuma statusa",
    "all": "Viss",
    "record": "Ieraksts",
    "of": "no",
    "error1": "Lūgums ievadīt derīgu skaitlisko vērtību.",
    "layer": "Slāņa pārslēgšana",
    "imageLayer": "Attēli",
    "visitLayer": "Doties uz",
    "notesLayer": "Piezīmes",
    "layerError": "Kartē neviens slānis nav atrasts.",
    "follow": "Sekot",
    "okay": "Labi",
    "noStat": "Bez statusa",
    "left": "Pa kreisi",
    "up": "Augšup",
    "down": "Lejup",
    "right": "Pa labi",
    "center": "Centrā",
    "press": "Nospiediet",
    "scan": "Skenēt attēlu",
    "scale": "Atiestatīt mērogu",
    "view": "Atiestatīt skatu",
    "search": "Meklē...",
    "additionalFilter": "Filtrēt pēc"
  },
  "measurement": {
    "title": "Attēla mērījums",
    "error": "Mērīšanas iespējas netiek atbalstītas."
  },
  "about": {
    "title": "Par"
  },
  "addData": {
    "_widgetLabel": "Pievienot datus",
    "noOptionsConfigured": "Netika konfigurēta neviena opcija.",
    "tabs": {
      "search": "Meklēt",
      "url": "Vietrādis (URL)",
      "file": "Fails"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName}–{layerName}",
      "layerInaccessible": "Slānim nevar piekļūt.",
      "loadError": "AddData, nevarēja ielādēt:",
      "searchBox": {
        "search": "Meklēt",
        "placeholder": "Notiek meklēšana..."
      },
      "bboxOption": {
        "bbox": "Kartē"
      },
      "scopeOptions": {
        "anonymousContent": "Saturs",
        "myContent": "Mans saturs",
        "myOrganization": "Manu organizāciju",
        "curated": "Pārraudzīts",
        "ArcGISOnline": "ArcGIS Online kontu"
      },
      "sortOptions": {
        "prompt": "Atlasīt pēc:",
        "relevance": "Nozīmīgums",
        "title": "Virsraksts",
        "owner": "Īpašnieks",
        "rating": "Novērtējums",
        "views": "Skatījumi",
        "date": "Datums",
        "switchOrder": "Pārslēgt"
      },
      "typeOptions": {
        "prompt": "Veids",
        "mapService": "Karšu serviss",
        "featureService": "Elementu serviss",
        "imageService": "Attēlu serviss",
        "vectorTileService": "Vektoru mozaīkas serviss",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Netika atrasts neviens rezultāts."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Pirmais",
        "previous": "<",
        "previousTip": "Iepriekšējais",
        "next": ">",
        "nextTip": "Nākošais",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Vienība",
        "itemPlural": "Vienības"
      },
      "item": {
        "actions": {
          "add": "Pievienot",
          "close": "Aizvērt",
          "remove": "Noņemt",
          "details": "Informācija",
          "done": "Gatavs",
          "editName": "Rediģēt nosaukumu"
        },
        "messages": {
          "adding": "Notiek pievienošana...",
          "removing": "Notiek noņemšana...",
          "added": "Pievienots",
          "addFailed": "Pievienošanas neizdevās",
          "unsupported": "Neatbalstīts"
        },
        "typeByOwnerPattern": "{type}, īpašnieks {owner}",
        "dateFormat": "d MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "vērtējumi\", \"komentāri\": \"komentāri\", \"skatījumi\": \"skatījumi"
        },
        "types": {
          "Map Service": "Karšu serviss",
          "Feature Service": "Elementu serviss",
          "Image Service": "Attēlu serviss",
          "Vector Tile Service": "Vektoru mozaīkas serviss",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Veids",
      "url": "Vietrādis (URL)",
      "types": {
        "ArcGIS": "ArcGIS Server tīmekļa serviss",
        "WMS": "WMS OGC Web serviss",
        "WMTS": "WMTS OGC Web serviss",
        "WFS": "WFS OGC tīmekļa serviss",
        "KML": "KML fails",
        "GeoRSS": "GeoRSS fails",
        "CSV": "CSV fails"
      },
      "samplesHint": "Parauga URL"
    },
    "addFromFile": {
      "intro": "Jūs varat nomest vai norādīt kādu no tālāk aprakstītajiem failu veidiem:",
      "types": {
        "Shapefile": "Shape fails (.zip paplašinājums; ZIP arhīvs, kurā ietilpst visi Shape faila faili)",
        "CSV": "CSV fails (.csv paplašinājums; ar adresi vai ģeogrāfisko platumu un ģeogrāfisko garumu; vērtības atdalītas ar komatu, semikolu vai tabulatoru)",
        "KML": "KML fails (.kml)",
        "GPX": "GPX fails (.gpx paplašinājums, GPS Exchange formāts)",
        "GeoJSON": "GeoJSON fails (.geo.json vai .geojson paplašinājums)"
      },
      "generalizeOn": "Ieviest elementus parādīšanai tīmeklī",
      "dropOrBrowse": "Nomest vai pārlūkot",
      "browse": "Pārlūkot",
      "invalidType": "Šis faila tipa netiek atbalstīts.",
      "addingPattern": "{filename}: notiek pievienošana...",
      "addFailedPattern": "{filename}: neizdevās pievienot",
      "featureCountPattern": "{filename}: {count} elements(i)",
      "invalidTypePattern": "{filename}: šis veids netiek atbalstīts",
      "maxFeaturesAllowedPattern": "Maksimālais atļautais elementu skaits: {count}",
      "layerNamePattern": "{filename} — {name}",
      "generalIssue": "Radās kāda problēma.",
      "kmlProjectionMismatch": "Kartes telpiskā atskaite un KML slānis nesakrīt, un klientam nav iespējams veikt konvertāciju."
    },
    "layerList": {
      "caption": "Slāņi",
      "noLayersAdded": "Nav pievienots neviens slānis.",
      "removeLayer": "Noņemt slāni",
      "back": "Atpakaļ"
    }
  }
});