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
    "error": "Nie można utworzyć mapy",
    "licenseError": {
      "message": "Twoje konto nie jest licencjonowane do korzystania z aplikacji konfigurowalnych, które nie są publiczne. Poproś administratora instytucji o przypisanie typu użytkownika, który obejmuje licencję na kluczowe aplikacje lub licencję na kluczowe aplikacje dodatkowe.",
      "title": "Nie licencjonowano"
    }
  },
  "nav": {
    "close": "Zamknij"
  },
  "basemap": {
    "title": "Galeria map bazowych"
  },
  "visit": {
    "title": "Odwiedź",
    "visit": "Atrybuty warstwy Odwiedź",
    "image": "Atrybuty obrazu",
    "addText": "Wybierz symbol i kliknij na mapie.",
    "next": "Następny",
    "prev": "Poprzedni",
    "error": "Odmowa dostępu. Warstw nie można edytować.",
    "edit": "Edytuj notatki",
    "save": "Zapisz",
    "filter": "Filtruj wg statusu odwiedziny",
    "all": "Wszystkie",
    "record": "Rekord",
    "of": "z",
    "error1": "Wpisz prawidłową wartość liczbową.",
    "layer": "Przełączanie warstw",
    "imageLayer": "Zobrazowania",
    "visitLayer": "Odwiedź",
    "notesLayer": "Uwagi",
    "layerError": "Brak warstw na mapie.",
    "follow": "Kontynuuj",
    "okay": "Ok",
    "noStat": "Brak statusu",
    "left": "Lewy",
    "up": "Górny",
    "down": "Dolny",
    "right": "Prawy",
    "center": "Środek",
    "press": "Naciśnij przycisk",
    "scan": "Skanuj obraz",
    "scale": "Resetuj skalę",
    "view": "Resetuj widok",
    "search": "Wyszukiwanie...",
    "additionalFilter": "Filtruj według"
  },
  "measurement": {
    "title": "Pomiar obrazu",
    "error": "Funkcja pomiarów geodezyjnych nie jest obsługiwana."
  },
  "about": {
    "title": "O"
  },
  "addData": {
    "_widgetLabel": "Dodaj dane",
    "noOptionsConfigured": "Nie skonfigurowano żadnych opcji.",
    "tabs": {
      "search": "Wyszukaj",
      "url": "Adres URL",
      "file": "Plik"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} — {layerName}",
      "layerInaccessible": "Warstwa jest niedostępna.",
      "loadError": "AddData, nie można wczytać:",
      "searchBox": {
        "search": "Wyszukaj",
        "placeholder": "Przeszukaj…"
      },
      "bboxOption": {
        "bbox": "Na mapie"
      },
      "scopeOptions": {
        "anonymousContent": "Zawartość",
        "myContent": "Moje zasoby",
        "myOrganization": "Moja instytucja",
        "curated": "Naprawione",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Sortuj według:",
        "relevance": "Dopasowanie",
        "title": "Tytuł",
        "owner": "Właściciel",
        "rating": "Ocena",
        "views": "Widoki",
        "date": "Data",
        "switchOrder": "Przełącz"
      },
      "typeOptions": {
        "prompt": "Typ",
        "mapService": "Usługa mapowa",
        "featureService": "Usługa obiektów",
        "imageService": "Usługa rastrowa",
        "vectorTileService": "Usługa kafli wektorowych",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nie znaleziono wyników."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Pierwszy",
        "previous": "<",
        "previousTip": "Poprzedni",
        "next": ">",
        "nextTip": "Następny",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Element",
        "itemPlural": "Atrybuty"
      },
      "item": {
        "actions": {
          "add": "Dodaj",
          "close": "Zamknij",
          "remove": "Usuń",
          "details": "Szczegóły",
          "done": "Wykonano",
          "editName": "Edytuj nazwę"
        },
        "messages": {
          "adding": "Dodawanie...",
          "removing": "Usuwanie...",
          "added": "Dodano",
          "addFailed": "Dodawanie nie powiodło się",
          "unsupported": "Nieobsługiwane"
        },
        "typeByOwnerPattern": "{type} wg {owner}",
        "dateFormat": "dd MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "oceny\", \"komentarze\": \"komentarzy\", \"widoki\": \"widoków"
        },
        "types": {
          "Map Service": "Usługa mapowa",
          "Feature Service": "Usługa obiektów",
          "Image Service": "Usługa rastrowa",
          "Vector Tile Service": "Usługa kafli wektorowych",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Typ",
      "url": "Adres URL",
      "types": {
        "ArcGIS": "Usługa internetowa ArcGIS Server",
        "WMS": "Usługa internetowa WMS OGC",
        "WMTS": "Usługa internetowa WMTS OGC",
        "WFS": "Usługa internetowa WFS OGC",
        "KML": "Plik KML",
        "GeoRSS": "Plik GeoRSS",
        "CSV": "Plik CSV"
      },
      "samplesHint": "Przykład adresu/-ów URL"
    },
    "addFromFile": {
      "intro": "Można upuścić lub wyszukać jeden z następujących typów plików:",
      "types": {
        "Shapefile": "Plik shape (zip., archiwum ZIP zawierające wszystkie pliki shape)",
        "CSV": "Plik CSV (csv., z adresem lub szerokością i długością geograficzną; wartości rozdzielane przecinkami, średnikami lub znakami tabulacji)",
        "KML": "Plik KML (.kml)",
        "GPX": "Plik GPX (.gpx, format wymiany danych GPS)",
        "GeoJSON": "Plik GeoJSON (.geo.json lub .geojson)"
      },
      "generalizeOn": "Zgeneralizuj obiekty w celu wyświetlenia w Internecie",
      "dropOrBrowse": "Upuść lub wyszukaj",
      "browse": "Przeglądaj",
      "invalidType": "Ten typ pliku nie jest obsługiwany.",
      "addingPattern": "{filename}: dodawanie...",
      "addFailedPattern": "{filename}: dodawanie nie powiodło się",
      "featureCountPattern": "{filename}: liczba obiektów: {count}",
      "invalidTypePattern": "{filename}: ten typ nie jest obsługiwany",
      "maxFeaturesAllowedPattern": "Maksymalna dozwolona liczba obiektów: {count}",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Wystąpił problem.",
      "kmlProjectionMismatch": "Odniesienie przestrzenne mapy i warstwa KML nie są zgodne i konwersja nie może być przeprowadzona po stronie klienta."
    },
    "layerList": {
      "caption": "Warstwy",
      "noLayersAdded": "Nie dodano żadnych warstw.",
      "removeLayer": "Usuń warstwę",
      "back": "Wstecz"
    }
  }
});