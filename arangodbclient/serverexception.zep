namespace ArangoDBClient;

class ServerException extends Exception
{
    protected _details = [];
    const ENTRY_CODE = "errorNum";
    const ENTRY_MESSAGE = "errorMessage";
    public function __toString() -> string
    {
        return __CLASS__ . ": " . this->getServerCode() . " " . this->getMessage();
    }
    
    public function setDetails(array details)
    {
        let this->_details = details;
    }
    
    public function getDetails() -> array
    {
        return this->_details;
    }
    
    public function getServerCode() -> int
    {
        if isset this->_details[self::ENTRY_CODE] {
            return this->_details[self::ENTRY_CODE];
        }
        return this->getCode();
    }
    
    public function getServerMessage() -> string
    {
        if isset this->_details[self::ENTRY_MESSAGE] {
            return this->_details[self::ENTRY_MESSAGE];
        }
        return;
    }

}
