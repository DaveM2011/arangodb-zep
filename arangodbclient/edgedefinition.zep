namespace ArangoDBClient;

class EdgeDefinition
{
    protected _relation;
    protected _fromCollections = [];
    protected _toCollections = [];
    public function __construct(string relation = null, fromCollections = [], toCollections = [])
    {
        let this->_relation = relation;
        let fromCollections =  (array) fromCollections;
        let toCollections =  (array) toCollections;
        let this->_fromCollections = fromCollections;
        let this->_toCollections = toCollections;
    }
    
    public function setRelation(string relation) -> void
    {
        let this->_relation = relation;
    }
    
    public function getRelation() -> string
    {
        return this->_relation;
    }
    
    public function getToCollections() -> array
    {
        return this->_toCollections;
    }
    
    public function getFromCollections() -> array
    {
        return this->_fromCollections;
    }
    
    public function addToCollection(string toCollection) -> void
    {
        let this->_toCollections[] = toCollection;
    }
    
    public function addFromCollection(string fromCollection) -> void
    {
        let this->_fromCollections[] = fromCollection;
    }
    
    public function clearToCollection() -> void
    {
        let this->_toCollections =  [];
    }
    
    public function clearFromCollection()
    {
        let this->_fromCollections =  [];
        return this->_fromCollections;
    }
    
    public function transformToArray() -> array
    {
        var transformedEd;
    
        let transformedEd =  [];
        let transformedEd["collection"] =  this->getRelation();
        let transformedEd["from"] =  this->getFromCollections();
        let transformedEd["to"] =  this->getToCollections();
        return transformedEd;
    }
    
    public static function createUndirectedRelation(string relation, array vertexCollections) -> <EdgeDefinition>
    {
        return new EdgeDefinition(relation, vertexCollections, vertexCollections);
    }
    
    public static function createDirectedRelation(string relation, fromCollections, toCollections) -> <EdgeDefinition>
    {
        return new EdgeDefinition(relation, fromCollections, toCollections);
    }

}
