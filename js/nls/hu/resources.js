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
    "error": "Nem sikerült létrehozni a térképet",
    "licenseError": {
      "message": "Az Ön fiókjának licence nem terjed ki a nem nyilvános konfigurálható alkalmazásokra. Igényelje a szervezete adminisztrátorától, hogy rendeljen Önhöz olyan felhasználótípust, amely tartalmazza az alapvető alkalmazásokat, vagy egy kiegészítő alapvető alkalmazásokra vonatkozó licencet.",
      "title": "Nincs licence"
    }
  },
  "nav": {
    "close": "Bezárás"
  },
  "basemap": {
    "title": "Alaptérkép-galéria"
  },
  "visit": {
    "title": "Látogatás",
    "visit": "Látogatási attribútumok",
    "image": "Képattribútumok",
    "addText": "Válasszon egy szimbólumot, és kattintson a térképre.",
    "next": "Következő",
    "prev": "Előző",
    "error": "A hozzáférés megtagadva. A réteg nem szerkeszthető.",
    "edit": "Megjegyzések szerkesztése",
    "save": "Mentés",
    "filter": "Szűrés látogatási státusz alapján",
    "all": "Mind",
    "record": "Rekord",
    "of": "/",
    "error1": "Érvényes numerikus értéket adjon meg",
    "layer": "Réteg váltása",
    "imageLayer": "Távérzékelt felvétel",
    "visitLayer": "Látogatás",
    "notesLayer": "Megjegyzések",
    "layerError": "Nincsenek rétegek a térképen.",
    "follow": "Nyomon követés",
    "okay": "Rendben",
    "noStat": "Nem áll rendelkezésre státusz",
    "left": "Bal",
    "up": "Fel",
    "down": "Le",
    "right": "Jobb",
    "center": "Középen",
    "press": "Nyomja meg a",
    "scan": "Kép beolvasása",
    "scale": "Méretarány alaphelyzetbe állítása",
    "view": "Nézet alaphelyzetbe állítása",
    "search": "Keresés...",
    "additionalFilter": "Szűrési szempont"
  },
  "measurement": {
    "title": "Képmérés",
    "error": "A mérési lehetőségek nem támogatottak."
  },
  "about": {
    "title": "További információk"
  },
  "addData": {
    "_widgetLabel": "Adatok hozzáadása",
    "noOptionsConfigured": "Nincsenek beállítások konfigurálva.",
    "tabs": {
      "search": "Keresés",
      "url": "URL",
      "file": "Fájl"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "A réteg nem érhető el.",
      "loadError": "AddData, a betöltés nem sikerült:",
      "searchBox": {
        "search": "Keresés",
        "placeholder": "Keresés..."
      },
      "bboxOption": {
        "bbox": "A térképen belül"
      },
      "scopeOptions": {
        "anonymousContent": "Tartalom",
        "myContent": "Saját Tartalom",
        "myOrganization": "Saját szervezet",
        "curated": "Összetett",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Rendezési szempont:",
        "relevance": "Fontosság",
        "title": "Beosztás",
        "owner": "Tulajdonos",
        "rating": "Értékelés",
        "views": "Megtekintések",
        "date": "Dátum",
        "switchOrder": "Kapcsoló"
      },
      "typeOptions": {
        "prompt": "Típus",
        "mapService": "Térképi szolgáltatás",
        "featureService": "Vektoros szolgáltatás",
        "imageService": "Raszteres szolgáltatás",
        "vectorTileService": "Vektoros csempeszolgáltatás",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nincs találat."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Első",
        "previous": "<",
        "previousTip": "Előző",
        "next": ">",
        "nextTip": "Tovább",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Elem",
        "itemPlural": "Elemek"
      },
      "item": {
        "actions": {
          "add": "Hozzáadás",
          "close": "Bezárás",
          "remove": "Eltávolítás",
          "details": "Részletek",
          "done": "Kész",
          "editName": "Név szerkesztése"
        },
        "messages": {
          "adding": "Hozzáadás...",
          "removing": "Eltávolítás…",
          "added": "Hozzáadva",
          "addFailed": "Sikertelen hozzáadás",
          "unsupported": "Nem támogatott"
        },
        "typeByOwnerPattern": "{type} / {owner}",
        "dateFormat": "HHHH n, éééé",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "értékelések\", \"hozzászólások\": \"hozzászólások\", \"megtekintések\": \"megtekintések"
        },
        "types": {
          "Map Service": "Térképi szolgáltatás",
          "Feature Service": "Vektoros szolgáltatás",
          "Image Service": "Raszteres szolgáltatás",
          "Vector Tile Service": "Vektoros csempeszolgáltatás",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Típus",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server webes szolgáltatás",
        "WMS": "WMS OGC webes szolgáltatás",
        "WMTS": "WMTS OGC webes szolgáltatás",
        "WFS": "WFS OGC webes szolgáltatás",
        "KML": "KML fájl",
        "GeoRSS": "GeoRSS fájl",
        "CSV": "CSV fájl"
      },
      "samplesHint": "Minta URL-cím(ek)"
    },
    "addFromFile": {
      "intro": "A következő fájltípusokat ejtheti ide, illetve keresheti tallózással:",
      "types": {
        "Shapefile": "Shapefile (.zip, az összes shapefile fájlt tartalmazó ZIP archívum)",
        "CSV": "CSV fájl (.csv, címmel vagy szélességgel, hosszúsággal; vesszővel, pontosvesszővel vagy tabulátorral tagolt)",
        "KML": "KML fájl (.kml)",
        "GPX": "GPX fájl (.gpx, GPS Exchange Format)",
        "GeoJSON": "GeoJSON fájl (.geo.json vagy .geojson)"
      },
      "generalizeOn": "Vektoros elemek generalizálása webes megjelenítéshez",
      "dropOrBrowse": "Ejtés vagy tallózás",
      "browse": "Tallózás",
      "invalidType": "Ez a fájltípus nem támogatott.",
      "addingPattern": "{filename}: hozzáadás...",
      "addFailedPattern": "{filename}: sikertelen hozzáadás",
      "featureCountPattern": "{filename}: {count} vektoros elem",
      "invalidTypePattern": "{filename}: ez a típus nem támogatott",
      "maxFeaturesAllowedPattern": "Legfeljebb {count} vektoros elem megengedett",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Probléma fordult elő.",
      "kmlProjectionMismatch": "A térkép és a KML-réteg koordináta-rendszere nem egyezik, és nem lehet végrehajtani a konverziót a kliensen."
    },
    "layerList": {
      "caption": "Rétegek",
      "noLayersAdded": "Egyetlen réteg sem lett hozzáadva.",
      "removeLayer": "Réteg eltávolítása",
      "back": "Vissza"
    }
  }
});