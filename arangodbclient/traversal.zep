namespace ArangoDBClient;

class Traversal
{
    protected _connection;
    protected attributes = [];
    protected _action;
    const OPTION_FIELDS = "fields";
    const ENTRY_STARTVERTEX = "startVertex";
    const ENTRY_EDGECOLLECTION = "edgeCollection";
    public function __construct(<Connection> connection, string startVertex, string edgeCollection, array options = null)
    {
        let this->_connection = connection;
        this->setStartVertex(startVertex);
        this->setEdgeCollection(edgeCollection);
        if is_array(options) {
            let this->attributes =  array_merge(this->attributes, options);
        }
    }
    
    public function getResult() -> array
    {
        var bodyParams, response;
    
        let bodyParams =  this->attributes;
        let response =  this->_connection->post(Urls::URL_TRAVERSAL, this->getConnection()->json_encode_wrapper(bodyParams));
        return response->getJson();
    }
    
    protected function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    public function setStartVertex(string value) -> void
    {
        this->set(self::ENTRY_STARTVERTEX, value);
    }
    
    public function getStartVertex() -> string
    {
        return this->get(self::ENTRY_STARTVERTEX);
    }
    
    public function setEdgeCollection(string value) -> void
    {
        this->set(self::ENTRY_EDGECOLLECTION, value);
    }
    
    public function getEdgeCollection() -> string
    {
        return this->get(self::ENTRY_EDGECOLLECTION);
    }
    
    public function set(key, value) -> void
    {
        if !is_string(key) {
            throw new ClientException("Invalid attribute key");
        }
        let this->attributes[key] = value;
    }
    
    public function __set(string key, value)
    {
        if key == self::ENTRY_STARTVERTEX {
            this->setStartVertex(value);
        } elseif key == self::ENTRY_EDGECOLLECTION {
            this->setEdgeCollection(value);
        } else {
            this->set(key, value);
        }
    }
    
    public function get(string key)
    {
        if isset this->attributes[key] {
            return this->attributes[key];
        }
        return null;
    }
    
    public function __get(string key)
    {
        return this->get(key);
    }
    
    public function __isset(string key) -> bool
    {
        if isset this->attributes[key] {
            return true;
        }
        return false;
    }
    
    public function __toString() -> string
    {
        return this->_action;
    }

}
