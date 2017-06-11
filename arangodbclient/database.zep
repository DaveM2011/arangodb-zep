namespace ArangoDBClient;

class Database
{
    const ENTRY_DATABASE_NAME = "name";
    const ENTRY_DATABASE_USERS = "users";
    public static function create(<Connection> connection, string name) -> array
    {
        var payload, response;
    
        let payload =  [self::ENTRY_DATABASE_NAME : name, self::ENTRY_DATABASE_USERS : [["username" : connection->getOption(ConnectionOptions::OPTION_AUTH_USER), "passwd" : connection->getOption(ConnectionOptions::OPTION_AUTH_PASSWD)]]];
        let response =  connection->post(Urls::URL_DATABASE, connection->json_encode_wrapper(payload));
        return response->getJson();
    }
    
    public static function delete(<Connection> connection, string name) -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_DATABASE, [name]);
        let response =  connection->delete(url);
        return response->getJson();
    }
    
    public static function listDatabases(<Connection> connection) -> array
    {
        return self::databases(connection);
    }
    
    public static function databases(<Connection> connection) -> array
    {
        var response;
    
        let response =  connection->get(Urls::URL_DATABASE);
        return response->getJson();
    }
    
    public static function listUserDatabases(<Connection> connection) -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_DATABASE, ["user"]);
        let response =  connection->get(url);
        return response->getJson();
    }
    
    public static function getInfo(<Connection> connection) -> array
    {
        var url, response;
    
        let url =  UrlHelper::buildUrl(Urls::URL_DATABASE, ["current"]);
        let response =  connection->get(url);
        return response->getJson();
    }

}
