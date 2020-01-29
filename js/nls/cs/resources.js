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
    "error": "Nelze vytvořit mapu",
    "licenseError": {
      "message": "Váš účet nevlastní licenci k používání konfigurovatelných aplikací, které nejsou veřejné. Požádejte prosím správce své organizace, aby vám přidělil typ uživatele, jehož součástí jsou základní aplikace nebo doplňková licence základních aplikací.",
      "title": "Chybí licence"
    }
  },
  "nav": {
    "close": "Zavřít"
  },
  "basemap": {
    "title": "Galerie podkladových map"
  },
  "visit": {
    "title": "Návštěvy",
    "visit": "Atributy návštěv",
    "image": "Atributy snímku",
    "addText": "Vyberte symbol a klikněte na mapu.",
    "next": "Další",
    "prev": "Předchozí",
    "error": "Přístup byl odepřen. Vrstvu nelze upravit.",
    "edit": "Upravit poznámky",
    "save": "Uložit",
    "filter": "Filtrovat podle stavu návštěvy",
    "all": "Vše",
    "record": "Záznam",
    "of": "z",
    "error1": "Zadejte platnou číselnou hodnotu.",
    "layer": "Přepnutí vrstvy",
    "imageLayer": "Snímky",
    "visitLayer": "Návštěvy",
    "notesLayer": "Poznámky",
    "layerError": "V mapě nejsou k dispozici žádné vrstvy.",
    "follow": "Sledovat",
    "okay": "OK",
    "noStat": "Žádný stav",
    "left": "Levá",
    "up": "Nahoru",
    "down": "Dolů",
    "right": "Pravá",
    "center": "Střed",
    "press": "Stisknutím",
    "scan": "Skenovat snímek",
    "scale": "Obnovit měřítko",
    "view": "Obnovit zobrazení",
    "search": "Probíhá vyhledávání…",
    "additionalFilter": "Filtrovat podle"
  },
  "measurement": {
    "title": "Měření snímku",
    "error": "Funkcionalita měření není povolena."
  },
  "about": {
    "title": "Informace o aplikaci"
  },
  "addData": {
    "_widgetLabel": "Přidat data",
    "noOptionsConfigured": "Nebyly nakonfigurovány žádné možnosti.",
    "tabs": {
      "search": "Vyhledávání",
      "url": "URL",
      "file": "Soubor"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "Vrstva není přístupná.",
      "loadError": "AddData, nelze načíst:",
      "searchBox": {
        "search": "Vyhledávání",
        "placeholder": "Hledat…"
      },
      "bboxOption": {
        "bbox": "V mapě"
      },
      "scopeOptions": {
        "anonymousContent": "Obsah",
        "myContent": "Můj obsah",
        "myOrganization": "Moje organizace",
        "curated": "Stanovené",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Třídit podle:",
        "relevance": "Relevance",
        "title": "Název",
        "owner": "Vlastník",
        "rating": "Hodnocení",
        "views": "Zobrazení",
        "date": "Datum",
        "switchOrder": "Přepnout"
      },
      "typeOptions": {
        "prompt": "Typ",
        "mapService": "Mapová služba",
        "featureService": "Služba Feature Service",
        "imageService": "Služba Image Service",
        "vectorTileService": "Vektorová dlaždicová služba",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nebyly nalezeny žádné výsledky."
      },
      "paging": {
        "first": "<<",
        "firstTip": "První",
        "previous": "<",
        "previousTip": "Předchozí",
        "next": ">",
        "nextTip": "Další",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Položka",
        "itemPlural": "Položky"
      },
      "item": {
        "actions": {
          "add": "Součet",
          "close": "Zavřít",
          "remove": "Odstranit",
          "details": "Detaily",
          "done": "Hotovo",
          "editName": "Upravit název"
        },
        "messages": {
          "adding": "Přidávání…",
          "removing": "Odstraňování…",
          "added": "Přidáno",
          "addFailed": "Přidání se nezdařilo",
          "unsupported": "Nepodporováno"
        },
        "typeByOwnerPattern": "{type} od {owner}",
        "dateFormat": "MMMM d, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "hodnocení\", \"komentáře\": \"komentáře\", \"zobrazení\": \"zobrazení"
        },
        "types": {
          "Map Service": "Mapová služba",
          "Feature Service": "Služba Feature Service",
          "Image Service": "Služba Image Service",
          "Vector Tile Service": "Vektorová dlaždicová služba",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Typ",
      "url": "URL",
      "types": {
        "ArcGIS": "Webová služba ArcGIS Server",
        "WMS": "Webová služba WMS OGC",
        "WMTS": "Webová služba WMTS OGC",
        "WFS": "Webová služba WFS OGC",
        "KML": "Soubor KML",
        "GeoRSS": "Soubor GeoRSS",
        "CSV": "Soubor CSV"
      },
      "samplesHint": "Příklady adres URL"
    },
    "addFromFile": {
      "intro": "Přetažením nebo procházením můžete vybrat jeden z následujících typů soborů:",
      "types": {
        "Shapefile": "shapefile (.zip, archiv ZIP obsahující všechny soubory shapefile),",
        "CSV": "soubor CSV (.csv, s adresou nebo zeměpisnou šířkou a délkou oddělenými čárkami, středníky nebo tabulátory),",
        "KML": "Soubor KML (.kml)",
        "GPX": "soubor GPX (.gpx, formát GPX Exchange),",
        "GeoJSON": "soubor GeoJSON (.geo.json nebo .geojson)."
      },
      "generalizeOn": "Generalizovat prvky pro zobrazení na webu",
      "dropOrBrowse": "Přetáhnout nebo procházet",
      "browse": "Procházet",
      "invalidType": "Tento typ souboru není podporován.",
      "addingPattern": "{filename}: přidávání…",
      "addFailedPattern": "{filename}: Přidávání selhalo.",
      "featureCountPattern": "{filename}: {count} prvků",
      "invalidTypePattern": "{filename}: Tento typ není podporován.",
      "maxFeaturesAllowedPattern": "Je povoleno maximálně {count} prvků.",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Vyskytl se problém.",
      "kmlProjectionMismatch": "Souřadnicový systém mapy a vrstvy KML se neshodují a konverzi nelze u klienta provést."
    },
    "layerList": {
      "caption": "Vrstvy",
      "noLayersAdded": "Nebyly přidány žádné vrstvy.",
      "removeLayer": "Odebrat vrstvu",
      "back": "Zpět"
    }
  }
});