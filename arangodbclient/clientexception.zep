namespace ArangoDBClient;

class ClientException extends Exception
{
    public function __toString() -> string
    {
        return __CLASS__ . ": " . this->getMessage();
    }

}
