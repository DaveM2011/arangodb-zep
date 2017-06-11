namespace ArangoDBClient;

class ExportCursor
{
    protected _connection;
    protected _options;
    protected _result;
    protected _hasMore;
    protected _id;
    protected _fetches = 1;
    protected _documentClass = "\\ArangoDBClient\\Document";
    protected data = [];
    const ENTRY_ID = "id";
    const ENTRY_HASMORE = "hasMore";
    const ENTRY_RESULT = "result";
    const ENTRY_FLAT = "_flat";
    const ENTRY_COUNT = "count";
    const ENTRY_TYPE = "type";
    const ENTRY_BASEURL = "baseurl";
    public function __construct(<Connection> connection, array data, array options)
    {
        let this->_connection = connection;
        let this->data = data;
        let this->_id =  null;
        if isset data[self::ENTRY_ID] {
            let this->_id = data[self::ENTRY_ID];
        }
        if isset options["_documentClass"] {
            this->setDocumentClass(options["_documentClass"]);
        }
        //assert(isset data[self::ENTRY_HASMORE]);
        let this->_hasMore =  (bool) data[self::ENTRY_HASMORE];
        let this->_options = options;
        let this->_result =  [];
        this->setData((array) data[self::ENTRY_RESULT]);
    }
    
    public function delete() -> bool
    {
        var e;
    
        if this->_id {
            try {
                this->_connection->delete(this->url() . "/" . this->_id);
                return true;
            } catch Exception, e {
                throw e;
            }
        }
        return false;
    }
    
    public function getCount() -> int
    {
        return this->data[self::ENTRY_COUNT];
    }
    
    public function getNextBatch()
    {
        var tmpArray40cd750bba9870f18aada2478b24840a, result;
    
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        if this->_result === tmpArray40cd750bba9870f18aada2478b24840a && this->_hasMore {
            this->fetchOutstanding();
        }
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        if this->_result !== tmpArray40cd750bba9870f18aada2478b24840a {
            let result =  this->_result;
            let this->_result =  [];
            return result;
        }
        return false;
    }
    
    protected function setData(array data)
    {
        var _documentClass, row;
    
        let _documentClass =  this->_documentClass;
        if isset this->_options[self::ENTRY_FLAT] && this->_options[self::ENTRY_FLAT] {
            let this->_result = data;
        } else {
            let this->_result =  [];
            if this->_options[self::ENTRY_TYPE] === Collection::TYPE_EDGE {
                for row in data {
                    let this->_result[] = Edge::createFromArray(row, this->_options);
                }
            } else {
                for row in data {
                    let this->_result[] = {_documentClass}::createFromArray(row, this->_options);
                }
            }
        }
    }
    
    protected function fetchOutstanding()
    {
        var response, data;
    
        let response =  this->_connection->put(this->url() . "/" . this->_id, "");
        let this->_fetches++;
        let data =  response->getJson();
        let this->_hasMore =  (bool) data[self::ENTRY_HASMORE];
        this->setData(data[self::ENTRY_RESULT]);
        if !(this->_hasMore) {
            let this->_id =  null;
        }
    }
    
    protected function url() -> string
    {
        if isset this->_options[self::ENTRY_BASEURL] {
            return this->_options[self::ENTRY_BASEURL];
        }
        return Urls::URL_EXPORT;
    }
    
    public function getFetches() -> int
    {
        return this->_fetches;
    }
    
    public function getId() -> string
    {
        return this->_id;
    }
    
    public function setDocumentClass(string classs) -> <ExportCursor>
    {
        let this->_documentClass = classs;
        return this;
    }

}
