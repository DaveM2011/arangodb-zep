namespace ArangoDBClient;

class Export
{
    protected _connection;
    protected _collection;
    protected _batchSize;
    protected _flat = false;
    protected _flush = true;
    protected _type;
    protected _restrictions;
    protected _limit = 0;
    protected _documentClass = "\\ArangoDBClient\\Document";
    const ENTRY_COUNT = "count";
    const ENTRY_BATCHSIZE = "batchSize";
    const ENTRY_FLUSH = "flush";
    const ENTRY_RESTRICT = "restrict";
    const ENTRY_LIMIT = "limit";
    public function __construct(<Connection> connection, var collection, array data = [])
    {
        var collectionHandler, restrictions, tmpArray1ad93cd458ab50bc8b784be1f82fa4b3;
    
        let this->_connection = connection;
        if collection instanceof Collection {
            
        } else {
            let collectionHandler =  new CollectionHandler(this->_connection);
            let collection =  collectionHandler->get(collection);
        }
        let this->_collection = collection;
        let this->_type =  this->_collection->getType();
        if isset data[self::ENTRY_FLUSH] {
            let this->_flush = data[self::ENTRY_FLUSH];
        }
        if isset data[self::ENTRY_BATCHSIZE] {
            this->setBatchSize(data[self::ENTRY_BATCHSIZE]);
        }
        if isset data[self::ENTRY_LIMIT] {
            let this->_limit =  (int) data[self::ENTRY_LIMIT];
        }
        if isset data[self::ENTRY_RESTRICT] && is_array(data[self::ENTRY_RESTRICT]) {
            let restrictions = data[self::ENTRY_RESTRICT];
            let tmpArray1ad93cd458ab50bc8b784be1f82fa4b3 = ["include", "exclude"];
            if !isset restrictions["type"] || !in_array(restrictions["type"], tmpArray1ad93cd458ab50bc8b784be1f82fa4b3, true) {
                throw new ClientException("Invalid restrictions type definition");
            }
            if !isset restrictions["fields"] || !is_array(restrictions["fields"]) {
                throw new ClientException("Invalid restrictions fields definition");
            }
            let this->_restrictions = restrictions;
        }
        if isset data[ExportCursor::ENTRY_FLAT] {
            let this->_flat =  (bool) data[ExportCursor::ENTRY_FLAT];
        }
    }
    
    protected function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    public function execute() -> <ExportCursor>
    {
        var data, collection, url, response;
    
        let data =  [self::ENTRY_FLUSH : this->_flush, self::ENTRY_COUNT : true];
        if this->_batchSize > 0 {
            let data[self::ENTRY_BATCHSIZE] = this->_batchSize;
        }
        if this->_limit > 0 {
            let data[self::ENTRY_LIMIT] = this->_limit;
        }
        if is_array(this->_restrictions) {
            let data[self::ENTRY_RESTRICT] = this->_restrictions;
        }
        let collection =  this->_collection;
        if collection instanceof Collection {
            let collection =  collection->getName();
        }
        let url =  UrlHelper::appendParamsUrl(Urls::URL_EXPORT, ["collection" : collection]);
        let response =  this->_connection->post(url, this->getConnection()->json_encode_wrapper(data));
        return new ExportCursor(this->_connection, response->getJson(), this->getCursorOptions());
    }
    
    public function setBatchSize(int value)
    {
        if !is_int(value) || value <= 0 {
            throw new ClientException("Batch size should be a positive integer");
        }
        let this->_batchSize = value;
    }
    
    public function getBatchSize() -> int
    {
        return this->_batchSize;
    }
    
    protected function getCursorOptions() -> array
    {
        var result;
    
        let result =  [ExportCursor::ENTRY_FLAT : (bool) this->_flat, ExportCursor::ENTRY_BASEURL : Urls::URL_EXPORT, ExportCursor::ENTRY_TYPE : this->_type, "_documentClass" : this->_documentClass];
        return result;
    }
    
    public function setDocumentClass(string classs) -> <Export>
    {
        let this->_documentClass = classs;
        return this;
    }

}
