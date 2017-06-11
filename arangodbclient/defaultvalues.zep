namespace ArangoDBClient;

abstract class DefaultValues
{
    const DEFAULT_PORT = 8529;
    const DEFAULT_TIMEOUT = 30;
    const DEFAULT_AUTH_TYPE = "Basic";
    const DEFAULT_WAIT_SYNC = false;
    const DEFAULT_JOURNAL_SIZE = 33554432;
    const DEFAULT_IS_VOLATILE = false;
    const DEFAULT_CREATE = false;
    const DEFAULT_CONNECTION = "Keep-Alive";
    const DEFAULT_VERIFY_CERT = false;
    const DEFAULT_ALLOW_SELF_SIGNED = true;
    const DEFAULT_CIPHERS = null;
    const DEFAULT_UPDATE_POLICY = UpdatePolicy::ERROR;
    const DEFAULT_REPLACE_POLICY = UpdatePolicy::ERROR;
    const DEFAULT_DELETE_POLICY = UpdatePolicy::ERROR;
    const DEFAULT_CHECK_UTF8_CONFORM = false;
}
