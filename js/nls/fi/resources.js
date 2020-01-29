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
    "error": "Karttaa ei voi luoda",
    "licenseError": {
      "message": "Tiliäsi ei ole lisensoitu käyttämään muunneltavissa olevia sovelluksia, jotka eivät ole julkisia. Pyydä organisaatiosi pääkäyttäjää määrittämään sinulle käyttäjätyyppi, joka sisältää keskeiset sovellukset tai keskeisten sovellusten lisäosan lisenssin.",
      "title": "Ei lisenssiä"
    }
  },
  "nav": {
    "close": "Sulje"
  },
  "basemap": {
    "title": "Taustakartat"
  },
  "visit": {
    "title": "Vieraile",
    "visit": "Vieraile-karttatason ominaisuustiedot",
    "image": "Kuvan ominaisuustiedot",
    "addText": "Valitse symboli ja napsauta karttaa.",
    "next": "Seuraava",
    "prev": "Edellinen",
    "error": "Käyttö estetty. Karttatasoa ei voi muokata.",
    "edit": "Muokkaa huomautuksia",
    "save": "Tallenna",
    "filter": "Suodata vierailun tilan mukaan",
    "all": "Kaikki",
    "record": "Tietue",
    "of": "/",
    "error1": "Anna kelvollinen numeroarvo.",
    "layer": "Karttatason vaihto",
    "imageLayer": "Kuva-aineisto",
    "visitLayer": "Vieraile",
    "notesLayer": "Huomautukset",
    "layerError": "Kartassa ei ole karttatasoja.",
    "follow": "Seuranta",
    "okay": "OK",
    "noStat": "Ei tilaa",
    "left": "Vasen",
    "up": "Ylös",
    "down": "Alas",
    "right": "Oikea",
    "center": "Keskitä",
    "press": "Paina",
    "scan": "Skannaa kuva",
    "scale": "Palauta mittakaava",
    "view": "Palauta näkymä",
    "search": "Etsitään...",
    "additionalFilter": "Suodatusperuste"
  },
  "measurement": {
    "title": "Kuvan mitat",
    "error": "Mittausominaisuuksia ei tueta."
  },
  "about": {
    "title": "Tietoja"
  },
  "addData": {
    "_widgetLabel": "Lisää aineistoja",
    "noOptionsConfigured": "Asetuksia ei ole määritetty.",
    "tabs": {
      "search": "Hae",
      "url": "URL-osoite",
      "file": "Tiedosto"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "Karttataso ei ole käytettävissä.",
      "loadError": "AddData, ei voi ladata:",
      "searchBox": {
        "search": "Hae",
        "placeholder": "Etsi..."
      },
      "bboxOption": {
        "bbox": "Kartassa"
      },
      "scopeOptions": {
        "anonymousContent": "Sisältö",
        "myContent": "Oma sisältö",
        "myOrganization": "Organisaationi",
        "curated": "Järjestetty",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Lisätään ryhmää sivustoon...",
        "relevance": "Asiaankuuluvuus",
        "title": "Otsikko",
        "owner": "Omistaja",
        "rating": "Arviointi",
        "views": "Katselukerrat",
        "date": "Päivämäärä",
        "switchOrder": "Vaihda"
      },
      "typeOptions": {
        "prompt": "Tyyppi",
        "mapService": "Karttapalvelu",
        "featureService": "Kohdepalvelu",
        "imageService": "Kuvapalvelu",
        "vectorTileService": "Vektoritiilipalvelu",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Tuloksia ei löytynyt."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Ensimmäinen",
        "previous": "<",
        "previousTip": "Edellinen",
        "next": ">",
        "nextTip": "Seuraava",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Kohde",
        "itemPlural": "Kohteet"
      },
      "item": {
        "actions": {
          "add": "Lisää",
          "close": "Sulje",
          "remove": "Poista",
          "details": "Tiedot",
          "done": "Valmis",
          "editName": "Muokkaa nimeä"
        },
        "messages": {
          "adding": "Lisätään...",
          "removing": "Poistetaan...",
          "added": "Lisätty",
          "addFailed": "Lisäys epäonnistui",
          "unsupported": "Ei tueta"
        },
        "typeByOwnerPattern": "{type} omistajan {owner} mukaan",
        "dateFormat": "d MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "arvioinnit\", \"kommentit\": \"kommentit\", \"katselukerrat\": \"katselukerrat"
        },
        "types": {
          "Map Service": "Karttapalvelu",
          "Feature Service": "Kohdepalvelu",
          "Image Service": "Kuvapalvelu",
          "Vector Tile Service": "Vektoritiilipalvelu",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tyyppi",
      "url": "URL-osoite",
      "types": {
        "ArcGIS": "ArcGIS Server Web Service -palvelu",
        "WMS": "WMS OGC Web Service -palvelu",
        "WMTS": "WMTS OGC Web Service -palvelu",
        "WFS": "WFS OGC Web Service -palvelu",
        "KML": "KML-tiedosto",
        "GeoRSS": "GeoRSS-tiedosto",
        "CSV": "CSV-tiedosto"
      },
      "samplesHint": "URL-malliosoitteet"
    },
    "addFromFile": {
      "intro": "Voit pudottaa jonkin seuraavista tiedostotyypeistä tai selata johonkin seuraavista tiedostotyypeistä:",
      "types": {
        "Shapefile": "Shapefile (.zip, ZIP-arkistotiedosto, joka sisältää kaikki shapefile-tiedostot)",
        "CSV": "CSV-tiedosto (pilkuin, puolipistein tai sarkaimin eroteltu .csv-tiedosto, jossa on osoite tai leveys- tai pituusaste)",
        "KML": "KML-tiedosto (.kml)",
        "GPX": "GPX-tiedosto (.gpx, GPS Exchange Format)",
        "GeoJSON": "GeoJSON-tiedosto (.geo.json tai .geojson)"
      },
      "generalizeOn": "Yleistä kohteet web-käyttöä varten",
      "dropOrBrowse": "Pudota tai selaa",
      "browse": "Selaa",
      "invalidType": "Tiedostotyyppiä ei tueta.",
      "addingPattern": "{filename}: lisätään...",
      "addFailedPattern": "{filename}: lisäys epäonnistui",
      "featureCountPattern": "{filename}: {count} kohdetta",
      "invalidTypePattern": "{filename}: tätä tyyppiä ei tueta",
      "maxFeaturesAllowedPattern": "Kohteiden sallittu enimmäismäärä on {count}",
      "layerNamePattern": "{filename} – {name}",
      "generalIssue": "On ilmennyt ongelma.",
      "kmlProjectionMismatch": "Kartan koordinaatistotieto ja KML-karttataso eivät täsmää, eikä muunnosta voi tehdä asiakaskoneessa."
    },
    "layerList": {
      "caption": "Karttatasot",
      "noLayersAdded": "Karttatasoja ei ole lisätty.",
      "removeLayer": "Poista karttataso",
      "back": "Edellinen"
    }
  }
});