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
    "error": "Harita oluşturulamıyor",
    "licenseError": {
      "message": "Hesabınız herkese açık olmayan Yapılandırılabilir Uygulamaları kullanmak için lisanslandırılmamış. Lütfen kuruluş yöneticinizden Temel Uygulamalar veya eklenti Temel Uygulamalar lisansı içeren bir kullanıcı türü atamasını isteyin.",
      "title": "Lisanslı Değil"
    }
  },
  "nav": {
    "close": "Kapat"
  },
  "basemap": {
    "title": "Altlık Harita Galerisi"
  },
  "visit": {
    "title": "Ziyaret edin",
    "visit": "Ziyaret Öznitelikleri",
    "image": "Görüntü Öznitelikleri",
    "addText": "Harita üzerinde bir simge seçin ve tıklayın.",
    "next": "Sonraki",
    "prev": "Önceki",
    "error": "Erişim reddedildi. Katman düzenlenemiyor.",
    "edit": "Notları Düzenle",
    "save": "Kaydet",
    "filter": "Ziyaret durumuna göre filtrele",
    "all": "Tümü",
    "record": "Kayıt",
    "of": "/",
    "error1": "Geçerli bir sayısal değer girin.",
    "layer": "Katman Değiştirme",
    "imageLayer": "Görüntüleme",
    "visitLayer": "Ziyaret edin",
    "notesLayer": "Notlar",
    "layerError": "Haritada katman yok.",
    "follow": "Takip Et",
    "okay": "Tamam",
    "noStat": "Durum yok",
    "left": "Sol",
    "up": "Yukarı",
    "down": "Aşağı",
    "right": "Sağ",
    "center": "Orta",
    "press": "Basın",
    "scan": "Görüntüyü Tara",
    "scale": "Ölçeği Sıfırla",
    "view": "Görünümü Sıfırla",
    "search": "Aranıyor...",
    "additionalFilter": "Filtreleme ölçütü"
  },
  "measurement": {
    "title": "Görüntü Ölçümü",
    "error": "Ölçme Becerileri desteklenmiyor."
  },
  "about": {
    "title": "Yaklaşık"
  },
  "addData": {
    "_widgetLabel": "Veri Ekle",
    "noOptionsConfigured": "Yapılandırılan seçenek yok.",
    "tabs": {
      "search": "Ara",
      "url": "URL",
      "file": "Dosya"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Katman erişilemez.",
      "loadError": "AddData, yüklenemiyor:",
      "searchBox": {
        "search": "Ara",
        "placeholder": "Ara..."
      },
      "bboxOption": {
        "bbox": "Harita içinde"
      },
      "scopeOptions": {
        "anonymousContent": "İçerik",
        "myContent": "İçeriğim",
        "myOrganization": "Kuruluşum",
        "curated": "Oluşturuldu",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sıralama Ölçütü:",
        "relevance": "İlgi Derecesi",
        "title": "Başlık",
        "owner": "Sahip",
        "rating": "Derecelendirme",
        "views": "Görünümler",
        "date": "Tarih",
        "switchOrder": "Değiştir"
      },
      "typeOptions": {
        "prompt": "Tür",
        "mapService": "Harita Servisi",
        "featureService": "Detay Servisi",
        "imageService": "Görüntü Servisi",
        "vectorTileService": "Vektör Döşeme Servisi",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Sonuç bulunamadı."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Birinci",
        "previous": "<",
        "previousTip": "Önceki",
        "next": ">",
        "nextTip": "Sonraki",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Öge",
        "itemPlural": "Ögeler"
      },
      "item": {
        "actions": {
          "add": "Ekle",
          "close": "Kapat",
          "remove": "Kaldır",
          "details": "Detaylar",
          "done": "Bitti",
          "editName": "Adı Düzenle"
        },
        "messages": {
          "adding": "Ekleniyor...",
          "removing": "Kaldırılıyor...",
          "added": "Eklendi",
          "addFailed": "Ekleme işlemi başarısız oldu",
          "unsupported": "Desteklenmiyor"
        },
        "typeByOwnerPattern": "{owner} tarafından {type}",
        "dateFormat": "d MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "değerlendirme\", \"yorum\": \"yorum\", \"görüntüleme\": \"görüntüleme"
        },
        "types": {
          "Map Service": "Harita Servisi",
          "Feature Service": "Detay Servisi",
          "Image Service": "Görüntü Servisi",
          "Vector Tile Service": "Vektör Döşeme Servisi",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tür",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server Web Servisi",
        "WMS": "WMS OGC Web Servisi",
        "WMTS": "WMTS OGC Web Servisi",
        "WFS": "WFS OGC Web Servisi",
        "KML": "KML Dosyası",
        "GeoRSS": "GeoRSS Dosyası",
        "CSV": "CSV Dosyası"
      },
      "samplesHint": "Örnek URL'ler"
    },
    "addFromFile": {
      "intro": "Aşağıdaki dosya türlerinden birini bırakabilir veya kullanabilirsiniz:",
      "types": {
        "Shapefile": "Shapefile (.zip, tüm shapefile dosyalarını kapsayan ZIP arşivi)",
        "CSV": "CSV Dosyası (.csv, adres veya enlem, boylam ve virgül, noktalı virgül veya sekme ayırmalı)",
        "KML": "KML Dosyası (.kml)",
        "GPX": "GPX Dosyası (.gpx, GPS Takas Biçimi)",
        "GeoJSON": "GeoJSON Dosyası (.geo.json veya .geojson)"
      },
      "generalizeOn": "Detayları web'de gösterim için genelleştir",
      "dropOrBrowse": "Bırak veya Kullan",
      "browse": "Göz at",
      "invalidType": "Bu dosya türü desteklenmiyor.",
      "addingPattern": "{filename} ekleniyor...",
      "addFailedPattern": "{filename}: eklenemedi",
      "featureCountPattern": "{filename}: {count} detay",
      "invalidTypePattern": "{filename}: bu tür desteklenmiyor",
      "maxFeaturesAllowedPattern": "Maksimum {count} detaya izin verilir",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Bir sorun vardı.",
      "kmlProjectionMismatch": "Harita ve KML katmanının mekansal referansı eşleşmiyor ve istemci üzerinde dönüşüm yapılamıyor."
    },
    "layerList": {
      "caption": "Katmanlar",
      "noLayersAdded": "Eklenen katman yok.",
      "removeLayer": "Katmanı Kaldır",
      "back": "Geri"
    }
  }
});