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
    "error": "Δεν είναι δυνατή η δημιουργία χάρτη",
    "licenseError": {
      "message": "Ο λογαριασμός σας δεν διαθέτει άδεια χρήσης για Παραμετροποιήσιμες Εφαρμογές που δεν είναι δημόσιες. Ζητήστε από τον διαχειριστή του οργανισμού σας να σας εκχωρήσει τύπο χρήστη που να περιλαμβάνει Βασικές Εφαρμογές ή πρόσθετη άδεια χρήσης για Βασικές Εφαρμογές.",
      "title": "Χωρίς άδεια χρήσης"
    }
  },
  "nav": {
    "close": "Κλείσιμο"
  },
  "basemap": {
    "title": "Συλλογή υποβάθρων"
  },
  "visit": {
    "title": "Επίσκεψη",
    "visit": "Γνωρίσματα επίσκεψης",
    "image": "Γνωρίσματα εικόνας",
    "addText": "Επιλέξτε ένα σύμβολο και κάντε κλικ στον χάρτη.",
    "next": "Επόμενο",
    "prev": "Προηγούμενο",
    "error": "Δεν επιτρέπεται η πρόσβαση. Δεν είναι δυνατή η επεξεργασία του θεματικού επιπέδου.",
    "edit": "Επεξεργασία σημειώσεων",
    "save": "Αποθήκευση",
    "filter": "Φιλτράρισμα κατά κατάσταση επίσκεψης",
    "all": "Όλες",
    "record": "Εγγραφή",
    "of": "από",
    "error1": "Καταχωρίστε έγκυρη αριθμική τιμή.",
    "layer": "Εναλλαγή θεματικών επιπέδων",
    "imageLayer": "Δορυφορικές Εικόνες",
    "visitLayer": "Επίσκεψη",
    "notesLayer": "Σημειώσεις",
    "layerError": "Δεν υπάρχουν θεματικά επίπεδα στον χάρτη.",
    "follow": "Παρακολούθηση",
    "okay": "ΟΚ",
    "noStat": "Καμία κατάσταση",
    "left": "Αριστερά",
    "up": "Πάνω",
    "down": "Κάτω",
    "right": "Δεξιά",
    "center": "Κέντρο",
    "press": "Πατήστε",
    "scan": "Σάρωση εικόνας",
    "scale": "Επαναφορά κλίμακας",
    "view": "Επαναφορά προβολής",
    "search": "Αναζήτηση...",
    "additionalFilter": "Φιλτράρισμα κατά"
  },
  "measurement": {
    "title": "Μέτρηση εικόνας",
    "error": "Δεν υποστηρίζονται Δυνατότητες μέτρησης."
  },
  "about": {
    "title": "Πληροφορίες"
  },
  "addData": {
    "_widgetLabel": "Προσθήκη δεδομένων",
    "noOptionsConfigured": "Δεν υπάρχουν παραμετροποιημένες επιλογές.",
    "tabs": {
      "search": "Αναζήτηση",
      "url": "Διεύθυνση URL",
      "file": "Αρχείο"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Το θεματικό επίπεδο δεν είναι προσβάσιμο.",
      "loadError": "Προσθήκη δεδομένων. Δεν είναι δυνατή η φόρτωση:",
      "searchBox": {
        "search": "Αναζήτηση",
        "placeholder": "Αναζήτηση..."
      },
      "bboxOption": {
        "bbox": "Εντός του χάρτη"
      },
      "scopeOptions": {
        "anonymousContent": "Περιεχόμενο",
        "myContent": "Το περιεχόμενό μου",
        "myOrganization": "Ο οργανισμός μου",
        "curated": "Επιμελημένο",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Ταξινόμηση κατά:",
        "relevance": "Συνάφεια",
        "title": "Τίτλος",
        "owner": "Κάτοχος",
        "rating": "Αξιολόγηση",
        "views": "Προβολές",
        "date": "Ημερομηνία",
        "switchOrder": "Εναλλαγή"
      },
      "typeOptions": {
        "prompt": "Τύπος",
        "mapService": "Map Service",
        "featureService": "Feature service",
        "imageService": "Image service",
        "vectorTileService": "Vector tile service",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Δεν βρέθηκαν αποτελέσματα."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Πρώτο",
        "previous": "<",
        "previousTip": "Προηγούμενο",
        "next": ">",
        "nextTip": "Επόμενο",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Αντικείμενο",
        "itemPlural": "Αντικείμενα"
      },
      "item": {
        "actions": {
          "add": "Προσθήκη",
          "close": "Κλείσιμο",
          "remove": "Κατάργηση",
          "details": "Αναλυτικά στοιχεία",
          "done": "Τέλος",
          "editName": "Επεξεργασία ονόματος"
        },
        "messages": {
          "adding": "Προσθήκη...",
          "removing": "Κατάργηση...",
          "added": "Επιτυχής προσθήκη",
          "addFailed": "Ανεπιτυχής προσθήκη",
          "unsupported": "Μη υποστηριζόμενο"
        },
        "typeByOwnerPattern": "{type} ανά {owner}",
        "dateFormat": "MMMM d, yyyy (μήνας, ημέρα, έτος)",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "αξιολογήσεις\", \"σχόλια\": \"σχόλια\", \"απόψεις\": \"απόψεις"
        },
        "types": {
          "Map Service": "Map Service",
          "Feature Service": "Feature service",
          "Image Service": "Image service",
          "Vector Tile Service": "Vector tile service",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Τύπος",
      "url": "Διεύθυνση URL",
      "types": {
        "ArcGIS": "Ένα ArcGIS Server web service",
        "WMS": "Ένα WMS OGC web service",
        "WMTS": "Ένα WMTS OGC web service",
        "WFS": "Ένα WFS OGC web service",
        "KML": "Ένα αρχείο KML",
        "GeoRSS": "Ένα αρχείο GeoRSS",
        "CSV": "Ένα αρχείο CSV"
      },
      "samplesHint": "Δείγμα διεύθυνσης(-εων) URL"
    },
    "addFromFile": {
      "intro": "Μπορείτε να αποθέσετε ή να αναζητήσετε με περιήγηση έναν από τους εξής τύπους αρχείων:",
      "types": {
        "Shapefile": "Ένα Shapefile (.zip, αρχειοθήκη ZIP που περιέχει όλα τα αρχεία shapefile)",
        "CSV": "Ένα αρχείο CSV (.csv, με διεύθυνση ή γεωγραφικό πλάτος, γεωγραφικό μήκος και οριοθετημένο με κόμματα, ελληνικά ερωτηματικά ή στηλοθέτες)",
        "KML": "Ένα αρχείο KML (.kml)",
        "GPX": "Ένα αρχείο GPX (.gpx, με μορφότυπο GPS Exchange)",
        "GeoJSON": "Ένα αρχείο GeoJSON (.geo.json ή .geojson)"
      },
      "generalizeOn": "Γενίκευση στοιχείων για εμφάνιση στο web",
      "dropOrBrowse": "Απόθεση ή περιήγηση για αναζήτηση",
      "browse": "Περιήγηση",
      "invalidType": "Αυτός ο τύπος αρχείου δεν υποστηρίζεται.",
      "addingPattern": "{filename}: προσθήκη...",
      "addFailedPattern": "{filename}: ανεπιτυχής προσθήκη",
      "featureCountPattern": "{filename}: {count} στοιχείο(-α)",
      "invalidTypePattern": "{filename}: μη υποστηριζόμενος τύπος",
      "maxFeaturesAllowedPattern": "Επιτρέπονται έως και {count} στοιχεία.",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Παρουσιάστηκε κάποιο πρόβλημα.",
      "kmlProjectionMismatch": "Η χωρική αναφορά του χάρτη και του θεματικού επιπέδου KML δεν συμφωνούν και δεν είναι δυνατή η μετατροπή στο πρόγραμμα-πελάτη."
    },
    "layerList": {
      "caption": "Θεματικά επίπεδα",
      "noLayersAdded": "Δεν έχουν προστεθεί θεματικά επίπεδα.",
      "removeLayer": "Κατάργηση θεματικού επιπέδου",
      "back": "Πίσω"
    }
  }
});