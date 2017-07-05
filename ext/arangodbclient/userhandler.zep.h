
extern zend_class_entry *arangodbclient_userhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_UserHandler);

PHP_METHOD(ArangoDBClient_UserHandler, addUser);
PHP_METHOD(ArangoDBClient_UserHandler, replaceUser);
PHP_METHOD(ArangoDBClient_UserHandler, updateUser);
PHP_METHOD(ArangoDBClient_UserHandler, get);
PHP_METHOD(ArangoDBClient_UserHandler, removeUser);
PHP_METHOD(ArangoDBClient_UserHandler, grantPermissions);
PHP_METHOD(ArangoDBClient_UserHandler, revokePermissions);
PHP_METHOD(ArangoDBClient_UserHandler, getDatabases);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_adduser, 0, 0, 1)
	ZEND_ARG_INFO(0, username)
	ZEND_ARG_INFO(0, passwd)
	ZEND_ARG_INFO(0, active)
	ZEND_ARG_ARRAY_INFO(0, extra, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_replaceuser, 0, 0, 1)
	ZEND_ARG_INFO(0, username)
	ZEND_ARG_INFO(0, passwd)
	ZEND_ARG_INFO(0, active)
	ZEND_ARG_ARRAY_INFO(0, extra, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_updateuser, 0, 0, 1)
	ZEND_ARG_INFO(0, username)
	ZEND_ARG_INFO(0, passwd)
	ZEND_ARG_INFO(0, active)
	ZEND_ARG_ARRAY_INFO(0, extra, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_get, 0, 0, 1)
	ZEND_ARG_INFO(0, username)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_removeuser, 0, 0, 1)
	ZEND_ARG_INFO(0, username)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_grantpermissions, 0, 0, 2)
	ZEND_ARG_INFO(0, username)
	ZEND_ARG_INFO(0, databaseName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_revokepermissions, 0, 0, 2)
	ZEND_ARG_INFO(0, username)
	ZEND_ARG_INFO(0, databaseName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_userhandler_getdatabases, 0, 0, 1)
	ZEND_ARG_INFO(0, username)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_userhandler_method_entry) {
	PHP_ME(ArangoDBClient_UserHandler, addUser, arginfo_arangodbclient_userhandler_adduser, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, replaceUser, arginfo_arangodbclient_userhandler_replaceuser, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, updateUser, arginfo_arangodbclient_userhandler_updateuser, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, get, arginfo_arangodbclient_userhandler_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, removeUser, arginfo_arangodbclient_userhandler_removeuser, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, grantPermissions, arginfo_arangodbclient_userhandler_grantpermissions, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, revokePermissions, arginfo_arangodbclient_userhandler_revokepermissions, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_UserHandler, getDatabases, arginfo_arangodbclient_userhandler_getdatabases, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
