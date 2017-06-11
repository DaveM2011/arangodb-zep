namespace ArangoDBClient;

class GraphHandler extends Handler
{
    const ENTRY_GRAPH = "graph";
    const OPTION_REVISION = "revision";
    const OPTION_VERTICES = "vertices";
    const OPTION_EDGES = "edges";
    const OPTION_KEY = "_key";
    const OPTION_COLLECTION = "collection";
    const OPTION_COLLECTIONS = "collections";
    const KEY_FROM = "_from";
    const KEY_TO = "_to";
    const OPTION_NAME = "name";
    const OPTION_EDGE_DEFINITION = "edgeDefinition";
    const OPTION_EDGE_DEFINITIONS = "edgeDefinitions";
    const OPTION_ORPHAN_COLLECTIONS = "orphanCollections";
    const OPTION_DROP_COLLECTION = "dropCollection";
    protected cache;
    protected cacheEnabled = false;
    protected batchsize;
    protected count;
    protected limit;
    public function createGraph(<Graph> graph) -> array
    {
        var edgeDefinitions, ed, params, url, response, json;
    
        let edgeDefinitions =  [];
        for ed in graph->getEdgeDefinitions() {
            let edgeDefinitions[] =  ed->transformToArray();
        }
        let params =  [self::OPTION_NAME : graph->getKey(), self::OPTION_EDGE_DEFINITIONS : edgeDefinitions, self::OPTION_ORPHAN_COLLECTIONS : graph->getOrphanCollections()];
        let url =  Urls::URL_GRAPH;
        let response =  this->getConnection()->post(url, this->json_encode_wrapper(params));
        let json =  response->getJson();
        graph->setInternalId(json["graph"][Graph::ENTRY_ID]);
        graph->set(Graph::ENTRY_KEY, json["graph"][self::OPTION_NAME]);
        graph->setRevision(json["graph"][Graph::ENTRY_REV]);
        return graph->getAll();
    }
    
    public function getGraph(string graph, array options = [])
    {
        var url, response, e, data, result;
    
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph]);
        try {
            let response =  this->getConnection()->get(url);
        } catch Exception, e {
            throw e;
            return false;
        }
        let data =  response->getJson();
        let options["_isNew"] = false;
        let result =  Graph::createFromArray(data["graph"], options);
        result->set(Graph::ENTRY_KEY, data["graph"][self::OPTION_NAME]);
        return result;
    }
    
    public function setBatchsize(int batchsize) -> void
    {
        let this->batchsize = batchsize;
    }
    
    public function setCount(int count) -> void
    {
        let this->count = count;
    }
    
    public function setLimit(int limit) -> void
    {
        let this->limit = limit;
    }
    
    public function properties(graph) -> bool
    {
        var url, result;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_DOCUMENT . "/_graphs", [graph]);
        let result =  this->getConnection()->get(url);
        return result->getJson();
    }
    
    public function dropGraph(graph, bool dropCollections = true) -> bool
    {
        var url;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph]);
        let url =  UrlHelper::appendParamsUrl(url, ["dropCollections" : dropCollections]);
        this->getConnection()->delete(url);
        return true;
    }
    
    public function addOrphanCollection(graph, string orphanCollection) -> <Graph>
    {
        var url, options = [], data, response, e, result;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX]);
        let data =  [self::OPTION_COLLECTION : orphanCollection];
        try {
            let response =  this->getConnection()->post(url, this->json_encode_wrapper(data));
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        let data =  response->getJson();
        let options["_isNew"] = false;
        let result =  Graph::createFromArray(data["graph"], options);
        result->set(Graph::ENTRY_KEY, data["graph"][self::OPTION_NAME]);
        return result;
    }
    
    public function deleteOrphanCollection(graph, string orphanCollection, boolean dropCollection = false) -> <Graph>
    {
        var url, options = [], data, response, e, result;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX, orphanCollection]);
        let data =  [self::OPTION_DROP_COLLECTION : dropCollection];
        let url =  UrlHelper::appendParamsUrl(url, data);
        try {
            let response =  this->getConnection()->delete(url);
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        let data =  response->getJson();
        let options["_isNew"] = false;
        let result =  Graph::createFromArray(data["graph"], options);
        result->set(Graph::ENTRY_KEY, data["graph"][self::OPTION_NAME]);
        return result;
    }
    
    public function getVertexCollections(graph, array options = []) -> array
    {
        var excludeOrphans, _useCache, url, connection, batchCaptureMode, response, e, data;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let excludeOrphans =  false;
        let _useCache =  this->cacheEnabled;
        if options && isset options["excludeOrphans"] && !is_bool(options["excludeOrphans"]) {
            let excludeOrphans =  UrlHelper::getBoolString(options["excludeOrphans"]);
        }
        if _useCache === true {
            if excludeOrphans === true && !empty this->cache[graph]["excludeOrphans"]["result"] {
                return this->cache[graph]["excludeOrphans"]["vertexCollections"];
            } else {
                if !empty this->cache[graph]["vertexCollections"] {
                    return this->cache[graph]["vertexCollections"];
                }
            }
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX]);
        if excludeOrphans === true {
            let url =  UrlHelper::appendParamsUrl(url, ["excludeOrphans" : excludeOrphans]);
        }
        let connection =  this->getConnection();
        let batchCaptureMode =  connection->isInBatchCaptureMode();
        if batchCaptureMode === true {
            this->getConnection()->setBatchRequest(false);
        }
        try {
            let response =  this->getConnection()->get(url);
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        if batchCaptureMode === true {
            this->getConnection()->setBatchRequest(true);
        }
        let data =  response->getJson();
        let data = data[self::OPTION_COLLECTIONS];
        sort(data);
        if _useCache === true {
            if excludeOrphans === true && !empty this->cache[graph]["excludeOrphans"]["vertexCollections"] {
                let this->cache[graph]["excludeOrphans"]["vertexCollections"] = data;
            } else {
                let this->cache[graph]["vertexCollections"] = data;
            }
        }
        return data;
    }
    
    public function addEdgeDefinition(graph, <EdgeDefinition> edgeDefinition) -> <Graph>
    {
        var url, options = [], data, response, e, result;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE]);
        let data =  edgeDefinition->transformToArray();
        try {
            let response =  this->getConnection()->post(url, this->json_encode_wrapper(data));
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        let data =  response->getJson();
        let options["_isNew"] = false;
        let result =  Graph::createFromArray(data["graph"], options);
        result->set(Graph::ENTRY_KEY, data["graph"][self::OPTION_NAME]);
        return result;
    }
    
    public function deleteEdgeDefinition(graph, string edgeDefinition, boolean dropCollection = false) -> <Graph>
    {
        var url, options = [], data, response, e, result;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, edgeDefinition]);
        let data =  [self::OPTION_DROP_COLLECTION : dropCollection];
        let url =  UrlHelper::appendParamsUrl(url, data);
        try {
            let response =  this->getConnection()->delete(url);
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        let data =  response->getJson();
        let options["_isNew"] = false;
        let result =  Graph::createFromArray(data["graph"], options);
        result->set(Graph::ENTRY_KEY, data["graph"][self::OPTION_NAME]);
        return result;
    }
    
    public function getEdgeCollections(graph) -> array
    {
        var _useCache, url, connection, batchCaptureMode, response, e, data;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let _useCache =  this->cacheEnabled;
        if _useCache === true && !(empty(this->cache[graph]["edgeCollections"])) {
            return this->cache[graph]["edgeCollections"];
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE]);
        let connection =  this->getConnection();
        let batchCaptureMode =  connection->isInBatchCaptureMode();
        if batchCaptureMode === true {
            this->getConnection()->setBatchRequest(false);
        }
        try {
            let response =  this->getConnection()->get(url);
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        if batchCaptureMode === true {
            this->getConnection()->setBatchRequest(true);
        }
        let data =  response->getJson();
        let data = data[self::OPTION_COLLECTIONS];
        sort(data);
        if _useCache === true && !(empty(this->cache[graph]["edgeCollections"])) {
            let this->cache[graph]["edgeCollections"] = data;
        }
        return data;
    }
    
    public function replaceEdgeDefinition(graph, <EdgeDefinition> edgeDefinition) -> <Graph>
    {
        var url, options = [], data, response, e, result;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, edgeDefinition->getRelation()]);
        let data =  edgeDefinition->transformToArray();
        try {
            let response =  this->getConnection()->put(url, this->json_encode_wrapper(data));
        } catch Exception, e {
            throw new ClientException(e->getMessage());
        }
        let data =  response->getJson();
        let options["_isNew"] = false;
        let result =  Graph::createFromArray(data["graph"], options);
        result->set(Graph::ENTRY_KEY, data["graph"][self::OPTION_NAME]);
        return result;
    }
    
    public function saveVertex(graph, document, var collection = null) -> string
    {
        var vertexCollections, vertexCollectionsCount, data, url, response, batchPart, jsonArray, vertex;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        if is_array(document) {
            let document =  Vertex::createFromArray(document);
        }
        if collection == null {
            let vertexCollections =  this->getVertexCollections(graph);
            let vertexCollectionsCount =  count(vertexCollections);
            if vertexCollectionsCount != 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if vertexCollectionsCount == 1 {
                    let collection = vertexCollections[0];
                }
            }
        }
        let data =  document->getAll();
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX, collection]);
        let response =  this->getConnection()->post(url, this->json_encode_wrapper(data));
        let batchPart =  response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        let jsonArray =  response->getJson();
        let vertex = jsonArray["vertex"];
        document->setInternalId(vertex[Vertex::ENTRY_ID]);
        document->setRevision(vertex[Vertex::ENTRY_REV]);
        document->setIsNew(false);
        return document->getInternalId();
    }
    
    public function getVertex(graph, vertexId, array options = [], var collection = null) -> <Document>
    {
        var parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, url, response, jsonArray, vertex;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", vertexId);
        if count(parts) == 2 {
            let tmpListCollectionVertexId = parts;
            let collection = tmpListCollectionVertexId[0];
            let vertexId = tmpListCollectionVertexId[1];
        }
        if collection == null {
            let vertexCollections =  this->getVertexCollections(graph);
            let vertexCollectionsCount =  count(vertexCollections);
            if vertexCollectionsCount != 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if vertexCollectionsCount == 1 {
                    let collection = vertexCollections[0];
                }
            }
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX, collection, vertexId]);
        let response =  this->getConnection()->get(url);
        let jsonArray =  response->getJson();
        let vertex = jsonArray["vertex"];
        let options["_isNew"] = false;
        return Vertex::createFromArray(vertex, options);
    }
    
    public function hasVertex(graph, vertexId) -> bool
    {
        var e;
    
        try {
            this->getVertex(graph, vertexId);
            return true;
        } catch ServerException, e {
            if e->getCode() === 404 {
                return false;
            }
            throw e;
        }
        return false;
    }
    
    public function replaceVertex(graph, vertexId, <Document> document, array options = [], var collection = null) -> bool
    {
        var parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, tmpArrayec687f95f403cbdafaae714b3a682f94, params, tmpArrayfbbc675502cffa36ae0f2c29d390e2a6, revision, data, url, response, jsonArray, vertex;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", vertexId);
        if count(parts) === 2 {
            let tmpListCollectionVertexId = parts;
            let collection = tmpListCollectionVertexId[0];
            let vertexId = tmpListCollectionVertexId[1];
        }
        if collection === null {
            let vertexCollections =  this->getVertexCollections(graph);
            let vertexCollectionsCount =  count(vertexCollections);
            if vertexCollectionsCount != 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if vertexCollectionsCount == 1 {
                    let collection = vertexCollections[0];
                }
            }
        }
        let tmpArrayec687f95f403cbdafaae714b3a682f94 = [self::OPTION_REVISION : false];
        let options =  array_merge(tmpArrayec687f95f403cbdafaae714b3a682f94, options);
        let tmpArrayfbbc675502cffa36ae0f2c29d390e2a6 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "policy" : this->getConnectionOption(ConnectionOptions::OPTION_REPLACE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArrayfbbc675502cffa36ae0f2c29d390e2a6);
        if options[self::OPTION_REVISION] === true {
            let revision =  document->getRevision();
            if revision !== null {
                let params[ConnectionOptions::OPTION_REVISION] = revision;
            }
        } elseif options[self::OPTION_REVISION] {
            let params[ConnectionOptions::OPTION_REVISION] = options[self::OPTION_REVISION];
        }
        let data =  document->getAll();
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX, collection, vertexId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        let response =  this->getConnection()->put(url, this->json_encode_wrapper(data));
        let jsonArray =  response->getJson();
        let vertex = jsonArray["vertex"];
        document->setInternalId(vertex[Vertex::ENTRY_ID]);
        document->setRevision(vertex[Vertex::ENTRY_REV]);
        return true;
    }
    
    public function updateVertex(graph, vertexId, <Document> document, array options = [], var collection = null) -> bool
    {
        var parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, tmpArray01ad48f8e07ecb793e62305636d8be8e, params, tmpArraye10a612e7942e8ec5540d0a6f302e409, revision, url, result, json, vertex;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", vertexId);
        if count(parts) == 2 {
            let tmpListCollectionVertexId = parts;
            let collection = tmpListCollectionVertexId[0];
            let vertexId = tmpListCollectionVertexId[1];
        }
        if collection == null {
            let vertexCollections =  this->getVertexCollections(graph);
            let vertexCollectionsCount =  count(vertexCollections);
            if vertexCollectionsCount != 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if vertexCollectionsCount == 1 {
                    let collection = vertexCollections[0];
                }
            }
        }
        let tmpArray01ad48f8e07ecb793e62305636d8be8e = [self::OPTION_REVISION : false];
        let options =  array_merge(tmpArray01ad48f8e07ecb793e62305636d8be8e, options);
        let tmpArraye10a612e7942e8ec5540d0a6f302e409 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_UPDATE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArraye10a612e7942e8ec5540d0a6f302e409);
        if options[self::OPTION_REVISION] === true {
            let revision =  document->getRevision();
            if revision !== null {
                let params[ConnectionOptions::OPTION_REVISION] = revision;
            }
        } elseif options[self::OPTION_REVISION] {
            let params[ConnectionOptions::OPTION_REVISION] = options[self::OPTION_REVISION];
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX, collection, vertexId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        let result =  this->getConnection()->patch(url, this->json_encode_wrapper(document->getAll()));
        let json =  result->getJson();
        let vertex = json["vertex"];
        document->setRevision(vertex[Vertex::ENTRY_REV]);
        return true;
    }
    
    public function removeVertex(graph, vertexId, revision = null, array options = [], var collection = null) -> bool
    {
        var parts, tmpListCollectionVertexId, vertexCollections, vertexCollectionsCount, params, tmpArrayfd67ccf8e2435652258796b4f6fb4281, url;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", vertexId);
        if count(parts) == 2 {
            let tmpListCollectionVertexId = parts;
            let collection = tmpListCollectionVertexId[0];
            let vertexId = tmpListCollectionVertexId[1];
        }
        if collection == null {
            let vertexCollections =  this->getVertexCollections(graph);
            let vertexCollectionsCount =  count(vertexCollections);
            if vertexCollectionsCount != 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if vertexCollectionsCount == 1 {
                    let collection = vertexCollections[0];
                }
            }
        }
        let tmpArrayfd67ccf8e2435652258796b4f6fb4281 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_DELETE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArrayfd67ccf8e2435652258796b4f6fb4281);
        if revision !== null {
            let params[ConnectionOptions::OPTION_REVISION] = revision;
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_VERTEX, collection, vertexId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        this->getConnection()->delete(url);
        return true;
    }
    
    public function saveEdge(graph, from, to, label = null, document, var collection = null)
    {
        var edgeCollections, edgeCollectionsCount, data, url, response, jsonArray, edge;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        if collection === null {
            let edgeCollections =  this->getEdgeCollections(graph);
            let edgeCollectionsCount =  count(edgeCollections);
            if edgeCollectionsCount !== 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if edgeCollectionsCount === 1 {
                    let collection = edgeCollections[0];
                }
            }
        }
        if is_array(document) {
            let document =  Edge::createFromArray(document);
        }
        if label !== null {
            document->set("$label", label);
        }
        document->setFrom(from);
        document->setTo(to);
        let data =  document->getAll();
        let data[self::KEY_FROM] = from;
        let data[self::KEY_TO] = to;
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, collection]);
        let response =  this->getConnection()->post(url, this->json_encode_wrapper(data));
        let jsonArray =  response->getJson();
        let edge = jsonArray["edge"];
        document->setInternalId(edge[Edge::ENTRY_ID]);
        document->setRevision(edge[Edge::ENTRY_REV]);
        document->setIsNew(false);
        return document->getInternalId();
    }
    
    public function getEdge(graph, edgeId, array options = [], var collection = null) -> <Document>
    {
        var parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, url, response, jsonArray, edge;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", edgeId);
        if count(parts) === 2 {
            let tmpListCollectionEdgeId = parts;
            let collection = tmpListCollectionEdgeId[0];
            let edgeId = tmpListCollectionEdgeId[1];
        }
        if collection === null {
            let edgeCollections =  this->getEdgeCollections(graph);
            let edgeCollectionsCount =  count(edgeCollections);
            if edgeCollectionsCount !== 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if edgeCollectionsCount === 1 {
                    let collection = edgeCollections[0];
                }
            }
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, collection, edgeId]);
        let response =  this->getConnection()->get(url);
        let jsonArray =  response->getJson();
        let edge = jsonArray["edge"];
        let options["_isNew"] = false;
        return Edge::createFromArray(edge, options);
    }
    
    public function hasEdge(graph, edgeId) -> bool
    {
        var e;
    
        try {
            this->getEdge(graph, edgeId);
            return true;
        } catch ServerException, e {
            if e->getCode() === 404 {
                return false;
            }
            throw e;
        }
        return false;
    }
    
    public function replaceEdge(graph, edgeId, label, <Edge> document, array options = [], var collection = null) -> bool
    {
        var parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, tmpArray9a171814bae866c0cc8eb76de73e12f9, params, tmpArraybbe117b7d4080473a31c4ed228dafb2c, headers, revision, data, url, response, jsonArray, edge;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", edgeId);
        if count(parts) === 2 {
            let tmpListCollectionEdgeId = parts;
            let collection = tmpListCollectionEdgeId[0];
            let edgeId = tmpListCollectionEdgeId[1];
        }
        if collection === null {
            let edgeCollections =  this->getEdgeCollections(graph);
            let edgeCollectionsCount =  count(edgeCollections);
            if edgeCollectionsCount !== 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if edgeCollectionsCount === 1 {
                    let collection = edgeCollections[0];
                }
            }
        }
        let tmpArray9a171814bae866c0cc8eb76de73e12f9 = [self::OPTION_REVISION : false];
        let options =  array_merge(tmpArray9a171814bae866c0cc8eb76de73e12f9, options);
        let tmpArraybbe117b7d4080473a31c4ed228dafb2c = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "silent" : false, "ignoreRevs" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_REPLACE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArraybbe117b7d4080473a31c4ed228dafb2c);
        let headers =  [];
        if options[self::OPTION_REVISION] === true {
            let revision =  document->getRevision();
            if revision !== null {
                let params["ignoreRevs"] = false;
                let headers["if-match"] =  "\"" . revision . "\"";
            }
        } elseif options[self::OPTION_REVISION] {
            let revision = options[self::OPTION_REVISION];
            let params["ignoreRevs"] = false;
            let headers["if-match"] =  "\"" . revision . "\"";
        }
        let data =  document->getAllForInsertUpdate();
        if label !== null {
            document->set("$label", label);
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, collection, edgeId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        let response =  this->getConnection()->put(url, this->json_encode_wrapper(data), headers);
        let jsonArray =  response->getJson();
        let edge = jsonArray["edge"];
        document->setInternalId(edge[Edge::ENTRY_ID]);
        document->setRevision(edge[Edge::ENTRY_REV]);
        return true;
    }
    
    public function updateEdge(graph, edgeId, label, <Edge> document, array options = [], var collection = null) -> bool
    {
        var parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, tmpArray63315bbb1e334d215d76517c969a943e, params, tmpArray8fb88a211506db9d5a99542ad5bc4ec1, revision, url, result, json, edge;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", edgeId);
        if count(parts) === 2 {
            let tmpListCollectionEdgeId = parts;
            let collection = tmpListCollectionEdgeId[0];
            let edgeId = tmpListCollectionEdgeId[1];
        }
        if collection === null {
            let edgeCollections =  this->getEdgeCollections(graph);
            let edgeCollectionsCount =  count(edgeCollections);
            if edgeCollectionsCount !== 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if edgeCollectionsCount === 1 {
                    let collection = edgeCollections[0];
                }
            }
        }
        let tmpArray63315bbb1e334d215d76517c969a943e = [self::OPTION_REVISION : false];
        let options =  array_merge(tmpArray63315bbb1e334d215d76517c969a943e, options);
        let tmpArray8fb88a211506db9d5a99542ad5bc4ec1 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_UPDATE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArray8fb88a211506db9d5a99542ad5bc4ec1);
        if options[self::OPTION_REVISION] === true {
            let revision =  document->getRevision();
            if revision !== null {
                let params[ConnectionOptions::OPTION_REVISION] = revision;
            }
        } elseif options[self::OPTION_REVISION] {
            let params[ConnectionOptions::OPTION_REVISION] = options[self::OPTION_REVISION];
        }
        if label !== null {
            document->set("$label", label);
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, collection, edgeId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        let result =  this->getConnection()->patch(url, this->json_encode_wrapper(document->getAll()));
        let json =  result->getJson();
        let edge = json["edge"];
        document->setRevision(edge[Edge::ENTRY_REV]);
        return true;
    }
    
    public function removeEdge(graph, edgeId, revision = null, array options = [], var collection = null) -> bool
    {
        var parts, tmpListCollectionEdgeId, edgeCollections, edgeCollectionsCount, params, tmpArray9b9e6519b3d2ad0a1f13638bc199174e, url;
    
        if graph instanceof Graph {
            let graph =  graph->getKey();
        }
        let parts =  explode("/", edgeId);
        if count(parts) === 2 {
            let tmpListCollectionEdgeId = parts;
            let collection = tmpListCollectionEdgeId[0];
            let edgeId = tmpListCollectionEdgeId[1];
        }
        if collection === null {
            let edgeCollections =  this->getEdgeCollections(graph);
            let edgeCollectionsCount =  count(edgeCollections);
            if edgeCollectionsCount !== 1 {
                throw new ClientException("A collection must be provided.");
            } else {
                if edgeCollectionsCount === 1 {
                    let collection = edgeCollections[0];
                }
            }
        }
        let tmpArray9b9e6519b3d2ad0a1f13638bc199174e = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_DELETE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArray9b9e6519b3d2ad0a1f13638bc199174e);
        if revision !== null {
            let params[ConnectionOptions::OPTION_REVISION] = revision;
        }
        let url =  UrlHelper::buildUrl(Urls::URL_GRAPH, [graph, Urls::URLPART_EDGE, collection, edgeId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        this->getConnection()->delete(url);
        return true;
    }
    
    public function clearCache()
    {
        let this->cache =  null;
        return this;
    }
    
    public function getCacheEnabled() -> bool
    {
        return this->cacheEnabled;
    }
    
    public function setCacheEnabled(bool useCache)
    {
        let this->cacheEnabled = useCache;
        return this;
    }

}
