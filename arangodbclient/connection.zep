namespace ArangoDBClient;

class Connection
{
    protected _options;
    protected _httpHeader = "";
    protected _baseUrl = "";
    protected _handle;
    protected _useKeepAlive;
    protected _batches = [];
    protected _activeBatch;
    protected _captureBatch = false;
    protected _batchRequest = false;
    protected _database = "";
    public function __construct(array options)
    {
        let this->_options = new ConnectionOptions(options);
        let this->_useKeepAlive =  this->_options->offsetGet(ConnectionOptions::OPTION_CONNECTION) == "Keep-Alive";
        this->setDatabase(this->_options->offsetGet(ConnectionOptions::OPTION_DATABASE));
    }
    
    public function __destruct()
    {
        if this->_useKeepAlive && is_resource(this->_handle) {
            fclose(this->_handle);
        }
    }
    
    public function setOption(string name, string value) -> void
    {
        if name === ConnectionOptions::OPTION_ENDPOINT || name === ConnectionOptions::OPTION_HOST || name === ConnectionOptions::OPTION_PORT || name === ConnectionOptions::OPTION_VERIFY_CERT || name === ConnectionOptions::OPTION_CIPHERS || name === ConnectionOptions::OPTION_ALLOW_SELF_SIGNED {
            throw new ClientException("Must not set option " . value . " after connection is created.");
        }
        let this->_options[name] = value;
        if name === ConnectionOptions::OPTION_TIMEOUT {
            if is_resource(this->_handle) {
                stream_set_timeout(this->_handle, value);
            }
        } else {
            if name === ConnectionOptions::OPTION_CONNECTION {
                let this->_useKeepAlive =  strtolower(value) === "keep-alive";
            } else {
                if name === ConnectionOptions::OPTION_DATABASE {
                    this->setDatabase(value);
                }
            }
        }
        this->updateHttpHeader();
    }
    
    public function getOptions() -> <ConnectionOptions>
    {
        return this->_options;
    }
    
    public function getOption(string name)
    {
        //assert(is_string(name));
        return this->_options[name];
    }
    
    public function get(string url, array customHeaders = []) -> <HttpResponse>
    {
        var response;
    
        let response =  this->executeRequest(HttpHelper::METHOD_GET, url, "", customHeaders);
        return this->parseResponse(response);
    }
    
    public function post(string url, string data, array customHeaders = []) -> <HttpResponse>
    {
        var response;
    
        let response =  this->executeRequest(HttpHelper::METHOD_POST, url, data, customHeaders);
        return this->parseResponse(response);
    }
    
    public function put(string url, string data, array customHeaders = []) -> <HttpResponse>
    {
        var response;
    
        let response =  this->executeRequest(HttpHelper::METHOD_PUT, url, data, customHeaders);
        return this->parseResponse(response);
    }
    
    public function head(string url, array customHeaders = []) -> <HttpResponse>
    {
        var response;
    
        let response =  this->executeRequest(HttpHelper::METHOD_HEAD, url, "", customHeaders);
        return this->parseResponse(response);
    }
    
    public function patch(string url, string data, array customHeaders = []) -> <HttpResponse>
    {
        var response;
    
        let response =  this->executeRequest(HttpHelper::METHOD_PATCH, url, data, customHeaders);
        return this->parseResponse(response);
    }
    
    public function delete(string url, array customHeaders = []) -> <HttpResponse>
    {
        var response;
    
        let response =  this->executeRequest(HttpHelper::METHOD_DELETE, url, "", customHeaders);
        return this->parseResponse(response);
    }
    
    protected function updateHttpHeader() -> void
    {
        var endpoint, authorizationValue, _httpHeader = "";
        let _httpHeader = HttpHelper::EOL;
        let endpoint = this->_options->offsetGet(ConnectionOptions::OPTION_ENDPOINT);
        if Endpoint::getType(endpoint) != Endpoint::TYPE_UNIX {
            let _httpHeader .= sprintf("Host: %s%s", Endpoint::getHost(endpoint), HttpHelper::EOL);
        }
        if this->_options->offsetExists(ConnectionOptions::OPTION_AUTH_TYPE) && this->_options->offsetExists(ConnectionOptions::OPTION_AUTH_USER) {
            let authorizationValue = base64_encode(this->_options->offsetGet(ConnectionOptions::OPTION_AUTH_USER) . ":" . this->_options->offsetGet(ConnectionOptions::OPTION_AUTH_PASSWD));
            let _httpHeader .= sprintf("Authorization: %s %s%s", this->_options->offsetGet(ConnectionOptions::OPTION_AUTH_TYPE), authorizationValue, HttpHelper::EOL);
        }
        if this->_options->offsetExists(ConnectionOptions::OPTION_CONNECTION) {
            let _httpHeader .= sprintf("Connection: %s%s", this->_options->offsetGet(ConnectionOptions::OPTION_CONNECTION), HttpHelper::EOL);
        }
        let this->_httpHeader = _httpHeader;
        if this->_database == "" {
            let this->_baseUrl = "/_db/_system";
        } else {
            let this->_baseUrl = "/_db/" . urlencode(this->_database);
        }
    }
    
    protected function getHandle()
    {
        var handle;
    
        if this->_useKeepAlive && this->_handle && is_resource(this->_handle) {
            let handle =  this->_handle;
            if !feof(handle) {
                return handle;
            }
            fclose(this->_handle);
            let this->_handle = 0;
            if !this->_options->offsetGet(ConnectionOptions::OPTION_RECONNECT) {
                throw new ClientException("Server has closed the connection already.");
            }
        }
        let handle =  HttpHelper::createConnection(this->_options);
        if this->_useKeepAlive && is_resource(handle) {
            let this->_handle = handle;
        }
        return handle;
    }
    
    protected function executeRequest(string method, string url, string data, array customHeaders = [])
    {
        var wasAsync, request, batchPart, traceFunc, header, tmpListHeader, headers, handle, startTime, result, timeTaken, status, response;
    
        //assert(this->_httpHeader !== "");
        let wasAsync =  false;
        if isset customHeaders[HttpHelper::ASYNC_HEADER] {
            let wasAsync =  true;
        }
        HttpHelper::validateMethod(method);
        let url =  this->_baseUrl . url;
        if this->_batchRequest == false {
            if this->_captureBatch == true {
                this->_options->offsetSet(ConnectionOptions::OPTION_BATCHPART, true);
                let request = HttpHelper::buildRequest(this->_options, this->_httpHeader, method, url, data, customHeaders);
                this->_options->offsetSet(ConnectionOptions::OPTION_BATCHPART, false);
            } else {
                let request = HttpHelper::buildRequest(this->_options, this->_httpHeader, method, url, data, customHeaders);
            }
            if this->_captureBatch == true {
                let batchPart =  this->doBatch(method, request);
                if batchPart != null {
                    return batchPart;
                }
            }
        } else {
            let this->_batchRequest = false;
            this->_options->offsetSet(ConnectionOptions::OPTION_BATCH, true);
            let request = HttpHelper::buildRequest(this->_options, this->_httpHeader, method, url, data, customHeaders);
            this->_options->offsetSet(ConnectionOptions::OPTION_BATCH, false);
        }
        let traceFunc = this->_options->offsetGet(ConnectionOptions::OPTION_TRACE);
        if traceFunc {
            if this->_options->offsetGet(ConnectionOptions::OPTION_ENHANCED_TRACE) {
                let tmpListHeader = HttpHelper::parseHttpMessage(request, url, method);
                let header = tmpListHeader[0];
                let headers = HttpHelper::parseHeaders(header);
                {traceFunc}(new TraceRequest(headers[2], method, url, data));
            } else {
                {traceFunc}("send", request);
            }
        }
        let handle = this->getHandle();
        if handle {
            if traceFunc {
                let startTime = microtime(true);
            }
            let result = HttpHelper::transfer(handle, request, method);
            if traceFunc {
                let timeTaken = microtime(true) - startTime;
            }
            let status = socket_get_status(handle);
            if status["timed_out"] {
                throw new ClientException("Got a timeout while waiting for the server's response", 408);
            }
            if !this->_useKeepAlive {
                fclose(handle);
            }
            let response = new HttpResponse(result, url, method, wasAsync);
            if traceFunc {
                if this->_options->offsetGet(ConnectionOptions::OPTION_ENHANCED_TRACE) {
                    {traceFunc}(new TraceResponse(response->getHeaders(), response->getHttpCode(), response->getBody(), timeTaken));
                } else {
                    {traceFunc}("receive", result);
                }
            }
            return response;
        }
        throw new ClientException("Whoops, this should never happen");
    }
    
    public function parseResponse(<HttpResponse> response) -> <HttpResponse>
    {
        var httpCode, body, details, exception;
    
        let httpCode =  response->getHttpCode();
        if httpCode < 200 || httpCode >= 400 {
            let body =  response->getBody();
            if body !== "" {
                let details =  json_decode(body, true);
                if is_array(details) && isset details["errorMessage"] {
                    let exception =  new ServerException(details["errorMessage"], details["code"]);
                    exception->setDetails(details);
                    throw exception;
                }
            }
            throw new ServerException(response->getResult(), httpCode);
        }
        return response;
    }
    
    public function stopCaptureBatch() -> <Batch>
    {
        let this->_captureBatch =  false;
        return this->_activeBatch;
    }
    
    public function setActiveBatch(<Batch> batch) -> <Batch>
    {
        let this->_activeBatch = batch;
        return this->_activeBatch;
    }
    
    public function getActiveBatch() -> <Batch>
    {
        return this->_activeBatch;
    }
    
    public function setCaptureBatch(bool state) -> void
    {
        let this->_captureBatch = state;
    }
    
    public function setBatchRequest(bool state) -> void
    {
        let this->_batchRequest = state;
    }
    
    public function isInBatchCaptureMode() -> bool
    {
        return this->_captureBatch;
    }
    
    public function getBatches()
    {
        return this->_batches;
    }
    
    protected function doBatch(method, string request)
    {
        var batchPart, batch;
    
        let batchPart =  null;
        if this->_captureBatch === true {
            let batch =  this->getActiveBatch();
            let batchPart =  batch->append(method, request);
        }
        return batchPart;
    }
    
    public static function detect_utf(array stringg) -> bool
    {
        if preg_match("//u", stringg) {
            return true;
        } else {
            return false;
        }
    }
    
    public static function check_encoding(array data)
    {
        var key, value;
    
        if !is_array(data) {
            return;
        }
        for key, value in data {
            if !is_array(value) {
                if function_exists("mb_detect_encoding") {
                    if is_string(key) && mb_detect_encoding(key, "UTF-8", true) === false {
                        throw new ClientException("Only UTF-8 encoded keys allowed. Wrong encoding in key string: " . key);
                    }
                    if is_string(value) && mb_detect_encoding(value, "UTF-8", true) === false {
                        throw new ClientException("Only UTF-8 encoded values allowed. Wrong encoding in value string: " . value);
                    }
                } else {
                    if is_string(key) && self::detect_utf(key) === false {
                        throw new ClientException("Only UTF-8 encoded keys allowed. Wrong encoding in key string: " . key);
                    }
                    if is_string(value) && self::detect_utf(value) === false {
                        throw new ClientException("Only UTF-8 encoded values allowed. Wrong encoding in value string: " . value);
                    }
                }
            } else {
                self::check_encoding(value);
            }
        }
    }
    
    public function json_encode_wrapper(data, options = 0) -> string
    {
        var response;
        if this->_options->offsetGet(ConnectionOptions::OPTION_CHECK_UTF8_CONFORM) == true {
            self::check_encoding(data);
        }
        if empty data {
            let response =  json_encode(data, options | JSON_FORCE_OBJECT);
        } else {
            let response =  json_encode(data, options);
        }
        return response;
    }
    
    public function setDatabase(string database) -> void
    {
        this->_options->offsetSet(ConnectionOptions::OPTION_DATABASE, database);
        let this->_database = database;
        this->updateHttpHeader();
    }
    
    public function getDatabase() -> string
    {
        return this->_database;
    }

}
