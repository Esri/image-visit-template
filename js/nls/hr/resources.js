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
    "error": "Nije moguće stvoriti kartu",
    "licenseError": {
      "message": "Vaš račun nije licenciran za upotrebu konfigurabilnih appova koji nisu javni. Obratite se administratoru svoje organizacije da vam dodijeli vrstu korisnika koja sadrži licencu za osnovne appove ili za dodatke za osnovne appove.",
      "title": "Nema licence"
    }
  },
  "nav": {
    "close": "Zatvori"
  },
  "basemap": {
    "title": "Kartografskih podloga"
  },
  "visit": {
    "title": "Posjeti",
    "visit": "Posjeti atribute",
    "image": "Atributi slika",
    "addText": "Odaberite simbol i kliknite na kartu.",
    "next": "Sljedeće",
    "prev": "Prethodno",
    "error": "Pristup odbijen. Slojevi se ne mogu uređivati.",
    "edit": "Uredi bilješke",
    "save": "Spremi",
    "filter": "Filtriraj po statusu posjeta",
    "all": "Svi",
    "record": "Zapis",
    "of": "od",
    "error1": "Unesite valjanu brojčanu vrijednost.",
    "layer": "Prebacivanje slojeva",
    "imageLayer": "Snimke",
    "visitLayer": "Posjeti",
    "notesLayer": "Bilješke",
    "layerError": "Nema prisutnih slojeva na karti.",
    "follow": "Naknadno praćenje",
    "okay": "U redu",
    "noStat": "Bez statusa",
    "left": "Lijevo",
    "up": "Gore",
    "down": "Dolje",
    "right": "Desno",
    "center": "Sredina",
    "press": "Pritisnite",
    "scan": "Skeniraj sliku",
    "scale": "Vrati izvorno mjerilo",
    "view": "Vrati izvorni prikaz",
    "search": "Traženje...",
    "additionalFilter": "Filtriraj prema"
  },
  "measurement": {
    "title": "Izmjere slike",
    "error": "Mogućnosti mjerenja nisu podržane."
  },
  "about": {
    "title": "Informacije"
  },
  "addData": {
    "_widgetLabel": "Dodaj podatke",
    "noOptionsConfigured": "Nema konfiguriranih opcija.",
    "tabs": {
      "search": "Potraži",
      "url": "URL",
      "file": "Datoteka"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Sloj nije dostupan.",
      "loadError": "Dodajte podatke, nije moguće učitati:",
      "searchBox": {
        "search": "Potraži",
        "placeholder": "Pretraži..."
      },
      "bboxOption": {
        "bbox": "Unutar karte"
      },
      "scopeOptions": {
        "anonymousContent": "Sadržaj",
        "myContent": "Moj sadržaj",
        "myOrganization": "Moja organizacija",
        "curated": "Nadzirano",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortiraj prema:",
        "relevance": "Važnost",
        "title": "Naziv",
        "owner": "Vlasnik",
        "rating": "Ocjena",
        "views": "Prikazi",
        "date": "Datum",
        "switchOrder": "Zamijeni"
      },
      "typeOptions": {
        "prompt": "Vrsta",
        "mapService": "Usluga karte",
        "featureService": "Usluga geoobjekata",
        "imageService": "Usluga slike",
        "vectorTileService": "Usluga vektorskih ploča",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nema rezultata."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Prvo",
        "previous": "<",
        "previousTip": "Prethodno",
        "next": ">",
        "nextTip": "Sljedeće",
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
          "details": "Pojedinosti",
          "done": "Gotovo",
          "editName": "Uredi naziv"
        },
        "messages": {
          "adding": "Dodavanje...",
          "removing": "Uklanjanje...",
          "added": "Dodano",
          "addFailed": "Dodavanje nije uspjelo",
          "unsupported": "Nepodržano"
        },
        "typeByOwnerPattern": "{type} od {owner}",
        "dateFormat": "d MMMM, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "„ocjene”, „komentari”: „komentari”, „prikazi”: „prikazi”"
        },
        "types": {
          "Map Service": "Usluga karte",
          "Feature Service": "Usluga geoobjekata",
          "Image Service": "Usluga slike",
          "Vector Tile Service": "Usluga vektorskih ploča",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Vrsta",
      "url": "URL",
      "types": {
        "ArcGIS": "Web-usluga poslužitelja za ArcGIS",
        "WMS": "Web-usluga WMS OGC",
        "WMTS": "Web-usluga WMTS OGC",
        "WFS": "WFS OGC web usluga",
        "KML": "KML datoteka",
        "GeoRSS": "GeoRSS datoteka",
        "CSV": "CSV datoteka"
      },
      "samplesHint": "Uzorak URL-ova"
    },
    "addFromFile": {
      "intro": "Možete ispustiti ili pretražiti jednu od sljedećih vrsta datoteka:",
      "types": {
        "Shapefile": "Shapefile (.zip, ZIP arhiva koja sadrži sve shapefile datoteke)",
        "CSV": "CSV datoteka (.csv, s adresom ili geografskom širinom, dužinom koji su odvojeni zarezom, točkom sa zarezom ili karticom)",
        "KML": "KML datoteka (.kml)",
        "GPX": "GPX datoteka (.gpx, format za izmjenu GPS-a)",
        "GeoJSON": "GeoJSON datoteka (.geo.json ili .geojson)"
      },
      "generalizeOn": "Generaliziraj geoobjekte za prikaz na webu",
      "dropOrBrowse": "Ispusti ili pretraži",
      "browse": "Pregledaj",
      "invalidType": "Vrsta datoteke nije podržana.",
      "addingPattern": "{filename}: dodavanje...",
      "addFailedPattern": "{filename}: dodavanje nije uspjelo",
      "featureCountPattern": "{filename}: {count} geoobjek(ti)",
      "invalidTypePattern": "{filename}: ova vrsta nije podržana",
      "maxFeaturesAllowedPattern": "Dopušteno je maksimalno {count} geoobjekata",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Došlo je do problema.",
      "kmlProjectionMismatch": "Prostorna referenca karte i KML sloj ne podudaraju se, a konverziju nije moguće izvršiti na klijentu."
    },
    "layerList": {
      "caption": "Slojevi",
      "noLayersAdded": "Slojevi nisu dodani.",
      "removeLayer": "Ukloni sloj",
      "back": "Natrag"
    }
  }
});