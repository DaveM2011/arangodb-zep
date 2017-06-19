namespace ArangoDBClient;

class DocumentHandler extends Handler
{
    const ENTRY_DOCUMENTS = "documents";
    const OPTION_COLLECTION = "collection";
    const OPTION_EXAMPLE = "example";
    public function get(string collection, documentId, array options = []) -> <Document>
    {
        return this->getById(collection, documentId, options);
    }
    
    public function has(string collection, documentId) -> bool
    {
        var e;
    
        try {
            this->get(collection, documentId);
            return true;
        } catch ServerException, e {
            if e->getCode() === 404 {
                return false;
            }
            throw e;
        }
        return false;
    }
    
    public function getById(var collection, var documentId, array options = []) -> <Document>
    {
        var tmpListCollectionDocumentId, data;
    
        if strpos(documentId, "/") !== false {
            let tmpListCollectionDocumentId = explode("/", documentId);
            let collection = tmpListCollectionDocumentId[0];
            let documentId = tmpListCollectionDocumentId[1];
        }
        let data =  this->getDocument(Urls::URL_DOCUMENT, collection, documentId, options);
        let options["_isNew"] = false;
        return this->createFromArrayWithContext(data, options);
    }
    
    protected function getDocument(string url, string collection, documentId, array options = []) -> array
    {
        var headerElements, response;
    
        let collection =  this->makeCollection(collection);
        let url =  UrlHelper::buildUrl(url, [collection, documentId]);
        let headerElements =  [];
        if array_key_exists("ifMatch", options) && array_key_exists("revision", options) {
            if options["ifMatch"] === true {
                let headerElements["If-Match"] =  "\"" . options["revision"] . "\"";
            } else {
                let headerElements["If-None-Match"] =  "\"" . options["revision"] . "\"";
            }
        }
        let response = this->getConnection()->get(url, headerElements);
        if response->getHttpCode() === 304 {
            throw new ClientException("Document has not changed.");
        }
        return response->getJson();
    }
    
    public function getHead(string collection, documentId, string revision = null, bool ifMatch = null) -> array
    {
        return this->head(Urls::URL_DOCUMENT, collection, documentId, revision, ifMatch);
    }
    
    protected function head(string url, string collection, documentId, revision = null, bool ifMatch = null) -> array
    {
        var headerElements, response, headers;
    
        let collection = this->makeCollection(collection);
        let url =  UrlHelper::buildUrl(url, [collection, documentId]);
        let headerElements =  [];
        if revision !== null && ifMatch !== null {
            if ifMatch {
                let headerElements["If-Match"] =  "\"" . revision . "\"";
            } else {
                let headerElements["If-None-Match"] =  "\"" . revision . "\"";
            }
        }
        let response = this->getConnection()->head(url, headerElements);
        let headers = response->getHeaders();
        let headers["httpCode"] =  response->getHttpCode();
        return headers;
    }
    
    protected function createFromArrayWithContext(data, options) -> <Document>
    {
        var _documentClass;
    
        let _documentClass = this->_documentClass;
        return {_documentClass}::createFromArray(data, options);
    }
    
    public function store(<Document> document, collection = null, array options = [])
    {
        var result;
    
        if document->getIsNew() {
            if collection === null {
                throw new ClientException("A collection id is required to store a new document.");
            }
            let result = this->save(collection, document, options);
            document->setIsNew(false);
            return result;
        } else {
            if collection {
                throw new ClientException("An existing document cannot be stored into a new collection");
            }
            return this->replace(document, options);
        }
    }
    
    public function save(collection, document, array options = [])
    {
        var _documentClass, params, tmpArrayd22098ace3d2df0c6462f27eeba25312, url, data, response, json, batchPart, location, id;
    
        let collection = this->makeCollection(collection);
        let _documentClass = this->_documentClass;
        let tmpArrayd22098ace3d2df0c6462f27eeba25312 = ["waitForSync" : null, "silent" : false, "createCollection" : this->getConnection()->getOption(ConnectionOptions::OPTION_CREATE)];
        let params = this->includeOptionsInParams(options, tmpArrayd22098ace3d2df0c6462f27eeba25312);
        this->createCollectionIfOptions(collection, params);
        let url =  UrlHelper::appendParamsUrl(Urls::URL_DOCUMENT . "/" . collection, params);
        if is_array(document) {
            let data = document;
        } else {
            let data =  document->getAllForInsertUpdate();
        }
        let response =  this->getConnection()->post(url, this->json_encode_wrapper(data));
        let json =  response->getJson();
        let batchPart =  response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        if is_array(document) {
            return json[constant(_documentClass . "::ENTRY_KEY")];
        }
        let location =  response->getLocationHeader();
        if !location {
            throw new ClientException("Did not find location header in server response");
        }
        let id =  UrlHelper::getDocumentIdFromLocation(location);
        document->setInternalId(json[constant(_documentClass . "::ENTRY_ID")]);
        document->setRevision(json[constant(_documentClass . "::ENTRY_REV")]);
        if id !== document->getId() {
            throw new ClientException("Got an invalid response from the server");
        }
        document->setIsNew(false);
        return document->getId();
    }
    
    public function update(<Document> document, array options = []) -> bool
    {
        var documentId;
    
        let documentId =  this->getDocumentId(document);
        return this->updateById(document, documentId, document, options);
    }
    
    public function updateById(string collection, documentId, <Document> document, array options = []) -> bool
    {
        return this->patch(Urls::URL_DOCUMENT, collection, documentId, document, options);
    }
    
    protected function patch(string url, string collection, documentId, <Document> document, array options = []) -> bool
    {
        var _documentClass, params, tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5, headers, revision, result, json;
    
        let collection =  this->makeCollection(collection);
        let _documentClass =  this->_documentClass;
        let tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, "silent" : false, "ignoreRevs" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_UPDATE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArray5c93aa5bb7ac9891a6bdac65bd2b24e5);
        let headers =  [];
        if isset params[ConnectionOptions::OPTION_UPDATE_POLICY] && params[ConnectionOptions::OPTION_UPDATE_POLICY] === UpdatePolicy::ERROR {
            let revision =  document->getRevision();
            if revision !== null {
                let params["ignoreRevs"] = false;
                let headers["if-match"] =  "\"" . revision . "\"";
            }
        }
        let url =  UrlHelper::buildUrl(url, [collection, documentId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        let result =  this->getConnection()->patch(url, this->json_encode_wrapper(document->getAllForInsertUpdate()), headers);
        let json =  result->getJson();
        document->setRevision(json[constant(_documentClass . "::ENTRY_REV")]);
        return true;
    }
    
    public function replace(<Document> document, array options = []) -> bool
    {
        var documentId;
    
        let documentId =  this->getDocumentId(document);
        return this->replaceById(document, documentId, document, options);
    }
    
    public function replaceById(collection, documentId, <Document> document, array options = []) -> bool
    {
        return this->put(Urls::URL_DOCUMENT, collection, documentId, document, options);
    }
    
    protected function put(string url, string collection, documentId, <Document> document, array options = []) -> bool
    {
        var _documentClass, params, tmpArray6cb2004c711821f8e0e9777e41742c7f, headers, data, result, json;
    
        let collection =  this->makeCollection(collection);
        let _documentClass =  this->_documentClass;
        let tmpArray6cb2004c711821f8e0e9777e41742c7f = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "silent" : false, "ignoreRevs" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_REPLACE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArray6cb2004c711821f8e0e9777e41742c7f);
        let headers =  [];
        if isset params[ConnectionOptions::OPTION_REPLACE_POLICY] && params[ConnectionOptions::OPTION_REPLACE_POLICY] === UpdatePolicy::ERROR {
            if options["revision"] !== null {
                let params["ignoreRevs"] = false;
                let headers["if-match"] =  "\"" . options["revision"] . "\"";
            }
        }
        let data =  document->getAllForInsertUpdate();
        let url =  UrlHelper::buildUrl(url, [collection, documentId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        let result =  this->getConnection()->put(url, this->json_encode_wrapper(data), headers);
        let json =  result->getJson();
        document->setRevision(json[constant(_documentClass . "::ENTRY_REV")]);
        return true;
    }
    
    public function remove(<Document> document, array options = []) -> bool
    {
        var documentId, revision;
    
        let documentId =  this->getDocumentId(document);
        let revision =  this->getRevision(document);
        return this->removeById(document, documentId, revision, options);
    }
    
    public function removeById(collection, documentId, revision = null, array options = []) -> bool
    {
        return this->erase(Urls::URL_DOCUMENT, collection, documentId, revision, options);
    }
    
    protected function erase(string url, string collection, documentId, revision = null, array options = []) -> bool
    {
        var params, tmpArray0da0ce704ed03b9443cf7d3447b85431, headers;
    
        let collection =  this->makeCollection(collection);
        let tmpArray0da0ce704ed03b9443cf7d3447b85431 = ["waitForSync" : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "silent" : false, "ignoreRevs" : true, "policy" : this->getConnectionOption(ConnectionOptions::OPTION_DELETE_POLICY)];
        let params =  this->includeOptionsInParams(options, tmpArray0da0ce704ed03b9443cf7d3447b85431);
        let headers =  [];
        if isset params[ConnectionOptions::OPTION_DELETE_POLICY] && params[ConnectionOptions::OPTION_DELETE_POLICY] === UpdatePolicy::ERROR {
            if revision !== null {
                let params["ignoreRevs"] = false;
                let headers["if-match"] =  "\"" . revision . "\"";
            }
        }
        let url =  UrlHelper::buildUrl(url, [collection, documentId]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        this->getConnection()->delete(url, headers);
        return true;
    }
    
    protected function getDocumentId(document)
    {
        var documentId;
    
        let documentId = document;
        if (document instanceof Document) {
            let documentId =  document->getId();
        }
        if !is_int(documentId) || is_string(documentId) || is_float(documentId) || trim(documentId) === "" {
            throw new ClientException("Cannot alter a document without a document id");
        }
        return documentId;
    }
    
    protected function getRevision(document)
    {
        var revision;
    
        let revision =  null;
        if (document instanceof Document) {
            let revision =  document->getRevision();
        }
        return revision;
    }
    
    protected function createCollectionIfOptions(collection, array options)
    {
        var value, collectionHandler, e;
    
        if !array_key_exists(CollectionHandler::OPTION_CREATE_COLLECTION, options) {
            return;
        }
        let value =  (bool) options[CollectionHandler::OPTION_CREATE_COLLECTION];
        if !value {
            return;
        }
        let collectionHandler =  new CollectionHandler(this->getConnection());
        if array_key_exists("createCollectionType", options) {
            let options["type"] = options["createCollectionType"];
            unset options["createCollectionType"];
        
        }
        unset options["createCollection"];
        
        try {
            collectionHandler->create(collection, options);
        } catch Exception, e {
            throw e;
        }
    }

}
