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
    "error": "Impossibile creare la mappa",
    "licenseError": {
      "message": "L’account non dispone della licenza per l’uso di app configurabili non pubbliche. È necessario richiedere all’amministratore dell'organizzazione l’assegnazione di un tipo di utente che includa le app essenziali o una licenza aggiuntiva per le app essenziali.",
      "title": "Non Licenziato"
    }
  },
  "nav": {
    "close": "Chiudere"
  },
  "basemap": {
    "title": "Galleria di basemap"
  },
  "visit": {
    "title": "Visita",
    "visit": "Attributi Visita",
    "image": "Attributi immagine",
    "addText": "Selezionare un simbolo e fare clic sulla mappa.",
    "next": "Successivo",
    "prev": "Precedente",
    "error": "Accesso negato. Impossibile modificare il layer.",
    "edit": "Modifica note",
    "save": "Salva",
    "filter": "Filtra per stato visita",
    "all": "Tutto",
    "record": "Record",
    "of": "di",
    "error1": "Immettere un valore numerico valido.",
    "layer": "Attivazione/disattivazione layer",
    "imageLayer": "Immagini",
    "visitLayer": "Visita",
    "notesLayer": "Note",
    "layerError": "Nessun layer presente nella mappa.",
    "follow": "Segui",
    "okay": "Ok",
    "noStat": "Nessuno stato",
    "left": "Sinistra",
    "up": "Su",
    "down": "Giù",
    "right": "Destra",
    "center": "Centrato",
    "press": "Stampa",
    "scan": "Scansiona immagine",
    "scale": "Reimposta scala",
    "view": "Reimposta vista",
    "search": "Ricerca in corso...",
    "additionalFilter": "Filtra per"
  },
  "measurement": {
    "title": "Misurazione immagine",
    "error": "Funzioni di misurazione non supportate."
  },
  "about": {
    "title": "Informazioni su"
  },
  "addData": {
    "_widgetLabel": "Aggiungi dati",
    "noOptionsConfigured": "Nessuna opzione configurata.",
    "tabs": {
      "search": "Cercare",
      "url": "URL",
      "file": "File"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Il layer non è accessibile.",
      "loadError": "AddData, impossibile caricare:",
      "searchBox": {
        "search": "Cercare",
        "placeholder": "Cerca..."
      },
      "bboxOption": {
        "bbox": "All'interno della mappa"
      },
      "scopeOptions": {
        "anonymousContent": "Contenuti",
        "myContent": "I Miei Contenuti",
        "myOrganization": "La Mia Organizzazione",
        "curated": "Curato",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Ordina per:",
        "relevance": "Rilevanza",
        "title": "Titolo",
        "owner": "Proprietario",
        "rating": "Valutazione",
        "views": "Visualizzazioni",
        "date": "Data",
        "switchOrder": "Cambia"
      },
      "typeOptions": {
        "prompt": "Tipo",
        "mapService": "Map Service",
        "featureService": "Feature Service",
        "imageService": "Image Service",
        "vectorTileService": "Servizio tile vettore",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nessun risultato trovato."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Primo",
        "previous": "<",
        "previousTip": "Precedente",
        "next": ">",
        "nextTip": "Successivo",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Elemento",
        "itemPlural": "Elementi"
      },
      "item": {
        "actions": {
          "add": "Aggiungi",
          "close": "Chiudere",
          "remove": "Rimuovi",
          "details": "Dettagli",
          "done": "Fine",
          "editName": "Modifica nome"
        },
        "messages": {
          "adding": "Aggiunta in corso...",
          "removing": "Rimozione in corso...",
          "added": "Aggiunto",
          "addFailed": "Impossibile aggiungere",
          "unsupported": "Non supportata"
        },
        "typeByOwnerPattern": "{type} per {owner}",
        "dateFormat": "d MMMM aaaa",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Map Service",
          "Feature Service": "Feature Service",
          "Image Service": "Image Service",
          "Vector Tile Service": "Servizio tile vettore",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tipo",
      "url": "URL",
      "types": {
        "ArcGIS": "Un servizio Web di ArcGIS Server",
        "WMS": "Un servizio Web OGC WMS",
        "WMTS": "Un servizio Web OGC WMTS",
        "WFS": "Un servizio Web OGC WFS",
        "KML": "Un file KML",
        "GeoRSS": "Un file GeoRSS",
        "CSV": "Un file CSV"
      },
      "samplesHint": "URL campione(i)"
    },
    "addFromFile": {
      "intro": "È possibile rilasciare o cercare uno dei seguenti tipi di file:",
      "types": {
        "Shapefile": "Uno shapefile (.zip, archivio ZIP contenente tutti i file shapefile)",
        "CSV": "Un file CSV (.csv, con indirizzo o latitudine, longitudine e virgola, punto e virgola o tabulazione)",
        "KML": "Un file KML (.kml)",
        "GPX": "Un file GPX (.gpx, GPS Exchange Format)",
        "GeoJSON": "Un file GeoJSON (.geo.json o .geojson)"
      },
      "generalizeOn": "Generalizza le feature per la visualizzazione Web",
      "dropOrBrowse": "Rilascia o cerca",
      "browse": "Sfoglia",
      "invalidType": "Questo tipo di file non è supportato.",
      "addingPattern": "{filename}: aggiunta in corso...",
      "addFailedPattern": "{filename}: aggiunta non riuscita",
      "featureCountPattern": "{filename}: {count} feature",
      "invalidTypePattern": "{filename}: questo tipo non è supportato",
      "maxFeaturesAllowedPattern": "È consentito un massimo di {count} feature",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Si è verificato un problema.",
      "kmlProjectionMismatch": "Il riferimento spaziale della mappa e del layer KML non corrispondono e la conversione non può essere eseguita sul client."
    },
    "layerList": {
      "caption": "Livelli",
      "noLayersAdded": "Nessun layer aggiunto.",
      "removeLayer": "Rimuovi layer",
      "back": "Indietro"
    }
  }
});