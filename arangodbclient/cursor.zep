namespace ArangoDBClient;

class Cursor implements \Iterator
{
    protected _connection;
    protected _options;
    protected data;
    protected _result;
    protected _hasMore;
    protected _id;
    protected _position;
    protected _length;
    protected _fullCount;
    protected _extra;
    protected _fetches = 1;
    protected _cached;
    protected _documentClass = "\\ArangoDBClient\\Document";
    const ENTRY_ID = "id";
    const ENTRY_HASMORE = "hasMore";
    const ENTRY_RESULT = "result";
    const ENTRY_EXTRA = "extra";
    const ENTRY_STATS = "stats";
    const FULL_COUNT = "fullCount";
    const ENTRY_CACHE = "cache";
    const ENTRY_CACHED = "cached";
    const ENTRY_SANITIZE = "_sanitize";
    const ENTRY_FLAT = "_flat";
    const ENTRY_TYPE = "objectType";
    const ENTRY_BASEURL = "baseurl";
    public function __construct(<Connection> connection, array data, array options) -> void
    {
        let this->_connection = connection;
        let this->data = data;
        let this->_id =  null;
        let this->_extra =  [];
        let this->_cached =  false;
        if isset data[self::ENTRY_ID] {
            let this->_id = data[self::ENTRY_ID];
        }
        if isset data[self::ENTRY_EXTRA] {
            let this->_extra = data[self::ENTRY_EXTRA];
            if isset this->_extra[self::ENTRY_STATS][self::FULL_COUNT] {
                let this->_fullCount = this->_extra[self::ENTRY_STATS][self::FULL_COUNT];
            }
        }
        if isset data[self::ENTRY_CACHED] {
            let this->_cached = data[self::ENTRY_CACHED];
        }
        //assert(isset data[self::ENTRY_HASMORE]);
        let this->_hasMore =  (bool) data[self::ENTRY_HASMORE];
        if isset options["_documentClass"] {
            this->setDocumentClass(options["_documentClass"]);
        }
        let options["_isNew"] = false;
        let this->_options = options;
        let this->_result =  [];
        this->add((array) data[self::ENTRY_RESULT]);
        this->updateLength();
        this->rewind();
    }
    
    public function delete() -> bool
    {
        var tmpArray40cd750bba9870f18aada2478b24840a, e;
    
        if this->_id {
            try {
                let tmpArray40cd750bba9870f18aada2478b24840a = [];
                this->_connection->delete(this->url() . "/" . this->_id, tmpArray40cd750bba9870f18aada2478b24840a);
                return true;
            } catch Exception, e {
                throw e;
            }
        }
        return false;
    }
    
    public function getCount() -> int
    {
        while (this->_hasMore) {
            this->fetchOutstanding();
        }
        return this->_length;
    }
    
    public function getFullCount() -> int
    {
        return this->_fullCount;
    }
    
    public function getCached() -> bool
    {
        return this->_cached;
    }
    
    public function getAll() -> array
    {
        while (this->_hasMore) {
            this->fetchOutstanding();
        }
        return this->_result;
    }
    
    public function rewind()
    {
        let this->_position = 0;
    }
    
    public function current() -> array
    {
        return this->_result[this->_position];
    }
    
    public function key() -> int
    {
        return this->_position;
    }
    
    public function next()
    {
        let this->_position++;
    }
    
    public function valid() -> bool
    {
        if this->_position <= this->_length - 1 {
            return true;
        }
        if !(this->_hasMore) || !(this->_id) {
            return false;
        }
        this->fetchOutstanding();
        return this->_position <= this->_length - 1;
    }
    
    protected function add(array data)
    {
        var row;
    
        for row in this->sanitize(data) {
            if !(is_array(row)) || isset this->_options[self::ENTRY_FLAT] && this->_options[self::ENTRY_FLAT] {
                this->addFlatFromArray(row);
            } else {
                if !(isset this->_options["objectType"]) {
                    this->addDocumentsFromArray(row);
                } else {
                    switch (this->_options["objectType"]) {
                        case "edge":
                            this->addEdgesFromArray(row);
                            break;
                        case "vertex":
                            this->addVerticesFromArray(row);
                            break;
                        case "path":
                            this->addPathsFromArray(row);
                            break;
                        case "shortestPath":
                            this->addShortestPathFromArray(row);
                            break;
                        case "distanceTo":
                            this->addDistanceToFromArray(row);
                            break;
                        case "commonNeighbors":
                            this->addCommonNeighborsFromArray(row);
                            break;
                        case "commonProperties":
                            this->addCommonPropertiesFromArray(row);
                            break;
                        case "figure":
                            this->addFigureFromArray(row);
                            break;
                        default:
                            this->addDocumentsFromArray(row);
                            break;
                    }
                }
            }
        }
    }
    
    protected function addFlatFromArray(array data)
    {
        let this->_result[] = data;
    }
    
    protected function addDocumentsFromArray(array data)
    {
        var _documentClass;
    
        let _documentClass =  this->_documentClass;
        let this->_result[] = {_documentClass}::createFromArray(data, this->_options);
    }
    
    protected function addPathsFromArray(array data)
    {
        var _documentClass, entry, v;
    
        let _documentClass =  this->_documentClass;
        let entry =  ["vertices" : [], "edges" : [], "source" : {_documentClass}::createFromArray(data["source"], this->_options), "destination" : {_documentClass}::createFromArray(data["destination"], this->_options)];
        for v in data["vertices"] {
            let entry["vertices"][] = {_documentClass}::createFromArray(v, this->_options);
        }
        for v in data["edges"] {
            let entry["edges"][] = Edge::createFromArray(v, this->_options);
        }
        let this->_result[] = entry;
    }
    
    protected function addShortestPathFromArray(array data)
    {
        var _documentClass, vertices, startVertex, destination, entry, path, v;
    
        let _documentClass =  this->_documentClass;
        if !(isset data["vertices"]) {
            return;
        }
        let vertices = data["vertices"];
        let startVertex = vertices[0];
        let destination = vertices[count(vertices) - 1];
        let entry =  ["paths" : [], "source" : {_documentClass}::createFromArray(startVertex, this->_options), "distance" : data["distance"], "destination" : {_documentClass}::createFromArray(destination, this->_options)];
        let path =  ["vertices" : [], "edges" : []];
        for v in data["vertices"] {
            let path["vertices"][] = v;
        }
        for v in data["edges"] {
            let path["edges"][] = Edge::createFromArray(v, this->_options);
        }
        let entry["paths"][] = path;
        let this->_result[] = entry;
    }
    
    protected function addDistanceToFromArray(array data)
    {
        var entry;
    
        let entry =  ["source" : data["startVertex"], "distance" : data["distance"], "destination" : data["vertex"]];
        let this->_result[] = entry;
    }
    
    protected function addCommonNeighborsFromArray(array data)
    {
        var _documentClass, left, right, neighbor;
    
        let _documentClass =  this->_documentClass;
        let left = data["left"];
        let right = data["right"];
        if !(isset this->_result[left]) {
            let this->_result[left] =  [];
        }
        if !(isset this->_result[left][right]) {
            let this->_result[left][right] =  [];
        }
        for neighbor in data["neighbors"] {
            let this->_result[left][right][] = {_documentClass}::createFromArray(neighbor);
        }
    }
    
    protected function addCommonPropertiesFromArray(array data)
    {
        var k, c, id;
    
        let k =  array_keys(data);
        let k = k[0];
        let this->_result[k] =  [];
        for c in data[k] {
            let id = c["_id"];
            unset c["_id"];
            
            let this->_result[k][id] = c;
        }
    }
    
    protected function addFigureFromArray(array data)
    {
        let this->_result = data;
    }
    
    protected function addEdgesFromArray(array data)
    {
        let this->_result[] = Edge::createFromArray(data, this->_options);
    }
    
    protected function addVerticesFromArray(array data)
    {
        let this->_result[] = Vertex::createFromArray(data, this->_options);
    }
    
    protected function sanitize(array rows) -> array
    {
        var _documentClass, key, value;
    
        let _documentClass =  this->_documentClass;
        if isset this->_options[self::ENTRY_SANITIZE] && this->_options[self::ENTRY_SANITIZE] {
            for key, value in rows {
                if is_array(value) && isset value[constant(_documentClass . "::ENTRY_ID")] {
                    unset rows[key][constant(_documentClass . "::ENTRY_ID")];
                
                }
                if is_array(value) && isset value[constant(_documentClass . "::ENTRY_REV")] {
                    unset rows[key][constant(_documentClass . "::ENTRY_REV")];
                
                }
            }
        }
        return rows;
    }
    
    protected function fetchOutstanding()
    {
        var response, tmpArray40cd750bba9870f18aada2478b24840a, data;
    
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        let response =  this->_connection->put(this->url() . "/" . this->_id, "", tmpArray40cd750bba9870f18aada2478b24840a);
        let this->_fetches++;
        let data =  response->getJson();
        let this->_hasMore =  (bool) data[self::ENTRY_HASMORE];
        this->add(data[self::ENTRY_RESULT]);
        if !(this->_hasMore) {
            let this->_id =  null;
        }
        this->updateLength();
    }
    
    protected function updateLength()
    {
        let this->_length =  count(this->_result);
    }
    
    protected function url() -> string
    {
        if isset this->_options[self::ENTRY_BASEURL] {
            return this->_options[self::ENTRY_BASEURL];
        }
        return Urls::URL_CURSOR;
    }
    
    protected function getStatValue(string name) -> int
    {
        if isset this->_extra[self::ENTRY_STATS][name] {
            return this->_extra[self::ENTRY_STATS][name];
        }
        return 0;
    }
    
    public function getMetadata() -> array
    {
        return this->data;
    }
    
    public function getExtra() -> array
    {
        return this->_extra;
    }
    
    public function getWarnings() -> array
    {
        var tmpArray40cd750bba9870f18aada2478b24840a;
    
        if isset this->_extra["warnings"] {
            return this->_extra["warnings"];
        }
        let tmpArray40cd750bba9870f18aada2478b24840a = [];
        return tmpArray40cd750bba9870f18aada2478b24840a;
    }
    
    public function getWritesExecuted() -> int
    {
        return this->getStatValue("writesExecuted");
    }
    
    public function getWritesIgnored() -> int
    {
        return this->getStatValue("writesIgnored");
    }
    
    public function getScannedFull() -> int
    {
        return this->getStatValue("scannedFull");
    }
    
    public function getScannedIndex() -> int
    {
        return this->getStatValue("scannedIndex");
    }
    
    public function getFiltered() -> int
    {
        return this->getStatValue("filtered");
    }
    
    public function getFetches() -> int
    {
        return this->_fetches;
    }
    
    public function getId() -> string
    {
        return this->_id;
    }
    
    public function setDocumentClass(string classs) -> <Cursor>
    {
        let this->_documentClass = classs;
        return this;
    }

}
