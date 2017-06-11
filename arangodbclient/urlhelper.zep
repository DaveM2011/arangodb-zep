namespace ArangoDBClient;

abstract class UrlHelper
{
    public static function getDocumentIdFromLocation(string location) -> string
    {
        var collectionName, id, tmpListCollectionNameId;
    
        if !is_string(location) {
            return;
        }
        if 0 === strpos(location, "/_db/") {
            let tmpListCollectionNameId = explode("/", location);
            let collectionName = tmpListCollectionNameId[5];
            let id = tmpListCollectionNameId[6];
        } else {
            let tmpListCollectionNameId = explode("/", location);
            let collectionName = tmpListCollectionNameId[3];
            let id = tmpListCollectionNameId[4];
        }
        if is_string(id) {
            let id =  urldecode(id);
        }
        return collectionName . "/" . id;
    }
    
    public static function buildUrl(string baseUrl, array parts = []) -> string
    {
        var url, part, tmpListPart;
    
        let url = baseUrl;
        for part in parts {
            if strpos(part, "/") !== false {
                let tmpListPart = explode("/", part);
                let part = tmpListPart[1];
            }
            let url .= "/" . urlencode(part);
        }
        return url;
    }
    
    public static function appendParamsUrl(string baseUrl, array params) -> string
    {
        var value;
    
        for _, value in params {
            if is_bool(value) {
                let value =  self::getBoolString(value);
            }
        }
        return baseUrl . "?" . http_build_query(params);
    }
    
    public static function getBoolString(value) -> string
    {
        return  value ? "true"  : "false";
    }

}
