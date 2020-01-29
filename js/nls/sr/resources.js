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
    "error": "Kreiranje mape nije moguće",
    "licenseError": {
      "message": "Vaš nalog nema licencu za korišćenje aplikacija koje mogu da se konfigurišu i nisu javne. Zatražite od administratora organizacije da vam dodeli onaj tip korisnika koji uključuje osnovne aplikacije ili licencu za dodatne osnovne aplikacije.",
      "title": "Nema licencu"
    }
  },
  "nav": {
    "close": "Zatvori"
  },
  "basemap": {
    "title": "Galerija pozadinskih mapa"
  },
  "visit": {
    "title": "Posetite",
    "visit": "Poseti atribute",
    "image": "Atributi snimka",
    "addText": "Odaberite simbol i kliknite na mapu.",
    "next": "Sledeće",
    "prev": "Prethodno",
    "error": "Pristup je odbijen. Sloj ne može da se uređuje.",
    "edit": "Izmeni napomene",
    "save": "Sačuvaj",
    "filter": "Filtriraj po statusu poseta",
    "all": "Sve",
    "record": "Zapis",
    "of": "od",
    "error1": "Unesite važeću numeričku vrednost.",
    "layer": "Uključivanje/isključivanje slojeva",
    "imageLayer": "Slike",
    "visitLayer": "Posetite",
    "notesLayer": "Napomene",
    "layerError": "Nema prisutnih slojeva u mapi.",
    "follow": "Praćenje",
    "okay": "U redu",
    "noStat": "Bez statusa",
    "left": "Levo",
    "up": "Gore",
    "down": "Dole",
    "right": "Desno",
    "center": "Centar",
    "press": "Pritisnite",
    "scan": "Skeniraj snimak",
    "scale": "Resetuj razmeru",
    "view": "Resetuj prikaz",
    "search": "Pretraživanje...",
    "additionalFilter": "Filtriraj po"
  },
  "measurement": {
    "title": "Mere snimka",
    "error": "Mogućnosti merenja nisu podržane."
  },
  "about": {
    "title": "Osnovni podaci"
  },
  "addData": {
    "_widgetLabel": "Dodaj podatke",
    "noOptionsConfigured": "Nije konfigurisana nijedna opcija.",
    "tabs": {
      "search": "Pretraži",
      "url": "URL",
      "file": "Datoteka"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "Sloj je nepristupačan.",
      "loadError": "Dodaj podatke, nije moguće učitati:",
      "searchBox": {
        "search": "Pretraži",
        "placeholder": "Pretraži..."
      },
      "bboxOption": {
        "bbox": "Unutar mape"
      },
      "scopeOptions": {
        "anonymousContent": "Sadržaj",
        "myContent": "Moj sadržaj",
        "myOrganization": "Moja organizacija",
        "curated": "Održavano",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortiraj po:",
        "relevance": "Značaj",
        "title": "Naslov",
        "owner": "Vlasnik",
        "rating": "Ocena",
        "views": "Prikazi",
        "date": "Datum",
        "switchOrder": "Promeni"
      },
      "typeOptions": {
        "prompt": "Tip",
        "mapService": "Servis mape",
        "featureService": "Servis geoobjekata",
        "imageService": "Servis snimaka",
        "vectorTileService": "Servis tajla vektora",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nisu nađeni rezultati."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Prva",
        "previous": "<",
        "previousTip": "Prethodno",
        "next": ">",
        "nextTip": "Sledeće",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Stavka",
        "itemPlural": "Stavke"
      },
      "item": {
        "actions": {
          "add": "Dodaj",
          "close": "Zatvori",
          "remove": "Ukloni",
          "details": "Detalji",
          "done": "Završeno",
          "editName": "Izmeni ime"
        },
        "messages": {
          "adding": "Dodavanje...",
          "removing": "Uklanjanje...",
          "added": "Dodato",
          "addFailed": "Dodavanje nije uspelo",
          "unsupported": "Nije podržano"
        },
        "typeByOwnerPattern": "{type} od {owner}",
        "dateFormat": "MMMM d, gggg",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ocene“, „komentari“: „komentari“, „prikazi“: „prikazi"
        },
        "types": {
          "Map Service": "Servis mape",
          "Feature Service": "Servis geoobjekata",
          "Image Service": "Servis snimaka",
          "Vector Tile Service": "Servis tajla vektora",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tip",
      "url": "URL",
      "types": {
        "ArcGIS": "Veb servis ArcGIS Server-a",
        "WMS": "WMS OGC veb servis",
        "WMTS": "WMTS OGC veb servis",
        "WFS": "WFS OGC veb servis",
        "KML": "KML datoteka",
        "GeoRSS": "GeoRSS datoteka",
        "CSV": "CSV datoteka"
      },
      "samplesHint": "Probna URL adresa"
    },
    "addFromFile": {
      "intro": "Možete da otpustite ili da potražite jedan od sledećih tipova datoteka:",
      "types": {
        "Shapefile": "Shapefile (.zip, ZIP arhiva koja sadrži sve Shapefile datoteke)",
        "CSV": "CSV datoteka (.csv, sa adresom ili geografskom širinom/dužinom, uz razdvajanje zarezom, tačkom i zarezom ili tabulatorom)",
        "KML": "KML datoteka (.kml)",
        "GPX": "GPX datoteka (.gpx, GPS Exchange Format)",
        "GeoJSON": "GeoJSON datoteka (.geo, .json ili .geojson)"
      },
      "generalizeOn": "Generalizuj geoobjekte za veb prikaz",
      "dropOrBrowse": "Otpustite ili potražite",
      "browse": "Pregledaj",
      "invalidType": "Ovaj tip datoteke nije podržan.",
      "addingPattern": "{filename}: dodavanje...",
      "addFailedPattern": "{filename}: dodavanje nije uspelo",
      "featureCountPattern": "{filename}: {count} geoobjekata",
      "invalidTypePattern": "{filename}: ovaj tip nije podržan",
      "maxFeaturesAllowedPattern": "Dozvoljeno je najviše {count} geoobjekata",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Došlo je do problema.",
      "kmlProjectionMismatch": "Prostorna referenca mape i KML sloj se ne podudaraju, a konverziju nije moguće obaviti na klijentu."
    },
    "layerList": {
      "caption": "Slojevi",
      "noLayersAdded": "Nijedan sloj nije dodat.",
      "removeLayer": "Ukloni sloj",
      "back": "Nazad"
    }
  }
});