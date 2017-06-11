namespace ArangoDBClient;

class UpdatePolicy
{
    const LAST = "last";
    const ERROR = "error";
    public static function validate(string value)
    {
        //assert(is_string(value));
        if value !== self::LAST && value !== self::ERROR {
            throw new ClientException("Invalid update policy");
        }
    }

}
