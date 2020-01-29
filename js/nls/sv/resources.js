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
    "error": "Det går inte att skapa kartan",
    "licenseError": {
      "message": "Ditt konto har ingen licens för att använda konfigurerbara appar som inte är tillgängliga för allmänheten. Be din organisations administratör att tilldela dig en användartyp som omfattar Essential Apps eller en tilläggslicens för Essential Apps.",
      "title": "Inte licensierad"
    }
  },
  "nav": {
    "close": "Stäng"
  },
  "basemap": {
    "title": "Baskartgalleri"
  },
  "visit": {
    "title": "Gå till",
    "visit": "Besöksattribut",
    "image": "Bildattribut",
    "addText": "Välj en symbol och klicka på kartan.",
    "next": "Nästa",
    "prev": "Föregående",
    "error": "Åtkomst nekad. Lagret kan inte att redigeras.",
    "edit": "Redigera anteckningar",
    "save": "Spara",
    "filter": "Filtrera efter besöksstatus",
    "all": "Alla",
    "record": "Post",
    "of": "av",
    "error1": "Ange ett giltigt numeriskt värde.",
    "layer": "Lagerväxling",
    "imageLayer": "Imagery",
    "visitLayer": "Gå till",
    "notesLayer": "Anmärkningar",
    "layerError": "Det finns inga lager i kartan.",
    "follow": "Följ upp",
    "okay": "OK",
    "noStat": "Ingen status",
    "left": "Vänster",
    "up": "Upp",
    "down": "Ned",
    "right": "Höger",
    "center": "Centrera",
    "press": "Tryck på",
    "scan": "Skanna bild",
    "scale": "Återställ skala",
    "view": "Återställ vyn",
    "search": "Söker...",
    "additionalFilter": "Filtrera efter"
  },
  "measurement": {
    "title": "Bildmätning",
    "error": "Mätfunktionerna stöds inte."
  },
  "about": {
    "title": "Om"
  },
  "addData": {
    "_widgetLabel": "Lägg till data",
    "noOptionsConfigured": "Inga alternativ har konfigurerats.",
    "tabs": {
      "search": "Sök",
      "url": "URL",
      "file": "Fil"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "Lagret är oåtkomligt.",
      "loadError": "AddData, kan inte läsa in:",
      "searchBox": {
        "search": "Sök",
        "placeholder": "Sök..."
      },
      "bboxOption": {
        "bbox": "Inom kartan"
      },
      "scopeOptions": {
        "anonymousContent": "Innehåll",
        "myContent": "Mitt innehåll",
        "myOrganization": "Min organisation",
        "curated": "Utvalt",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortera efter:",
        "relevance": "Relevans",
        "title": "Titel",
        "owner": "Ägare:",
        "rating": "Betyg",
        "views": "Vyer",
        "date": "Datum",
        "switchOrder": "Växla"
      },
      "typeOptions": {
        "prompt": "Typ",
        "mapService": "Karttjänst",
        "featureService": "Geoobjekttjänst",
        "imageService": "Bildtjänst",
        "vectorTileService": "Vektor-tiletjänst",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Inga resultat hittades."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Första",
        "previous": "<",
        "previousTip": "Föregående",
        "next": ">",
        "nextTip": "Nästa",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Objekt",
        "itemPlural": "Objekt"
      },
      "item": {
        "actions": {
          "add": "Lägg till",
          "close": "Stäng",
          "remove": "Ta bort",
          "details": "Detaljer",
          "done": "Klar",
          "editName": "Redigera namn"
        },
        "messages": {
          "adding": "Lägger till...",
          "removing": "Tar bort...",
          "added": "Tillagd",
          "addFailed": "Det gick inte att lägga till",
          "unsupported": "Stöds inte"
        },
        "typeByOwnerPattern": "{type} av {owner}",
        "dateFormat": "mmmm d, åååå",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "betyg\", \"kommentarer\": \"kommentarer\", \"visningar\": \"visningar"
        },
        "types": {
          "Map Service": "Karttjänst",
          "Feature Service": "Geoobjekttjänst",
          "Image Service": "Bildtjänst",
          "Vector Tile Service": "Vektor-tiletjänst",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Typ",
      "url": "URL",
      "types": {
        "ArcGIS": "En ArcGIS Server-webbtjänst",
        "WMS": "En WMS OGC-webbtjänst",
        "WMTS": "En WMTS OGC-webbtjänst",
        "WFS": "En WFS OGC-webbtjänst",
        "KML": "En KML-fil",
        "GeoRSS": "En GeoRSS-fil",
        "CSV": "En CSV-fil"
      },
      "samplesHint": "Exempel-URL:er"
    },
    "addFromFile": {
      "intro": "Du kan släppa eller bläddra efter någon av följande filtyper:",
      "types": {
        "Shapefile": "En shapefil (.zip, ZIP-arkiv som innehåller alla shapefiler)",
        "CSV": "En CSV-fil (.csv, med adress eller latitud och longitud, komma-, semikolon- eller tabbavgränsade)",
        "KML": "En KML-fil (.kml)",
        "GPX": "En GPX-fil (.gpx, GPS Exchange Format)",
        "GeoJSON": "En GeoJSON-fil (.geo.json eller .geojson)"
      },
      "generalizeOn": "Generalisera geoobjekt för webbvisning",
      "dropOrBrowse": "Släpp eller bläddra",
      "browse": "Bläddra",
      "invalidType": "Den här filtypen stöds inte.",
      "addingPattern": "{filename}: lägger till...",
      "addFailedPattern": "{filename}: det gick inte att lägga till",
      "featureCountPattern": "{filename}: {count} geoobjekt",
      "invalidTypePattern": "{filename}: den här typen stöds inte",
      "maxFeaturesAllowedPattern": "Högst {count} geoobjekt tillåts",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Det uppstod ett problem.",
      "kmlProjectionMismatch": "Den spatiala referensen av kartan och KML-lagret matchar inte och konvertering kan inte utföras på klienten."
    },
    "layerList": {
      "caption": "Lager",
      "noLayersAdded": "Inga lager har lagts till.",
      "removeLayer": "Ta bort lager",
      "back": "Backa"
    }
  }
});