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
    "error": "マップを作成できません",
    "licenseError": {
      "message": "パブリックでないテンプレートを使用するためのライセンスがアカウントに付与されていません。 組織の管理者に Essential Apps またはアドオン Essential Apps ライセンスを含むユーザー タイプを割り当てるよう依頼してください。",
      "title": "ライセンスがありません。"
    }
  },
  "nav": {
    "close": "クローズ"
  },
  "basemap": {
    "title": "ベースマップ ギャラリー"
  },
  "visit": {
    "title": "Visit",
    "visit": "Visit 属性",
    "image": "画像属性",
    "addText": "シンボルを選択し、マップをクリックします。",
    "next": "次へ",
    "prev": "前へ",
    "error": "アクセスが拒否されました。レイヤーを編集できません",
    "edit": "メモの編集",
    "save": "保存",
    "filter": "アクセス ステータスによるフィルター",
    "all": "すべて",
    "record": "記録",
    "of": "/",
    "error1": "有効な数値を入力してください。",
    "layer": "レイヤーの切り替え",
    "imageLayer": "イメージ",
    "visitLayer": "Visit",
    "notesLayer": "備考",
    "layerError": "マップにレイヤーがありません",
    "follow": "フォロー アップ",
    "okay": "OK",
    "noStat": "ステータスなし",
    "left": "左",
    "up": "上",
    "down": "下",
    "right": "右",
    "center": "中央",
    "press": "押す",
    "scan": "画像のスキャン",
    "scale": "縮尺のリセット",
    "view": "ビューのリセット",
    "search": "検索しています...",
    "additionalFilter": "フィルター"
  },
  "measurement": {
    "title": "画像計測",
    "error": "計測機能がサポートされていません。"
  },
  "about": {
    "title": "情報"
  },
  "addData": {
    "_widgetLabel": "データの追加",
    "noOptionsConfigured": "オプションが構成されませんでした。",
    "tabs": {
      "search": "検索",
      "url": "URL",
      "file": "ファイル"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "レイヤーにアクセスできません。",
      "loadError": "データ追加、次を読み込めません:",
      "searchBox": {
        "search": "検索",
        "placeholder": "検索..."
      },
      "bboxOption": {
        "bbox": "マップ内"
      },
      "scopeOptions": {
        "anonymousContent": "コンテンツ",
        "myContent": "マイ コンテンツ",
        "myOrganization": "組織",
        "curated": "管理",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "並べ替え:",
        "relevance": "関連性",
        "title": "タイトル",
        "owner": "所有者",
        "rating": "評価",
        "views": "ビュー",
        "date": "日時",
        "switchOrder": "切り替え"
      },
      "typeOptions": {
        "prompt": "種類",
        "mapService": "マップ サービス",
        "featureService": "フィーチャ サービス",
        "imageService": "イメージ サービス",
        "vectorTileService": "ベクター タイル サービス",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "結果が見つかりませんでした。"
      },
      "paging": {
        "first": "<<",
        "firstTip": "先頭",
        "previous": "<",
        "previousTip": "前へ",
        "next": ">",
        "nextTip": "次へ",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "アイテム",
        "itemPlural": "アイテム"
      },
      "item": {
        "actions": {
          "add": "追加",
          "close": "閉じる",
          "remove": "削除",
          "details": "説明",
          "done": "終了",
          "editName": "名前の編集"
        },
        "messages": {
          "adding": "追加しています...",
          "removing": "削除しています...",
          "added": "追加",
          "addFailed": "追加できませんでした",
          "unsupported": "非サポート"
        },
        "typeByOwnerPattern": "{owner} ごとの {type}",
        "dateFormat": "MMMM d, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "マップ サービス",
          "Feature Service": "フィーチャ サービス",
          "Image Service": "イメージ サービス",
          "Vector Tile Service": "ベクター タイル サービス",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "種類",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server Web サービス",
        "WMS": "WMS OGC Web サービス",
        "WMTS": "WMTS OGC Web サービス",
        "WFS": "WFS OGC Web サービス",
        "KML": "KML ファイル",
        "GeoRSS": "GeoRSS ファイル",
        "CSV": "CSV ファイル"
      },
      "samplesHint": "サンプル URL"
    },
    "addFromFile": {
      "intro": "次のいずれかのファイル タイプをドロップまたは参照できます。",
      "types": {
        "Shapefile": "シェープファイル (*.zip、すべてのシェープ ファイルを含む ZIP アーカイブ)",
        "CSV": "CSV ファイル (*.csv、住所または緯度と経度を含み、カンマ、セミコロン、またはタブ区切り)",
        "KML": "KML ファイル (*.kml)",
        "GPX": "GPX ファイル (*.gpx、GPS Exchange Format)",
        "GeoJSON": "GeoJSON ファイル (*.geo.json または *.geojson)"
      },
      "generalizeOn": "Web 表示用にフィーチャを単純化",
      "dropOrBrowse": "ドロップまたは参照",
      "browse": "参照",
      "invalidType": "このファイル タイプはサポートされていません。",
      "addingPattern": "{filename}: 追加しています...",
      "addFailedPattern": "{filename}: 追加できませんでした",
      "featureCountPattern": "{filename}: {count} フィーチャ",
      "invalidTypePattern": "{filename}: このタイプはサポートされていません",
      "maxFeaturesAllowedPattern": "最大 {count} フィーチャが許可されています",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "問題が発生しました。",
      "kmlProjectionMismatch": "マップの空間参照と KML レイヤーが一致しないため、クライアント上で変換を実行できません。"
    },
    "layerList": {
      "caption": "レイヤー",
      "noLayersAdded": "レイヤーが追加されていません。",
      "removeLayer": "レイヤーの削除",
      "back": "戻る"
    }
  }
});