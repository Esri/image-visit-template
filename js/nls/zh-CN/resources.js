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
    "error": "无法创建地图",
    "licenseError": {
      "message": "您的帐户无权使用非公共的可配置应用程序。 请联系您的组织管理员为您分配包含基本应用程序或附加基本应用程序许可的用户类型。",
      "title": "未经许可"
    }
  },
  "nav": {
    "close": "关闭"
  },
  "basemap": {
    "title": "底图库"
  },
  "visit": {
    "title": "访问",
    "visit": "访问属性",
    "image": "影像属性",
    "addText": "选择一个符号并在地图上单击。",
    "next": "下一页",
    "prev": "上一页",
    "error": "访问被拒绝。 无法编辑图层。",
    "edit": "编辑注释",
    "save": "保存",
    "filter": "按访问状态过滤",
    "all": "所有",
    "record": "记录",
    "of": "/",
    "error1": "请输入有效的数值。",
    "layer": "图层切换",
    "imageLayer": "影像",
    "visitLayer": "访问",
    "notesLayer": "备注",
    "layerError": "地图中无图层。",
    "follow": "跟进",
    "okay": "确定",
    "noStat": "无状态",
    "left": "左",
    "up": "上",
    "down": "下",
    "right": "右",
    "center": "中心",
    "press": "按",
    "scan": "扫描图像",
    "scale": "重置比例",
    "view": "重置视图",
    "search": "正在搜索...",
    "additionalFilter": "过滤依据"
  },
  "measurement": {
    "title": "影像测量",
    "error": "不支持测量功能。"
  },
  "about": {
    "title": "关于"
  },
  "addData": {
    "_widgetLabel": "添加数据",
    "noOptionsConfigured": "尚未配置任何选项。",
    "tabs": {
      "search": "搜索",
      "url": "URL",
      "file": "文件"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "图层不可访问。",
      "loadError": "添加数据，无法加载：",
      "searchBox": {
        "search": "搜索",
        "placeholder": "搜索..."
      },
      "bboxOption": {
        "bbox": "地图内"
      },
      "scopeOptions": {
        "anonymousContent": "内容",
        "myContent": "我的内容",
        "myOrganization": "我的组织",
        "curated": "精选",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "排序方式：",
        "relevance": "相关度",
        "title": "标题",
        "owner": "所有者",
        "rating": "评级",
        "views": "访问量",
        "date": "日期",
        "switchOrder": "切换"
      },
      "typeOptions": {
        "prompt": "类型",
        "mapService": "地图服务",
        "featureService": "要素服务",
        "imageService": "影像服务",
        "vectorTileService": "矢量切片服务",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "未找到任何结果。"
      },
      "paging": {
        "first": "<<",
        "firstTip": "首页",
        "previous": "<",
        "previousTip": "上一页",
        "next": ">",
        "nextTip": "下一页",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "项目",
        "itemPlural": "项目"
      },
      "item": {
        "actions": {
          "add": "添加",
          "close": "关闭",
          "remove": "移除",
          "details": "详细信息",
          "done": "完成",
          "editName": "编辑名称"
        },
        "messages": {
          "adding": "正在添加...",
          "removing": "正在移除...",
          "added": "已添加",
          "addFailed": "添加失败",
          "unsupported": "不支持"
        },
        "typeByOwnerPattern": "{type}，所有者 {owner}",
        "dateFormat": "MMMM d, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "地图服务",
          "Feature Service": "要素服务",
          "Image Service": "影像服务",
          "Vector Tile Service": "矢量切片服务",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "类型",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server Web 服务",
        "WMS": "WMS OGC Web 服务",
        "WMTS": "WMTS OGC Web 服务",
        "WFS": "WFS OGC Web 服务",
        "KML": "KML 文件",
        "GeoRSS": "GeoRSS 文件",
        "CSV": "CSV 文件"
      },
      "samplesHint": "简单 URL"
    },
    "addFromFile": {
      "intro": "您可以放置或浏览以下任一文件类型：",
      "types": {
        "Shapefile": "Shapefile (.zip 包含所有 shapefile 文件的 ZIP 归档)",
        "CSV": "CSV 文件(.csv，含地址或经度、纬度，以逗号、分号或制表符分隔)",
        "KML": "KML 文件(.kml)",
        "GPX": "GPX 文件(.gpx，GPS 交换格式)",
        "GeoJSON": "GeoJSON 文件(.geo.json 或 .geojson)"
      },
      "generalizeOn": "概化要素以便于 web 显示",
      "dropOrBrowse": "放置或浏览",
      "browse": "浏览",
      "invalidType": "此文件类型不受支持。",
      "addingPattern": "{filename}：正在添加...",
      "addFailedPattern": "{filename}：添加失败",
      "featureCountPattern": "{filename}：{count} 个要素",
      "invalidTypePattern": "{filename}：此类型不受支持",
      "maxFeaturesAllowedPattern": "允许最多 {count} 个要素",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "发生问题。",
      "kmlProjectionMismatch": "地图和 KML 图层的空间参考不匹配，并且无法在客户端上完成转换。"
    },
    "layerList": {
      "caption": "图层",
      "noLayersAdded": "尚未添加任何图层。",
      "removeLayer": "移除图层",
      "back": "返回"
    }
  }
});