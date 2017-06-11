namespace ArangoDBClient;

class Batch
{
    public _batchResponse;
    protected _processed = false;
    protected _batchParts = [];
    protected _nextBatchPartId;
    protected _batchPartCursorOptions = [];
    protected _connection;
    protected _sanitize = false;
    protected _nextId = 0;
    protected batchSize;
    protected _documentClass = "\\ArangoDBClient\\Document";
    public function __construct(<Connection> connection, array options = [])
    {
        var startCapture, sanitize, batchSize;
    
        let startCapture =  true;
        let sanitize =  false;
        let batchSize = 0;
        let options =  array_merge(options, this->getCursorOptions());
        extract(options, EXTR_IF_EXISTS);
        let this->_sanitize = sanitize;
        let this->batchSize = batchSize;
        if this->batchSize > 0 {
            let this->_batchParts =  new \SplFixedArray(this->batchSize);
        }
        this->setConnection(connection);
        let this->_batchPartCursorOptions =  [Cursor::ENTRY_SANITIZE : (bool) this->_sanitize];
        if startCapture === true {
            this->startCapture();
        }
    }
    
    public function setConnection(<Connection> connection) -> <Batch>
    {
        let this->_connection = connection;
        return this;
    }
    
    public function startCapture() -> <Batch>
    {
        this->activate();
        return this;
    }
    
    public function stopCapture() -> <Batch>
    {
        if this->isActive() && this->isCapturing() {
            this->setCapture(false);
            return this;
        } else {
            throw new ClientException("Cannot stop capturing with this batch. Batch is not active...");
        }
    }
    
    public function isActive() -> bool
    {
        var activeBatch;
    
        let activeBatch =  this->getActive(this->_connection);
        return activeBatch === this;
    }
    
    public function isCapturing() -> bool
    {
        return this->getConnectionCaptureMode(this->_connection);
    }
    
    public function activate() -> <Batch>
    {
        this->setActive();
        this->setCapture(true);
        return this;
    }
    
    public function setActive() -> <Batch>
    {
        this->_connection->setActiveBatch(this);
        return this;
    }
    
    public function setCapture(bool state) -> <Batch>
    {
        this->_connection->setCaptureBatch(state);
        return this;
    }
    
    public function getActive(<Connection> connection)
    {
        connection->getActiveBatch();
        return this;
    }
    
    public function getConnectionCaptureMode(<Connection> connection) -> bool
    {
        return connection->isInBatchCaptureMode();
    }
    
    protected function setBatchRequest(bool state)
    {
        this->_connection->setBatchRequest(state);
        let this->_processed =  true;
        return this;
    }
    
    public function nextBatchPartId(batchPartId) -> <Batch>
    {
        let this->_nextBatchPartId = batchPartId;
        return this;
    }
    
    public function nextBatchPartCursorOptions(batchPartCursorOptions) -> <Batch>
    {
        let this->_batchPartCursorOptions = batchPartCursorOptions;
        return this;
    }
    
    public function append(method, request) -> <HttpResponse>
    {
        var type, nextNumeric, batchPartId, eol, result, response, batchPart, regs;
    
        preg_match("%/_api/simple/(?P<simple>\\w*)|/_api/(?P<direct>\\w*)%ix", request, regs);
        if !(isset regs["direct"]) {
            let regs["direct"] = "";
        }
        let type =  regs["direct"] !== "" ? regs["direct"]  : regs["simple"];
        if method === "GET" && type === regs["direct"] {
            let type =  "get" . type;
        }
        if this->_nextBatchPartId === null {
            if is_a(this->_batchParts, "\\SplFixedArray") {
                let nextNumeric = this->_nextId;
                let this->_nextId++;
            } else {
                let nextNumeric = count(this->_batchParts);
            }
            let batchPartId = nextNumeric;
        } else {
            let batchPartId =  this->_nextBatchPartId;
            let this->_nextBatchPartId =  null;
        }
        let eol =  HttpHelper::EOL;
        let result =  "HTTP/1.1 202 Accepted" . eol;
        let result .= "location: /_db/_system/_api/document/0/0" . eol;
        let result .= "content-type: application/json; charset=utf-8" . eol;
        let result .= "etag: \"0\"" . eol;
        let result .= "connection: Close" . eol . eol;
        let result .= "{\"error\":false,\"_id\":\"0/0\",\"id\":\"0\",\"_rev\":0,\"hasMore\":1, \"result\":[{}], \"documents\":[{}]}" . eol . eol;
        let response =  new HttpResponse(result);
        let batchPart =  new BatchPart(this, batchPartId, type, request, response, ["cursorOptions" : this->_batchPartCursorOptions, "_documentClass" : this->_documentClass]);
        let this->_batchParts[batchPartId] = batchPart;
        response->setBatchPart(batchPart);
        return response;
    }
    
    public function splitWithContentIdKey(pattern, stringg) -> array
    {
        var myArray, exploded, key, value, response, contentId;
    
        let myArray =  [];
        let exploded =  explode(pattern, stringg);
        for key, value in exploded {
            let response =  new HttpResponse(value);
            let contentId =  response->getHeader("Content-Id");
            if contentId !== null {
                let myArray[contentId] = value;
            } else {
                let myArray[key] = value;
            }
        }
        return myArray;
    }
    
    public function process()
    {
        var data, batchParts, batchPartResponses = [], combinedDataHeader, partValue, partValueId, params, url, body, partKey, response;
    
        if this->isCapturing() {
            this->stopCapture();
        }
        this->setBatchRequest(true);
        let data = "";
        let batchParts =  this->getBatchParts();
        if count(batchParts) === 0 {
            throw new ClientException("Can't process empty batch.");
        }
        let combinedDataHeader =  "--" . HttpHelper::MIME_BOUNDARY . HttpHelper::EOL;
        let combinedDataHeader .= "Content-Type: application/x-arango-batchpart" . HttpHelper::EOL;
        for partValue in batchParts {
            if partValue !== null {
                let data .= combinedDataHeader;
                let partValueId =  partValue->getId();
                if partValueId !== null {
                    let data .= "Content-Id: " . (string) partValueId . HttpHelper::SEPARATOR;
                } else {
                    let data .= HttpHelper::EOL;
                }
                let data .= (string) partValue->getRequest() . HttpHelper::EOL;
            }
        }
        let data .= "--" . HttpHelper::MIME_BOUNDARY . "--" . HttpHelper::SEPARATOR;
        let params =  [];
        let url =  UrlHelper::appendParamsUrl(Urls::URL_BATCH, params);
        let this->_batchResponse =  this->_connection->post(url, data);
        if this->_batchResponse->getHttpCode() !== 200 {
            return this->_batchResponse;
        }
        let body =  this->_batchResponse->getBody();
        let body =  trim(body, "--" . HttpHelper::MIME_BOUNDARY . "--");
        let batchParts =  this->splitWithContentIdKey("--" . HttpHelper::MIME_BOUNDARY . HttpHelper::EOL, body);
        for partKey, partValue in batchParts {
            let response =  new HttpResponse(partValue);
            let body =  response->getBody();
            let response =  new HttpResponse(body);
            let batchPartResponses[partKey] = response;
            this->getPart(partKey)->setResponse(batchPartResponses[partKey]);
        }
        return this;
    }
    
    public function countParts() -> int
    {
        return count(this->_batchParts);
    }
    
    public function getPart(partId)
    {
        if !isset this->_batchParts[partId] {
            throw new ClientException("Request batch part does not exist.");
        }
        return this->_batchParts[partId];
    }
    
    public function getPartResponse(partId)
    {
        return this->getPart(partId)->getResponse();
    }
    
    public function getProcessedPartResponse(partId)
    {
        return this->getPart(partId)->getProcessedResponse();
    }
    
    public function getBatchParts() -> array
    {
        return this->_batchParts;
    }
    
    protected function getCursorOptions() -> array
    {
        return this->_batchPartCursorOptions;
    }
    
    public function getConnection() -> <Connection>
    {
        return this->_connection;
    }
    
    public function setDocumentClass(string classs) -> <Batch>
    {
        let this->_documentClass = classs;
        return this;
    }

}
