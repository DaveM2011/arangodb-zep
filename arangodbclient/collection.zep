namespace ArangoDBClient;

class Collection
{
    protected _id;
    protected _name;
    protected _type;
    protected _waitForSync;
    protected _journalSize;
    protected _isSystem;
    protected _isVolatile;
    protected _numberOfShards;
    protected _shardKeys;
    protected _status;
    protected _keyOptions;
    const ENTRY_ID = "id";
    const ENTRY_NAME = "name";
    const ENTRY_TYPE = "type";
    const ENTRY_WAIT_SYNC = "waitForSync";
    const ENTRY_JOURNAL_SIZE = "journalSize";
    const ENTRY_STATUS = "status";
    const ENTRY_KEY_OPTIONS = "keyOptions";
    const ENTRY_IS_SYSTEM = "isSystem";
    const ENTRY_IS_VOLATILE = "isVolatile";
    const ENTRY_NUMBER_OF_SHARDS = "numberOfShards";
    const ENTRY_SHARD_KEYS = "shardKeys";
    const OPTION_PROPERTIES = "properties";
    const TYPE_DOCUMENT = 2;
    const TYPE_EDGE = 3;
    const STATUS_NEW_BORN = 1;
    const STATUS_UNLOADED = 2;
    const STATUS_LOADED = 3;
    const STATUS_BEING_UNLOADED = 4;
    const STATUS_DELETED = 5;
    public function __construct(string name = null) -> void
    {
        if name !== null {
            this->setName(name);
        }
    }
    
    public static function createFromArray(array values) -> <Collection>
    {
        var collection, key, value;
    
        let collection =  new self();
        for key, value in values {
            collection->set(key, value);
        }
        return collection;
    }
    
    public static function getDefaultType()
    {
        return self::TYPE_DOCUMENT;
    }
    
    public function __clone()
    {
        let this->_id =  null;
        let this->_name =  null;
        let this->_waitForSync =  null;
        let this->_journalSize =  null;
        let this->_isSystem =  null;
        let this->_isVolatile =  null;
        let this->_numberOfShards =  null;
        let this->_shardKeys =  null;
    }
    
    public function __toString() -> string
    {
        return this->toJson();
    }
    
    public function toJson() -> string
    {
        return json_encode(this->getAll());
    }
    
    public function toSerialized() -> string
    {
        return serialize(this->getAll());
    }
    
    public function getAll() -> array
    {
        var result;
    
        let result =  [self::ENTRY_ID : this->_id, self::ENTRY_NAME : this->_name, self::ENTRY_WAIT_SYNC : this->_waitForSync, self::ENTRY_JOURNAL_SIZE : this->_journalSize, self::ENTRY_IS_SYSTEM : this->_isSystem, self::ENTRY_IS_VOLATILE : this->_isVolatile, self::ENTRY_TYPE : this->_type, self::ENTRY_STATUS : this->_status, self::ENTRY_KEY_OPTIONS : this->_keyOptions];
        if this->_numberOfShards !== null {
            let result[self::ENTRY_NUMBER_OF_SHARDS] = this->_numberOfShards;
        }
        if is_array(this->_shardKeys) {
            let result[self::ENTRY_SHARD_KEYS] = this->_shardKeys;
        }
        return result;
    }
    
    public function set(string key, value)
    {
        if !(is_string(key)) {
            throw new ClientException("Invalid collection attribute type");
        }
        if key === self::ENTRY_ID {
            this->setId(value);
            return;
        }
        if key === self::ENTRY_NAME {
            this->setName(value);
            return;
        }
        if key === self::ENTRY_WAIT_SYNC {
            this->setWaitForSync(value);
            return;
        }
        if key === self::ENTRY_JOURNAL_SIZE {
            this->setJournalSize(value);
            return;
        }
        if key === self::ENTRY_IS_SYSTEM {
            this->setIsSystem(value);
            return;
        }
        if key === self::ENTRY_IS_VOLATILE {
            this->setIsVolatile(value);
            return;
        }
        if key === self::ENTRY_TYPE {
            this->setType(value);
            return;
        }
        if key === self::ENTRY_STATUS {
            this->setStatus(value);
            return;
        }
        if key === self::ENTRY_KEY_OPTIONS {
            this->setKeyOptions(value);
            return;
        }
        if key === self::ENTRY_NUMBER_OF_SHARDS {
            this->setNumberOfShards(value);
            return;
        }
        if key === self::ENTRY_SHARD_KEYS {
            this->setShardKeys(value);
            return;
        }
    }
    
    public function setId(id) -> bool
    {
        if this->_id !== null && this->_id !== id {
            throw new ClientException("Should not update the id of an existing collection");
        }
        let this->_id =  (string) id;
        return this->_id;
    }
    
    public function getId()
    {
        return this->_id;
    }
    
    public function setName(string name)
    {
        //assert(is_string(name));
        if this->_name !== null && this->_name !== name {
            throw new ClientException("Should not update the name of an existing collection");
        }
        let this->_name =  (string) name;
    }
    
    public function getName() -> string
    {
        return this->_name;
    }
    
    public function setType(int type)
    {
        //assert(is_int(type));
        if this->_type !== null && this->_type !== type {
            throw new ClientException("Should not update the type of an existing collection");
        }
        if type !== self::TYPE_DOCUMENT && type !== self::TYPE_EDGE {
            throw new ClientException("Invalid type used for collection");
        }
        let this->_type = type;
    }
    
    public function getType() -> string
    {
        return this->_type;
    }
    
    public function setStatus(int status)
    {
        var tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c;
    
        //assert(is_int(status));
        if this->_status !== null && this->_status !== status {
            throw new ClientException("Should not update the status of an existing collection");
        }
        let tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c = [self::STATUS_NEW_BORN, self::STATUS_UNLOADED, self::STATUS_LOADED, self::STATUS_BEING_UNLOADED, self::STATUS_DELETED];
        if !(in_array(status, tmpArray8c13b2fa5ccb3b2f347c5ca02097d28c, true)) {
            throw new ClientException("Invalid status used for collection");
        }
        let this->_status = status;
    }
    
    public function getStatus() -> int
    {
        return this->_status;
    }
    
    public function setKeyOptions(array keyOptions)
    {
        //assert(is_array(keyOptions));
        let this->_keyOptions = keyOptions;
    }
    
    public function getKeyOptions() -> array
    {
        return this->_keyOptions;
    }
    
    public function setWaitForSync(bool value)
    {
        //assert(value === null || is_bool(value));
        let this->_waitForSync = value;
    }
    
    public function getWaitForSync() -> bool
    {
        return this->_waitForSync;
    }
    
    public function setJournalSize(int value)
    {
        //assert(is_numeric(value));
        let this->_journalSize = value;
    }
    
    public function getJournalSize() -> int
    {
        return this->_journalSize;
    }
    
    public function setIsSystem(bool value)
    {
        //assert(value === null || is_bool(value));
        let this->_isSystem = value;
    }
    
    public function getIsSystem() -> bool
    {
        return this->_isSystem;
    }
    
    public function setIsVolatile(bool value)
    {
        //assert(value === null || is_bool(value));
        let this->_isVolatile = value;
    }
    
    public function getIsVolatile() -> bool
    {
        return this->_isVolatile;
    }
    
    public function setNumberOfShards(int value)
    {
        //assert(value === null || is_numeric(value));
        let this->_numberOfShards = value;
    }
    
    public function getNumberOfShards() -> int
    {
        return this->_numberOfShards;
    }
    
    public function setShardKeys(array value)
    {
        //assert(value === null || is_array(value));
        let this->_shardKeys = value;
    }
    
    public function getShardKeys() -> array
    {
        return this->_shardKeys;
    }

}
