namespace ArangoDBClient;

class Document
{
    protected _id;
    protected _key;
    protected _rev;
    protected _values = [];
    protected _changed = false;
    protected _isNew = true;
    protected _doValidate = false;
    protected _hiddenAttributes = [];
    protected _ignoreHiddenAttributes = false;
    const ENTRY_ID = "_id";
    const ENTRY_KEY = "_key";
    const ENTRY_REV = "_rev";
    const ENTRY_ISNEW = "_isNew";
    const ENTRY_HIDDENATTRIBUTES = "_hiddenAttributes";
    const ENTRY_IGNOREHIDDENATTRIBUTES = "_ignoreHiddenAttributes";
    const OPTION_WAIT_FOR_SYNC = "waitForSync";
    const OPTION_POLICY = "policy";
    const OPTION_KEEPNULL = "keepNull";
    public function __construct(array options = null)
    {
        if is_array(options) {
            if isset options["hiddenAttributes"] {
                this->setHiddenAttributes(options["hiddenAttributes"]);
            }
            if isset options[self::ENTRY_HIDDENATTRIBUTES] {
                this->setHiddenAttributes(options[self::ENTRY_HIDDENATTRIBUTES]);
            }
            if isset options[self::ENTRY_IGNOREHIDDENATTRIBUTES] {
                this->setIgnoreHiddenAttributes(options[self::ENTRY_IGNOREHIDDENATTRIBUTES]);
            }
            if isset options[self::ENTRY_ISNEW] {
                this->setIsNew(options[self::ENTRY_ISNEW]);
            }
            if isset options["_validate"] {
                let this->_doValidate = options["_validate"];
            }
        }
    }
    
    public static function createFromArray(array values, array options = [])
    {
        var document, key, value;
    
        let document =  new Document(options);
        for key, value in values {
            document->set(key, value);
        }
        document->setChanged(true);
        return document;
    }
    
    public function __clone()
    {
        let this->_id =  null;
        let this->_key =  null;
        let this->_rev =  null;
    }
    
    public function __toString() -> string
    {
        return this->toJson();
    }
    
    public function toJson(array options = []) -> string
    {
        return json_encode(this->getAll(options));
    }
    
    public function toSerialized(array options = []) -> string
    {
        return serialize(this->getAll(options));
    }
    
    public function filterHiddenAttributes(array attributes, array _hiddenAttributes = []) -> array
    {
        var hiddenAttributes, hiddenAttributeName;
    
        let hiddenAttributes =  _hiddenAttributes !== null ? _hiddenAttributes  : this->getHiddenAttributes();
        if count(hiddenAttributes) > 0 {
            for hiddenAttributeName in hiddenAttributes {
                if isset attributes[hiddenAttributeName] {
                    unset attributes[hiddenAttributeName];
                
                }
            }
        }
        unset attributes[self::ENTRY_HIDDENATTRIBUTES];
        
        return attributes;
    }
    
    public function set(string key, value)
    {
        if this->_doValidate {
            ValueValidator::validate(value);
        }
        if key[0] === '_' {
            if key === self::ENTRY_ID {
                this->setInternalId(value);
                return;
            }
            if key === self::ENTRY_KEY {
                this->setInternalKey(value);
                return;
            }
            if key === self::ENTRY_REV {
                this->setRevision(value);
                return;
            }
            if key === self::ENTRY_ISNEW {
                this->setIsNew(value);
                return;
            }
        }
        if !this->_changed {
            if !isset this->_values[key] || this->_values[key] !== value {
                let this->_changed =  true;
            }
        }
        let this->_values[key] = value;
    }
    
    public function __set(string key, value)
    {
        this->set(key, value);
    }
    
    public function get(string key)
    {
        if isset this->_values[key] {
            return this->_values[key];
        }
        return null;
    }
    
    public function __get(string key)
    {
        return this->get(key);
    }
    
    public function __isset(string key) -> bool
    {
        if isset this->_values[key] {
            return true;
        }
        return false;
    }
    
    public function __unset(key) -> void
    {
        unset this->_values[key];
    
    }
    
    public function getAll(array options = []) -> array
    {
        var includeInternals, ignoreHiddenAttributes, _hiddenAttributes, data, nonInternals, key, value;
    
        let includeInternals =  false;
        let ignoreHiddenAttributes =  this->_ignoreHiddenAttributes;
        let _hiddenAttributes =  this->_hiddenAttributes;
        if !is_array(options) {
            let includeInternals = options;
        } else {
            let includeInternals =  array_key_exists("includeInternals", options) ? options["includeInternals"]  : includeInternals;
            let includeInternals =  array_key_exists("_includeInternals", options) ? options["_includeInternals"]  : includeInternals;
            let ignoreHiddenAttributes =  array_key_exists("ignoreHiddenAttributes", options) ? options["ignoreHiddenAttributes"]  : ignoreHiddenAttributes;
            let ignoreHiddenAttributes =  array_key_exists(self::ENTRY_IGNOREHIDDENATTRIBUTES, options) ? options[self::ENTRY_IGNOREHIDDENATTRIBUTES]  : ignoreHiddenAttributes;
            let _hiddenAttributes =  array_key_exists(self::ENTRY_HIDDENATTRIBUTES, options) ? options[self::ENTRY_HIDDENATTRIBUTES]  : _hiddenAttributes;
        }
        let data =  this->_values;
        let nonInternals =  ["_changed", "_values", self::ENTRY_HIDDENATTRIBUTES];
        if includeInternals === true {
            for key, value in this {
                if key[0] === "_" && 0 !== strpos(key, "__") && !in_array(key, nonInternals, true) {
                    let data[key] = value;
                }
            }
        }
        if ignoreHiddenAttributes === false {
            let data =  this->filterHiddenAttributes(data, _hiddenAttributes);
        }
        if this->_key !== null {
            let data["_key"] = this->_key;
        }
        return data;
    }
    
    public function getAllForInsertUpdate()
    {
        var data, key, value;
    
        let data =  [];
        for key, value in this->_values {
            if key === "_id" || key === "_rev" {
                continue;
            } else {
                if key === "_key" && value === null {
                    continue;
                }
            }
            let data[key] = value;
        }
        if this->_key !== null {
            let data["_key"] = this->_key;
        }
        return data;
    }
    
    public function getAllAsObject(array options = [])
    {
        var result;
    
        let result =  this->getAll(options);
        if count(result) === 0 {
            return new \stdClass();
        }
        return result;
    }
    
    public function setHiddenAttributes(array attributes)
    {
        let this->_hiddenAttributes = attributes;
    }
    
    public function getHiddenAttributes() -> array
    {
        return this->_hiddenAttributes;
    }
    
    public function isIgnoreHiddenAttributes() -> bool
    {
        return this->_ignoreHiddenAttributes;
    }
    
    public function setIgnoreHiddenAttributes(bool ignoreHiddenAttributes) -> void
    {
        let this->_ignoreHiddenAttributes =  ignoreHiddenAttributes;
    }
    
    public function setChanged(bool value) -> bool
    {
        let this->_changed =  value;
        return this->_changed;
    }
    
    public function getChanged() -> bool
    {
        return this->_changed;
    }
    
    public function setIsNew(bool isNew)
    {
        let this->_isNew =  isNew;
    }
    
    public function getIsNew() -> bool
    {
        return this->_isNew;
    }
    
    public function setInternalId(string id)
    {
        if this->_id !== null && this->_id !== id {
            throw new ClientException("Should not update the id of an existing document");
        }
        if !(preg_match("/^[a-zA-Z0-9_-]{1,64}\\/[a-zA-Z0-9_:.@\\-()+,=;$!*'%]{1,254}$/", id)) {
            throw new ClientException("Invalid format for document id");
        }
        let this->_id =  id;
    }
    
    public function setInternalKey(string key)
    {
        if this->_key !== null && this->_key !== key {
            throw new ClientException("Should not update the key of an existing document");
        }
        if !(preg_match("/^[a-zA-Z0-9_:.@\\-()+,=;$!*'%]{1,254}$/", key)) {
            throw new ClientException("Invalid format for document key");
        }
        let this->_key =  key;
    }
    
    public function getInternalId() -> string
    {
        return this->_id;
    }
    
    public function getInternalKey() -> string
    {
        return this->_key;
    }
    
    public function getHandle() -> string
    {
        return this->getInternalId();
    }
    
    public function getId()
    {
        return this->_id;
    }
    
    public function getKey()
    {
        return this->getInternalKey();
    }
    
    public function getCollectionId()
    {
        var collectionId, tmpListCollectionId;
    
        let tmpListCollectionId = explode("/", this->_id, 2);
        let collectionId = tmpListCollectionId[0];
        return collectionId;
    }
    
    public function setRevision(string rev)
    {
        let this->_rev =  rev;
    }
    
    public function getRevision()
    {
        return this->_rev;
    }

}
