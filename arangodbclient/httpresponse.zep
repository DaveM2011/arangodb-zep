namespace ArangoDBClient;

class HttpResponse
{
    protected _header = "";
    protected _body = "";
    protected _headers = [];
    protected _result = "";
    protected _httpCode;
    protected _wasAsync = false;
    protected batchPart;
    const HEADER_LOCATION = "location";
    public function __construct(string responseString, string originUrl = null, string originMethod = null, bool wasAsync = false)
    {
        //var this->_header, this->_body, tmpListThis->_headerThis->_body, this->_httpCode, this->_result, this->_headers, tmpListThis->_httpCodeThis->_resultThis->_headers;
    
        /*let this->_wasAsync = wasAsync;
        if originUrl !== null && originMethod !== null {
            if responseString === "" {
                throw new ClientException("Got no response from the server after request to " . originMethod . " " . originUrl . " - Note: this may be a timeout issue");
            }
        }
        let tmpListThis->_headerThis->_body = HttpHelper::parseHttpMessage(responseString, originUrl, originMethod);
        let this->_header = tmpListThis->_headerThis->_body[0];
        let this->_body = tmpListThis->_headerThis->_body[1];
        let tmpListThis->_httpCodeThis->_resultThis->_headers = HttpHelper::parseHeaders(this->_header);
        let this->_httpCode = tmpListThis->_httpCodeThis->_resultThis->_headers[0];
        let this->_result = tmpListThis->_httpCodeThis->_resultThis->_headers[1];
        let this->_headers = tmpListThis->_httpCodeThis->_resultThis->_headers[2];
        if this->_body === null && (this->_httpCode !== 204 && this->_httpCode !== 304 && !(wasAsync)) {
            if originUrl !== null && originMethod !== null {
                throw new ClientException("Got an invalid response from the server after request to " . originMethod . " " . originUrl);
            }
            throw new ClientException("Got an invalid response from the server");
        }*/
    }
    
    public function getHttpCode() -> int
    {
        return this->_httpCode;
    }
    
    public function getHeader(string name) -> string
    {
        //assert(is_string(name));
        let name =  strtolower(name);
        if isset this->_headers[name] {
            return this->_headers[name];
        }
        return;
    }
    
    public function getHeaders() -> array
    {
        return this->_headers;
    }
    
    public function getLocationHeader() -> string
    {
        return this->getHeader(self::HEADER_LOCATION);
    }
    
    public function getBody() -> string
    {
        return this->_body;
    }
    
    public function getResult() -> string
    {
        return this->_result;
    }
    
    public function getJson() -> array
    {
        var body, json, tmpArray40cd750bba9870f18aada2478b24840a;
    
        let body =  this->getBody();
        let json =  json_decode(body, true);
        if !is_array(json) {
            if this->_wasAsync {
                let tmpArray40cd750bba9870f18aada2478b24840a = [];
                return tmpArray40cd750bba9870f18aada2478b24840a;
            }
            throw new ClientException("Got a malformed result from the server");
        }
        return json;
    }
    
    public function setBatchPart(batchPart) -> <HttpResponse>
    {
        let this->batchPart = batchPart;
        return this;
    }
    
    public function getBatchPart()
    {
        return this->batchPart;
    }

}
