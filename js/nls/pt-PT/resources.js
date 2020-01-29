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
    "error": "Não foi possível criar mapa",
    "licenseError": {
      "message": "A sua conta não está licenciada para usar aplicações configuráveis não públicas. Peça ao administrador da sua organização para lhe atribuir um tipo de utilizador que inclua a licença para aplicações essenciais ou aplicações essenciais complementares.",
      "title": "Não licenciado"
    }
  },
  "nav": {
    "close": "Fechar"
  },
  "basemap": {
    "title": "Galeria de Mapas Base"
  },
  "visit": {
    "title": "Visita",
    "visit": "Atributos de Visita",
    "image": "Atributos de Imagem",
    "addText": "Selecione um símbolo e clique no mapa.",
    "next": "Seguinte",
    "prev": "Anterior",
    "error": "Acesso negado. Não é possível editar camada.",
    "edit": "Editar Notas",
    "save": "Guardar",
    "filter": "Filtrar por estado de visita",
    "all": "Todos",
    "record": "Registo",
    "of": "de",
    "error1": "Por favor, introduza um valor numérico válido.",
    "layer": "Alternância de Camadas",
    "imageLayer": "Imagem",
    "visitLayer": "Visita",
    "notesLayer": "Notas",
    "layerError": "Não se encontram quaisquer camadas presentes no mapa.",
    "follow": "Acompanhamento",
    "okay": "OK",
    "noStat": "Sem Estado",
    "left": "Esquerda",
    "up": "Para Cima",
    "down": "Para Baixo",
    "right": "Direita",
    "center": "Centrar",
    "press": "Pressione",
    "scan": "Analisar imagem",
    "scale": "Reinicializar escala",
    "view": "Reinicializar visualização",
    "search": "A pesquisar...",
    "additionalFilter": "Filtrar por"
  },
  "measurement": {
    "title": "Medição de Imagens",
    "error": "Funcionalidades de Mensuração não suportadas."
  },
  "about": {
    "title": "Sobre"
  },
  "addData": {
    "_widgetLabel": "Adicionar Dados",
    "noOptionsConfigured": "Não foram configuradas quaisquer opções.",
    "tabs": {
      "search": "Pesquisar",
      "url": "URL",
      "file": "Ficheiro"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "A camada encontra-se inacessível.",
      "loadError": "AddData, impossível carregar:",
      "searchBox": {
        "search": "Pesquisar",
        "placeholder": "Pesquisa..."
      },
      "bboxOption": {
        "bbox": "Dentro do mapa"
      },
      "scopeOptions": {
        "anonymousContent": "Conteúdo",
        "myContent": "O Meu Conteúdo",
        "myOrganization": "A Minha Organização",
        "curated": "Curado",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Ordenar por:",
        "relevance": "Relevância",
        "title": "Título",
        "owner": "Proprietário",
        "rating": "Avaliação",
        "views": "Visualizações",
        "date": "Data",
        "switchOrder": "Mudar"
      },
      "typeOptions": {
        "prompt": "Tipo",
        "mapService": "Serviço de Mapas",
        "featureService": "Serviço de Elementos",
        "imageService": "Serviço de Imagem",
        "vectorTileService": "Serviço de Vector de Mosaico",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Não foram encontrados quaisquer resultados."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Primeiro",
        "previous": "<",
        "previousTip": "Anterior",
        "next": ">",
        "nextTip": "Seguinte",
        "pagePattern": "{page}"
      },
      "resultCount": {
        "countPattern": "{count} {type}",
        "itemSingular": "Item",
        "itemPlural": "Itens"
      },
      "item": {
        "actions": {
          "add": "Adicionar",
          "close": "Fechar",
          "remove": "Remover",
          "details": "Detalhes",
          "done": "Terminado",
          "editName": "Editar Nome"
        },
        "messages": {
          "adding": "A adicionar...",
          "removing": "A remover...",
          "added": "Adicionado",
          "addFailed": "Não foi possível adicionar",
          "unsupported": "Não suportado"
        },
        "typeByOwnerPattern": "{type} por {owner}",
        "dateFormat": "d MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Serviço de Mapas",
          "Feature Service": "Serviço de Elementos",
          "Image Service": "Serviço de Imagem",
          "Vector Tile Service": "Serviço de Vector de Mosaico",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tipo",
      "url": "URL",
      "types": {
        "ArcGIS": "Um Serviço Web de ArcGIS Server",
        "WMS": "Um Serviço Web de WMS OGC",
        "WMTS": "Um Serviço Web de WMTS OGC",
        "WFS": "Um Serviço Web de WFS OGC",
        "KML": "Um Ficheiro KML",
        "GeoRSS": "Um Ficheiro GeoRSS",
        "CSV": "Um Ficheiro CSV"
      },
      "samplesHint": "URL(s) de Exemplo"
    },
    "addFromFile": {
      "intro": "Pode largar ou procurar um dos seguintes tipos de ficheiro:",
      "types": {
        "Shapefile": "Um Shapefile (.zip, arquivo ZIP que contém todos os ficheiros shapefile)",
        "CSV": "Um Ficheiro CSV (.csv, com endereço ou latitude, longitude e delimitado por vírgulas, pontos-e-vírgula ou separadores)",
        "KML": "Um Ficheiro KML (.kml)",
        "GPX": "Um Ficheiro GPX (.gpx, GPS Exchange Format)",
        "GeoJSON": "Um Ficheiro GeoJSON File (.geo.json ou .geojson)"
      },
      "generalizeOn": "Generalizar elementos para visualização na web",
      "dropOrBrowse": "Largar ou Procurar",
      "browse": "Procurar",
      "invalidType": "Este tipo de serviço não tem suporte.",
      "addingPattern": "{filename}: a adicionar...",
      "addFailedPattern": "{filename}: adicionar falhou",
      "featureCountPattern": "{filename}: {count} elemento(s)",
      "invalidTypePattern": "{filename}: este tipo não é suportado",
      "maxFeaturesAllowedPattern": "É permitido o máximo de {count} elementos",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Ocorreu um problema.",
      "kmlProjectionMismatch": "A referência espacial do mapa e a camada KML não correspondem, e a conversão não pode ser efetuada no cliente."
    },
    "layerList": {
      "caption": "Camadas",
      "noLayersAdded": "Não foram adicionadas quaisquer camadas.",
      "removeLayer": "Remover Camada",
      "back": "Voltar"
    }
  }
});