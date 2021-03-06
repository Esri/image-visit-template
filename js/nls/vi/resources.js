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
    "error": "Không thể tạo bản đồ",
    "licenseError": {
      "message": "Tài khoản của bạn không được cấp phép để sử dụng ứng dụng có thể cấu hình mà không được công khai. Vui lòng yêu cầu quản trị viên của tổ chức bạn gán cho bạn loại người dùng nào có bao gồm các ứng dụng thiết yếu hoặc có giấy phép sử dụng các ứng dụng thiết yếu bổ trợ.",
      "title": "Không được cấp phép"
    }
  },
  "nav": {
    "close": "Đóng"
  },
  "basemap": {
    "title": "Bộ sưu tập bản đồ nền"
  },
  "visit": {
    "title": "Visit",
    "visit": "Thuộc tính Visit",
    "image": "Thuộc tính Hình ảnh",
    "addText": "Chọn một biểu tượng và bấm vào bản đồ.",
    "next": "Tiếp theo",
    "prev": "Trước",
    "error": "Truy cập bị từ chối. Không thể chỉnh sửa lớp.",
    "edit": "Chỉnh sửa Ghi chú",
    "save": "Lưu",
    "filter": "Lọc theo trạng thái visit",
    "all": "Tất cả",
    "record": "Bản ghi",
    "of": "của",
    "error1": "Vui lòng nhập giá trị số hợp lệ.",
    "layer": "Chuyển đổi Lớp",
    "imageLayer": "Hình ảnh",
    "visitLayer": "Visit",
    "notesLayer": "Lưu ý",
    "layerError": "Không có lớp nào xuất hiện trong bản đồ.",
    "follow": "Theo dõi",
    "okay": "OK",
    "noStat": "Không có trạng thái",
    "left": "Trái",
    "up": "Lên",
    "down": "Xuống",
    "right": "Phải",
    "center": "Tâm",
    "press": "Nhấn",
    "scan": "Quét Ảnh",
    "scale": "Đặt lại Tỷ lệ",
    "view": "Đặt lại Chế độ xem",
    "search": "Đang tìm kiếm...",
    "additionalFilter": "Lọc theo"
  },
  "measurement": {
    "title": "Đo lường Hình ảnh",
    "error": "Khả năng Đo lường không được hỗ trợ."
  },
  "about": {
    "title": "Về"
  },
  "addData": {
    "_widgetLabel": "Thêm Dữ liệu",
    "noOptionsConfigured": "Không có tùy chọn nào được cấu hình.",
    "tabs": {
      "search": "Tìm kiếm",
      "url": "URL",
      "file": "Tệp"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Không thể truy cập lớp.",
      "loadError": "AddData, không thể tải:",
      "searchBox": {
        "search": "Tìm kiếm",
        "placeholder": "Tìm kiếm..."
      },
      "bboxOption": {
        "bbox": "Trong bản đồ"
      },
      "scopeOptions": {
        "anonymousContent": "Nội dung",
        "myContent": "Nội dung của tôi",
        "myOrganization": "Tổ chức của tôi",
        "curated": "Được giám sát",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sắp xếp theo:",
        "relevance": "Liên quan",
        "title": "Tiêu đề",
        "owner": "Chủ sở hữu",
        "rating": "Xếp loại",
        "views": "Lượt xem",
        "date": "Ngày",
        "switchOrder": "Chuyển đổi"
      },
      "typeOptions": {
        "prompt": "Loại",
        "mapService": "Dịch vụ Bản đồ",
        "featureService": "Dịch vụ Đối tượng",
        "imageService": "Dịch vụ Hình ảnh",
        "vectorTileService": "Dịch vụ Tile Véc tơ",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Không tìm thấy kết quả nào."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Đầu tiên",
        "previous": "<",
        "previousTip": "Trước",
        "next": ">",
        "nextTip": "Tiếp theo",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Mục",
        "itemPlural": "Mục"
      },
      "item": {
        "actions": {
          "add": "Thêm",
          "close": "Đóng",
          "remove": "Gỡ bỏ",
          "details": "Thông tin chi tiết",
          "done": "Hoàn tất",
          "editName": "Chỉnh sửa Tên"
        },
        "messages": {
          "adding": "Đang thêm...",
          "removing": "Đang xóa...",
          "added": "Đã thêm",
          "addFailed": "Không thể thêm",
          "unsupported": "Không được hỗ trợ"
        },
        "typeByOwnerPattern": "{type} bởi {owner}",
        "dateFormat": "d MMMM, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "lượt xếp hạng\", \"lượt nhận xét\": \"lượt nhận xét\", \"lượt xem\": \"lượt xem"
        },
        "types": {
          "Map Service": "Dịch vụ Bản đồ",
          "Feature Service": "Dịch vụ Đối tượng",
          "Image Service": "Dịch vụ Hình ảnh",
          "Vector Tile Service": "Dịch vụ Tile Véc tơ",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Loại",
      "url": "URL",
      "types": {
        "ArcGIS": "Một Dịch vụ Web của ArcGIS Server",
        "WMS": "Một Dịch vụ Web WMS OGC",
        "WMTS": "Một Dịch vụ Web WMTS OGC",
        "WFS": "Dịch vụ Web OGC WFS",
        "KML": "Một Tệp KML",
        "GeoRSS": "Một Tệp GeoRSS",
        "CSV": "Một Tệp CSV"
      },
      "samplesHint": "(Các) URL Mẫu"
    },
    "addFromFile": {
      "intro": "Bạn có thể thả hoặc duyệt cho một loại tệp dưới đây:",
      "types": {
        "Shapefile": "Shapefile (.zip, tệp lưu trữ ZIP có chứa tất cả các tệp shapefile)",
        "CSV": "Tệp CSV (.csv, có địa chỉ hoặc kinh độ, vĩ độ, được ngăn cách bằng dấu phẩy, dấu chấm phẩy hoặc tab)",
        "KML": "Tệp KML (.kml)",
        "GPX": "Tệp GPX (.gpx, Định dạng Trao đổi GPS)",
        "GeoJSON": "Tệp GeoJSON (.geo.json hoặc .geojson)"
      },
      "generalizeOn": "Tổng quát hóa các đối tượng để hiển thị web",
      "dropOrBrowse": "Thả hoặc Duyệt",
      "browse": "Duyệt tìm",
      "invalidType": "Loại tệp này không được hỗ trợ.",
      "addingPattern": "{filename}: đang thêm...",
      "addFailedPattern": "{filename}: thêm thất bại",
      "featureCountPattern": "{filename}: {count} (các) đối tượng",
      "invalidTypePattern": "{filename}: loại này không được hỗ trợ",
      "maxFeaturesAllowedPattern": "Cho phép tối đa {count} đối tượng",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Đã có lỗi xảy ra.",
      "kmlProjectionMismatch": "Tham chiếu không gian của bản đồ và lớp KML không khớp nhau, và không thể thực hiện chuyển đổi trên máy khách."
    },
    "layerList": {
      "caption": "Lớp",
      "noLayersAdded": "Không có lớp nào được thêm.",
      "removeLayer": "Gỡ bỏ Lớp",
      "back": "Quay lại"
    }
  }
});