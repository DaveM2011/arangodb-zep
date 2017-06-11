namespace ArangoDBClient;

class UserHandler extends Handler
{
    public function addUser(string username, passwd = null, active = null, array extra = null) -> boolean
    {
        var userDocument, data, e;
    
        let userDocument =  new User();
        let userDocument->user = username;
        let userDocument->passwd = passwd;
        let userDocument->active = active;
        let userDocument->extra = extra;
        let data =  userDocument->getAll();
        this->getConnection()->post(Urls::URL_USER, this->json_encode_wrapper(data));
        try {
            this->grantPermissions(username, this->getConnection()->getDatabase());
        } catch \Exception, e {
            throw e;
        }
        return true;
    }
    
    public function replaceUser(string username, passwd = null, active = null, array extra = null) -> bool
    {
        var userDocument, data, url;
    
        let userDocument =  new User();
        let userDocument->passwd = passwd;
        let userDocument->active = active;
        let userDocument->extra = extra;
        let data =  userDocument->getAll();
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username]);
        this->getConnection()->put(url, this->json_encode_wrapper(data));
        return true;
    }
    
    public function updateUser(string username, passwd = null, active = null, array extra = null) -> bool
    {
        var userDocument, url;
    
        let userDocument =  new User();
        let userDocument->active = active;
        if passwd !== null {
            let userDocument->passwd = passwd;
        }
        if active !== null {
            let userDocument->active = active;
        }
        if extra !== null {
            let userDocument->extra = extra;
        }
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username]);
        this->getConnection()->patch(url, this->json_encode_wrapper(userDocument->getAll()));
        return true;
    }
    
    public function get(string username) -> <User>
    {
        var url, response, data, options;
    
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username]);
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        let options =  ["_isNew" : false];
        return User::createFromArray(data, options);
    }
    
    public function removeUser(string username) -> bool
    {
        var params, url;
    
        let params =  [];
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username]);
        let url =  UrlHelper::appendParamsUrl(url, params);
        this->getConnection()->delete(url);
        return true;
    }
    
    public function grantPermissions(string username, string databaseName) -> bool
    {
        var data, url;
    
        let data =  ["grant" : "rw"];
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username, "database", databaseName]);
        this->getConnection()->put(url, this->json_encode_wrapper(data));
        return true;
    }
    
    public function revokePermissions(string username, string databaseName) -> bool
    {
        var data, url;
    
        let data =  ["grant" : "none"];
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username, "database", databaseName]);
        this->getConnection()->put(url, this->json_encode_wrapper(data));
        return true;
    }
    
    public function getDatabases(string username) -> array
    {
        var url, response, data;
    
        let url =  UrlHelper::buildUrl(Urls::URL_USER, [username, "database"]);
        let response =  this->getConnection()->get(url);
        let data =  response->getJson();
        return data["result"];
    }

}
