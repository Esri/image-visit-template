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
    "error": "No se puede crear el mapa",
    "licenseError": {
      "message": "Su cuenta no tiene licencia para utilizar aplicaciones configurables que no son públicas. Pídale al administrador de su organización que le asigne un tipo de usuario que incluya aplicaciones esenciales o una licencia complementaria de aplicaciones esenciales.",
      "title": "Sin licencia"
    }
  },
  "nav": {
    "close": "Cerrar"
  },
  "basemap": {
    "title": "Galería de mapas base"
  },
  "visit": {
    "title": "Visitar",
    "visit": "Atributos de visita",
    "image": "Atributos de imágenes",
    "addText": "Seleccione un símbolo y haga clic en el mapa.",
    "next": "Siguiente",
    "prev": "Anterior",
    "error": "Acceso denegado. La capa no se puede editar.",
    "edit": "Editar notas",
    "save": "Guardar",
    "filter": "Filtrar por estado de visita",
    "all": "Todo",
    "record": "Registro",
    "of": "de",
    "error1": "Introduzca un valor numérico válido.",
    "layer": "Activar/desactivar capa",
    "imageLayer": "Imágenes",
    "visitLayer": "Visitar",
    "notesLayer": "Notas",
    "layerError": "No hay capas presentes en el mapa.",
    "follow": "Seguimiento",
    "okay": "Aceptar",
    "noStat": "Sin estado",
    "left": "Izquierda",
    "up": "Subir",
    "down": "Abajo",
    "right": "Derecha",
    "center": "Centro",
    "press": "Presionar",
    "scan": "Escanear imagen",
    "scale": "Restablecer escala",
    "view": "Restablecer vista",
    "search": "Buscando...",
    "additionalFilter": "Filtrar por"
  },
  "measurement": {
    "title": "Medición de imagen",
    "error": "Funciones de medición no compatibles."
  },
  "about": {
    "title": "Acerca de"
  },
  "addData": {
    "_widgetLabel": "Agregar datos",
    "noOptionsConfigured": "No se ha configurado ninguna opción.",
    "tabs": {
      "search": "Buscar",
      "url": "Dirección URL",
      "file": "Archivo"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "No se puede acceder a la capa.",
      "loadError": "AddData, no se puede cargar:",
      "searchBox": {
        "search": "Buscar",
        "placeholder": "Buscar..."
      },
      "bboxOption": {
        "bbox": "En el mapa"
      },
      "scopeOptions": {
        "anonymousContent": "Contenido",
        "myContent": "Mi contenido",
        "myOrganization": "Mi organización",
        "curated": "Depurado",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Ordenar por:",
        "relevance": "Relevancia",
        "title": "Título",
        "owner": "Propietario",
        "rating": "Calificación",
        "views": "Vistas",
        "date": "Date",
        "switchOrder": "Cambiar"
      },
      "typeOptions": {
        "prompt": "Tipo",
        "mapService": "Servicio de mapas",
        "featureService": "Servicio de entidades",
        "imageService": "Servicio de imágenes",
        "vectorTileService": "Servicio de teselas vectoriales",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "No se han encontrado resultados."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Primero",
        "previous": "<",
        "previousTip": "Anterior",
        "next": ">",
        "nextTip": "Siguiente",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Elemento",
        "itemPlural": "Elementos"
      },
      "item": {
        "actions": {
          "add": "Agregar",
          "close": "Cerrar",
          "remove": "Eliminar",
          "details": "Detalles",
          "done": "Listo",
          "editName": "Editar nombre"
        },
        "messages": {
          "adding": "Agregando...",
          "removing": "Eliminando...",
          "added": "Agregado",
          "addFailed": "Error al agregar",
          "unsupported": "No se admite"
        },
        "typeByOwnerPattern": "{type} de {owner}",
        "dateFormat": "MMMM d, yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "calificaciones\", \"comentarios\": \"comentarios\", \"vistas\": \"vistas"
        },
        "types": {
          "Map Service": "Servicio de mapas",
          "Feature Service": "Servicio de entidades",
          "Image Service": "Servicio de imágenes",
          "Vector Tile Service": "Servicio de teselas vectoriales",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tipo",
      "url": "Dirección URL",
      "types": {
        "ArcGIS": "Un servicio web de ArcGIS for Server",
        "WMS": "Un servicio web de WMS OGC",
        "WMTS": "Un servicio web de WMTS OGC",
        "WFS": "Un servicio Web de WFS OGC",
        "KML": "Un archivo KML",
        "GeoRSS": "Un archivo GeoRSS",
        "CSV": "Un archivo CSV"
      },
      "samplesHint": "Direcciones URL de muestra"
    },
    "addFromFile": {
      "intro": "Puede colocar o buscar uno de los tipos de archivo siguientes:",
      "types": {
        "Shapefile": "Un Shapefile (.zip, archivo ZIP que contiene todos los archivos shapefile)",
        "CSV": "Un archivo CSV (.csv, con dirección o latitud, longitud y delimitados por comas, puntos o tabuladores)",
        "KML": "Un archivo KML (.kml)",
        "GPX": "Un archivo (.gpx, formato de intercambio GPS)",
        "GeoJSON": "Un archivo GeoJSON (.geo.json o .geojson)"
      },
      "generalizeOn": "Generalizar entidades para visualización web",
      "dropOrBrowse": "Colocar o buscar",
      "browse": "Examinar",
      "invalidType": "Este tipo de archivo no es compatible.",
      "addingPattern": "{filename}: agregando...",
      "addFailedPattern": "{filename}: error al agregar",
      "featureCountPattern": "{filename}: {count} entidad(es)",
      "invalidTypePattern": "{filename}: este tipo no es compatible",
      "maxFeaturesAllowedPattern": "Se permite un máximo de {count} entidades",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Se ha producido un problema.",
      "kmlProjectionMismatch": "La referencia espacial del mapa y la capa KML no coinciden y no es posible hacer la conversión en el cliente."
    },
    "layerList": {
      "caption": "Capas",
      "noLayersAdded": "No se ha agregado ninguna capa.",
      "removeLayer": "Quitar capa",
      "back": "Atrás"
    }
  }
});