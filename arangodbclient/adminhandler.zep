namespace ArangoDBClient;

class AdminHandler extends Handler
{
    const OPTION_DETAILS = "details";
    public function getServerVersion(bool details = false) -> string
    {
        var url, response, data;
    
        let url =  Urls::URL_ADMIN_VERSION;
        if details {
            let url =  UrlHelper::appendParamsUrl(url, ["details" : true]);
        }
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        if details {
            return data;
        } else {
            return data["version"];
        }
    }
    
    public function getServerRole() -> string
    {
        var url, response, data;
    
        let url =  Urls::URL_ADMIN_SERVER_ROLE;
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        return data["role"];
    }
    
    public function getServerTime() -> double
    {
        var response, data;
    
        let response =  this->getConnection()->get(Urls::URL_ADMIN_TIME);
        let data =  response->getJson();
        return data["time"];
    }
    
    public function getServerLog(array options = []) -> array
    {
        var url, response;
    
        let url =  UrlHelper::appendParamsUrl(Urls::URL_ADMIN_LOG, options);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function reloadServerRouting() -> bool
    {
        this->getConnection()->post(Urls::URL_ADMIN_ROUTING_RELOAD, "");
        return true;
    }
    
    public function getServerStatistics() -> array
    {
        var url, response;
    
        let url =  UrlHelper::appendParamsUrl(Urls::URL_ADMIN_STATISTICS, []);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }
    
    public function getServerStatisticsDescription(array options = []) -> array
    {
        var url, response;
    
        let url =  UrlHelper::appendParamsUrl(Urls::URL_ADMIN_STATISTICS_DESCRIPTION, options);
        let response =  this->getConnection()->get(url);
        return response->getJson();
    }

}
