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
    "error": "Не удалось создать карту",
    "licenseError": {
      "message": "Ваша учетная запись не лицензирована на использование не публичных Настраиваемых приложений. Обратитесь к администратору организации, чтобы получить тип пользователя, в который входит Essential Apps или лицензия дополнительного модуля Essential Apps.",
      "title": "Не лицензировано"
    }
  },
  "nav": {
    "close": "Закрыть"
  },
  "basemap": {
    "title": "Галерея базовых карт"
  },
  "visit": {
    "title": "Визит",
    "visit": "Атрибуты визита",
    "image": "Атрибуты изображения",
    "addText": "Выберите символ и щелкните на карте.",
    "next": "Следующая",
    "prev": "Предыдущая",
    "error": "Нет доступа. Слой редактировать нельзя.",
    "edit": "Редактировать примечания",
    "save": "Сохранить",
    "filter": "Фильтр по состоянию визита",
    "all": "Все",
    "record": "Запись",
    "of": "из",
    "error1": "Введите допустимое числовое значение.",
    "layer": "Переключатель слоев",
    "imageLayer": "Спутниковый снимок",
    "visitLayer": "Визит",
    "notesLayer": "Примечания",
    "layerError": "Слои на карте не представлены.",
    "follow": "Следовать",
    "okay": "ОК",
    "noStat": "Нет статуса",
    "left": "Слева",
    "up": "Вверх",
    "down": "Вниз",
    "right": "Справа",
    "center": "Центр",
    "press": "Пресса",
    "scan": "Сканировать изображение",
    "scale": "Сбросить масштаб",
    "view": "Сбросить Вид",
    "search": "Поиск...",
    "additionalFilter": "Фильтр по"
  },
  "measurement": {
    "title": "Измерение по изображению",
    "error": "Возможности измерений не поддерживаются."
  },
  "about": {
    "title": "Описание"
  },
  "addData": {
    "_widgetLabel": "Добавить данные",
    "noOptionsConfigured": "Отсутствуют настроенные опции",
    "tabs": {
      "search": "Поиск",
      "url": "URL",
      "file": "Файл"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Слой не доступен.",
      "loadError": "AddData, не удалось загрузить:",
      "searchBox": {
        "search": "Поиск",
        "placeholder": "Поиск..."
      },
      "bboxOption": {
        "bbox": "В карте"
      },
      "scopeOptions": {
        "anonymousContent": "Содержание",
        "myContent": "Мои ресурсы",
        "myOrganization": "Моя организация",
        "curated": "Куратор",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Сортировать по:",
        "relevance": "Актуальность",
        "title": "Название",
        "owner": "Владелец",
        "rating": "Рейтинг",
        "views": "Виды",
        "date": "Дата",
        "switchOrder": "Переключить"
      },
      "typeOptions": {
        "prompt": "Тип",
        "mapService": "Картографический сервис",
        "featureService": "Сервис пространственных объектов",
        "imageService": "Сервис изображений",
        "vectorTileService": "Сервис векторных листов",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Результаты не найдены."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Первое",
        "previous": "<",
        "previousTip": "Предыдущая",
        "next": ">",
        "nextTip": "Следующая",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Элемент",
        "itemPlural": "Элементы"
      },
      "item": {
        "actions": {
          "add": "Добавление",
          "close": "Закрыть",
          "remove": "Убрать",
          "details": "Подробная информация",
          "done": "Готово",
          "editName": "Редактировать имя"
        },
        "messages": {
          "adding": "Добавление...",
          "removing": "Удаление...",
          "added": "Добавлено",
          "addFailed": "Не удалось добавить",
          "unsupported": "Не поддерживается"
        },
        "typeByOwnerPattern": "{type} принадлежит {owner}",
        "dateFormat": "ММММ д, гггг",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Картографический сервис",
          "Feature Service": "Сервис пространственных объектов",
          "Image Service": "Сервис изображений",
          "Vector Tile Service": "Сервис векторных листов",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Тип",
      "url": "URL",
      "types": {
        "ArcGIS": "Веб-сервис ArcGIS Server",
        "WMS": "Веб-сервис WMS OGC",
        "WMTS": "Веб-сервис WMTS OGC",
        "WFS": "Веб-сервис WFS OGC",
        "KML": "Файл KML",
        "GeoRSS": "Файл GeoRSS",
        "CSV": "Файл CSV"
      },
      "samplesHint": "URL образца"
    },
    "addFromFile": {
      "intro": "Вы можете перетащить или просмотреть один из следующих типов:",
      "types": {
        "Shapefile": "Шейп-файл (.zip, ZIP-архив, содержащий все файлы шейп-файла)",
        "CSV": "Файл CSV (.csv, с адресами или координатами широты и долготы (с разделителями: запятой, точкой с запятой или табуляцией))",
        "KML": "Файл KML (.kml)",
        "GPX": "Файл GPX (.gpx, обменный формат GPS)",
        "GeoJSON": "Файл GeoJSON (.geo.json или .geojson)"
      },
      "generalizeOn": "Генерализация объектов для веб-отображения",
      "dropOrBrowse": "Перетаскивание или просмотр",
      "browse": "Просмотр",
      "invalidType": "Этот тип файлов не поддерживается.",
      "addingPattern": "{filename}: добавление...",
      "addFailedPattern": "{filename}: добавление не удалось",
      "featureCountPattern": "{filename}: {count} объектов",
      "invalidTypePattern": "{filename}: этот тип не поддерживается",
      "maxFeaturesAllowedPattern": "Допустимо использовать не более {count} объектов",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Имеется проблема.",
      "kmlProjectionMismatch": "Пространственная привязка карты и слоя KML не совпадают, конвертация на клиенте не может быть выполнена."
    },
    "layerList": {
      "caption": "Слои",
      "noLayersAdded": "Слои не были добавлены.",
      "removeLayer": "Удалить слой",
      "back": "Задний"
    }
  }
});