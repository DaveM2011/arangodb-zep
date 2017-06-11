namespace ArangoDBClient;

class Edge extends Document
{
    protected _from;
    protected _to;
    const ENTRY_FROM = "_from";
    const ENTRY_TO = "_to";
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
            if key === self::ENTRY_FROM {
                this->setFrom(value);
                return;
            }
            if key === self::ENTRY_TO {
                this->setTo(value);
                return;
            }
        }
        if !(this->_changed) {
            if !(isset this->_values[key]) || this->_values[key] !== value {
                let this->_changed =  true;
            }
        }
        let this->_values[key] = value;
    }
    
    public function setFrom(from) -> <Edge>
    {
        let this->_from = from;
        return this;
    }
    
    public function getFrom()
    {
        return this->_from;
    }
    
    public function setTo(to) -> <Edge>
    {
        let this->_to = to;
        return this;
    }
    
    public function getTo()
    {
        return this->_to;
    }
    
    public function getAllForInsertUpdate()
    {
        var data;
    
        let data =  parent::getAllForInsertUpdate();
        let data["_from"] = this->_from;
        let data["_to"] = this->_to;
        return data;
    }

}
