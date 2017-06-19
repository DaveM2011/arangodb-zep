namespace ArangoDBClient;

class HttpHelper
{
    const METHOD_POST = "POST";
    const METHOD_PUT = "PUT";
    const METHOD_DELETE = "DELETE";
    const METHOD_GET = "GET";
    const METHOD_HEAD = "HEAD";
    const METHOD_PATCH = "PATCH";
    const CHUNK_SIZE = 8192;
    const EOL = "\r\n";
    const SEPARATOR = "\r\n\r\n";
    const PROTOCOL = "HTTP/1.1";
    const MIME_BOUNDARY = "XXXsubpartXXX";
    const ASYNC_HEADER = "X-Arango-Async";
    public static function createConnection(<ConnectionOptions> options)
    {
        var endpoint, context, fp, errNo, message;
    
        let endpoint = options->offsetGet(ConnectionOptions::OPTION_ENDPOINT);
        let context =  stream_context_create();
        if Endpoint::getType(endpoint) == Endpoint::TYPE_SSL {
            stream_context_set_option(context, "ssl", "verify_peer", options->offsetGet(ConnectionOptions::OPTION_VERIFY_CERT));
            stream_context_set_option(context, "ssl", "allow_self_signed", options->offsetGet(ConnectionOptions::OPTION_ALLOW_SELF_SIGNED));
            if options->offsetGet(ConnectionOptions::OPTION_CIPHERS) !== null {
                stream_context_set_option(context, "ssl", "ciphers", options->offsetGet(ConnectionOptions::OPTION_CIPHERS));
            }
        }
        let fp =  stream_socket_client(endpoint, errNo, message, options->offsetGet(ConnectionOptions::OPTION_TIMEOUT), STREAM_CLIENT_CONNECT, context);
        if !fp {
            throw new ConnectException("cannot connect to endpoint '" . options->offsetGet(ConnectionOptions::OPTION_ENDPOINT) . "': " . message, errNo);
        }
        stream_set_timeout(fp, options->offsetGet(ConnectionOptions::OPTION_TIMEOUT));
        return fp;
    }
    
    public static function buildRequest(<ConnectionOptions> options, string connectionHeader, string method, string url, string body, array customHeaders = []) -> string
    {
        var length, contentType, customHeader, headerKey, headerValue, request;
    
        if !is_string(body) {
            throw new ClientException("Invalid value for body. Expecting string, got " . gettype(body));
        }
        let length =  strlen(body);
        if options->offsetGet(ConnectionOptions::OPTION_BATCH) === true {
            let contentType =  "Content-Type: multipart/form-data; boundary=" . self::MIME_BOUNDARY . self::EOL;
        } else {
            let contentType = "";
            if length > 0 && options->offsetGet(ConnectionOptions::OPTION_BATCHPART) === false {
                let contentType =  "Content-Type: application/json" . self::EOL;
            }
        }
        let customHeader = "";
        for headerKey, headerValue in customHeaders {
            let customHeader .= headerKey . ": " . headerValue . self::EOL;
        }
        let request =  sprintf("%s %s %s", method, url, self::PROTOCOL) . connectionHeader . customHeader . contentType . sprintf("Content-Length: %s", length) . self::EOL . self::EOL . body;
        return request;
    }
    
    public static function validateMethod(string method) -> bool
    {
        if method === self::METHOD_POST || method === self::METHOD_PUT || method === self::METHOD_DELETE || method === self::METHOD_GET || method === self::METHOD_HEAD || method === self::METHOD_PATCH {
            return true;
        }
        throw new ClientException("Invalid request method '" . method . "'");
    }
    
    public static function transfer(socket, string request, string method) -> string
    {
        var contentLength, expectedLength, totalRead, contentLengthPos, result, first, read, pos, bodyStart;
    
        if !is_resource(socket) {
            throw new ClientException("Invalid socket used");
        }
        //assert(is_string(request));
        fwrite(socket, request);
        fflush(socket);
        let contentLength = null;
        let expectedLength = null;
        let totalRead = 0;
        let contentLengthPos = 0;
        let result = "";
        let first =  true;
        while (first || !feof(socket)) {
            let read = fread(socket, self::CHUNK_SIZE);
            if read === false || read === "" {
                break;
            }
            let totalRead += strlen(read);
            if first {
                let result = read;
                let first = false;
            } else {
                let result .= read;
            }
            if contentLength === null {
                let pos = stripos(result, "content-length: ", 12);
                if pos !== false {
                    let contentLength = (int) substr(result, pos + 16, 10);
                    let contentLengthPos = pos + 17;
                    if method === "HEAD" {
                        let contentLength = 0;
                    }
                }
            }
            if contentLength !== null && expectedLength === null {
                let bodyStart = strpos(result, "\r\n\r\n", contentLengthPos);
                if bodyStart !== false {
                    let bodyStart += 4;
                    let expectedLength = bodyStart + contentLength;
                }
            }
            if expectedLength !== null && totalRead >= expectedLength {
                break;
            }
        }
        return result;
    }
    
    public static function parseHttpMessage(string httpMessage, string originUrl = null, string originMethod = null) -> array
    {
        return explode(self::SEPARATOR, httpMessage, 2);
    }
    
    public static function parseHeaders(string headers) -> array
    {
        var httpCode, result, processed, lineNumber, line, key, value, tmpListKeyValue, matches;
    
        let httpCode =  null;
        let result =  null;
        let processed =  [];
        for lineNumber, line in explode(HttpHelper::EOL, headers) {
            if lineNumber === 0 {
                if preg_match("/^HTTP\\/\\d+\\.\\d+\\s+(\\d+)/", line, matches) {
                    let httpCode =  (int) matches[1];
                }
                let result = line;
            } else {
                if strpos(line, ": ") !== false {
                    let tmpListKeyValue = explode(": ", line, 2);
                    let key = tmpListKeyValue[0];
                    let value = tmpListKeyValue[1];
                } else {
                    let tmpListKeyValue = explode(":", line, 2);
                    let key = tmpListKeyValue[0];
                    let value = tmpListKeyValue[1];
                }
                let processed[strtolower(key)] = value;
            }
        }
        return [httpCode, result, processed];
    }

}
