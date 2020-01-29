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
    "error": "맵을 생성할 수 없음",
    "licenseError": {
      "message": "귀하의 계정에는 공개 상태가 아닌 구성 설정 앱을 사용할 수 있는 라이선스가 없습니다. 필수 앱 또는 애드온 필수 앱 라이선스가 포함된 사용자 유형을 업무 지시하려면 기관 관리자에게 문의하세요.",
      "title": "라이선스가 없음"
    }
  },
  "nav": {
    "close": "닫기"
  },
  "basemap": {
    "title": "베이스맵 갤러리"
  },
  "visit": {
    "title": "방문",
    "visit": "방문 속성",
    "image": "이미지 속성",
    "addText": "맵에서 심볼을 선택한 후 클릭합니다.",
    "next": "다음",
    "prev": "이전",
    "error": "접근 거부. 레이어는 편집할 수 없습니다.",
    "edit": "참고 사항 편집",
    "save": "저장",
    "filter": "방문 상태별 필터링",
    "all": "모두",
    "record": "레코드",
    "of": "/",
    "error1": "올바른 숫자 값을 입력하세요.",
    "layer": "레이어 전환",
    "imageLayer": "영상",
    "visitLayer": "방문",
    "notesLayer": "참고 사항",
    "layerError": "맵에 레이어가 없습니다.",
    "follow": "후속 작업",
    "okay": "확인",
    "noStat": "상태 없음",
    "left": "왼쪽",
    "up": "위로",
    "down": "아래",
    "right": "오른쪽",
    "center": "가운데 맞춤",
    "press": "누르기",
    "scan": "이미지 스캔",
    "scale": "축척 재설정",
    "view": "보기 재설정",
    "search": "검색 중...",
    "additionalFilter": "필터 기준"
  },
  "measurement": {
    "title": "이미지 측정",
    "error": "측정 기능이 지원되지 않습니다."
  },
  "about": {
    "title": "정보"
  },
  "addData": {
    "_widgetLabel": "데이터 추가",
    "noOptionsConfigured": "구성된 옵션이 없습니다.",
    "tabs": {
      "search": "검색",
      "url": "URL",
      "file": "파일"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "레이어에 접근할 수 없습니다.",
      "loadError": "데이터 추가, 로드할 수 없음:",
      "searchBox": {
        "search": "검색",
        "placeholder": "검색..."
      },
      "bboxOption": {
        "bbox": "맵 내부"
      },
      "scopeOptions": {
        "anonymousContent": "콘텐츠",
        "myContent": "내 콘텐츠",
        "myOrganization": "내 기관",
        "curated": "선별됨",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "정렬 기준:",
        "relevance": "관련성",
        "title": "제목",
        "owner": "소유자",
        "rating": "평점",
        "views": "뷰",
        "date": "날짜",
        "switchOrder": "전환"
      },
      "typeOptions": {
        "prompt": "유형",
        "mapService": "맵 서비스",
        "featureService": "피처 서비스",
        "imageService": "이미지 서비스",
        "vectorTileService": "벡터 타일 서비스",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "결과를 찾을 수 없습니다."
      },
      "paging": {
        "first": "<<",
        "firstTip": "첫 번째",
        "previous": "<",
        "previousTip": "이전",
        "next": ">",
        "nextTip": "다음",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "항목",
        "itemPlural": "항목"
      },
      "item": {
        "actions": {
          "add": "추가",
          "close": "닫기",
          "remove": "제거",
          "details": "세부정보",
          "done": "완료",
          "editName": "이름 편집"
        },
        "messages": {
          "adding": "추가 중...",
          "removing": "제거 중...",
          "added": "추가되었습니다.",
          "addFailed": "추가하지 못함",
          "unsupported": "지원하지 않음"
        },
        "typeByOwnerPattern": "{type} 소유자 {owner}",
        "dateFormat": "MMMM d, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "맵 서비스",
          "Feature Service": "피처 서비스",
          "Image Service": "이미지 서비스(Image Service)",
          "Vector Tile Service": "벡터 타일 서비스",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "유형",
      "url": "URL",
      "types": {
        "ArcGIS": "ArcGIS Server 웹 서비스",
        "WMS": "WMS OGC 웹 서비스",
        "WMTS": "WMTS OGC 웹 서비스",
        "WFS": "WFS OGC 웹 서비스",
        "KML": "KML 파일",
        "GeoRSS": "GeoRSS 파일",
        "CSV": "CSV 파일"
      },
      "samplesHint": "샘플 URL"
    },
    "addFromFile": {
      "intro": "다음 파일 유형을 드롭하거나 찾아볼 수 있습니다.",
      "types": {
        "Shapefile": "쉐이프파일(.zip, 모든 쉐이프 파일이 포함된 ZIP 아카이브)",
        "CSV": "CSV 파일(.csv, 주소 또는 위도/경도가 포함된 파일, 세미콜론 또는 탭으로 구분된 파일)",
        "KML": "KML 파일(.kml)",
        "GPX": "GPX 파일(.gpx, GPS Exchange 형식)",
        "GeoJSON": "GeoJSON 파일(.geo.json 또는 .geojson)"
      },
      "generalizeOn": "웹 보기를 위한 피처 간략화",
      "dropOrBrowse": "드롭 또는 찾아보기",
      "browse": "찾아보기",
      "invalidType": "이 파일 형식은 지원되지 않습니다.",
      "addingPattern": "{filename}: 추가 중...",
      "addFailedPattern": "{filename}: 추가 실패",
      "featureCountPattern": "{filename}: 피처 {count}개",
      "invalidTypePattern": "{filename}: 이 형식은 지원되지 않음",
      "maxFeaturesAllowedPattern": "최대 {count}개 피처가 허용됨",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "문제가 발생했습니다.",
      "kmlProjectionMismatch": "맵과 KML 레이어의 공간 참조가 일치하지 않으며 클라이언트에서 변환을 수행할 수 없습니다."
    },
    "layerList": {
      "caption": "레이어",
      "noLayersAdded": "추가된 레이어가 없습니다.",
      "removeLayer": "레이어 제거",
      "back": "뒤로"
    }
  }
});