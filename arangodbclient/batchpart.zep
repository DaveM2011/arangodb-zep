namespace ArangoDBClient;

class BatchPart
{
    protected _cursorOptions = [];
    protected _id;
    protected _type;
    protected _request = [];
    protected _response = [];
    protected _batch;
    protected _documentClass = "\\ArangoDBClient\\Document";
    public function __construct(<Batch> batch, id, type, request, response, options)
    {
        var sanitize;
    
        let sanitize =  false;
        let options =  array_merge(options, this->getCursorOptions());
        if isset options["_documentClass"] {
            this->setDocumentClass(options["_documentClass"]);
        }
        extract(options, EXTR_IF_EXISTS);
        this->setBatch(batch);
        this->setId(id);
        this->setType(type);
        this->setRequest(request);
        this->setResponse(response);
        let this->_cursorOptions[Cursor::ENTRY_SANITIZE] = sanitize;
    }
    
    public function setBatch(<Batch> batch) -> <BatchPart>
    {
        let this->_batch = batch;
        return this;
    }
    
    public function setId(id) -> <BatchPart>
    {
        let this->_id = id;
        return this;
    }
    
    public function getId()
    {
        return this->_id;
    }
    
    public function setType(type) -> <BatchPart>
    {
        let this->_type = type;
        return this;
    }
    
    public function getType()
    {
        return this->_type;
    }
    
    public function setRequest(request) -> <BatchPart>
    {
        let this->_request = request;
        return this;
    }
    
    public function getRequest() -> array
    {
        return this->_request;
    }
    
    public function setResponse(response) -> <BatchPart>
    {
        let this->_response = response;
        return this;
    }
    
    public function getResponse() -> <HttpResponse>
    {
        return this->_response;
    }
    
    public function getHttpCode() -> int
    {
        return this->getResponse()->getHttpCode();
    }
    
    public function getProcessedResponse()
    {
        var _documentClass, response, json, options, id, data, tmpArray9652f742a399008c9c81204e76ce67c6;
    
        let _documentClass =  this->_documentClass;
        let response =  this->getResponse();
        switch this->_type {
            case "first":
                let json =  response->getJson();
                if !isset json["error"] || json["error"] === false {
                    let options =  this->getCursorOptions();
                    let options["_isNew"] = false;
                    let response =  {_documentClass}::createFromArray(json["document"], options);
                } else {
                    let response =  false;
                }
                break;
            case "getdocument":
                let json =  response->getJson();
                let options =  this->getCursorOptions();
                let options["_isNew"] = false;
                let response =  {_documentClass}::createFromArray(json, options);
                break;
            case "document":
                let json =  response->getJson();
                if !isset json["error"] || json["error"] === false {
                    let id = json[constant(_documentClass . "::ENTRY_ID")];
                    let response = id;
                }
                break;
            case "getedge":
                let json =  response->getJson();
                let options =  this->getCursorOptions();
                let options["_isNew"] = false;
                let response =  Edge::createFromArray(json, options);
                break;
            case "edge":
                let json =  response->getJson();
                if !isset json["error"] || json["error"] === false {
                    let id = json[Edge::ENTRY_ID];
                    let response = id;
                }
                break;
            case "getedges":
                let json =  response->getJson();
                let options =  this->getCursorOptions();
                let options["_isNew"] = false;
                let response =  [];
                for data in json[EdgeHandler::ENTRY_EDGES] {
                    let response[] = Edge::createFromArray(data, options);
                }
                break;
            case "getcollection":
                let json =  response->getJson();
                let response =  Collection::createFromArray(json);
                break;
            case "collection":
                let json =  response->getJson();
                if !isset json["error"] || json["error"] === false {
                    let id = json[Collection::ENTRY_ID];
                    let response = id;
                }
                break;
            case "cursor":
            case "all":
            case "by":
                let options =  this->getCursorOptions();
                let options["isNew"] = false;
                let tmpArray9652f742a399008c9c81204e76ce67c6 = ["_documentClass" : this->_documentClass];
                let options =  array_merge(tmpArray9652f742a399008c9c81204e76ce67c6, options);
                let response =  new Cursor(this->_batch->getConnection(), response->getJson(), options);
                break;
            case "remove":
                let json =  response->getJson();
                let response =  ["removed" : json["removed"], "ignored" : json["ignored"]];
                break;
            default:
                throw new ClientException("Could not determine response data type.");
                break;
        }
        return response;
    }
    
    protected function getCursorOptions() -> array
    {
        return this->_cursorOptions;
    }
    
    public function setDocumentClass(string classs) -> <BatchPart>
    {
        let this->_documentClass = classs;
        return this;
    }

}
