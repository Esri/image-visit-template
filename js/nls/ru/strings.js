define({
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
      "previousTip": "Предыдущее",
      "next": ">",
      "nextTip": "Следующее",
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
    "back": "Назад"
  }
});