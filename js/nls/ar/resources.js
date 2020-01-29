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
    "error": "يتعذر إنشاء الخريطة",
    "licenseError": {
      "message": "حسابك غير مرخص لاستخدام التطبيقات القابلة للتكوين غير العامة. رجاءً اطلب من مسئولي المؤسسة تعيينك كنوع مستخدم يتضمن التطبيقات الأساسية أو ترخيص التطبيقات الأساسية المضافة.",
      "title": "غير مرخص"
    }
  },
  "nav": {
    "close": "إغلاق"
  },
  "basemap": {
    "title": "معرض خرائط الأساس"
  },
  "visit": {
    "title": "زيارة",
    "visit": "زيارة جداول البيانات",
    "image": "الجدول البيانات للصورة",
    "addText": "حدد رمزًا، ثم انقر على الخريطة.",
    "next": "التالي",
    "prev": "السابق",
    "error": "‏‏تم رفض الوصول. يتعذر تحرير الطبقة.",
    "edit": "تحرير الملاحظات",
    "save": "حفظ",
    "filter": "تصفية بواسطة حالة الزيارة",
    "all": "الكل",
    "record": "تسجيل",
    "of": "من",
    "error1": "يرجى إدخال قيمة رقمية صحيحة.",
    "layer": "تبديل الطبقة",
    "imageLayer": "صورة",
    "visitLayer": "زيارة",
    "notesLayer": "ملاحظات",
    "layerError": "لا توجد طبقات في الخريطة.",
    "follow": "متابعة",
    "okay": "موافق",
    "noStat": "لا توجد حالة",
    "left": "يسار",
    "up": "أعلى",
    "down": "أسفل",
    "right": "يمين",
    "center": "المركز",
    "press": "ضغط",
    "scan": "مسح الصورة",
    "scale": "إعادة تعيين المقياس",
    "view": "إعادة تعيين العرض",
    "search": "جارٍ البحث...",
    "additionalFilter": "تصفية بواسطة"
  },
  "measurement": {
    "title": "قياس الصورة",
    "error": "إمكانات القياس غير مدعومة."
  },
  "about": {
    "title": "نبذة عن"
  },
  "addData": {
    "_widgetLabel": "إضافة بيانات",
    "noOptionsConfigured": "لم يتم تكوين اختيارات.",
    "tabs": {
      "search": "بحث",
      "url": "عنوان URL",
      "file": "ملف"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "يتعذر الوصول إلى الطبقة.",
      "loadError": "AddData، يتعذر التحميل:",
      "searchBox": {
        "search": "بحث",
        "placeholder": "بحث..."
      },
      "bboxOption": {
        "bbox": "داخل الخريطة"
      },
      "scopeOptions": {
        "anonymousContent": "المحتوى",
        "myContent": "المحتوى",
        "myOrganization": "المؤسسة",
        "curated": "يحظى بعناية",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "فرز بواسطة:",
        "relevance": "صلة",
        "title": "العنوان",
        "owner": "المالك",
        "rating": "التقييم",
        "views": "المشاهدات",
        "date": "التاريخ",
        "switchOrder": "تبديل"
      },
      "typeOptions": {
        "prompt": "النوع",
        "mapService": "خدمة الخريطة",
        "featureService": "خدمة المعالم",
        "imageService": "خدمة الصورة",
        "vectorTileService": "خدمة تجانب البيانات الاتجاهية",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "لم يتم العثور على أي نتائج."
      },
      "paging": {
        "first": "<<",
        "firstTip": "الأول",
        "previous": "<",
        "previousTip": "السابق",
        "next": ">",
        "nextTip": "التالي",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "العنصر",
        "itemPlural": "العناصر"
      },
      "item": {
        "actions": {
          "add": "إضافة",
          "close": "إغلاق",
          "remove": "إزالة",
          "details": "التفاصيل",
          "done": "تم",
          "editName": "تحرير الاسم"
        },
        "messages": {
          "adding": "جار الإضافة...",
          "removing": "جارِ الإزالة...",
          "added": "تمت الإضافة",
          "addFailed": "فشلت الإضافة",
          "unsupported": "غير معتمد"
        },
        "typeByOwnerPattern": "{type} بواسطة {owner}",
        "dateFormat": "dd MMMM, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "خدمة الخريطة",
          "Feature Service": "خدمة المعالم",
          "Image Service": "خدمة الصورة",
          "Vector Tile Service": "خدمة تجانب البيانات الاتجاهية",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "النوع",
      "url": "عنوان URL",
      "types": {
        "ArcGIS": "خدمة ويب خادم ArcGIS",
        "WMS": "خدمة ويب WMS OGC",
        "WMTS": "خدمة ويب WMTS OGC",
        "WFS": "خدمة ويب WFS OGC",
        "KML": "ملف KML",
        "GeoRSS": "ملف GeoRSS",
        "CSV": "ملف CSV"
      },
      "samplesHint": "نماذج عناوين URL"
    },
    "addFromFile": {
      "intro": "يمكنك إفلات أو استعراض أحد أنواع الملفات التالية:",
      "types": {
        "Shapefile": "ملف الشكل (.zip، أرشيف ZIP الضي يحتوي على كل ملفات الشكل)",
        "CSV": "ملفات CSV (.csv، بعنوان أو دائرة عرض أو خط طول، مُحددة بفاصلة أو فاصلة منقوطة أو علامة تبويب)",
        "KML": "ملف KML (.kml)",
        "GPX": "ملف GPX (.gpx، تنسيق تبادل GPS)",
        "GeoJSON": "ملف GeoJSON (.geo.json أو .geojson)"
      },
      "generalizeOn": "تعميم المعالم لعرض الويب",
      "dropOrBrowse": "إفلات أو استعراض",
      "browse": "استعراض",
      "invalidType": "نوع الملف غير مدعوم.",
      "addingPattern": "{filename}: جارِ إضافة...",
      "addFailedPattern": "{filename}: فشلت الإضافة",
      "featureCountPattern": "{filename}: {count} معلم (معالم)",
      "invalidTypePattern": "{filename}: هذا النوع غير مدعوم",
      "maxFeaturesAllowedPattern": "يُسمح بحد أقصى {count} معالم",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "توجد مشكلة.",
      "kmlProjectionMismatch": "لا يتطابق الإسناد المكاني للخريطة وطبقة KML، ويتعذر اتمام التحويل للعميل."
    },
    "layerList": {
      "caption": "الطبقات",
      "noLayersAdded": "لم يتم إضافة طبقات.",
      "removeLayer": "إزالة الطبقة",
      "back": "الخلف"
    }
  }
});