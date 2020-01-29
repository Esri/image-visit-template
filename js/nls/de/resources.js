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
    "error": "Karte kann nicht erstellt werden",
    "licenseError": {
      "message": "Ihr Konto ist nicht für die Verwendung von nicht öffentlichen konfigurierbaren Apps lizenziert. Bitten Sie den Administrator der Organisation, Ihnen einen Benutzertyp mit Essential Apps oder eine Add-On-Lizenz für Essential Apps zuzuweisen.",
      "title": "Nicht lizenziert"
    }
  },
  "nav": {
    "close": "Schließen"
  },
  "basemap": {
    "title": "Grundkarten-Galerie"
  },
  "visit": {
    "title": "Visit",
    "visit": "Visit-Attribute",
    "image": "Bildattribute",
    "addText": "Wählen Sie ein Symbol, und klicken Sie auf die Karte.",
    "next": "Nächstes",
    "prev": "Vorheriges",
    "error": "Zugriff verweigert Layer kann nicht bearbeitet werden.",
    "edit": "Notizen bearbeiten",
    "save": "Speichern",
    "filter": "Nach Visit-Status filtern",
    "all": "Alle",
    "record": "Datensatz",
    "of": "von",
    "error1": "Geben Sie einen gültigen Zahlenwert ein.",
    "layer": "Layer aktivieren/deaktivieren",
    "imageLayer": "Bilddaten",
    "visitLayer": "Visit",
    "notesLayer": "Hinweise",
    "layerError": "In der Karte sind keine Layer enthalten.",
    "follow": "Nachverfolgen",
    "okay": "OK",
    "noStat": "Kein Status",
    "left": "Links",
    "up": "Nach oben",
    "down": "Nach unten",
    "right": "Rechts",
    "center": "Zentriert",
    "press": "Drücken",
    "scan": "Bild scannen",
    "scale": "Maßstab zurücksetzen",
    "view": "Ansicht zurücksetzen",
    "search": "Wird gesucht...",
    "additionalFilter": "Filtern nach"
  },
  "measurement": {
    "title": "Bildmessung",
    "error": "Messfunktionen werden nicht unterstützt."
  },
  "about": {
    "title": "Info"
  },
  "addData": {
    "_widgetLabel": "Daten hinzufügen",
    "noOptionsConfigured": "Es wurden keine Optionen konfiguriert.",
    "tabs": {
      "search": "Suchen",
      "url": "URL",
      "file": "Datei"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Auf den Layer kann nicht zugegriffen werden.",
      "loadError": "AddData kann nicht geladen werden:",
      "searchBox": {
        "search": "Suchen",
        "placeholder": "Suchen..."
      },
      "bboxOption": {
        "bbox": "In der Karte"
      },
      "scopeOptions": {
        "anonymousContent": "Inhalt",
        "myContent": "Eigene Inhalte",
        "myOrganization": "Eigene Organisation",
        "curated": "Kuratierte Inhalte",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortieren:",
        "relevance": "Relevanz",
        "title": "Titel",
        "owner": "Eigentümer",
        "rating": "Bewertung",
        "views": "Aufrufe",
        "date": "Datum",
        "switchOrder": "Wechseln"
      },
      "typeOptions": {
        "prompt": "Typ",
        "mapService": "Kartenservice",
        "featureService": "Feature-Service",
        "imageService": "Image-Service",
        "vectorTileService": "Vektorkachelservice",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Es wurden keine Ergebnisse gefunden."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Erste(r) von",
        "previous": "<",
        "previousTip": "Vorherige",
        "next": ">",
        "nextTip": "Nächste",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Element",
        "itemPlural": "Elemente"
      },
      "item": {
        "actions": {
          "add": "Hinzufügen",
          "close": "Schließen",
          "remove": "Entfernen",
          "details": "Details",
          "done": "Fertig",
          "editName": "Name bearbeiten"
        },
        "messages": {
          "adding": "Hinzufügen...",
          "removing": "Wird entfernt...",
          "added": "Hinzugefügt",
          "addFailed": "Fehler beim Hinzufügen",
          "unsupported": "Nicht unterstützt"
        },
        "typeByOwnerPattern": "{type} von {owner}",
        "dateFormat": "d. MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Kartenservice",
          "Feature Service": "Feature-Service",
          "Image Service": "Image-Service",
          "Vector Tile Service": "Vektorkachelservice",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Typ",
      "url": "URL",
      "types": {
        "ArcGIS": "Einen ArcGIS-Server-Web-Service",
        "WMS": "Einen WMS-OGC-Web-Service",
        "WMTS": "Einen WMTS-OGC-Web-Service",
        "WFS": "Einen WFS-OGC-Web-Service",
        "KML": "Eine KML-Datei",
        "GeoRSS": "Eine GeoRSS-Datei",
        "CSV": "Eine CSV-Datei"
      },
      "samplesHint": "Beispiel-URL(s)"
    },
    "addFromFile": {
      "intro": "Sie können nach einem der folgenden Dateitypen suchen oder diesen durch Drag & Drop hinzufügen:",
      "types": {
        "Shapefile": "Ein Shapefile (ZIP-Archiv mit allen Shapefile-Dateien)",
        "CSV": "Eine CSV-Datei (CSV-Datei mit Adressen oder Breitengrad, Längengrad und durch Komma, Semikolon oder Tabulatoren getrennt)",
        "KML": "Eine KML-Datei (.kml)",
        "GPX": "Eine GPX-Datei (GPX-Datei, GPS Exchange Format)",
        "GeoJSON": "Eine GeoJSON-Datei (Dateierweiterung GEO.JSON oder GEOJSON)"
      },
      "generalizeOn": "Features für Webanzeige generalisieren",
      "dropOrBrowse": "DRAG & DROP ODER SUCHEN",
      "browse": "Durchsuchen",
      "invalidType": "Dieser Dateityp wird nicht unterstützt.",
      "addingPattern": "{filename}: wird hinzugefügt...",
      "addFailedPattern": "{filename}: Fehler beim Hinzufügen",
      "featureCountPattern": "{filename}: {count} Feature(s)",
      "invalidTypePattern": "{filename}: dieser Typ wird nicht unterstützt",
      "maxFeaturesAllowedPattern": "Maximalwert von {count} Features zulässig",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Es ist ein Fehler aufgetreten.",
      "kmlProjectionMismatch": "Der Raumbezug der Karte und der des KML-Layers stimmen nicht überein, und die Konvertierung kann auf dem Client nicht durchgeführt werden."
    },
    "layerList": {
      "caption": "Layer",
      "noLayersAdded": "Es wurden keine Layer hinzugefügt.",
      "removeLayer": "Layer entfernen",
      "back": "Zurück"
    }
  }
});