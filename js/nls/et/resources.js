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
    "error": "Kaarti ei saa luua",
    "licenseError": {
      "message": "Teie kontol puudub litsents konfigureeritavate rakenduste kasutamiseks, mis ei ole avalikud. Paluge oma organisatsiooni administraatoril määrata teile kasutajatüüp, mis sisaldab olulisi rakendusi või oluliste rakenduse lisalitsentsi.",
      "title": "Litsents puudub"
    }
  },
  "nav": {
    "close": "Sulge"
  },
  "basemap": {
    "title": "Aluskaardi galerii"
  },
  "visit": {
    "title": "Külastus",
    "visit": "Külastuse atribuudid",
    "image": "Pildi atribuudid",
    "addText": "Valige sümbol ja klõpsake kaardil.",
    "next": "Järgmine",
    "prev": "Eelmine",
    "error": "Juurdepääs on keelatud. Kihti ei saa muuta.",
    "edit": "Muuda märkusi",
    "save": "Salvesta",
    "filter": "Filtreeri külastuse oleku järgi",
    "all": "Kõik",
    "record": "Kirje",
    "of": "/",
    "error1": "Sisestage sobiv arvväärtus.",
    "layer": "Kihi vahetamine",
    "imageLayer": "Pildid",
    "visitLayer": "Külastus",
    "notesLayer": "Märkmed",
    "layerError": "Kaardil ei ole kihte.",
    "follow": "Jälgi",
    "okay": "OK",
    "noStat": "Staatus puudub",
    "left": "Vasak",
    "up": "Üles",
    "down": "Alla",
    "right": "Parem",
    "center": "Keskel",
    "press": "Snäppimise võimaldamiseks",
    "scan": "Skaneeri pilt",
    "scale": "Lähtesta mõõtkava",
    "view": "Lähtesta vaade",
    "search": "Otsin...",
    "additionalFilter": "Filtreeri:"
  },
  "measurement": {
    "title": "Pildi mõõtmine",
    "error": "Mõõtmise funktsioon ei ole toetatud."
  },
  "about": {
    "title": "Info"
  },
  "addData": {
    "_widgetLabel": "Lisa andmeid",
    "noOptionsConfigured": "Ühtki valikut pole konfigureeritud.",
    "tabs": {
      "search": "Otsing",
      "url": "URL",
      "file": "Fail"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "Kiht on ligipääsmatu.",
      "loadError": "Andmete lisamine, ei saa laadida:",
      "searchBox": {
        "search": "Otsing",
        "placeholder": "Otsi..."
      },
      "bboxOption": {
        "bbox": "Kaardi ulatuses"
      },
      "scopeOptions": {
        "anonymousContent": "Sisu",
        "myContent": "Minu sisu",
        "myOrganization": "Minu organisatsioon",
        "curated": "Hallatud",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortimine:",
        "relevance": "Asjakohasus",
        "title": "Pealkiri",
        "owner": "Omanik",
        "rating": "Hinnang",
        "views": "Vaatamisi",
        "date": "Kuupäev",
        "switchOrder": "Vaheta"
      },
      "typeOptions": {
        "prompt": "Tüüp",
        "mapService": "Kaarditeenus",
        "featureService": "Objektiteenus",
        "imageService": "Pilditeenus",
        "vectorTileService": "Vektorpildiüksuste teenus (Vector Tile Service)",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Tulemusi ei leitud."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Esimene",
        "previous": "<",
        "previousTip": "Eelmine",
        "next": ">",
        "nextTip": "Järgmine",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Sisuüksus",
        "itemPlural": "Sisuüksused"
      },
      "item": {
        "actions": {
          "add": "Lisa",
          "close": "Sulge",
          "remove": "Eemalda",
          "details": "Detailid",
          "done": "Valmis",
          "editName": "Muuda nime"
        },
        "messages": {
          "adding": "Lisamine...",
          "removing": "Eemaldamine...",
          "added": "Lisatud",
          "addFailed": "Lisamine ebaõnnestus",
          "unsupported": "Toetuseta"
        },
        "typeByOwnerPattern": "tüüp {type}, omanik {owner}",
        "dateFormat": "d. MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "hinnangud\", \"kommentaarid\": \"kommentaarid\", \"vaatamised\": \"vaatamised"
        },
        "types": {
          "Map Service": "Kaarditeenus",
          "Feature Service": "Objektiteenus",
          "Image Service": "Pilditeenus",
          "Vector Tile Service": "Vektorpildiüksuste teenus (Vector Tile Service)",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tüüp",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server veebiteenus",
        "WMS": "WMS OGC veebiteenus",
        "WMTS": "WMTS OGC veebiteenus",
        "WFS": "WFS OGC veebiteenus",
        "KML": "KML fail",
        "GeoRSS": "GeoRSS fail",
        "CSV": "CSV fail"
      },
      "samplesHint": "Näidis-URL(id)"
    },
    "addFromFile": {
      "intro": "Saate ühte järgmistest failitüüpidest lohistada või nendeni liikuda:",
      "types": {
        "Shapefile": "Shape fail (.zip, ZIP arhiiv, mis sisaldab kõiki Shape faili komponente)",
        "CSV": "CSV või TXT failid aadressi või laiuskraadi ja pikkuskraadiga (.csv, aadressi või laiuskraadiga, pikkuskraadiga ja koma-, semikoolon- või tabeleraldusega)",
        "KML": "KML fail (.kml)",
        "GPX": "GPX fail (.gpx, GPS Exchange format)",
        "GeoJSON": "GeoJSON fail (.geo.json või .geojson)"
      },
      "generalizeOn": "Üldista objekte veebis kuvamiseks",
      "dropOrBrowse": "Lohista või sirvi",
      "browse": "Sirvi",
      "invalidType": "Seda faili tüüpi ei toetata.",
      "addingPattern": "{filename}: lisamine...",
      "addFailedPattern": "{filename}: lisamine nurjus",
      "featureCountPattern": "{filename}: {count} objekt(i)",
      "invalidTypePattern": "{filename}: seda tüüpi ei toetata",
      "maxFeaturesAllowedPattern": "Lubatud on maksimaalselt {count} objekti",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Ilmnes probleem.",
      "kmlProjectionMismatch": "Kaardi ja KML-kihi koordinaatsüsteemid ei ühildu ja teisendamine pole kliendi rakenduses võimalik."
    },
    "layerList": {
      "caption": "Kihid",
      "noLayersAdded": "Ühtki kihti pole lisatud.",
      "removeLayer": "Eemalda kiht",
      "back": "Tagasi"
    }
  }
});