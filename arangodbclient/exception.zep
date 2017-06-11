namespace ArangoDBClient;

class Exception extends \Exception
{
    protected static enableLogging = false;
    public function __construct(string message = "", int code = 0, <Exception> previous = null)
    {
        if self::enableLogging {
            var line;
            error_log(get_class(this) . ": " . message);
            error_log("Stack trace:");
            for _, line in explode(PHP_EOL, this->getTraceAsString()) {
                error_log("   " . line);
            }
        }
        parent::__construct(message, code, previous);
    }
    
    public static function enableLogging() -> void
    {
        let self::enableLogging =  true;
    }
    
    public static function disableLogging() -> void
    {
        let self::enableLogging =  false;
    }
    
}
