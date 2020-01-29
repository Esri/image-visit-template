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
    "error": "לא ניתן ליצור מפה",
    "licenseError": {
      "message": "החשבון שלך אינו מורשה להשתמש באפליקציות הניתנות להגדרה שאינן ציבוריות. בקש ממנהל המערכת בארגון שלך להקצות לך סוג משתמש שכולל את Essential Apps או רישיון הרחבה ל-Essential Apps.",
      "title": "ללא רישיון"
    }
  },
  "nav": {
    "close": "סגור"
  },
  "basemap": {
    "title": "גלרית מפות בסיס"
  },
  "visit": {
    "title": "ביקור",
    "visit": "מאפייני ביקור",
    "image": "מאפייני תמונה",
    "addText": "בחר סמל ולחץ על המפה.",
    "next": "הבא",
    "prev": "הקודם",
    "error": "הגישה נדחתה. לא ניתן לערוך את השכבה.",
    "edit": "ערוך הערות",
    "save": "שמירה",
    "filter": "סנן לפי מצב ביקור",
    "all": "הכל",
    "record": "רשומה",
    "of": "מתוך",
    "error1": "הזן ערך מספרי חוקי.",
    "layer": "מעבר בין שכבות",
    "imageLayer": "תצלומי לוויין",
    "visitLayer": "ביקור",
    "notesLayer": "הערות",
    "layerError": "אין שכבות במפה.",
    "follow": "מעקב",
    "okay": "אישור",
    "noStat": "ללא סטטוס",
    "left": "שמאל",
    "up": "למעלה",
    "down": "למטה",
    "right": "ימין",
    "center": "מרכז",
    "press": "לחץ",
    "scan": "סרוק תמונה",
    "scale": "אפס קנה מידה",
    "view": "אפס תצוגה",
    "search": "מחפש...",
    "additionalFilter": "סנן לפי"
  },
  "measurement": {
    "title": "מדידת תמונות",
    "error": "אפשרויות מדידה אינן נתמכות."
  },
  "about": {
    "title": "אודות"
  },
  "addData": {
    "_widgetLabel": "הוסף מידע",
    "noOptionsConfigured": "לא הוגדרו אפשרויות.",
    "tabs": {
      "search": "חיפוש",
      "url": "כתובת URL",
      "file": "קובץ"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "השכבה לא נגישה.",
      "loadError": "AddData, לא ניתן לטעון:",
      "searchBox": {
        "search": "חיפוש",
        "placeholder": "חפש..."
      },
      "bboxOption": {
        "bbox": "בתוך מפה"
      },
      "scopeOptions": {
        "anonymousContent": "תכולה",
        "myContent": "התוכן שלי",
        "myOrganization": "הארגון שלי",
        "curated": "אצור",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "מיין לפי:",
        "relevance": "רלוונטיות",
        "title": "כותרת",
        "owner": "בעלים",
        "rating": "דירוג",
        "views": "תצוגות",
        "date": "תאריך",
        "switchOrder": "החלף"
      },
      "typeOptions": {
        "prompt": "סוג",
        "mapService": "שירות מפה",
        "featureService": "שירותי ישויות",
        "imageService": "שירות תמונה",
        "vectorTileService": "שירות אריחי וקטור",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "לא נמצאו תוצאות."
      },
      "paging": {
        "first": "<<",
        "firstTip": "ראשון",
        "previous": "<",
        "previousTip": "הקודם",
        "next": ">",
        "nextTip": "הבא",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "פריט",
        "itemPlural": "פריטים"
      },
      "item": {
        "actions": {
          "add": "הוספה",
          "close": "סגור",
          "remove": "הסרה",
          "details": "פרטים",
          "done": "סיום",
          "editName": "ערוך שם"
        },
        "messages": {
          "adding": "מוסיף...",
          "removing": "מסיר...",
          "added": "נוסף",
          "addFailed": "ההוספה נכשלה",
          "unsupported": "לא נתמך"
        },
        "typeByOwnerPattern": "{type} לפי {owner}",
        "dateFormat": "d, MMMM ,yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "שירות מפה",
          "Feature Service": "שירותי ישויות",
          "Image Service": "שירות תמונה",
          "Vector Tile Service": "שירות אריחי וקטור",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "סוג",
      "url": "כתובת URL",
      "types": {
        "ArcGIS": "שירות Web של שרת ArcGIS",
        "WMS": "שירות WMS OGC Web",
        "WMTS": "שירות WMTS OGC Web",
        "WFS": "שירות WFS OGC Web",
        "KML": "קובץ KML",
        "GeoRSS": "קובץ GeoRSS",
        "CSV": "קובץ CSV"
      },
      "samplesHint": "כתובת(ות) URL לדוגמה"
    },
    "addFromFile": {
      "intro": "באפשרותך לשחרר או לנווט לאחד מסוגי הקבצים הבאים:",
      "types": {
        "Shapefile": "Shapefile‏ (קובץ ZIP, ארכיון ZIP המכיל את כל קבצי ה-shapefile‏)",
        "CSV": "קובץ CSV (‏csv. בעלי כתובת או קו אורך, קו רוחב המופרדים באמצעות פסיק, נקודה פסיק או Tab)",
        "KML": "קובץ KML ‏(.kml)",
        "GPX": "קובץ GPX (‏gpx., פורמט GPS Exchange)",
        "GeoJSON": "קובץ GeoJSON (‏.geo.json או geojson)"
      },
      "generalizeOn": "הכלל ישויות לתצוגה ברשת",
      "dropOrBrowse": "שחרר או נווט",
      "browse": "עיין",
      "invalidType": "סוג הקובץ לא נתמך.",
      "addingPattern": "{filename}: מוסיף...",
      "addFailedPattern": "{filename}: ההוספה נכשלה",
      "featureCountPattern": "{filename}:‏ {count} ישויות",
      "invalidTypePattern": "{filename}: סוג זה אינו נתמך",
      "maxFeaturesAllowedPattern": "מספר מרבי של {count} ישויות מותר",
      "layerNamePattern": "{filename} -‏ {name}",
      "generalIssue": "אירעה בעיה.",
      "kmlProjectionMismatch": "הייחוס המרחבי של המפה ושכבת KML לא תואמים, ולא ניתן לבצע את ההמרה בהתקן הלקוח."
    },
    "layerList": {
      "caption": "שכבות",
      "noLayersAdded": "לא נוספו שכבות",
      "removeLayer": "הסר שכבה",
      "back": "חזור"
    }
  }
});