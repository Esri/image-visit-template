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
    "error": "Неможливо створити карту",
    "licenseError": {
      "message": "Ваш обліковий запис не має ліцензії на використання настроюваних додатків, які не є публічними Попросіть адміністратора вашої організації призначити вам тип користувача, що включає основні додатки або додаткову ліцензію на основні додатки.",
      "title": "Немає ліцензії"
    }
  },
  "nav": {
    "close": "Закрити"
  },
  "basemap": {
    "title": "Галерея базових карт"
  },
  "visit": {
    "title": "Відвідати",
    "visit": "Відвідати атрибути",
    "image": "Атрибути зображення",
    "addText": "Виберіть символ та клацніть на карті.",
    "next": "Далі",
    "prev": "Назад",
    "error": "У доступі відмовлено. Шар неможливо редагувати.",
    "edit": "Редагувати примітки",
    "save": "Зберегти",
    "filter": "Фільтрувати за станом відвідування",
    "all": "Всі",
    "record": "Запис",
    "of": "з",
    "error1": "Введіть дійсне числове значення.",
    "layer": "Перемикач шару",
    "imageLayer": "Зображення",
    "visitLayer": "Відвідати",
    "notesLayer": "Примітки",
    "layerError": "У карті немає шарів.",
    "follow": "Контроль",
    "okay": "OK",
    "noStat": "Без статусу",
    "left": "Зліва",
    "up": "Вгору",
    "down": "Вниз",
    "right": "Справа",
    "center": "По центру",
    "press": "Натиснути",
    "scan": "Сканувати зображення",
    "scale": "Скинути масштаб",
    "view": "Скинути вид",
    "search": "Пошук...",
    "additionalFilter": "Фільтрувати за"
  },
  "measurement": {
    "title": "Вимірювання по зображенню",
    "error": "Можливості вимірювання не підтримуються."
  },
  "about": {
    "title": "Про програму"
  },
  "addData": {
    "_widgetLabel": "Додати дані",
    "noOptionsConfigured": "Опції не налаштовано.",
    "tabs": {
      "search": "Пошук",
      "url": "URL",
      "file": "Файл"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Шар недоступний.",
      "loadError": "Додати дані, неможливо завантажити:",
      "searchBox": {
        "search": "Пошук",
        "placeholder": "Пошук..."
      },
      "bboxOption": {
        "bbox": "В межах карти"
      },
      "scopeOptions": {
        "anonymousContent": "Вміст",
        "myContent": "Мій вміст",
        "myOrganization": "Моя організація",
        "curated": "Спеціально відібраний",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Сортувати за:",
        "relevance": "Відповідність",
        "title": "Заголовок",
        "owner": "Власник",
        "rating": "Рейтинг",
        "views": "Перегляди",
        "date": "Дата",
        "switchOrder": "Переключити"
      },
      "typeOptions": {
        "prompt": "Тип",
        "mapService": "Картографічний сервіс",
        "featureService": "Сервіс об'єктів",
        "imageService": "Сервіс зображень",
        "vectorTileService": "Сервіс векторних тайлів",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Результати не знайдено."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Перший",
        "previous": "<",
        "previousTip": "Попередній",
        "next": ">",
        "nextTip": "Наступний",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Елемент",
        "itemPlural": "Елементи"
      },
      "item": {
        "actions": {
          "add": "Додавання",
          "close": "Закрити",
          "remove": "Видалити",
          "details": "Детальна інформація",
          "done": "Завершено",
          "editName": "Редагувати назву"
        },
        "messages": {
          "adding": "Виконується додавання...",
          "removing": "Виконується вилучення...",
          "added": "Додано",
          "addFailed": "Додання не вдалося",
          "unsupported": "Не підтримується"
        },
        "typeByOwnerPattern": "{type} за {owner}",
        "dateFormat": "МММММ д, рррр",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "рейтинги», «коментарі»: «коментарі», «перегляди»: «перегляди"
        },
        "types": {
          "Map Service": "Картографічний сервіс",
          "Feature Service": "Сервіс об'єктів",
          "Image Service": "Сервіс зображень",
          "Vector Tile Service": "Сервіс векторних тайлів",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Тип",
      "url": "URL",
      "types": {
        "ArcGIS": "Веб-сервіс ArcGIS Server",
        "WMS": "Веб-сервіс WMS OGC",
        "WMTS": "Веб-сервіс WMTS OGC",
        "WFS": "Веб-сервіс WFS OGC",
        "KML": "Файл KML",
        "GeoRSS": "Файл GeoRSS",
        "CSV": "Файл CSV"
      },
      "samplesHint": "Приклад URL"
    },
    "addFromFile": {
      "intro": "Ви можете перетягнути та відпустити або переглянути один з наступних типів файлів:",
      "types": {
        "Shapefile": "Шейп-файл (.zip, ZIP-архів, який містить всі шейп-файли)",
        "CSV": "Файл CSV (.csv, з адресою або широтою/довготою, розділені комою, крапкою з комою або з роздільниками табуляції)",
        "KML": "Файл KML (.kml)",
        "GPX": "Файл GPX (.gpx, формат GPS Exchange)",
        "GeoJSON": "Файл GeoJSON (.geo.json або .geojson)"
      },
      "generalizeOn": "Генералізувати об'єкти для веб-відображення",
      "dropOrBrowse": "Перетягнути та відпустити або переглянути",
      "browse": "Переглянути",
      "invalidType": "Цей тип файлу не підтримується.",
      "addingPattern": "{filename}: додається...",
      "addFailedPattern": "{filename}: додання не вдалося",
      "featureCountPattern": "{filename}: {count} об'єкт(-ів)",
      "invalidTypePattern": "{filename}: цей тип не підтримується",
      "maxFeaturesAllowedPattern": "Дозволяється максимум {count} об'єктів",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Виникла проблема.",
      "kmlProjectionMismatch": "Просторова прив'язка карти та шару KML не збігається, і конвертацію неможливо виконати на клієнті."
    },
    "layerList": {
      "caption": "Шари",
      "noLayersAdded": "Шари не додано.",
      "removeLayer": "Вилучити шар",
      "back": "Позаду"
    }
  }
});