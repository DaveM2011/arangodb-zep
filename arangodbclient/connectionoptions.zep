namespace ArangoDBClient;

class ConnectionOptions implements \ArrayAccess
{
    protected _values = [];
    protected _endpoint;
    const OPTION_ENDPOINT = "endpoint";
    const OPTION_HOST = "host";
    const OPTION_PORT = "port";
    const OPTION_TIMEOUT = "timeout";
    const OPTION_TRACE = "trace";
    const OPTION_VERIFY_CERT = "verifyCert";
    const OPTION_ALLOW_SELF_SIGNED = "allowSelfSigned";
    const OPTION_CIPHERS = "ciphers";
    const OPTION_ENHANCED_TRACE = "enhancedTrace";
    const OPTION_CREATE = "createCollection";
    const OPTION_REVISION = "rev";
    const OPTION_UPDATE_POLICY = "policy";
    const OPTION_UPDATE_KEEPNULL = "keepNull";
    const OPTION_REPLACE_POLICY = "policy";
    const OPTION_DELETE_POLICY = "policy";
    const OPTION_WAIT_SYNC = "waitForSync";
    const OPTION_LIMIT = "limit";
    const OPTION_SKIP = "skip";
    const OPTION_BATCHSIZE = "batchSize";
    const OPTION_JOURNAL_SIZE = "journalSize";
    const OPTION_IS_SYSTEM = "isSystem";
    const OPTION_IS_VOLATILE = "isVolatile";
    const OPTION_AUTH_USER = "AuthUser";
    const OPTION_AUTH_PASSWD = "AuthPasswd";
    const OPTION_AUTH_TYPE = "AuthType";
    const OPTION_CONNECTION = "Connection";
    const OPTION_RECONNECT = "Reconnect";
    const OPTION_BATCH = "Batch";
    const OPTION_BATCHPART = "BatchPart";
    const OPTION_DATABASE = "database";
    const OPTION_CHECK_UTF8_CONFORM = "CheckUtf8Conform";
    public function __construct(array options)
    {
        let this->_values = array_merge(self::getDefaults(), options);
        this->validate();
    }
    
    public function getAll() -> array
    {
        return this->_values;
    }
    
    public function offsetSet(offset, value)
    {
        let this->_values[offset] = value;
        this->validate();
    }
    
    public function offsetExists(offset) -> bool
    {
        return isset this->_values[offset];
    }
    
    public function offsetUnset(offset)
    {
        unset this->_values[offset];
        
        this->validate();
    }
    
    public function offsetGet(offset)
    {
        if !array_key_exists(offset, this->_values) {
            throw new ClientException("Invalid option " . offset);
        }
        return this->_values[offset];
    }
    
    public function getEndpoint() -> <Endpoint>
    {
        if this->_endpoint == null {
            let this->_endpoint = new Endpoint(this->_values[self::OPTION_ENDPOINT]);
        }
        return this->_endpoint;
    }
    
    protected static function getDefaults() -> array
    {
        return [
            self::OPTION_ENDPOINT : null,
            self::OPTION_HOST : null,
            self::OPTION_PORT : DefaultValues::DEFAULT_PORT,
            self::OPTION_TIMEOUT : DefaultValues::DEFAULT_TIMEOUT,
            self::OPTION_CREATE : DefaultValues::DEFAULT_CREATE,
            self::OPTION_UPDATE_POLICY : DefaultValues::DEFAULT_UPDATE_POLICY,
            self::OPTION_REPLACE_POLICY : DefaultValues::DEFAULT_REPLACE_POLICY,
            self::OPTION_DELETE_POLICY : DefaultValues::DEFAULT_DELETE_POLICY,
            self::OPTION_REVISION : null,
            self::OPTION_WAIT_SYNC : DefaultValues::DEFAULT_WAIT_SYNC,
            self::OPTION_BATCHSIZE : null,
            self::OPTION_JOURNAL_SIZE : DefaultValues::DEFAULT_JOURNAL_SIZE,
            self::OPTION_IS_SYSTEM : false,
            self::OPTION_IS_VOLATILE : DefaultValues::DEFAULT_IS_VOLATILE,
            self::OPTION_CONNECTION : DefaultValues::DEFAULT_CONNECTION,
            self::OPTION_TRACE : null,
            self::OPTION_ENHANCED_TRACE : false,
            self::OPTION_VERIFY_CERT : DefaultValues::DEFAULT_VERIFY_CERT,
            self::OPTION_ALLOW_SELF_SIGNED : DefaultValues::DEFAULT_ALLOW_SELF_SIGNED,
            self::OPTION_CIPHERS : DefaultValues::DEFAULT_CIPHERS,
            self::OPTION_AUTH_USER : null,
            self::OPTION_AUTH_PASSWD : null,
            self::OPTION_AUTH_TYPE : DefaultValues::DEFAULT_AUTH_TYPE,
            self::OPTION_RECONNECT : false,
            self::OPTION_BATCH : false,
            self::OPTION_BATCHPART : false,
            self::OPTION_DATABASE : "_system",
            self::OPTION_CHECK_UTF8_CONFORM : DefaultValues::DEFAULT_CHECK_UTF8_CONFORM
        ];
    }
    
    protected static function getSupportedAuthTypes() -> array
    {
        return ["Basic"];
    }
    
    protected static function getSupportedConnectionTypes() -> array
    {
        return ["Close", "Keep-Alive"];
    }
    
    protected function validate()
    {
        var type;
    
        if this->_values[self::OPTION_HOST] && !is_string(this->_values[self::OPTION_HOST]) {
            throw new ClientException("host should be a string");
        }
        if this->_values[self::OPTION_PORT] && !is_int(this->_values[self::OPTION_PORT]) {
            throw new ClientException("port should be an integer");
        }
        if this->_values[self::OPTION_HOST] && this->_values[self::OPTION_ENDPOINT] {
            throw new ClientException("must not specify both host and endpoint");
        } else {
            if this->_values[self::OPTION_HOST] && !this->_values[self::OPTION_ENDPOINT] {
                let this->_values[self::OPTION_ENDPOINT] =  "tcp://" . this->_values[self::OPTION_HOST] . ":" . this->_values[self::OPTION_PORT];
                unset this->_values[self::OPTION_HOST];
            }
        }
        this->getEndpoint();
        let type = Endpoint::getType(this->_values[self::OPTION_ENDPOINT]);
        if type == Endpoint::TYPE_UNIX {
            let this->_values[self::OPTION_PORT] = 0;
        } elseif type == Endpoint::TYPE_SSL {
            let this->_values[self::OPTION_PORT] = 0;
        }
        if this->_values[self::OPTION_AUTH_TYPE] && !in_array(this->_values[self::OPTION_AUTH_TYPE], self::getSupportedAuthTypes(), true) {
            throw new ClientException("unsupported authorization method");
        }
        if this->_values[self::OPTION_CONNECTION] && !in_array(this->_values[self::OPTION_CONNECTION], self::getSupportedConnectionTypes(), true) {
            throw new ClientException(sprintf("unsupported connection value '%s'", this->_values[self::OPTION_CONNECTION]));
        }
        UpdatePolicy::validate(this->_values[self::OPTION_UPDATE_POLICY]);
        UpdatePolicy::validate(this->_values[self::OPTION_REPLACE_POLICY]);
        UpdatePolicy::validate(this->_values[self::OPTION_DELETE_POLICY]);
    }

}
