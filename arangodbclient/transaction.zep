namespace ArangoDBClient;

class Transaction
{
    protected _connection;
    protected attributes = [];
    protected _action;
    const ENTRY_COLLECTIONS = "collections";
    const ENTRY_ACTION = "action";
    const ENTRY_WAIT_FOR_SYNC = "waitForSync";
    const ENTRY_LOCK_TIMEOUT = "lockTimeout";
    const ENTRY_PARAMS = "params";
    const ENTRY_READ = "read";
    const ENTRY_WRITE = "write";
    
    public function __construct(<Connection> connection, array transactionArray = null)
    {
        let this->_connection = connection;
        if is_array(transactionArray) {
            this->buildTransactionAttributesFromArray(transactionArray);
        }
    }
    
    public function execute()
    {
        var response, responseArray;
    
        let response =  this->_connection->post(Urls::URL_TRANSACTION, this->getConnection()->json_encode_wrapper(this->attributes));
        let responseArray =  response->getJson();
        if isset responseArray["result"] {
            return responseArray["result"];
        }
        return true;
    }
    
    protected function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    public function setCollections(array value) -> void
    {
        if array_key_exists("read", value) {
            this->setReadCollections(value["read"]);
        }
        if array_key_exists("write", value) {
            this->setWriteCollections(value["write"]);
        }
    }
    
    public function getCollections() -> array
    {
        return this->get(self::ENTRY_COLLECTIONS);
    }
    
    public function setAction(string value) -> void
    {
        this->set(self::ENTRY_ACTION, (string) value);
    }
    
    public function getAction() -> string
    {
        return this->get(self::ENTRY_ACTION);
    }
    
    public function setWaitForSync(bool value) -> void
    {
        this->set(self::ENTRY_WAIT_FOR_SYNC, value);
    }
    
    public function getWaitForSync() -> bool
    {
        return this->get(self::ENTRY_WAIT_FOR_SYNC);
    }
    
    public function setLockTimeout(int value) -> void
    {
        this->set(self::ENTRY_LOCK_TIMEOUT, value);
    }
    
    public function getLockTimeout() -> int
    {
        return this->get(self::ENTRY_LOCK_TIMEOUT);
    }
    
    public function setParams(array value) -> void
    {
        this->set(self::ENTRY_PARAMS, value);
    }
    
    public function getParams() -> array
    {
        return this->get(self::ENTRY_PARAMS);
    }
    
    public function setWriteCollections(array value) -> void
    {
        let this->attributes[self::ENTRY_COLLECTIONS][self::ENTRY_WRITE] = value;
    }
    
    public function getWriteCollections() -> array
    {
        return this->attributes[self::ENTRY_COLLECTIONS][self::ENTRY_WRITE];
    }
    
    public function setReadCollections(array value) -> void
    {
        let this->attributes[self::ENTRY_COLLECTIONS][self::ENTRY_READ] = value;
    }
    
    public function getReadCollections() -> array
    {
        return this->attributes[self::ENTRY_COLLECTIONS][self::ENTRY_READ];
    }
    
    public function set(key, value) -> void
    {
        if !is_string(key) {
            throw new ClientException("Invalid document attribute key");
        }
        let this->attributes[key] = value;
    }
    
    public function __set(string key, value)
    {
        if key == self::ENTRY_COLLECTIONS {
            this->setCollections(value);
        } elseif key == self::ENTRY_PARAMS {
            this->setParams(value);
        } elseif key == self::ENTRY_LOCK_TIMEOUT {
            this->setLockTimeout(value);
        } elseif key == self::ENTRY_WAIT_FOR_SYNC {
            this->setWaitForSync(value);
        } elseif key == self::ENTRY_ACTION {
            this->setAction(value);
        } elseif key == "readCollections" {
            this->setReadCollections(value);
        } elseif key == "writeCollections" {
            this->setWriteCollections(value);
        } else {
            this->set(key, value);
        }
    }
    
    public function get(string key)
    {
        switch key {
            case "writeCollections":
                return this->getWriteCollections();
            case "readCollections":
                return this->getReadCollections();
        }
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
    
    public function buildTransactionAttributesFromArray(options) -> void
    {
        if isset options[self::ENTRY_COLLECTIONS] {
            this->setCollections(options[self::ENTRY_COLLECTIONS]);
        }
        if isset options[self::ENTRY_ACTION] {
            this->setAction(options[self::ENTRY_ACTION]);
        }
        if isset options[self::ENTRY_WAIT_FOR_SYNC] {
            this->setWaitForSync(options[self::ENTRY_WAIT_FOR_SYNC]);
        }
        if isset options[self::ENTRY_LOCK_TIMEOUT] {
            this->setLockTimeout(options[self::ENTRY_LOCK_TIMEOUT]);
        }
        if isset options[self::ENTRY_PARAMS] {
            this->setParams(options[self::ENTRY_PARAMS]);
        }
    }

}
