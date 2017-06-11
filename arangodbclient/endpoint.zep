namespace ArangoDBClient;

class Endpoint
{
    protected _value;
    const TYPE_TCP = "tcp";
    const TYPE_SSL = "ssl";
    const TYPE_UNIX = "unix";
    const REGEXP_TCP = "/^tcp:\\/\\/(.+?):(\\d+)\\/?$/";
    const REGEXP_SSL = "/^ssl:\\/\\/(.+?):(\\d+)\\/?$/";
    const REGEXP_UNIX = "/^unix:\\/\\/(.+)$/";
    const ENTRY_ENDPOINT = "endpoint";
    const ENTRY_DATABASES = "databases";
    public function __construct(string value) -> void
    {
        if !(self::isValid(value)) {
            throw new ClientException(sprintf("invalid endpoint specification '%s'", value));
        }
        let this->_value = value;
    }
    
    public function __toString() -> string
    {
        return this->_value;
    }
    
    public static function getType(string value)
    {
        if preg_match(self::REGEXP_TCP, value) {
            return self::TYPE_TCP;
        }
        if preg_match(self::REGEXP_SSL, value) {
            return self::TYPE_SSL;
        }
        if preg_match(self::REGEXP_UNIX, value) {
            return self::TYPE_UNIX;
        }
        return null;
    }
    
    public static function getHost(string value)
    {
        var matches;
        if preg_match(self::REGEXP_TCP, value, matches) {
            return matches[1];
        }
        if preg_match(self::REGEXP_SSL, value, matches) {
            return matches[1];
        }
        return null;
    }
    
    public static function isValid(string value) -> bool
    {
        var type;
    
        if !is_string(value) {
            return false;
        }
        let type =  self::getType(value);
        return !(type === null);
    }
    
    public static function listEndpoints(<Connection> connection) -> array
    {
        var response;
    
        let response =  connection->get(Urls::URL_ENDPOINT);
        return response->getJson();
    }

}