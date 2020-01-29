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
    "error": "無法建立地圖",
    "licenseError": {
      "message": "您的帳號未經授權，無法使用非公開的可配置應用程式。 請聯繫您的組織管理員，請其將包含基礎應用程式或附加元件基礎應用程式授權的使用者類型指派給您。",
      "title": "未經許可"
    }
  },
  "nav": {
    "close": "關閉"
  },
  "basemap": {
    "title": "底圖庫"
  },
  "visit": {
    "title": "請造訪",
    "visit": "造訪屬性",
    "image": "圖片屬性",
    "addText": "選擇符號並按一下地圖。",
    "next": "下一步",
    "prev": "上一步",
    "error": "拒絕存取。 無法編輯圖層。",
    "edit": "編輯備註",
    "save": "儲存",
    "filter": "按造訪狀態篩選",
    "all": "全部",
    "record": "記錄",
    "of": "/",
    "error1": "請輸入有效的數值。",
    "layer": "圖層切換",
    "imageLayer": "影像",
    "visitLayer": "請造訪",
    "notesLayer": "注意事項",
    "layerError": "地圖中未出現圖層。",
    "follow": "關注我們",
    "okay": "好的",
    "noStat": "無狀態",
    "left": "左",
    "up": "上",
    "down": "下",
    "right": "右",
    "center": "居中對齊",
    "press": "按",
    "scan": "掃描圖片",
    "scale": "重設比例",
    "view": "重設檢視",
    "search": "正在搜尋...",
    "additionalFilter": "篩選依據"
  },
  "measurement": {
    "title": "圖像測量",
    "error": "不支援「測量能力」。"
  },
  "about": {
    "title": "關於"
  },
  "addData": {
    "_widgetLabel": "新增資料",
    "noOptionsConfigured": "未配置選項。",
    "tabs": {
      "search": "搜尋",
      "url": "URL",
      "file": "檔案"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "圖層無法存取。",
      "loadError": "AddData，無法載入:",
      "searchBox": {
        "search": "搜尋",
        "placeholder": "搜尋…"
      },
      "bboxOption": {
        "bbox": "地圖內"
      },
      "scopeOptions": {
        "anonymousContent": "內容",
        "myContent": "我的內容",
        "myOrganization": "我的組織",
        "curated": "已展現",
        "ArcGISOnline": "ArcGIS Online 的項目"
      },
      "sortOptions": {
        "prompt": "排序方式:",
        "relevance": "相關度",
        "title": "標題",
        "owner": "Owner",
        "rating": "評級次數",
        "views": "檢視",
        "date": "日期",
        "switchOrder": "切換"
      },
      "typeOptions": {
        "prompt": "類型",
        "mapService": "地圖服務",
        "featureService": "圖徽服務",
        "imageService": "影像服務",
        "vectorTileService": "向量圖磚服務",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "找不到結果。"
      },
      "paging": {
        "first": "<<",
        "firstTip": "第一個",
        "previous": "<",
        "previousTip": "上一步",
        "next": ">",
        "nextTip": "下一步",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "項目",
        "itemPlural": "項目"
      },
      "item": {
        "actions": {
          "add": "新增",
          "close": "關閉",
          "remove": "移除",
          "details": "詳細資訊",
          "done": "完成",
          "editName": "編輯名稱"
        },
        "messages": {
          "adding": "正在新增...",
          "removing": "正在移除...",
          "added": "已新增",
          "addFailed": "新增失敗",
          "unsupported": "不支援"
        },
        "typeByOwnerPattern": "按 {owner} 排列的 {type}",
        "dateFormat": "yyyy MMMM d",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "地圖服務",
          "Feature Service": "圖徽服務",
          "Image Service": "影像服務",
          "Vector Tile Service": "向量圖磚服務",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "類型",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server Web 服務",
        "WMS": "WMS OGC Web 服務",
        "WMTS": "WMTS OGC Web 服務",
        "WFS": "WFS OGC Web 服務",
        "KML": "KML 檔案",
        "GeoRSS": "GeoRSS 檔案",
        "CSV": "CSV 檔案"
      },
      "samplesHint": "範例 URL"
    },
    "addFromFile": {
      "intro": "您可以拖曳或瀏覽下列其中一種檔案類型:",
      "types": {
        "Shapefile": "Shapefile (.zip，包含所有 shapefile 檔案的 ZIP 封存檔)",
        "CSV": "CSV 檔案 (.csv，包含地址或經度、緯度和逗號、分號或索引標籤分隔)",
        "KML": "KML 檔案 (.kml)",
        "GPX": "GPX 檔案 (.gpx，GPS Exchange 格式)",
        "GeoJSON": "GeoJSON 檔案 (.geo.json 或 .geojson)"
      },
      "generalizeOn": "將圖徵一般化以便於 Web 顯示",
      "dropOrBrowse": "捨棄或瀏覽",
      "browse": "瀏覽",
      "invalidType": "此檔案類型不被支援。",
      "addingPattern": "{filename}: 正在新增...",
      "addFailedPattern": "{filename}: 新增失敗",
      "featureCountPattern": "{filename}: {count} 個圖徵",
      "invalidTypePattern": "{filename}: 不支援此類型",
      "maxFeaturesAllowedPattern": "最多允許 {count} 個圖徵",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "發生問題。",
      "kmlProjectionMismatch": "地圖與 KML 圖層的空間參考不符合，且無法在用戶端上完成轉換。"
    },
    "layerList": {
      "caption": "圖層",
      "noLayersAdded": "尚未增加任何圖層。",
      "removeLayer": "移除圖層",
      "back": "上一步"
    }
  }
});