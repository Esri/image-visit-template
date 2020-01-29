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
    "error": "Impossible de créer la carte",
    "licenseError": {
      "message": "La licence de votre compte ne permet pas d’utiliser des applications configurables non publiques. Demandez à l’administrateur de votre organisation de vous attribuer un type d’utilisateur qui inclut une licence Essential Apps ou une licence Essential Apps additionnelle.",
      "title": "Pas de licence"
    }
  },
  "nav": {
    "close": "Fermer"
  },
  "basemap": {
    "title": "Bibliothèque de fonds de carte"
  },
  "visit": {
    "title": "Visiter",
    "visit": "Attributs de visite",
    "image": "Attributs d’image",
    "addText": "Sélectionnez un symbole et cliquez sur la carte.",
    "next": "Suivant",
    "prev": "Précédent",
    "error": "Accès refusé. La couche ne peut pas être modifiée.",
    "edit": "Modifier les notes",
    "save": "Enregistrer",
    "filter": "Filtrer par statut de visite",
    "all": "Tout",
    "record": "Enregistrement",
    "of": "de",
    "error1": "Saisissez une valeur numérique valide.",
    "layer": "Activer/Désactiver les couches",
    "imageLayer": "Imagerie",
    "visitLayer": "Visiter",
    "notesLayer": "Remarques",
    "layerError": "Aucune couche présente dans la carte.",
    "follow": "Suivi",
    "okay": "OK",
    "noStat": "Aucun statut",
    "left": "Gauche",
    "up": "+",
    "down": "-",
    "right": "Droite",
    "center": "Centre",
    "press": "Appuyez sur",
    "scan": "Numériser l’image",
    "scale": "Réinitialiser l'échelle",
    "view": "Réinitialiser la vue",
    "search": "Recherche...",
    "additionalFilter": "Filtrer par"
  },
  "measurement": {
    "title": "Mesure de l'image",
    "error": "Fonctionnalités de mesure non prises en charge."
  },
  "about": {
    "title": "A propos"
  },
  "addData": {
    "_widgetLabel": "Ajouter des données",
    "noOptionsConfigured": "Aucune option n'a été configurée.",
    "tabs": {
      "search": "Rechercher",
      "url": "URL",
      "file": "Fichier"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "La couche est inaccessible.",
      "loadError": "AddData, chargement impossible :",
      "searchBox": {
        "search": "Rechercher",
        "placeholder": "Rechercher..."
      },
      "bboxOption": {
        "bbox": "Au sein de la carte"
      },
      "scopeOptions": {
        "anonymousContent": "Contenu",
        "myContent": "Mon contenu",
        "myOrganization": "Mon organisation",
        "curated": "Organisé",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Trier par :",
        "relevance": "Pertinence",
        "title": "Titre",
        "owner": "Propriétaire",
        "rating": "Évaluation",
        "views": "Vues",
        "date": "Date",
        "switchOrder": "Changement"
      },
      "typeOptions": {
        "prompt": "Type",
        "mapService": "Service de carte",
        "featureService": "Service d’entités",
        "imageService": "Service d’imagerie",
        "vectorTileService": "Services de tuiles vectorielles",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Aucun résultat n'a été trouvé."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Premier",
        "previous": "<",
        "previousTip": "Précédent",
        "next": ">",
        "nextTip": "Suivant",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Élément",
        "itemPlural": "Éléments"
      },
      "item": {
        "actions": {
          "add": "Ajouter",
          "close": "Fermer",
          "remove": "Retirer",
          "details": "Détails",
          "done": "Terminé",
          "editName": "Mettre à jour le nom"
        },
        "messages": {
          "adding": "Ajout en cours...",
          "removing": "Suppression...",
          "added": "Ajouté",
          "addFailed": "Échec de l'ajout",
          "unsupported": "Non pris en charge"
        },
        "typeByOwnerPattern": "{type} par {owner}",
        "dateFormat": "d MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Service de carte",
          "Feature Service": "Service d’entités",
          "Image Service": "Service d’imagerie",
          "Vector Tile Service": "Services de tuiles vectorielles",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Type",
      "url": "URL",
      "types": {
        "ArcGIS": "Un service Web ArcGIS Server",
        "WMS": "Un service Web OGC WMS",
        "WMTS": "Un service Web OGC WMTS",
        "WFS": "Un service Web OGC WFS",
        "KML": "Un fichier KML",
        "GeoRSS": "Un fichier GeoRSS",
        "CSV": "Un fichier CSV"
      },
      "samplesHint": "URL(s) d'exemple"
    },
    "addFromFile": {
      "intro": "Vous pouvez déposer ou parcourir l'un des types de fichiers suivants :",
      "types": {
        "Shapefile": "Un fichier de formes (.zip, archive ZIP contenant tous les fichiers de formes)",
        "CSV": "Un fichier CSV (.csv, avec adresse ou latitude, longitude et valeurs séparées par des virgules, des points-virgules ou des tabulations)",
        "KML": "Un fichier KML (.kml)",
        "GPX": "Un fichier GPX (.gpx, format d'échange GPS)",
        "GeoJSON": "Un fichier GeoJSON (.geo.json ou .geojson)"
      },
      "generalizeOn": "Généraliser les entités pour l'affichage web",
      "dropOrBrowse": "Déposer ou parcourir",
      "browse": "Parcourir",
      "invalidType": "Ce type de fichier n'est pas pris en charge.",
      "addingPattern": "{filename} : en cours d'ajout...",
      "addFailedPattern": "{filename} : échec d'ajout",
      "featureCountPattern": "{filename} : {count} entité(s)",
      "invalidTypePattern": "{filename} : ce type n'est pas pris en charge",
      "maxFeaturesAllowedPattern": "Un maximum de {count} entités est autorisé",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Un problème s’est produit.",
      "kmlProjectionMismatch": "La référence spatiale de la carte et la couche KML ne correspondent pas et la conversion ne peut pas s’effectuer sur le client."
    },
    "layerList": {
      "caption": "Couches",
      "noLayersAdded": "Aucune couche n'a été ajoutée.",
      "removeLayer": "Supprimer la couche",
      "back": "Précédent"
    }
  }
});