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
    "error": "Não foi possível criar o mapa",
    "licenseError": {
      "message": "Sua conta não está licenciada para utilizar Aplicativos Configuráveis que não sejam públicos. Solicite ao administrador da sua organização que lhe atribua um tipo de usuário que inclua os Aplicativos Fundamentais ou uma licença complementar dos Aplicativos Fundamentais.",
      "title": "Não Licenciado"
    }
  },
  "nav": {
    "close": "Fechar"
  },
  "basemap": {
    "title": "Galeria de Mapa Base"
  },
  "visit": {
    "title": "Visitar",
    "visit": "Visitar Atributos",
    "image": "Atributos da imagem",
    "addText": "Selecione um símbolo e clique no mapa.",
    "next": "Próximo",
    "prev": "Anterior",
    "error": "Acesso negado. A camada não pode ser editada.",
    "edit": "Editar Anotações",
    "save": "Salvar",
    "filter": "Filtrar por status de visita",
    "all": "Todos",
    "record": "Registro",
    "of": "de",
    "error1": "Insira um valor numérico válido.",
    "layer": "Alternar Camada",
    "imageLayer": "Imagens",
    "visitLayer": "Visitar",
    "notesLayer": "Notas",
    "layerError": "Nenhuma camada presente no mapa.",
    "follow": "Acompanhamento",
    "okay": "OK",
    "noStat": "Sem Status",
    "left": "Esquerda",
    "up": "Para Cima",
    "down": "Para Baixo",
    "right": "Direita",
    "center": "Centralizar",
    "press": "Imprensa",
    "scan": "Escanear Imagem",
    "scale": "Redefinir Escala",
    "view": "Redefinir Viualização",
    "search": "Pesquisando...",
    "additionalFilter": "Filtrar por"
  },
  "measurement": {
    "title": "Medida da Imagem",
    "error": "Recursos de Medição não suportados."
  },
  "about": {
    "title": "Sobre"
  },
  "addData": {
    "_widgetLabel": "Adicionar Dados",
    "noOptionsConfigured": "Nenhuma opção foi configurada.",
    "tabs": {
      "search": "Pesquisar",
      "url": "URL",
      "file": "Arquivo"
    },
    "search": {
      "featureLayerTitlePattern": "{serviceName} - {layerName}",
      "layerInaccessible": "A camada é inacessível.",
      "loadError": "AddData, não é possível carregar:",
      "searchBox": {
        "search": "Pesquisar",
        "placeholder": "Pesquisar..."
      },
      "bboxOption": {
        "bbox": "Dentro do mapa"
      },
      "scopeOptions": {
        "anonymousContent": "Conteúdo",
        "myContent": "Meu Conteúdo",
        "myOrganization": "Minha Organização",
        "curated": "Curadoria",
        "ArcGISOnline": "ArcGIS Online"
      },
      "sortOptions": {
        "prompt": "Classificar Por:",
        "relevance": "Relevância",
        "title": "Título",
        "owner": "Proprietário",
        "rating": "Classificação",
        "views": "Visualizações",
        "date": "Data",
        "switchOrder": "Trocar"
      },
      "typeOptions": {
        "prompt": "Tipo",
        "mapService": "Serviço de Mapa",
        "featureService": "Serviço da Feição",
        "imageService": "Serviço de Imagem",
        "vectorTileService": "Serviço de Mosaico do Vetor",
        "kml": "KML",
        "wms": "WMS"
      },
      "resultsPane": {
        "noMatch": "Nenhum resultado foi localizado."
      },
      "paging": {
        "first": "<<",
        "firstTip": "Primeiro",
        "previous": "<",
        "previousTip": "Anterior",
        "next": ">",
        "nextTip": "Próximo",
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
          "done": "Concluído",
          "editName": "Editar Nome"
        },
        "messages": {
          "adding": "Adicionando...",
          "removing": "Removendo...",
          "added": "Adicionado",
          "addFailed": "Falha ao adicionar",
          "unsupported": "Sem Suporte"
        },
        "typeByOwnerPattern": "{type} por {owner}",
        "dateFormat": "d MMMM yyyy",
        "datePattern": "{date}",
        "ratingsCommentsViewsPattern": "{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
        "ratingsCommentsViewsLabels": {
          "ratings": "ratings\", \"comments\": \"comments\", \"views\": \"views"
        },
        "types": {
          "Map Service": "Serviço de Mapa",
          "Feature Service": "Serviço da Feição",
          "Image Service": "Serviço de Imagem",
          "Vector Tile Service": "Serviço de Mosaico do Vetor",
          "WMS": "WMS",
          "KML": "KML"
        }
      }
    },
    "addFromUrl": {
      "type": "Tipo",
      "url": "URL",
      "types": {
        "ArcGIS": "Um Serviço da Web do ArcGIS Server",
        "WMS": "Um Serviço da Web do WMS OGC",
        "WMTS": "Um Serviço da Web do WMTS OGC",
        "WFS": "Um Serviço da Web do WFS OGC",
        "KML": "Um Arquivo KML",
        "GeoRSS": "Um Arquivo GeoRSS",
        "CSV": "Um Arquivo CSV"
      },
      "samplesHint": "URLs de Amostra"
    },
    "addFromFile": {
      "intro": "Você pode soltar ou procurar por um dos tipos dos arquivos seguintes:",
      "types": {
        "Shapefile": "Um Shapefile (.zip, arquivo ZIP contendo todos os arquivos de shapefile)",
        "CSV": "Um Arquivo de CSV (.csv, com endereço ou latitude, longitude e delimitado por vírgula, dois pontos ou barra)",
        "KML": "Um Arquivo KML (.kml)",
        "GPX": "Um Arquivo de GPX (.gpx, Formato de Intercãmbio do GPS)",
        "GeoJSON": "Um Arquivo de GeoJSON (.geo.json ou .geojson)"
      },
      "generalizeOn": "Generalizar feições para visualização da web",
      "dropOrBrowse": "Soltar ou Procurar",
      "browse": "Procurar",
      "invalidType": "Este tipo de serviço não tem suporte.",
      "addingPattern": "{filename}: adicionando...",
      "addFailedPattern": "{filename}: falha ao adicionar",
      "featureCountPattern": "{filename}: {count} feições",
      "invalidTypePattern": "{filename}: este tipo não é suportado",
      "maxFeaturesAllowedPattern": "Um máximo de {count} feições são permitidas",
      "layerNamePattern": "{filename} - {name}",
      "generalIssue": "Ocorreu um problema.",
      "kmlProjectionMismatch": "A referência espacial da camada de KML e de mapa não corresponde e a conversão não pode ser feita no cliente."
    },
    "layerList": {
      "caption": "Camadas",
      "noLayersAdded": "Nenhuma camada foi adicionada.",
      "removeLayer": "Remover Camada",
      "back": "Voltar"
    }
  }
});