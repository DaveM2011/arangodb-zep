namespace ArangoDBClient;

class AqlUserFunction
{
    protected _connection;
    protected attributes = [];
    protected _action = "";
    const ENTRY_NAME = "name";
    const ENTRY_CODE = "code";
    public function __construct(<Connection> connection, array attributesArray = null)
    {
        let this->_connection = connection;
        if is_array(attributesArray) {
            this->buildAttributesFromArray(attributesArray);
        }
    }
    
    public function register(var name = null, var code = null)
    {
        var attributes, response;
    
        let attributes =  this->attributes;
        if name {
            let attributes["name"] = name;
        }
        if code {
            let attributes["code"] = code;
        }
        let response =  this->_connection->post(Urls::URL_AQL_USER_FUNCTION, this->getConnection()->json_encode_wrapper(attributes));
        return response->getJson();
    }
    
    public function unregister(var name = null, bool namespacee = false)
    {
        var url, response;
    
        if name === null {
            let name =  this->getName();
        }
        let url =  UrlHelper::buildUrl(Urls::URL_AQL_USER_FUNCTION, [name]);
        if namespacee {
            let url =  UrlHelper::appendParamsUrl(url, ["group" : true]);
        }
        let response =  this->_connection->delete(url);
        return response->getJson();
    }
    
    public function getRegisteredUserFunctions(var namespacee = null)
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_AQL_USER_FUNCTION, []);
        if namespacee !== null {
            let url =  UrlHelper::appendParamsUrl(url, ["namespace" : namespacee]);
        }
        let response =  this->_connection->get(url);
        return response->getJson();
    }
    
    protected function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    public function setName(string value) -> void
    {
        this->set(self::ENTRY_NAME, (string) value);
    }
    
    public function getName() -> string
    {
        return this->get(self::ENTRY_NAME);
    }
    
    public function setCode(string value) -> void
    {
        this->set(self::ENTRY_CODE, (string) value);
    }
    
    public function getCode() -> string
    {
        return this->get(self::ENTRY_CODE);
    }
    
    public function set(key, value)
    {
        if !is_string(key) {
            throw new ClientException("Invalid attribute key");
        }
        let this->attributes[key] = value;
        return this;
    }
    
    public function __set(string key, value) -> void
    {
        if key == self::ENTRY_NAME {
            this->setName(value);
        } elseif key == self::ENTRY_CODE {
            this->setCode(value);
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
    
    public function __isset(string key) -> bool
    {
        if isset this->attributes[key] {
            return true;
        }
        return false;
    }
    
    public function __get(string key)
    {
        return this->get(key);
    }
    
    public function __toString() -> string
    {
        return this->_action;
    }
    
    public function buildAttributesFromArray(options) -> void
    {
        if isset options[self::ENTRY_NAME] {
            this->setName(options[self::ENTRY_NAME]);
        }
        if isset options[self::ENTRY_CODE] {
            this->setCode(options[self::ENTRY_CODE]);
        }
    }

}
