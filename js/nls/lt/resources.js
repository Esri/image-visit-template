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
    "error": "Žemėlapio sukurti nepavyko",
    "licenseError": {
      "message": "Jūsų paskyra nelicencijuota naudoti ne viešas konfigūruojamas aplikacijas. Kreipkitės į organizacijos administratorių, kad paskirtų jums naudotojo tipą, kuris turi svarbiausias aplikacijas, arba suteiktų jums papildomą svarbiausių aplikacijų licenciją.",
      "title": "Nelicencijuota"
    }
  },
  "nav": {
    "close": "Uždaryti"
  },
  "basemap": {
    "title": "Pagrindo žemėlapiai"
  },
  "visit": {
    "title": "Peržiūra",
    "visit": "Peržiūros atributai",
    "image": "Atvaizdo atributai",
    "addText": "Pasirinkite simbolį ir spustelėkite žemėlapyje.",
    "next": "Toliau",
    "prev": "Ankstesnis",
    "error": "Prieiga uždrausta. Sluoksnio negalima redaguoti.",
    "edit": "Redaguoti pastabas",
    "save": "Išsaugoti",
    "filter": "Filtruoti pagal peržiūros būseną",
    "all": "Viskas",
    "record": "Įrašas",
    "of": "iš",
    "error1": "Įveskite leistiną skaitinę reikšmę.",
    "layer": "Sluoksnių perjungimas",
    "imageLayer": "Vaizdai",
    "visitLayer": "Peržiūra",
    "notesLayer": "Pastabos",
    "layerError": "Žemėlapyje sluoksnių nėra.",
    "follow": "Sekti",
    "okay": "Gerai",
    "noStat": "Nėra būsenos",
    "left": "Kairėje",
    "up": "Aukštyn",
    "down": "Žemyn",
    "right": "Dešinėje",
    "center": "Centre",
    "press": "Paspausti",
    "scan": "Nuskaityti vaizdą",
    "scale": "Nustatyti mastelį iš naujo",
    "view": "Nustatyti peržiūros sluoksnį iš naujo",
    "search": "Ieškoma...",
    "additionalFilter": "Filtruoti pagal"
  },
  "measurement": {
    "title": "Atvaizdo matavimas",
    "error": "Matavimas nepalaikomas."
  },
  "about": {
    "title": "Apie"
  },
  "addData": {
    "_widgetLabel": "Pridėti duomenis",
    "noOptionsConfigured": "Nesukonfigūruota nei viena parinktis.",
    "tabs": {
      "search": "Paieška",
      "url": "URL",
      "file": "Failas"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Nepavyksta pasiekti sluoksnio.",
      "loadError": "Pridėti duomenų, nepavyksta įkelti:",
      "searchBox": {
        "search": "Paieška",
        "placeholder": "Ieškoti..."
      },
      "bboxOption": {
        "bbox": "Žemėlapio ribose"
      },
      "scopeOptions": {
        "anonymousContent": "Turinys",
        "myContent": "Mano turinys",
        "myOrganization": "Mano organizacija",
        "curated": "Prižiūrima",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Rūšiavimas pagal:",
        "relevance": "Aktualumas",
        "title": "Pavadinimas",
        "owner": "Savininkas",
        "rating": "Vertinimas",
        "views": "Peržiūros",
        "date": "Data",
        "switchOrder": "Pakeisti"
      },
      "typeOptions": {
        "prompt": "Tipas",
        "mapService": "Žemėlapio paslauga",
        "featureService": "Elementų paslauga",
        "imageService": "Vaizdų paslauga",
        "vectorTileService": "Vektorinių išklotinių paslauga",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Rezultatų nėra."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Pirmas",
        "previous": "<",
        "previousTip": "Atgal",
        "next": ">",
        "nextTip": "Pirmyn",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Elementas",
        "itemPlural": "Elementai"
      },
      "item": {
        "actions": {
          "add": "Pridėti",
          "close": "Uždaryti",
          "remove": "Panaikinti",
          "details": "Išsami informacija",
          "done": "Atlikta",
          "editName": "Redaguoti pavadinimą"
        },
        "messages": {
          "adding": "Pridedama...",
          "removing": "Šalinama...",
          "added": "Pridėta",
          "addFailed": "Nepavyko pridėti.",
          "unsupported": "Nepalaikoma"
        },
        "typeByOwnerPattern": "{type}: {owner}",
        "dateFormat": "yyyy MMMM d",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "vertinimai\", \"komentarai\": \"komentarai\", \"peržiūros\": \"peržiūros"
        },
        "types": {
          "Map Service": "Žemėlapio paslauga",
          "Feature Service": "Elementų paslauga",
          "Image Service": "Vaizdų paslauga",
          "Vector Tile Service": "Vektorinių išklotinių paslauga",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tipas",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server  internetinė paslauga",
        "WMS": "WMS OGC internetinė paslauga",
        "WMTS": "WMTS OGC internetinė paslauga",
        "WFS": "WFS OGC internetinė paslauga",
        "KML": "KML failas",
        "GeoRSS": "GeoRSS failas",
        "CSV": "CSV failas"
      },
      "samplesHint": "URL pavyzdys (-iai)"
    },
    "addFromFile": {
      "intro": "Galite nuvilkti arba naršyti vieną iš šių failų tipų:",
      "types": {
        "Shapefile": "Shapefile failą (.zip, ZIP archyvą, kuriame yra visi Shapefile failai)",
        "CSV": "CSV failą (.csv, su adresu arba platuma, ilguma, atskirtą kableliu, kabliataškiu arba tabuliavimo žyme)",
        "KML": "A KML failas (.kml)",
        "GPX": "GPX failą (.gpx, GPS Exchange formato)",
        "GeoJSON": "GeoJSON failą (.geo.json arba .geojson)"
      },
      "generalizeOn": "Atvaizdavimui internete supaprastinkite objektų geometriją",
      "dropOrBrowse": "Nuvilkti arba naršyti",
      "browse": "Naršyti",
      "invalidType": "Šis failo tipas nepalaikomas.",
      "addingPattern": "{filename}: pridedama...",
      "addFailedPattern": "{filename}: pridėti nepavyko",
      "featureCountPattern": "{filename}: {count} elementai (-ų)",
      "invalidTypePattern": "{filename}: šis paslaugos tipas nepalaikomas",
      "maxFeaturesAllowedPattern": "Leidžiama daugiausiai tiek elementų: {count}",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "Įvyko klaida.",
      "kmlProjectionMismatch": "Žemėlapio ir KML sluoksnio koordinatės nesutampa, todėl negalima konvertuoti."
    },
    "layerList": {
      "caption": "Sluoksniai",
      "noLayersAdded": "Nepridėtas nė vienas sluoksnis.",
      "removeLayer": "Pašalinti sluoksnį",
      "back": "Grįžti"
    }
  }
});