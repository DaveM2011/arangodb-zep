namespace ArangoDBClient;

class Graph extends Document
{
    const ENTRY_EDGE_DEFINITIONS = "edgeDefinitions";
    const ENTRY_FROM = "from";
    const ENTRY_TO = "to";
    const ENTRY_COLLECTION = "collection";
    const ENTRY_ORPHAN_COLLECTIONS = "orphanCollections";
    protected _edgeDefinitions = [];
    protected _orphanCollections = [];
    public function __construct(array name = null, array options = [])
    {
        if !is_array(name) && name !== null {
            this->set("_key", name);
        }
        parent::__construct(options);
    }
    
    public function addEdgeDefinition(<EdgeDefinition> edgeDefinition) -> <Graph>
    {
        let this->_edgeDefinitions[] = edgeDefinition;
        return this;
    }
    
    public function getEdgeDefinitions() -> array
    {
        return this->_edgeDefinitions;
    }
    
    public function addOrphanCollection(string orphanCollection) -> <Graph>
    {
        let this->_orphanCollections[] = orphanCollection;
        return this;
    }
    
    public function getOrphanCollections() -> array
    {
        return this->_orphanCollections;
    }
    
    public function set(string key, value)
    {
        var edgeDefinitionBaseObject, ed, edgeDefinition, from, to, o;
    
        if key === self::ENTRY_EDGE_DEFINITIONS {
            if this->_doValidate {
                ValueValidator::validate(value);
            }
            let edgeDefinitionBaseObject =  new EdgeDefinition();
            for ed in value {
                let edgeDefinition =  clone edgeDefinitionBaseObject;
                for from in ed[self::ENTRY_FROM] {
                    edgeDefinition->addFromCollection(from);
                }
                for to in ed[self::ENTRY_TO] {
                    edgeDefinition->addToCollection(to);
                }
                edgeDefinition->setRelation(ed[self::ENTRY_COLLECTION]);
                this->addEdgeDefinition(edgeDefinition);
            }
        } else {
            if key === self::ENTRY_ORPHAN_COLLECTIONS {
                if this->_doValidate {
                    ValueValidator::validate(value);
                }
                for o in value {
                    this->addOrphanCollection(o);
                }
            } else {
                parent::set(key, value);
            }
        }
    }
    
    protected function getSingleUndirectedRelation() -> <EdgeDefinition>
    {
        var ed, a, b, c, eD;
    
        let ed =  this->getEdgeDefinitions();
        if count(ed) > 0 {
            let a = ed[0];
            let b =  a->getFromCollections();
            let c =  a->getToCollections();
        }
        if count(ed) > 1 || count(ed) === 1 && (count(a->getFromCollections()) > 1 || count(a->getToCollections()) > 1 || b[0] !== c[0]) {
            throw new ClientException("This operation only supports graphs with one undirected single collection relation");
        }
        if count(ed) === 1 {
            let eD = ed[0];
            let this->_edgeDefinitions =  [];
        } else {
            let eD =  new EdgeDefinition();
        }
        return eD;
    }

}
