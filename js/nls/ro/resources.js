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
    "error": "Imposibil de creat harta",
    "licenseError": {
      "message": "Contul dvs. nu este licențiat să utilizeze aplicații configurabile care nu sunt publice. Solicitați-i administratorului organizației să vă aloce un tip de utilizator care include aplicații esențiale sau o licență pentru aplicații esențiale de completare.",
      "title": "Nelicențiat"
    }
  },
  "nav": {
    "close": "Închidere"
  },
  "basemap": {
    "title": "Galerie de hărți fundal"
  },
  "visit": {
    "title": "Accesați",
    "visit": "Accesați atribute",
    "image": "Atributele imaginilor",
    "addText": "Selectați un simbol și faceți clic pe hartă.",
    "next": "Înainte",
    "prev": "Înapoi",
    "error": "Acces refuzat. Stratul tematic nu poate fi editat.",
    "edit": "Editare note",
    "save": "Salvare",
    "filter": "Filtrare după starea vizitei",
    "all": "Toate",
    "record": "Înregistrare",
    "of": "din",
    "error1": "Introduceți o valoare numerică validă.",
    "layer": "Comutare strat tematic",
    "imageLayer": "Imagini",
    "visitLayer": "Accesaţi",
    "notesLayer": "Note",
    "layerError": "Niciun strat tematic prezent pe hartă.",
    "follow": "Urmăriţi",
    "okay": "În regulă",
    "noStat": "Nicio stare",
    "left": "Stânga",
    "up": "Sus",
    "down": "Jos",
    "right": "Dreapta",
    "center": "Centru",
    "press": "Apăsaţi",
    "scan": "Scanați imaginea",
    "scale": "Resetați scara",
    "view": "Resetați imaginea",
    "search": "Se caută...",
    "additionalFilter": "Filtrare după"
  },
  "measurement": {
    "title": "Măsurare imagine",
    "error": "Capacități de măsurare neacceptate."
  },
  "about": {
    "title": "Despre"
  },
  "addData": {
    "_widgetLabel": "Adăugare date",
    "noOptionsConfigured": "Nu a fost configurată nicio opțiune.",
    "tabs": {
      "search": "Căutare",
      "url": "Adresă URL",
      "file": "Fișier"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Stratul tematic este inaccesibil.",
      "loadError": "Adăugare date, imposibil de încărcat:",
      "searchBox": {
        "search": "Căutare",
        "placeholder": "Căutare..."
      },
      "bboxOption": {
        "bbox": "În hartă"
      },
      "scopeOptions": {
        "anonymousContent": "Conținut",
        "myContent": "Conținutul meu",
        "myOrganization": "Organizația mea",
        "curated": "Gestionate",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortare după:",
        "relevance": "Relevanță",
        "title": "Titlu",
        "owner": "Proprietar",
        "rating": "Calificativ",
        "views": "Vizualizări",
        "date": "Data",
        "switchOrder": "Comutare"
      },
      "typeOptions": {
        "prompt": "Tip",
        "mapService": "Serviciu de hartă",
        "featureService": "Serviciu de obiecte spațiale",
        "imageService": "Serviciu de imagini",
        "vectorTileService": "Serviciu de segmente tile vectoriale",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nu a fost găsit niciun rezultat."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Primul",
        "previous": "<",
        "previousTip": "Anteriorul",
        "next": ">",
        "nextTip": "Următorul",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Element",
        "itemPlural": "Elemente"
      },
      "item": {
        "actions": {
          "add": "Adăugare",
          "close": "Închidere",
          "remove": "Eliminare",
          "details": "Detalii",
          "done": "Gata",
          "editName": "Editare nume"
        },
        "messages": {
          "adding": "Adăugare...",
          "removing": "Se elimină...",
          "added": "Adăugat",
          "addFailed": "Adăugare nereușită",
          "unsupported": "Neacceptat"
        },
        "typeByOwnerPattern": "{type} după {owner}",
        "dateFormat": "z, LLLL aaaa",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "calificative\", \"comentarii\": \"comentarii\", \"vizualizări\": \"vizualizări"
        },
        "types": {
          "Map Service": "Serviciu de hărți",
          "Feature Service": "Serviciu de obiecte spațiale",
          "Image Service": "Serviciu de imagini",
          "Vector Tile Service": "Serviciu de segmente tile vectoriale",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tip",
      "url": "Adresă URL",
      "types": {
        "ArcGIS": "Un serviciu web ArcGIS Server",
        "WMS": "Un serviciu web WMS OGC",
        "WMTS": "Un serviciu web WMTS OGC",
        "WFS": "Un serviciu web WFS OGC",
        "KML": "Un fișier KML",
        "GeoRSS": "Un fișier GeoRSS",
        "CSV": "Un fișier CSV"
      },
      "samplesHint": "Exemple de URL"
    },
    "addFromFile": {
      "intro": "Puteți fixa sau naviga la unul dintre următoarele tipuri de fișiere:",
      "types": {
        "Shapefile": "Un fișier shapefile (.zip, arhivă ZIP care conține toate fișierele shapefile)",
        "CSV": "Un fișier CSV (.csv, cu adresă sau latitudine, longitudine și delimitate prin virgulă, punct și virgulă sau tab)",
        "KML": "Un fișier KML (.kml)",
        "GPX": "Un fișier GPX (.gpx, format de schimb GPS)",
        "GeoJSON": "Un fișier GeoJSON (.geo.json sau .geojson)"
      },
      "generalizeOn": "Generalizare obiecte spațiale pentru afișarea pe web",
      "dropOrBrowse": "Glisare sau navigare",
      "browse": "Răsfoire",
      "invalidType": "Acest tip de fișier nu este acceptat.",
      "addingPattern": "{filename}: se adaugă...",
      "addFailedPattern": "{filename}: adăugare eșuată",
      "featureCountPattern": "{filename}: {count} obiecte spațiale",
      "invalidTypePattern": "{filename}: acest tip nu este acceptat",
      "maxFeaturesAllowedPattern": "Sunt permise maximum {count} obiecte spațiale",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "A apărut o problemă.",
      "kmlProjectionMismatch": "Referința spațială a hărții și cea a stratului tematic KML nu corespund, iar conversia nu poate fi realizată la client."
    },
    "layerList": {
      "caption": "Straturi tematice",
      "noLayersAdded": "Nu a fost adăugat niciun strat tematic.",
      "removeLayer": "Eliminare strat tematic",
      "back": "Înapoi"
    }
  }
});