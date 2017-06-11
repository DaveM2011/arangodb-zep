namespace ArangoDBClient;

class QueryCacheHandler extends Handler
{
    public function enable() -> void
    {
        var url, tmpArray949570a20cb34992178c70964942133b;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY_CACHE, ["properties"]);
        let tmpArray949570a20cb34992178c70964942133b = ["mode" : "on"];
        this->getConnection()->put(url, this->json_encode_wrapper(tmpArray949570a20cb34992178c70964942133b));
    }
    
    public function disable() -> void
    {
        var url, tmpArray1e5379e6ef331668a17ddca849ca0954;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY_CACHE, ["properties"]);
        let tmpArray1e5379e6ef331668a17ddca849ca0954 = ["mode" : "off"];
        this->getConnection()->put(url, this->json_encode_wrapper(tmpArray1e5379e6ef331668a17ddca849ca0954));
    }
    
    public function enableDemandMode() -> void
    {
        var url, tmpArray970d639034f788c5330c7cdaa9d03458;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY_CACHE, ["properties"]);
        let tmpArray970d639034f788c5330c7cdaa9d03458 = ["mode" : "demand"];
        this->getConnection()->put(url, this->json_encode_wrapper(tmpArray970d639034f788c5330c7cdaa9d03458));
    }
    
    public function clear() -> void
    {
        var url;
        let url = UrlHelper::buildUrl(Urls::URL_QUERY_CACHE, []);
        this->getConnection()->delete(url);
    }
    
    public function setProperties(array properties) -> array
    {
        var bodyParams, url, response;
    
        let bodyParams = properties;
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY_CACHE);
        let response =  this->getConnection()->put(url, this->json_encode_wrapper(bodyParams));
        return response->getJson();
    }
    
    public function getProperties() -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_QUERY_CACHE);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }

}
