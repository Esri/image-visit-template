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
    "error": "ไม่สามารถสร้างแผนที่ได้",
    "licenseError": {
      "message": "บัญชีผู้ใช้ของคุณไม่มีใบอนุญาตในการใช้งานแอปที่กำหนดค่าได้ซึ่งไม่ใช่แบบสาธารณะ โปรดขอให้ผู้ดูแลองค์กรของคุณกำหนดประเภทผู้ใช้ที่มีใบอนุญาตแอป Essential หรือแอดออนแอป Essential ให้กับคุณ",
      "title": "ไม่มีใบอนุญาต"
    }
  },
  "nav": {
    "close": "ปิด"
  },
  "basemap": {
    "title": "แกลเลอรี่แผนที่ฐาน"
  },
  "visit": {
    "title": "เข้าชม",
    "visit": "แอตทริบิวต์การเข้าชม",
    "image": "แอตทริบิวต์ภาพ",
    "addText": "เลือกสัญลักษณ์แล้วคลิกบนแผนที่",
    "next": "ถัดไป",
    "prev": "ก่อนหน้า",
    "error": "การเข้าถึงถูกปฏิเสธ ไม่สามารถแก้ไขชั้นได้",
    "edit": "แก้ไขบันทึกย่อ",
    "save": "บันทึก",
    "filter": "กรองตามสถานะการเข้าชม",
    "all": "ทั้งหมด",
    "record": "บันทึก",
    "of": "ของ",
    "error1": "โปรดป้อนค่าตัวเลขที่ถูกต้อง",
    "layer": "สลับชั้นข้อมูล",
    "imageLayer": "ภาพถ่าย",
    "visitLayer": "เข้าชม",
    "notesLayer": "บันทึก",
    "layerError": "ไม่มีชั้นในแผนที่",
    "follow": "ติดตามผล",
    "okay": "ตกลง",
    "noStat": "ไม่มีสถานะ",
    "left": "ซ้าย",
    "up": "ขึ้น",
    "down": "ลง",
    "right": "ขวา",
    "center": "ศูนย์กลาง",
    "press": "กด",
    "scan": "สแกนภาพ",
    "scale": "รีเซ็ตสเกล",
    "view": "รีเซ็ตมุมมอง",
    "search": "กำลังค้นหา...",
    "additionalFilter": "คัดกรองโดย"
  },
  "measurement": {
    "title": "การวัดภาพ",
    "error": "ไม่รองรับความสามารถในการดูแลรักษา"
  },
  "about": {
    "title": "เกี่ยวกับ"
  },
  "addData": {
    "_widgetLabel": "เพิ่มข้อมูล",
    "noOptionsConfigured": "ไม่มีตัวเลือกที่มีการกำหนดค่า",
    "tabs": {
      "search": "ค้นหา",
      "url": "URL",
      "file": "ไฟล์"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "ชั้นข้อมูลนี้ไม่สามารถเข้าถึงได้",
      "loadError": "เพิ่มข้อมูล ไม่สามารถโหลด:",
      "searchBox": {
        "search": "ค้นหา",
        "placeholder": "ค้นหา..."
      },
      "bboxOption": {
        "bbox": "ภายในแผนที่"
      },
      "scopeOptions": {
        "anonymousContent": "เนื้อหา",
        "myContent": "เนื้อหาของฉัน",
        "myOrganization": "องค์กรของฉัน",
        "curated": "การจัดการ",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "จำแนกโดย:",
        "relevance": "สัมพันธ์",
        "title": "ชื่อ",
        "owner": "เจ้าของ",
        "rating": "อันดับ",
        "views": "จำนวนผู้ชม",
        "date": "วันที่",
        "switchOrder": "เปลี่ยน"
      },
      "typeOptions": {
        "prompt": "ชนิด",
        "mapService": "เซอร์วิสแผนที่",
        "featureService": "ฟีเจอรเซอร์วิส",
        "imageService": "เซอร์วิสภาพ",
        "vectorTileService": "เซอร์วิสเวกเตอร์ไทล์",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "ไม่พบผลลัพธ์"
      },
      "paging": {
        "first": "<<",
        "firstTip": "ที่หนึ่ง",
        "previous": "<",
        "previousTip": "ก่อนหน้า",
        "next": ">",
        "nextTip": "ถัดไป",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "รายการ",
        "itemPlural": "รายการ"
      },
      "item": {
        "actions": {
          "add": "เพิ่ม",
          "close": "ปิด",
          "remove": "เอาออก",
          "details": "รายละเอียด",
          "done": "เสร็จ",
          "editName": "แก้ไขชื่อ"
        },
        "messages": {
          "adding": "กำลังเพิ่ม...",
          "removing": "กำลังลบ...",
          "added": "เพิ่ม",
          "addFailed": "การเพิ่มข้อมูลล้มเหลว",
          "unsupported": "ไม่รองรับ"
        },
        "typeByOwnerPattern": "{type} โดย {owner}",
        "dateFormat": "d MMMM,yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "เรตติ้ง\", \"ความคิดเห็น\": \"ความคิดเห็น\", \"วิว\": \"วิว"
        },
        "types": {
          "Map Service": "เซอร์วิสแผนที่",
          "Feature Service": "ฟีเจอรเซอร์วิส",
          "Image Service": "เซอร์วิสภาพ",
          "Vector Tile Service": "เซอร์วิสเวกเตอร์ไทล์",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "ชนิด",
      "url": "URL",
      "types": {
        "ArcGIS": "บริการทางเว็บ ArcGIS Server",
        "WMS": "บริการทางเว็บ WMS OGC",
        "WMTS": "บริการทางเว็บ WMTS OGC",
        "WFS": "บริการทางเว็บ WFS OGC",
        "KML": "ไฟล์ KML",
        "GeoRSS": "ไฟล์ GeoRSS",
        "CSV": "ไฟล์ CSV"
      },
      "samplesHint": "ตัวอย่าง URL"
    },
    "addFromFile": {
      "intro": "คุณสามารถวางหรือเรียกดูไฟล์ประเภทใด ประเภทหนึ่งต่อไปนี้:",
      "types": {
        "Shapefile": "Shapefile (.zip, ไฟล์ ZIP ที่มีไฟล์ shapefile ทั้งหมดอยู่ภายใน)",
        "CSV": "ไฟล์ CSV (.csv ที่มีที่อยู่ หรือค่าลองจิจูด ละติจูด และจุลภาค เซมิคอลอน หรือ คั่นด้วยแท็บ)",
        "KML": "ไฟล์ KML (.kml)",
        "GPX": "ไฟล์ GPX (.gpx ไฟล์สำหรับการแลกเปลี่ยนรูปแบบจากอุปกรณ์ GPS)",
        "GeoJSON": "ไฟล์ GeoJSON (.geo.json หรือ .geojson)"
      },
      "generalizeOn": "ลดทอนรายละเอียดฟีเจอร์เพื่อใช้ในการแสดงผลบนเว็บ",
      "dropOrBrowse": "วางหรือเรียกดู",
      "browse": "ค้นหา",
      "invalidType": "ชนิดไฟล์นี้ไม่สนับสนุน",
      "addingPattern": "{filename}: กำลังเพิ่ม",
      "addFailedPattern": "{filename}: เพิ่มไม่สำเร็จ",
      "featureCountPattern": "{filename}: {count} ชิ้น",
      "invalidTypePattern": "{filename}: ไม่สนับสนุนไฟล์ประเภทนี้",
      "maxFeaturesAllowedPattern": "จำนวนสูงสุด {count} ชิ้น ที่ยอมให้ใช้ได้",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "เกิดปัญหาขึ้น",
      "kmlProjectionMismatch": "การอ้างอิงเชิงพื้นที่ของชั้นข้อมูลแผนที่และ KML ไม่ตรงกันและการแปลงไม่สามารถทำได้บนไคลเอ็นต์"
    },
    "layerList": {
      "caption": "ชั้นข้อมูล",
      "noLayersAdded": "ไม่มีเลเยอร์ได้เพิ่ม",
      "removeLayer": "ลบชั้นข้อมูล",
      "back": "กลับ"
    }
  }
});