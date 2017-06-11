namespace ArangoDBClient;

class QueryHandler extends Handler
{
    public function clearSlow() -> void
    {
        var url;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY, ["slow"]);
        this->getConnection()->delete(url);
    }
    
    public function getSlow() -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY, ["slow"]);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function getCurrent() -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY, ["current"]);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function kill(string id) -> bool
    {
        var url;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY, [id]);
        this->getConnection()->delete(url);
        return true;
    }

}
