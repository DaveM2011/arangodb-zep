namespace ArangoDBClient;

class Statement
{
    protected _connection;
    protected _bindVars;
    protected _batchSize;
    protected _doCount = false;
    protected _fullCount = false;
    protected _query;
    protected _flat = false;
    protected _sanitize = false;
    protected _retries = 0;
    protected _cache;
    protected resultType;
    protected _documentClass;
    const ENTRY_QUERY = "query";
    const ENTRY_COUNT = "count";
    const ENTRY_BATCHSIZE = "batchSize";
    const ENTRY_RETRIES = "retries";
    const ENTRY_BINDVARS = "bindVars";
    const FULL_COUNT = "fullCount";
    public function __construct(<Connection> connection, array data) -> void
    {
        let this->_connection = connection;
        let this->_bindVars =  new BindVars();
        if isset data[self::ENTRY_QUERY] {
            this->setQuery(data[self::ENTRY_QUERY]);
        }
        if isset data[self::ENTRY_COUNT] {
            this->setCount(data[self::ENTRY_COUNT]);
        }
        if isset data[self::ENTRY_BATCHSIZE] {
            this->setBatchSize(data[self::ENTRY_BATCHSIZE]);
        }
        if isset data[self::ENTRY_BINDVARS] {
            this->_bindVars->set(data[self::ENTRY_BINDVARS]);
        }
        if isset data[self::FULL_COUNT] {
            let this->_fullCount =  (bool) data[Cursor::FULL_COUNT];
        }
        if isset data[Cursor::ENTRY_SANITIZE] {
            let this->_sanitize =  (bool) data[Cursor::ENTRY_SANITIZE];
        }
        if isset data[self::ENTRY_RETRIES] {
            let this->_retries =  (int) data[self::ENTRY_RETRIES];
        }
        if isset data[Cursor::ENTRY_FLAT] {
            let this->_flat =  (bool) data[Cursor::ENTRY_FLAT];
        }
        if isset data[Cursor::ENTRY_CACHE] {
            let this->_cache =  (bool) data[Cursor::ENTRY_CACHE];
        }
    }
    
    protected function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    public function execute() -> <Cursor>
    {
        var data, tries, response, tmpArray40cd750bba9870f18aada2478b24840a, e;
    
        if !(is_string(this->_query)) {
            throw new ClientException("Query should be a string");
        }
        let data =  this->buildData();
        let tries = 0;
        while (true) {
            try {
                let tmpArray40cd750bba9870f18aada2478b24840a = [];
                let response =  this->_connection->post(Urls::URL_CURSOR, this->getConnection()->json_encode_wrapper(data), tmpArray40cd750bba9870f18aada2478b24840a);
                return new Cursor(this->_connection, response->getJson(), this->getCursorOptions());
            } catch ServerException, e {
                let tries++;
                if tries >= this->_retries {
                    throw e;
                }
                if e->getServerCode() !== 29 {
                    throw e;
                }
            }
        }
        return;
    }
    
    public function explain() -> array
    {
        var data, response, tmpArray40cd750bba9870f18aada2478b24840a;
    
        let data =  this->buildData();
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        let response =  this->_connection->post(Urls::URL_EXPLAIN, this->getConnection()->json_encode_wrapper(data), tmpArray40cd750bba9870f18aada2478b24840a);
        return response->getJson();
    }
    
    public function validate() -> array
    {
        var data, response, tmpArray40cd750bba9870f18aada2478b24840a;
    
        let data =  this->buildData();
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        let response =  this->_connection->post(Urls::URL_QUERY, this->getConnection()->json_encode_wrapper(data), tmpArray40cd750bba9870f18aada2478b24840a);
        return response->getJson();
    }
    
    public function __invoke(args) -> <Cursor>
    {
        return this->execute();
    }
    
    public function __toString() -> string
    {
        return this->_query;
    }
    
    public function bind(key, value = null)
    {
        this->_bindVars->set(key, value);
    }
    
    public function getBindVars() -> array
    {
        return this->_bindVars->getAll();
    }
    
    public function setQuery(string query)
    {
        if !(is_string(query)) {
            throw new ClientException("Query should be a string");
        }
        let this->_query = query;
    }
    
    public function getQuery() -> string
    {
        return this->_query;
    }
    
    public function setResultType(resultType) -> string
    {
        let this->resultType = resultType;
        return this->resultType;
    }
    
    public function setCount(bool value)
    {
        let this->_doCount = value;
    }
    
    public function getCount() -> bool
    {
        return this->_doCount;
    }
    
    public function setFullCount(bool value)
    {
        let this->_fullCount = value;
    }
    
    public function getFullCount() -> bool
    {
        return this->_fullCount;
    }
    
    public function setCache(bool value)
    {
        let this->_cache = value;
    }
    
    public function getCache() -> bool
    {
        return this->_cache;
    }
    
    public function setBatchSize(int value)
    {
        if !is_int(value) || (int) value <= 0 {
            throw new ClientException("Batch size should be a positive integer");
        }
        let this->_batchSize =  (int) value;
    }
    
    public function getBatchSize() -> int
    {
        return this->_batchSize;
    }
    
    protected function buildData() -> array
    {
        var data;
    
        let data =  [self::ENTRY_QUERY : this->_query, self::ENTRY_COUNT : this->_doCount, "options" : [self::FULL_COUNT : this->_fullCount]];
        if this->_cache !== null {
            let data[Cursor::ENTRY_CACHE] = this->_cache;
        }
        if this->_bindVars->getCount() > 0 {
            let data[self::ENTRY_BINDVARS] =  this->_bindVars->getAll();
        }
        if this->_batchSize > 0 {
            let data[self::ENTRY_BATCHSIZE] = this->_batchSize;
        }
        return data;
    }
    
    protected function getCursorOptions() -> array
    {
        var result;
    
        let result =  [Cursor::ENTRY_SANITIZE : (bool) this->_sanitize, Cursor::ENTRY_FLAT : (bool) this->_flat, Cursor::ENTRY_BASEURL : Urls::URL_CURSOR];
        if this->resultType !== null {
            let result[Cursor::ENTRY_TYPE] = this->resultType;
        }
        if this->_documentClass !== null && this->_documentClass !== "" {
            let result["_documentClass"] = this->_documentClass;
        }
        return result;
    }
    
    public function setDocumentClass(string classs) -> <Statement>
    {
        let this->_documentClass = classs;
        return this;
    }

}
