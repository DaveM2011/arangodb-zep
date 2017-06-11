namespace ArangoDBClient;

abstract class Handler
{
    protected _connection;
    protected _documentClass = "\\ArangoDBClient\\Document";
    public function __construct(<Connection> connection)
    {
        let this->_connection = connection;
    }
    
    protected function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    protected function getConnectionOption(optionName)
    {
        return this->getConnection()->getOption(optionName);
    }
    
    protected function json_encode_wrapper(array body) -> string
    {
        return this->getConnection()->json_encode_wrapper(body);
    }
    
    protected function includeOptionsInParams(options, array includeArray = [])
    {
        var params, key, value;
    
        let params =  [];
        for key, value in options {
            if array_key_exists(key, includeArray) {
                if key === ConnectionOptions::OPTION_UPDATE_POLICY {
                    UpdatePolicy::validate(value);
                }
                let params[key] = value;
                if value === null {
                    let params[key] = includeArray[key];
                }
            }
        }
        return params;
    }
    
    protected function includeOptionsInBody(options, body, array includeArray = [])
    {
        var key, value;
    
        for key, value in options {
            if array_key_exists(key, includeArray) {
                let body[key] = value;
                if value === null && includeArray[key] !== null {
                    let body[key] = includeArray[key];
                }
            }
        }
        return body;
    }
    
    protected function makeCollection(value) -> string
    {
        if value instanceof Collection {
            return value->getName();
        }
        if value instanceof Document {
            return value->getCollectionId();
        }
        return value;
    }
    
    public function setDocumentClass(string classs) -> <Handler>
    {
        let this->_documentClass = classs;
        return this;
    }

}
