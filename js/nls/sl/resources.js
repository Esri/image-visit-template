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
    "error": "Karte ni mogoče ustvariti",
    "licenseError": {
      "message": "Vaš račun ni licenciran za uporabo konfigurabilnih aplikacij, ki niso javne. Prosite administratorja v vaši organizaciji, da vam dodeli tip uporabnika, ki vsebuje aplikacije Essential Apps ali licenco za dodatne aplikacije Essential Apps.",
      "title": "Brez licence"
    }
  },
  "nav": {
    "close": "Zapri"
  },
  "basemap": {
    "title": "Galerija temeljnih kart"
  },
  "visit": {
    "title": "Obisk",
    "visit": "Obišči atribute",
    "image": "Atributi slike",
    "addText": "Izberite simbol in kliknite na karti.",
    "next": "Naslednji",
    "prev": "Prejšnji",
    "error": "Dostop zavrnjen. Sloja ni mogoče urejati.",
    "edit": "Uredi opombe",
    "save": "Shrani",
    "filter": "Filtrirajte po statusu obiska",
    "all": "Vsi",
    "record": "Zapis",
    "of": "od",
    "error1": "Vnesite veljavno številsko vrednost.",
    "layer": "Preklop slojev",
    "imageLayer": "Slikovje",
    "visitLayer": "Obisk",
    "notesLayer": "Opombe",
    "layerError": "Na karti ni prisotnih slojev.",
    "follow": "Spremljanje",
    "okay": "V redu",
    "noStat": "Brez statusa",
    "left": "Levo",
    "up": "Gor",
    "down": "Dol",
    "right": "Desno",
    "center": "Na sredino",
    "press": "Pritisnite",
    "scan": "Optično preberi sliko",
    "scale": "Ponastavi merilo",
    "view": "Ponastavi ogled",
    "search": "Iskanje...",
    "additionalFilter": "Filtriraj po"
  },
  "measurement": {
    "title": "Meritve slikovja",
    "error": "Metrične zmožnosti niso podprte."
  },
  "about": {
    "title": "Več o tem"
  },
  "addData": {
    "_widgetLabel": "Dodaj podatke",
    "noOptionsConfigured": "Nobene možnosti niso bile konfigurirane.",
    "tabs": {
      "search": "Išči",
      "url": "URL",
      "file": "Datoteka"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "Sloj je nedostopen.",
      "loadError": "Dodajte podatke, nalaganje ni mogoče:",
      "searchBox": {
        "search": "Išči",
        "placeholder": "Iskanje ..."
      },
      "bboxOption": {
        "bbox": "Znotraj karte"
      },
      "scopeOptions": {
        "anonymousContent": "Vsebina",
        "myContent": "Moji vsebini",
        "myOrganization": "Moja organizacija",
        "curated": "Kurirano",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Razvrsti po:",
        "relevance": "Ustreznost",
        "title": "ime",
        "owner": "Lastnik",
        "rating": "Ocena",
        "views": "Ogledi",
        "date": "Datum",
        "switchOrder": "Preklopi"
      },
      "typeOptions": {
        "prompt": "Vrsta",
        "mapService": "Kartna storitev",
        "featureService": "Geoobjektna storitev",
        "imageService": "Slikovna storitev",
        "vectorTileService": "Vektorska ploščična storitev",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Ni najdenih rezultatov."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Prvi",
        "previous": "<",
        "previousTip": "Prejšnji",
        "next": ">",
        "nextTip": "Naslednji",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Element",
        "itemPlural": "Elementi"
      },
      "item": {
        "actions": {
          "add": "Dodaj",
          "close": "Zapri",
          "remove": "Odstrani",
          "details": "Podrobnosti",
          "done": "Dokončano",
          "editName": "Uredi ime"
        },
        "messages": {
          "adding": "Dodajanje...",
          "removing": "Odstranjevanje...",
          "added": "Dodano",
          "addFailed": "Dodajanje ni uspelo",
          "unsupported": "Nepodprto"
        },
        "typeByOwnerPattern": "{type} od {owner}",
        "dateFormat": "d. MMMM. yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ocene«, »komentarji«: »komentarji«, »ogledi« : »ogledi"
        },
        "types": {
          "Map Service": "Kartna storitev",
          "Feature Service": "Geoobjektna storitev",
          "Image Service": "Slikovna storitev",
          "Vector Tile Service": "Vektorska ploščična storitev",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Vrsta",
      "url": "URL",
      "types": {
        "ArcGIS": "Spletna storitev ArcGIS Server",
        "WMS": "Spletna storitev WMS OGC",
        "WMTS": "Spletna storitev WMTS OGC",
        "WFS": "Spletna storitev WFS OGC",
        "KML": "Datoteka KML",
        "GeoRSS": "Datoteka GeoRSS",
        "CSV": "Datoteka CSV"
      },
      "samplesHint": "Vzorec URL"
    },
    "addFromFile": {
      "intro": "Odložite ali brskate lahko po enem od naslednjih tipov datotek:",
      "types": {
        "Shapefile": "Shapefile (.zip, ZIP arhiv, ki vključuje vse datoteke oblik)",
        "CSV": "Datoteka CSV (.csv, z naslovom ali geografsko širino, geografsko dolžino, ki so ločeni z vejico, podpičjem ali zavihkom)",
        "KML": "Datoteka KML (.kml)",
        "GPX": "Datoteka GPX (.gpx, izmenljiva oblika GPS)",
        "GeoJSON": "Datoteka GeoJSON (.geo.json ali .geojson)"
      },
      "generalizeOn": "Posploši geoobjekte za spletni prikaz",
      "dropOrBrowse": "Odloži ali brskaj",
      "browse": "Prebrskaj",
      "invalidType": "Ta tip datoteke ni podprt.",
      "addingPattern": "{filename}: dodajanje...",
      "addFailedPattern": "{filename}: dodajanje ni uspelo",
      "featureCountPattern": "{filename}: {count} geoobjektov",
      "invalidTypePattern": "{filename}: ta tip ni podprt",
      "maxFeaturesAllowedPattern": "Dovoljenih je maksimalno {count} geoobjektov",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Prišlo je do težave.",
      "kmlProjectionMismatch": "Koordinatni sistem karte in sloja KML se ne ujemata in konverzije ni mogoče opraviti na odjemalcu."
    },
    "layerList": {
      "caption": "Časovni razpon drsnice nastavi na trenutni časovni razpon karte",
      "noLayersAdded": "Sloji niso dodani.",
      "removeLayer": "Odstrani sloj",
      "back": "Zadaj"
    }
  }
});