namespace ArangoDBClient;

class CollectionHandler extends Handler
{
    const ENTRY_DOCUMENTS = "documents";
    const OPTION_COLLECTION = "collection";
    const OPTION_EXAMPLE = "example";
    const OPTION_NEW_VALUE = "newValue";
    const OPTION_CREATE_COLLECTION = "createCollection";
    const OPTION_ATTRIBUTE = "attribute";
    const OPTION_KEYS = "keys";
    const OPTION_LEFT = "left";
    const OPTION_RIGHT = "right";
    const OPTION_CLOSED = "closed";
    const OPTION_LATITUDE = "latitude";
    const OPTION_LONGITUDE = "longitude";
    const OPTION_DISTANCE = "distance";
    const OPTION_RADIUS = "radius";
    const OPTION_SKIP = "skip";
    const OPTION_INDEX = "index";
    const OPTION_LIMIT = "limit";
    const OPTION_FIELDS = "fields";
    const OPTION_UNIQUE = "unique";
    const OPTION_TYPE = "type";
    const OPTION_SIZE = "size";
    const OPTION_GEO_INDEX = "geo";
    const OPTION_IGNORE_NULL = "ignoreNull";
    const OPTION_CONSTRAINT = "constraint";
    const OPTION_GEOJSON = "geoJson";
    const OPTION_HASH_INDEX = "hash";
    const OPTION_FULLTEXT_INDEX = "fulltext";
    const OPTION_MIN_LENGTH = "minLength";
    const OPTION_SKIPLIST_INDEX = "skiplist";
    const OPTION_PERSISTENT_INDEX = "persistent";
    const OPTION_SPARSE = "sparse";
    const OPTION_COUNT = "count";
    const OPTION_QUERY = "query";
    const OPTION_CHECKSUM = "checksum";
    const OPTION_REVISION = "revision";
    const OPTION_PROPERTIES = "properties";
    const OPTION_FIGURES = "figures";
    const OPTION_LOAD = "load";
    const OPTION_UNLOAD = "unload";
    const OPTION_TRUNCATE = "truncate";
    const OPTION_RENAME = "rename";
    const OPTION_EXCLUDE_SYSTEM = "excludeSystem";
    public function create(collection, array options = [])
    {
        var name, key, value, meth, type, params, response, jsonResponse, id;
    
        if is_string(collection) {
            let name = collection;
            let collection =  new Collection();
            collection->setName(name);
            for key, value in options {
                let meth = "set" . ucfirst(key);
                collection->{meth}(value);
            }
        }
        if collection->getWaitForSync() === null {
            collection->setWaitForSync(this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC));
        }
        if collection->getJournalSize() === null {
            collection->setJournalSize(this->getConnectionOption(ConnectionOptions::OPTION_JOURNAL_SIZE));
        }
        if collection->getIsSystem() === null {
            collection->setIsSystem(this->getConnectionOption(ConnectionOptions::OPTION_IS_SYSTEM));
        }
        if collection->getIsVolatile() === null {
            collection->setIsVolatile(this->getConnectionOption(ConnectionOptions::OPTION_IS_VOLATILE));
        }
        let type =  collection->getType() ? collection->getType() : Collection::getDefaultType();
        let params =  [Collection::ENTRY_NAME : collection->getName(), Collection::ENTRY_TYPE : type, Collection::ENTRY_WAIT_SYNC : collection->getWaitForSync(), Collection::ENTRY_JOURNAL_SIZE : collection->getJournalSize(), Collection::ENTRY_IS_SYSTEM : collection->getIsSystem(), Collection::ENTRY_IS_VOLATILE : collection->getIsVolatile(), Collection::ENTRY_KEY_OPTIONS : collection->getKeyOptions()];
        if collection->getNumberOfShards() !== null {
            let params[Collection::ENTRY_NUMBER_OF_SHARDS] =  collection->getNumberOfShards();
        }
        if is_array(collection->getShardKeys()) {
            let params[Collection::ENTRY_SHARD_KEYS] =  collection->getShardKeys();
        }
        let response =  this->getConnection()->post(Urls::URL_COLLECTION, this->json_encode_wrapper(params));
        let jsonResponse =  response->getJson();
        let id = jsonResponse["id"];
        collection->setId(id);
        return id;
    }
    
    public function has(collection) -> bool
    {
        var e;
    
        let collection =  this->makeCollection(collection);
        try {
            this->get(collection);
            return true;
        } catch ServerException, e {
            if e->getCode() === 404 {
                return false;
            }
            throw e;
        }
        return false;
    }
    
    public function count(collection) -> int
    {
        var url, response, data, count;
    
        let collection =  this->makeCollection(collection);
        let url =  UrlHelper::buildUrl(Urls::URL_COLLECTION, [collection, self::OPTION_COUNT]);
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        let count = data[self::OPTION_COUNT];
        return (int) count;
    }
    
    public function get(collection) -> <Collection>
    {
        var url, response, data;
    
        let collection =  this->makeCollection(collection);
        let url =  UrlHelper::buildUrl(Urls::URL_COLLECTION, [collection]);
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        return Collection::createFromArray(data);
    }
    
    public function getProperties(collection) -> <Collection>
    {
        var url, response, data;
    
        let collection =  this->makeCollection(collection);
        let url =  UrlHelper::buildUrl(Urls::URL_COLLECTION, [collection, self::OPTION_PROPERTIES]);
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        return Collection::createFromArray(data);
    }
    
    public function figures(collection) -> array
    {
        var url, response, data;
    
        let collection =  this->makeCollection(collection);
        let url =  UrlHelper::buildUrl(Urls::URL_COLLECTION, [collection, self::OPTION_FIGURES]);
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        return data[self::OPTION_FIGURES];
    }
    
    public function getChecksum(collectionId, bool withRevisions = false, bool withData = false) -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_COLLECTION, [collectionId, self::OPTION_CHECKSUM]);
        let url =  UrlHelper::appendParamsUrl(url, ["withRevisions" : withRevisions, "withData" : withData]);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function getRevision(collectionId) -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_COLLECTION, [collectionId, self::OPTION_REVISION]);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function rename(collection, string name) -> bool
    {
        var collectionId, params, tmpArray43179846deff2277830599a700ed8fac;
    
        let collectionId =  this->getCollectionId(collection);
        if this->isValidCollectionId(collectionId) {
            throw new ClientException("Cannot alter a collection without a collection id");
        }
        let params =  [Collection::ENTRY_NAME : name];
        let tmpArray43179846deff2277830599a700ed8fac = [collectionId, self::OPTION_RENAME];
        this->getConnection()->put(UrlHelper::buildUrl(Urls::URL_COLLECTION, tmpArray43179846deff2277830599a700ed8fac), this->json_encode_wrapper(params));
        return true;
    }
    
    public function load(collection) -> <HttpResponse>
    {
        var collectionId, result, tmpArray14253296867cd8c1f8a013d426e7b311;
    
        let collectionId =  this->getCollectionId(collection);
        if this->isValidCollectionId(collectionId) {
            throw new ClientException("Cannot alter a collection without a collection id");
        }
        let tmpArray14253296867cd8c1f8a013d426e7b311 = [collectionId, self::OPTION_LOAD];
        let result =  this->getConnection()->put(UrlHelper::buildUrl(Urls::URL_COLLECTION, tmpArray14253296867cd8c1f8a013d426e7b311), "");
        return result;
    }
    
    public function unload(collection) -> <HttpResponse>
    {
        var collectionId, result, tmpArray21dfb8e8de351ab07ebf5d7b873c5220;
    
        let collectionId =  this->getCollectionId(collection);
        if this->isValidCollectionId(collectionId) {
            throw new ClientException("Cannot alter a collection without a collection id");
        }
        let tmpArray21dfb8e8de351ab07ebf5d7b873c5220 = [collectionId, self::OPTION_UNLOAD];
        let result =  this->getConnection()->put(UrlHelper::buildUrl(Urls::URL_COLLECTION, tmpArray21dfb8e8de351ab07ebf5d7b873c5220), "");
        return result;
    }
    
    public function truncate(collection) -> bool
    {
        var collectionId, tmpArrayff4d346d4ce975cfb334cfe708806433;
    
        let collectionId =  this->getCollectionId(collection);
        if this->isValidCollectionId(collectionId) {
            throw new ClientException("Cannot alter a collection without a collection id");
        }
        let tmpArrayff4d346d4ce975cfb334cfe708806433 = [collectionId, self::OPTION_TRUNCATE];
        this->getConnection()->put(UrlHelper::buildUrl(Urls::URL_COLLECTION, tmpArrayff4d346d4ce975cfb334cfe708806433), "");
        return true;
    }
    
    public function drop(collection, array options = []) -> bool
    {
        var collectionName, appendix, tmpArray681ed9b5283111f0bc03157259baf9d2;
    
        let collectionName =  this->getCollectionName(collection);
        if this->isValidCollectionId(collectionName) {
            throw new ClientException("Cannot alter a collection without a collection id");
        }
        let appendix = "";
        if is_array(options) && isset options["isSystem"] {
            let appendix =  "?isSystem=" . UrlHelper::getBoolString(options["isSystem"]);
        }
        let tmpArray681ed9b5283111f0bc03157259baf9d2 = [collectionName];
        this->getConnection()->delete(UrlHelper::buildUrl(Urls::URL_COLLECTION, tmpArray681ed9b5283111f0bc03157259baf9d2) . appendix);
        return true;
    }
    
    public function isValidCollectionId(collectionId) -> bool
    {
        return !(collectionId) || !((is_string(collectionId) || is_float(collectionId) || is_int(collectionId)));
    }
    
    public function getAllCollections(array options = []) -> array
    {
        var tmpArray68048367413a03086dedf7530dc66684, params, url, response, tmpArray40cd750bba9870f18aada2478b24840a, result, collection;
    
        let tmpArray68048367413a03086dedf7530dc66684 = ["excludeSystem" : false, "keys" : "result"];
        let options =  array_merge(tmpArray68048367413a03086dedf7530dc66684, options);
        let params =  [];
        if options["excludeSystem"] === true {
            let params[self::OPTION_EXCLUDE_SYSTEM] = true;
        }
        let url =  UrlHelper::appendParamsUrl(Urls::URL_COLLECTION, params);
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        let response =  this->getConnection()->get(UrlHelper::buildUrl(url, tmpArray40cd750bba9870f18aada2478b24840a));
        let response =  response->getJson();
        if isset response[options["keys"]] {
            let result =  [];
            for collection in response[options["keys"]] {
                let result[collection["name"]] = collection;
            }
            return result;
        }
        return response;
    }
    
    public function getCollectionId(collection)
    {
        var collectionId;
    
        if collection instanceof Collection {
            let collectionId =  collection->getId();
            return collectionId;
        } else {
            let collectionId = collection;
            return collectionId;
        }
    }
    
    public function getCollectionName(collection)
    {
        var collectionId;
    
        if collection instanceof Collection {
            let collectionId =  collection->getName();
            return collectionId;
        } else {
            let collectionId = collection;
            return collectionId;
        }
    }
    
    public function importFromFile(collectionId, importFileName, array options = []) -> array
    {
        var contents;
    
        let contents =  file_get_contents(importFileName);
        if contents === false {
            throw new ClientException("Input file \"" . importFileName . "\" could not be found.");
        }
        return this->import(collectionId, contents, options);
    }
    
    public function import(collection, importData, array options = []) -> array
    {
        var tmpContent, document, params, tmpArray88edebd3ca81765a540165038fc5be82, url, response;
    
        let collection =  this->makeCollection(collection);
        let tmpContent = "";
        if is_array(importData) {
            for document in importData {
                let tmpContent .= document->toJson() . "\r\n";
            }
            let importData = tmpContent;
            let tmpContent = "";
            
            let options["type"] = "documents";
        }
        this->createCollectionIfOptions(collection, options);
        let tmpArray88edebd3ca81765a540165038fc5be82 = [self::OPTION_COLLECTION : collection];
        let params =  array_merge(tmpArray88edebd3ca81765a540165038fc5be82, options);
        if array_key_exists("type", options) {
            switch options["type"] {
                case "documents":
                    let params[self::OPTION_TYPE] = "documents";
                    break;
                case "array":
                    let params[self::OPTION_TYPE] = "array";
                    break;
            }
        }
        let url =  UrlHelper::appendParamsUrl(Urls::URL_IMPORT, params);
        let response =  this->getConnection()->post(url, importData);
        return response->getJson();
    }
    
    public function createHashIndex(string collectionId, array fields, bool unique = null, bool sparse = null) -> array
    {
        var indexOptions;
    
        let indexOptions =  [];
        if unique {
            let indexOptions[self::OPTION_UNIQUE] = unique;
        }
        if sparse {
            let indexOptions[self::OPTION_SPARSE] = sparse;
        }
        return this->index(collectionId, self::OPTION_HASH_INDEX, fields, null, indexOptions);
    }
    
    public function createFulltextIndex(string collectionId, array fields, int minLength = null) -> array
    {
        var indexOptions;
    
        let indexOptions =  [];
        if minLength {
            let indexOptions[self::OPTION_MIN_LENGTH] = minLength;
        }
        return this->index(collectionId, self::OPTION_FULLTEXT_INDEX, fields, null, indexOptions);
    }
    
    public function createSkipListIndex(string collectionId, array fields, bool unique = null, bool sparse = null) -> array
    {
        var indexOptions;
    
        let indexOptions =  [];
        if unique {
            let indexOptions[self::OPTION_UNIQUE] = unique;
        }
        if sparse {
            let indexOptions[self::OPTION_SPARSE] = sparse;
        }
        return this->index(collectionId, self::OPTION_SKIPLIST_INDEX, fields, null, indexOptions);
    }
    
    public function createPersistentIndex(string collectionId, array fields, bool unique = null, bool sparse = null) -> array
    {
        var indexOptions;
    
        let indexOptions =  [];
        if unique {
            let indexOptions[self::OPTION_UNIQUE] = unique;
        }
        if sparse {
            let indexOptions[self::OPTION_SPARSE] = sparse;
        }
        return this->index(collectionId, self::OPTION_PERSISTENT_INDEX, fields, null, indexOptions);
    }
    
    public function createGeoIndex(string collectionId, array fields, bool geoJson = null, bool constraint = null, bool ignoreNull = null) -> array
    {
        var indexOptions;
    
        let indexOptions =  [];
        if geoJson {
            let indexOptions[self::OPTION_GEOJSON] = geoJson;
        }
        if constraint {
            let indexOptions[self::OPTION_CONSTRAINT] = constraint;
        }
        if ignoreNull {
            let indexOptions[self::OPTION_IGNORE_NULL] = ignoreNull;
        }
        return this->index(collectionId, self::OPTION_GEO_INDEX, fields, null, indexOptions);
    }
    
    public function index(collectionId, string type = "", array attributes = [], bool unique = false, array indexOptions = []) -> array
    {
        var urlParams, bodyParams, url, response, httpCode;
    
        let urlParams =  [self::OPTION_COLLECTION : collectionId];
        let bodyParams =  [self::OPTION_TYPE : type, self::OPTION_FIELDS : attributes];
        if unique !== null {
            let bodyParams[self::OPTION_UNIQUE] = unique;
        }
        let bodyParams =  array_merge(bodyParams, indexOptions);
        let url =  UrlHelper::appendParamsUrl(Urls::URL_INDEX, urlParams);
        let response =  this->getConnection()->post(url, this->json_encode_wrapper(bodyParams));
        let httpCode =  response->getHttpCode();
        if httpCode == 404 {
            throw new ClientException("Collection-identifier is unknown");
        } else {
            throw new ClientException("cannot create unique index due to documents violating uniqueness");
        }
        return response->getJson();
    }
    
    public function getIndex(string collection, string indexId) -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_INDEX, [collection, indexId]);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function getIndexes(collectionId) -> array
    {
        var urlParams, url, response;
    
        let urlParams =  [self::OPTION_COLLECTION : collectionId];
        let url =  UrlHelper::appendParamsUrl(Urls::URL_INDEX, urlParams);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function dropIndex(indexHandle) -> bool
    {
        var handle, tmpArrayb5e9333e175ea0b890a4202762ac95d9;
    
        let handle =  explode("/", indexHandle);
        let tmpArrayb5e9333e175ea0b890a4202762ac95d9 = [handle[0], handle[1]];
        this->getConnection()->delete(UrlHelper::buildUrl(Urls::URL_INDEX, tmpArrayb5e9333e175ea0b890a4202762ac95d9));
        return true;
    }
    
    public function any(collectionId)
    {
        var _documentClass, data, response;
    
        let _documentClass =  this->_documentClass;
        let data =  [self::OPTION_COLLECTION : collectionId];
        let response =  this->getConnection()->put(Urls::URL_ANY, this->json_encode_wrapper(data));
        let data =  response->getJson();
        if data["document"] {
            return {_documentClass}::createFromArray(data["document"]);
        } else {
            return null;
        }
    }
    
    public function all(collectionId, array options = []) -> <Cursor>
    {
        var body, tmpArrayb4309705023daa108a265ed0bd056f70, response, batchPart, tmpArray898d932f0f861707bf077f61cd989874;
    
        let body =  [self::OPTION_COLLECTION : collectionId];
        let tmpArrayb4309705023daa108a265ed0bd056f70 = [self::OPTION_LIMIT : null, self::OPTION_SKIP : null];
        let body =  this->includeOptionsInBody(options, body, tmpArrayb4309705023daa108a265ed0bd056f70);
        let response =  this->getConnection()->put(Urls::URL_ALL, this->json_encode_wrapper(body));
        let batchPart =  response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        let tmpArray898d932f0f861707bf077f61cd989874 = ["_documentClass" : this->_documentClass];
        let options =  array_merge(tmpArray898d932f0f861707bf077f61cd989874, options);
        return new Cursor(this->getConnection(), response->getJson(), options);
    }
    
    public function getAllIds(collection) -> array
    {
        var params, response, data, cursor, ids, location;
    
        let params =  [self::OPTION_COLLECTION : this->makeCollection(collection)];
        let response =  this->getConnection()->put(Urls::URL_ALL_KEYS, this->json_encode_wrapper(params));
        let data =  response->getJson();
        if !(isset data[Cursor::ENTRY_RESULT]) {
            throw new ClientException("Got an invalid document list from the server");
        }
        let cursor =  new Cursor(this->getConnection(), response->getJson(), ["_documentClass" : this->_documentClass]);
        let ids =  [];
        for location in cursor->getAll() {
            let ids[] = UrlHelper::getDocumentIdFromLocation(location);
        }
        return ids;
    }
    
    public function byExample(collectionId, document, array options = [])
    {
        var _documentClass, body, tmpArray501c87e4e9953e248cd2fef6f085d22a, tmpArray77d855f102ad46854dec832b413f9ba6, response, batchPart;
    
        let _documentClass =  this->_documentClass;
        if is_array(document) {
            let document =  {_documentClass}::createFromArray(document, options);
        }
        if !(document instanceof Document) {
            throw new ClientException("Invalid example document specification");
        }
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_EXAMPLE : document->getAllAsObject(tmpArray501c87e4e9953e248cd2fef6f085d22a)];
        let tmpArray77d855f102ad46854dec832b413f9ba6 = [ConnectionOptions::OPTION_BATCHSIZE : this->getConnectionOption(ConnectionOptions::OPTION_BATCHSIZE), self::OPTION_LIMIT : null, self::OPTION_SKIP : null];
        let body =  this->includeOptionsInBody(options, body, tmpArray77d855f102ad46854dec832b413f9ba6);
        let response =  this->getConnection()->put(Urls::URL_EXAMPLE, this->json_encode_wrapper(body));
        let batchPart =  response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        let options["isNew"] = false;
        let options =  array_merge(["_documentClass" : this->_documentClass], options);
        return new Cursor(this->getConnection(), response->getJson(), options);
    }
    
    public function firstExample(collectionId, document, array options = []) -> <Document>
    {
        var _documentClass, data, response, batchPart;
    
        let _documentClass = this->_documentClass;
        if is_array(document) {
            let document = {_documentClass}::createFromArray(document, options);
        }
        if !(document instanceof Document) {
            throw new ClientException("Invalid example document specification");
        }
        let data = [self::OPTION_COLLECTION : collectionId, self::OPTION_EXAMPLE : document->getAll()];
        let response = this->getConnection()->put(Urls::URL_FIRST_EXAMPLE, this->json_encode_wrapper(data));
        let batchPart = response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        let data = response->getJson();
        let options["_isNew"] = false;
        return {_documentClass}::createFromArray(data["document"], options);
    }
    
    public function fulltext(collection, attribute, query, array options = [])
    {
        var body, tmpArray79f34018cea2cd616a55369568538921, response, tmpArray22eb4126d6e611e73ecbc3d346eb6c09;
    
        let body =  [self::OPTION_COLLECTION : collection, self::OPTION_ATTRIBUTE : attribute, self::OPTION_QUERY : query];
        let tmpArray79f34018cea2cd616a55369568538921 = [ConnectionOptions::OPTION_BATCHSIZE : this->getConnectionOption(ConnectionOptions::OPTION_BATCHSIZE), self::OPTION_LIMIT : null, self::OPTION_SKIP : null, self::OPTION_INDEX : null];
        let body =  this->includeOptionsInBody(options, body, tmpArray79f34018cea2cd616a55369568538921);
        let response =  this->getConnection()->put(Urls::URL_FULLTEXT, this->json_encode_wrapper(body));
        let options["_isNew"] = false;
        let tmpArray22eb4126d6e611e73ecbc3d346eb6c09 = ["_documentClass" : this->_documentClass];
        let options =  array_merge(tmpArray22eb4126d6e611e73ecbc3d346eb6c09, options);
        return new Cursor(this->getConnection(), response->getJson(), options);
    }
    
    public function updateByExample(collectionId, example, newValue, array options = []) -> bool
    {
        var _documentClass, body, tmpArraye0bef1d6763f840058cf3777a2691831, tmpArraye26cb364cfba8279efc8486e9f87ed72, tmpArraye0df7821e5993e68d3d962cd02191652, response, responseArray;
    
        let _documentClass =  this->_documentClass;
        if is_array(example) {
            let example =  {_documentClass}::createFromArray(example);
        }
        if is_array(newValue) {
            let newValue =  {_documentClass}::createFromArray(newValue);
        }
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_EXAMPLE : example->getAllAsObject(tmpArraye0bef1d6763f840058cf3777a2691831), self::OPTION_NEW_VALUE : newValue->getAllAsObject(tmpArraye26cb364cfba8279efc8486e9f87ed72)];
        let tmpArraye0df7821e5993e68d3d962cd02191652 = [ConnectionOptions::OPTION_WAIT_SYNC : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, self::OPTION_LIMIT : null];
        let body =  this->includeOptionsInBody(options, body, tmpArraye0df7821e5993e68d3d962cd02191652);
        let response =  this->getConnection()->put(Urls::URL_UPDATE_BY_EXAMPLE, this->json_encode_wrapper(body));
        let responseArray =  response->getJson();
        if responseArray["error"] === true {
            throw new ClientException("Invalid example document specification");
        }
        return responseArray["updated"];
    }
    
    public function replaceByExample(collectionId, example, newValue, array options = []) -> bool
    {
        var _documentClass, body, tmpArray2a732f433113f0f0e82b77c8d9b8be2e, tmpArray1443a62ccb6b0bf7da8b3401ab10de94, tmpArray28780215d6fbd9be30c483270b45216d, response, responseArray;
    
        let _documentClass =  this->_documentClass;
        if is_array(example) {
            let example =  {_documentClass}::createFromArray(example);
        }
        if is_array(newValue) {
            let newValue =  {_documentClass}::createFromArray(newValue);
        }
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_EXAMPLE : example->getAllAsObject(tmpArray2a732f433113f0f0e82b77c8d9b8be2e), self::OPTION_NEW_VALUE : newValue->getAllAsObject(tmpArray1443a62ccb6b0bf7da8b3401ab10de94)];
        let tmpArray28780215d6fbd9be30c483270b45216d = [ConnectionOptions::OPTION_WAIT_SYNC : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), "keepNull" : true, self::OPTION_LIMIT : null];
        let body =  this->includeOptionsInBody(options, body, tmpArray28780215d6fbd9be30c483270b45216d);
        let response =  this->getConnection()->put(Urls::URL_REPLACE_BY_EXAMPLE, this->json_encode_wrapper(body));
        let responseArray =  response->getJson();
        if responseArray["error"] === true {
            throw new ClientException("Invalid example document specification");
        }
        return responseArray["replaced"];
    }
    
    public function removeByExample(collectionId, document, array options = []) -> int
    {
        var _documentClass, body, tmpArray7417a5d82017aee74cff0f99e50cce34, tmpArray3c1dffbfced281231f0d6051af9b9de7, response, responseArray;
    
        let _documentClass =  this->_documentClass;
        if is_array(document) {
            let document =  {_documentClass}::createFromArray(document, options);
        }
        if !(document instanceof Document) {
            throw new ClientException("Invalid example document specification");
        }
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_EXAMPLE : document->getAllAsObject(tmpArray7417a5d82017aee74cff0f99e50cce34)];
        let tmpArray3c1dffbfced281231f0d6051af9b9de7 = [ConnectionOptions::OPTION_WAIT_SYNC : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC), self::OPTION_LIMIT : null];
        let body =  this->includeOptionsInBody(options, body, tmpArray3c1dffbfced281231f0d6051af9b9de7);
        let response =  this->getConnection()->put(Urls::URL_REMOVE_BY_EXAMPLE, this->json_encode_wrapper(body));
        let responseArray =  response->getJson();
        if responseArray["error"] === true {
            throw new ClientException("Invalid example document specification");
        }
        return responseArray["deleted"];
    }
    
    public function removeByKeys(collectionId, array keys, array options = []) -> array
    {
        var body, tmpArray28ebddc3d08cf60d9fce4b602c3913c3, response, batchPart, responseArray, tmpArray745db7ab214f663ad33a2e900f8dadcd;
    
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_KEYS : keys];
        let tmpArray28ebddc3d08cf60d9fce4b602c3913c3 = [ConnectionOptions::OPTION_WAIT_SYNC : this->getConnectionOption(ConnectionOptions::OPTION_WAIT_SYNC)];
        let body =  this->includeOptionsInBody(options, body, tmpArray28ebddc3d08cf60d9fce4b602c3913c3);
        let response =  this->getConnection()->put(Urls::URL_REMOVE_BY_KEYS, this->json_encode_wrapper(body));
        let batchPart =  response->getBatchPart();
        if batchPart {
            return batchPart;
        }
        let responseArray =  response->getJson();
        let tmpArray745db7ab214f663ad33a2e900f8dadcd = ["removed" : responseArray["removed"], "ignored" : responseArray["ignored"]];
        return tmpArray745db7ab214f663ad33a2e900f8dadcd;
    }
    
    public function lookupByKeys(collectionId, array keys, array options = []) -> array
    {
        var _documentClass, body, response, responseArray, result, document;
    
        let _documentClass =  this->_documentClass;
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_KEYS : keys];
        let response =  this->getConnection()->put(Urls::URL_LOOKUP_BY_KEYS, this->json_encode_wrapper(body));
        let responseArray =  response->getJson();
        let result =  [];
        for document in responseArray["documents"] {
            let result[] = {_documentClass}::createFromArray(document, options);
        }
        return result;
    }
    
    public function range(collectionId, string attribute, left, right, array options = []) -> <Cursor>
    {
        var body, tmpArray53bb88ffd15501369e105b576a3ae2ff, response, tmpArray640825e4fc8449ec8902fd848e62896b;
    
        if attribute === "" {
            throw new ClientException("Invalid attribute specification");
        }
        if strpos(attribute, ".") !== false {
            let attribute =  explode(".", attribute);
        }
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_ATTRIBUTE : attribute, self::OPTION_LEFT : left, self::OPTION_RIGHT : right];
        let tmpArray53bb88ffd15501369e105b576a3ae2ff = [self::OPTION_CLOSED : null, self::OPTION_LIMIT : null, self::OPTION_SKIP : null];
        let body =  this->includeOptionsInBody(options, body, tmpArray53bb88ffd15501369e105b576a3ae2ff);
        let response =  this->getConnection()->put(Urls::URL_RANGE, this->json_encode_wrapper(body));
        let tmpArray640825e4fc8449ec8902fd848e62896b = ["_documentClass" : this->_documentClass];
        let options =  array_merge(tmpArray640825e4fc8449ec8902fd848e62896b, options);
        return new Cursor(this->getConnection(), response->getJson(), options);
    }
    
    public function near(collectionId, double latitude, double longitude, array options = []) -> <Cursor>
    {
        var body, tmpArrayfcb63ce10477b922f657fdc50b5076fc, response, tmpArray56d8a63cf21801084714a2cbe3bf2781;
    
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_LATITUDE : latitude, self::OPTION_LONGITUDE : longitude];
        let tmpArrayfcb63ce10477b922f657fdc50b5076fc = [self::OPTION_DISTANCE : null, self::OPTION_LIMIT : null, self::OPTION_SKIP : null];
        let body =  this->includeOptionsInBody(options, body, tmpArrayfcb63ce10477b922f657fdc50b5076fc);
        let response =  this->getConnection()->put(Urls::URL_NEAR, this->json_encode_wrapper(body));
        let tmpArray56d8a63cf21801084714a2cbe3bf2781 = ["_documentClass" : this->_documentClass];
        let options =  array_merge(tmpArray56d8a63cf21801084714a2cbe3bf2781, options);
        return new Cursor(this->getConnection(), response->getJson(), options);
    }
    
    public function within(collectionId, double latitude, double longitude, int radius, array options = []) -> <Cursor>
    {
        var body, tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266, response, tmpArray7e61752741f10588704b6c2e576861ae;
    
        let body =  [self::OPTION_COLLECTION : collectionId, self::OPTION_LATITUDE : latitude, self::OPTION_LONGITUDE : longitude, self::OPTION_RADIUS : radius];
        let tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266 = [self::OPTION_DISTANCE : null, self::OPTION_LIMIT : null, self::OPTION_SKIP : null];
        let body =  this->includeOptionsInBody(options, body, tmpArrayb8a0d58f1be4b1b1fd081e1aef5aa266);
        let response =  this->getConnection()->put(Urls::URL_WITHIN, this->json_encode_wrapper(body));
        let tmpArray7e61752741f10588704b6c2e576861ae = ["_documentClass" : this->_documentClass];
        let options =  array_merge(tmpArray7e61752741f10588704b6c2e576861ae, options);
        return new Cursor(this->getConnection(), response->getJson(), options);
    }
    
    protected function createCollectionIfOptions(collection, options)
    {
        var value, collectionOptions, e;
    
        if !array_key_exists(CollectionHandler::OPTION_CREATE_COLLECTION, options) {
            return;
        }
        let value =  (bool) options[CollectionHandler::OPTION_CREATE_COLLECTION];
        if !value {
            return;
        }
        let collectionOptions =  [];
        if isset options["createCollectionType"] {
            if options["createCollectionType"] === "edge" || options["createCollectionType"] === 3 {
                let collectionOptions["type"] = 3;
            } else {
                let collectionOptions["type"] = 2;
            }
        }
        try {
            this->create(collection, collectionOptions);
        } catch Exception, e {
            throw e;
        }
    }

}
