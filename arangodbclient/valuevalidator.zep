namespace ArangoDBClient;

class ValueValidator
{
    public static function validate(value)
    {
        var subValue;
    
        if is_string(value) || is_int(value) || is_float(value) || is_bool(value) || value === null {
            return;
        }
        if is_array(value) {
            for subValue in value {
                self::validate(subValue);
            }
            return;
        }
        throw new ClientException("Invalid bind parameter value");
    }

}
