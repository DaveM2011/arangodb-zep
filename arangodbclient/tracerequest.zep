namespace ArangoDBClient;

class TraceRequest
{
    protected _headers = [];
    protected _method;
    protected _requestUrl;
    protected _body;
    protected _type = "request";
    public function __construct(array headers, string method, string requestUrl, string body)
    {
        let this->_headers = headers;
        let this->_method = method;
        let this->_requestUrl = requestUrl;
        let this->_body = body;
    }
    
    public function getHeaders() -> array
    {
        return this->_headers;
    }
    
    public function getMethod() -> string
    {
        return this->_method;
    }
    
    public function getRequestUrl() -> string
    {
        return this->_requestUrl;
    }
    
    public function getBody() -> string
    {
        return this->_body;
    }
    
    public function getType() -> string
    {
        return this->_type;
    }

}
