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
    "error": "Tidak dapat membuat peta",
    "licenseError": {
      "message": "Akun Anda tidak dilisensikan untuk menggunakan Aplikasi yang Dapat Dikonfigurasi yang bukan bersifat publik. Harap minta administrator organisasi Anda untuk menetapkan Anda jenis pengguna yang menyertakan lisensi Essential App atau add-on Essential App.",
      "title": "Tidak Dilisensikan"
    }
  },
  "nav": {
    "close": "Tutup"
  },
  "basemap": {
    "title": "Galeri Peta Dasar"
  },
  "visit": {
    "title": "Kunjungi",
    "visit": "Atribut Kunjungan",
    "image": "Atribut Gambar",
    "addText": "Pilih simbol dan klik pada peta.",
    "next": "Berikutnya",
    "prev": "Sebelumnya",
    "error": "Akses ditolak. Layer tidak dapat diedit.",
    "edit": "Edit Catatan",
    "save": "Simpan",
    "filter": "Filter menurut status kunjungan",
    "all": "Semua",
    "record": "Rekaman",
    "of": "dari",
    "error1": "Harap masukkan nilai numerik yang valid.",
    "layer": "Hidupkan/Matikan Layer",
    "imageLayer": "Citra",
    "visitLayer": "Kunjungi",
    "notesLayer": "Catatan",
    "layerError": "Tidak ada layer di peta ini.",
    "follow": "Ikuti",
    "okay": "Ya",
    "noStat": "Tidak Ada Status",
    "left": "Kiri",
    "up": "Atas",
    "down": "Bawah",
    "right": "Kanan",
    "center": "Tengah",
    "press": "Tekan",
    "scan": "Pindai Citra",
    "scale": "Atur Ulang Skala",
    "view": "Atur Ulang Tampilan",
    "search": "Mencari...",
    "additionalFilter": "Filter berdasarkan"
  },
  "measurement": {
    "title": "Pengukuran Gambar",
    "error": "Kapabilitas Pengukuran tidak didukung."
  },
  "about": {
    "title": "Tentang"
  },
  "addData": {
    "_widgetLabel": "Tambah Data",
    "noOptionsConfigured": "Tidak ada opsi yang dikonfigurasi.",
    "tabs": {
      "search": "Cari",
      "url": "URL",
      "file": "File"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Layer tidak dapat diakses.",
      "loadError": "AddData, tidak dapat memuat:",
      "searchBox": {
        "search": "Cari",
        "placeholder": "Cari..."
      },
      "bboxOption": {
        "bbox": "Dalam peta"
      },
      "scopeOptions": {
        "anonymousContent": "Konten",
        "myContent": "Konten Saya",
        "myOrganization": "Organisasi Saya",
        "curated": "Dikuratori",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Urutkan Menurut:",
        "relevance": "Relevansi",
        "title": "Judul",
        "owner": "Pemilik",
        "rating": "Peringkat",
        "views": "Tampilan",
        "date": "Tanggal",
        "switchOrder": "Alihkan"
      },
      "typeOptions": {
        "prompt": "Jenis",
        "mapService": "Map Service",
        "featureService": "Feature Service",
        "imageService": "Image Service",
        "vectorTileService": "Vector Tile Service",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Tidak ada hasil yang ditemukan."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Pertama",
        "previous": "<",
        "previousTip": "Sebelumnya",
        "next": ">",
        "nextTip": "Berikutnya",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Item",
        "itemPlural": "Item"
      },
      "item": {
        "actions": {
          "add": "Tambah",
          "close": "Tutup",
          "remove": "Hapus",
          "details": "Detail",
          "done": "Selesai",
          "editName": "Edit Nama"
        },
        "messages": {
          "adding": "Menambahkan...",
          "removing": "Menghapus...",
          "added": "Ditambahkan",
          "addFailed": "Gagal menambahkan",
          "unsupported": "Tidak didukung"
        },
        "typeByOwnerPattern": "{type} oleh {owner}",
        "dateFormat": "BBBB h, tttt",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "peringkat\", \"komentar\": \"komentar\", \"tampilan\": \"tampilan"
        },
        "types": {
          "Map Service": "Map Service",
          "Feature Service": "Feature Service",
          "Image Service": "Image Service",
          "Vector Tile Service": "Vector Tile Service",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Jenis",
      "url": "URL",
      "types": {
        "ArcGIS": "Layanan Web ArcGIS Server",
        "WMS": "Layanan Web WMS OGC",
        "WMTS": "Layanan Web WMTS OGC",
        "WFS": "Layanan Web WFS OGC",
        "KML": "File KML",
        "GeoRSS": "File GeoRSS",
        "CSV": "File CSV"
      },
      "samplesHint": "URL Contoh"
    },
    "addFromFile": {
      "intro": "Anda dapat menjatuhkan atau menelusuri salah satu dari jenis file berikut:",
      "types": {
        "Shapefile": "Shapefile (arsip .zip, ZIP berisi semua file shapefile)",
        "CSV": "File CSV (.csv, dengan alamat atau garis lintang, garis bujur dan koma, dibatasi titik koma atau tab)",
        "KML": "File KML (.kml)",
        "GPX": "File GPX (.gpx, GPS Exchange Format)",
        "GeoJSON": "File GeoJSON (.geo.json, atau .geojson)"
      },
      "generalizeOn": "Generalisasi fitur untuk tampilan web",
      "dropOrBrowse": "Jatuhkan atau Telusuri",
      "browse": "Telusuri",
      "invalidType": "Jenis file ini tidak didukung.",
      "addingPattern": "{filename}: menambahkan...",
      "addFailedPattern": "{filename}: gagal menambahkan",
      "featureCountPattern": "{filename}: {count} fitur",
      "invalidTypePattern": "{filename}: jenis file ini tidak didukung",
      "maxFeaturesAllowedPattern": "Maksimal {count} fitur diizinkan",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Ada masalah.",
      "kmlProjectionMismatch": "Referensi spasial peta dan layer KML tidak cocok, dan konversi tidak dapat dilakukan pada klien."
    },
    "layerList": {
      "caption": "Layer",
      "noLayersAdded": "Belum ada layer yang ditambahkan.",
      "removeLayer": "Buang Layer",
      "back": "Kembali"
    }
  }
});