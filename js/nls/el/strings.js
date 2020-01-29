define({
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
      "mapService": "Υπηρεσία χαρτών",
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
        "details": "Αναλυτικές πληροφορίες",
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
});