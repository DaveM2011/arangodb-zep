namespace ArangoDBClient;

class EdgeHandler extends DocumentHandler
{
    const ENTRY_DOCUMENTS = "edge";
    const ENTRY_EDGES = "edges";
    const OPTION_COLLECTION = "collection";
    const OPTION_EXAMPLE = "example";
    const OPTION_FROM = "from";
    const OPTION_TO = "to";
    const OPTION_VERTEX = "vertex";
    const OPTION_DIRECTION = "direction";
    public function createFromArrayWithContext(data, options) -> <Edge>
    {
        return Edge::createFromArray(data, options);
    }
    
    public function save(collection, <Document> document, array options = [])
    {
        throw new ClientException("Edges don't have a save() method. Please use saveEdge()");
    }
    
    public function saveEdge(collection, from, to, document, array options = [])
    {
        var params, tmpArrayeba825deba0c7f862f47e71190656430, data, url, response, location, json, id;
    
        let collection =  this->makeCollection(collection);
        if is_array(document) {
            let document =  Edge::createFromArray(document);
        }
        document->setFrom(from);
        document->setTo(to);
        let tmpArrayeba825deba0c7f862f47e71190656430 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "createCollection" : this->getConnectionOption(ConnectionOptions::OPTION_CREATE)];
        let params =  this->includeOptionsInParams(options, tmpArrayeba825deba0c7f862f47e71190656430);
        this->createCollectionIfOptions(collection, params);
        let data =  document->getAllForInsertUpdate();
        let url =  UrlHelper::appendParamsUrl(Urls::URL_EDGE . "/" . collection, params);
        let response =  this->getConnection()->post(url, this->json_encode_wrapper(data));
        let location =  response->getLocationHeader();
        if !location {
            throw new ClientException("Did not find location header in server response");
        }
        let json =  response->getJson();
        let id =  UrlHelper::getDocumentIdFromLocation(location);
        document->setInternalId(json[Edge::ENTRY_ID]);
        document->setRevision(json[Edge::ENTRY_REV]);
        if id !== document->getId() {
            throw new ClientException("Got an invalid response from the server");
        }
        document->setIsNew(false);
        return document->getId();
    }
    
    public function edges(collection, vertexHandle, string direction = "any", array options = []) -> array
    {
        var params, url, response, batchPart, json, edges, data;
    
        let collection =  this->makeCollection(collection);
        let params =  [self::OPTION_VERTEX : vertexHandle, self::OPTION_DIRECTION : direction];
        let url =  UrlHelper::appendParamsUrl(Urls::URL_EDGES . "/" . urlencode(collection), params);
        let response =  this->getConnection()->get(url);
        let batchPart =  response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        let options["_isNew"] = false;
        let json =  response->getJson();
        let edges =  [];
        for data in json[self::ENTRY_EDGES] {
            let edges[] =  this->createFromArrayWithContext(data, options);
        }
        return edges;
    }
    
    public function inEdges(collection, vertexHandle) -> array
    {
        return this->edges(collection, vertexHandle, "in");
    }
    
    public function outEdges(collection, vertexHandle) -> array
    {
        return this->edges(collection, vertexHandle, "out");
    }
    
    protected function createCollectionIfOptions(collection, array options) -> void
    {
        let options["createCollectionType"] = 3;
        parent::createCollectionIfOptions(collection, options);
    }

}
