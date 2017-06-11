namespace ArangoDBClient;

class FoxxHandler extends Handler
{
    public function installFoxxZip(string localZip, string mountPoint, array options = []) -> array
    {
        var post, response, tmpArrayd1b5116499c5b30ab1ea6541dd495788, e;
    
        if !file_exists(localZip) {
            throw new ClientException("Foxx-Zip {localZip} does not exist (or file is unreadable).");
        }
        try {
            let post =  file_get_contents(localZip);
            let response =  this->getConnection()->post(Urls::URL_UPLOAD, post);
            if response->getHttpCode() < 400 {
                let tmpArrayd1b5116499c5b30ab1ea6541dd495788 = ["appInfo" : response->getJson()["filename"], "mount" : mountPoint];
                let response =  this->getConnection()->put(Urls::URL_FOXX_INSTALL, json_encode(tmpArrayd1b5116499c5b30ab1ea6541dd495788));
                if response->getHttpCode() < 400 {
                    return response->getJson();
                } else {
                    throw new ClientException("Foxx-Zip install failed");
                }
            } else {
                throw new ClientException("Foxx-Zip upload failed");
            }
        } catch ServerException, e {
            throw new ClientException(e->getMessage());
        }
        return [];
    }
    
    public function removeFoxxApp(string mountPoint, array options = []) -> array
    {
        var response, tmpArray2e91a2de584b196522ab83abc491c501, e;
    
        try {
            let tmpArray2e91a2de584b196522ab83abc491c501 = ["mount" : mountPoint];
            let response =  this->getConnection()->put(Urls::URL_FOXX_UNINSTALL, json_encode(tmpArray2e91a2de584b196522ab83abc491c501));
            if response->getHttpCode() < 400 {
                return response->getJson();
            } else {
                throw new ClientException(sprintf("Foxx uninstall failed (Code: %d)", response->getHttpCode()));
            }
        } catch ServerException, e {
            if e->getMessage() === "Service not found" {
                throw new ClientException(sprintf("Mount point %s not present.", mountPoint));
            }
            throw new ClientException(e->getMessage());
        }
        return [];
    }

}