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
    "error": "Kan ikke opprette kart",
    "licenseError": {
      "message": "Kontoen din er ikke lisensiert til å bruke konfigurerbare apper som ikke er offentlige. Be administratoren for organisasjonen om å tilordne deg en brukertype som omfatter Essential Apps eller en tilleggslisens for Essential Apps.",
      "title": "Ikke lisensiert"
    }
  },
  "nav": {
    "close": "Lukk"
  },
  "basemap": {
    "title": "Bakgrunnskartgalleri"
  },
  "visit": {
    "title": "Besøk",
    "visit": "Besøk attributter",
    "image": "Bildeattributter",
    "addText": "Velg et symbol og klikk på kartet.",
    "next": "Neste",
    "prev": "Forrige",
    "error": "Ingen tilgang. Lag kan ikke redigeres.",
    "edit": "Rediger merknader",
    "save": "Lagre",
    "filter": "Filtrer etter besøksstatus",
    "all": "Alt",
    "record": "Post",
    "of": "av",
    "error1": "Angi en gyldig numerisk verdi.",
    "layer": "Veksle lag",
    "imageLayer": "Bilder",
    "visitLayer": "Besøk",
    "notesLayer": "Merknader",
    "layerError": "Det er ingen datalag i kartet.",
    "follow": "Følg opp",
    "okay": "OK",
    "noStat": "Ingen status",
    "left": "Venstre",
    "up": "Opp",
    "down": "Ned",
    "right": "Høyre",
    "center": "Senter",
    "press": "Trykk på",
    "scan": "Skann bilde",
    "scale": "Tilbakestill målestokk",
    "view": "Tilbakestill visning",
    "search": "Søker...",
    "additionalFilter": "Filtrer etter"
  },
  "measurement": {
    "title": "Bildemål",
    "error": "Oppmålingsegenskaper støttes ikke."
  },
  "about": {
    "title": "Om"
  },
  "addData": {
    "_widgetLabel": "Legg til data",
    "noOptionsConfigured": "Det er ingen konfigurerte alternativer.",
    "tabs": {
      "search": "Søk",
      "url": "URL",
      "file": "Fil"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} – {layerName}",
      "layerInaccessible": "Laget er ikke tilgjengelig.",
      "loadError": "AddData, kan ikke laste inn:",
      "searchBox": {
        "search": "Søk",
        "placeholder": "Søk..."
      },
      "bboxOption": {
        "bbox": "i kartet"
      },
      "scopeOptions": {
        "anonymousContent": "Innhold",
        "myContent": "Mitt innhold",
        "myOrganization": "Min organisasjon",
        "curated": "Behandlet",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sorter etter:",
        "relevance": "Relevans",
        "title": "Tittel",
        "owner": "Eier",
        "rating": "Vurdering",
        "views": "Visninger",
        "date": "Dato",
        "switchOrder": "Bytt"
      },
      "typeOptions": {
        "prompt": "Type",
        "mapService": "Karttjeneste",
        "featureService": "Geoobjekttjeneste",
        "imageService": "Bildetjeneste",
        "vectorTileService": "Vektorflistjeneste",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Fant ingen resultater."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Første",
        "previous": "<",
        "previousTip": "Forrige",
        "next": ">",
        "nextTip": "Neste",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Element",
        "itemPlural": "Elementer"
      },
      "item": {
        "actions": {
          "add": "Legg til",
          "close": "Lukk",
          "remove": "Fjern",
          "details": "Detaljer",
          "done": "Ferdig",
          "editName": "Rediger navn"
        },
        "messages": {
          "adding": "Legger til...",
          "removing": "Fjerner...",
          "added": "Lagt til",
          "addFailed": "Kan ikke legge til",
          "unsupported": "Ikke støttet"
        },
        "typeByOwnerPattern": "{type} av {owner}",
        "dateFormat": "MMMM d, åååå",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Karttjeneste",
          "Feature Service": "Geoobjekttjeneste",
          "Image Service": "Bildetjeneste",
          "Vector Tile Service": "Vektorflistjeneste",
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
        "WMS": "En WMS OGC-webtjeneste",
        "WMTS": "En WMTS OGC-webtjeneste",
        "WFS": "En WFS OGC-webtjeneste",
        "KML": "En KML-fil",
        "GeoRSS": "En GeoRSS-fil",
        "CSV": "En CSV-fil"
      },
      "samplesHint": "Eksempel-URL(-er)"
    },
    "addFromFile": {
      "intro": "Du kan slippe eller bla gjennom etter en av følgende filtyper:",
      "types": {
        "Shapefile": "Shapefil (*.zip, ZIP-arkiv som inneholder alle shapefiler)",
        "CSV": "CSV-filer (*.csv, med adresse eller bredde- og lengdegrad og atskilt med komma, semikolon eller tabulator)",
        "KML": "En KML-fil (.kml)",
        "GPX": "GPX-fil (*.gpx, GPS Exchange Format)",
        "GeoJSON": "GeoJSON-fil (*.geo.json eller *.geojson)"
      },
      "generalizeOn": "Generaliser geoobjekter for webvisning",
      "dropOrBrowse": "Slipp eller bla gjennom",
      "browse": "Bla gjennom",
      "invalidType": "Denne filtypen støttes ikke.",
      "addingPattern": "{filename}: legger til...",
      "addFailedPattern": "{filename}: kunne ikke legge til",
      "featureCountPattern": "{filename}: {count} geoobjekt(er)",
      "invalidTypePattern": "{filename}: denne typen støttes ikke",
      "maxFeaturesAllowedPattern": "Maksimum {count} geoobjekter tillates",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Det oppsto et problem.",
      "kmlProjectionMismatch": "Den romlige referansen for kartet og KML-laget samsvarer ikke, og konverteringen kan ikke utføres på klienten."
    },
    "layerList": {
      "caption": "Lag",
      "noLayersAdded": "Det er ikke lagt til lag.",
      "removeLayer": "Fjern lag",
      "back": "Tilbake"
    }
  }
});