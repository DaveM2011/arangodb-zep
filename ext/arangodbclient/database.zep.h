
extern zend_class_entry *arangodbclient_database_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Database);

PHP_METHOD(ArangoDBClient_Database, create);
PHP_METHOD(ArangoDBClient_Database, delete);
PHP_METHOD(ArangoDBClient_Database, listDatabases);
PHP_METHOD(ArangoDBClient_Database, databases);
PHP_METHOD(ArangoDBClient_Database, listUserDatabases);
PHP_METHOD(ArangoDBClient_Database, getInfo);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_database_create, 0, 0, 2)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_database_delete, 0, 0, 2)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_database_listdatabases, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_database_databases, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_database_listuserdatabases, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_database_getinfo, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_database_method_entry) {
	PHP_ME(ArangoDBClient_Database, create, arginfo_arangodbclient_database_create, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Database, delete, arginfo_arangodbclient_database_delete, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Database, listDatabases, arginfo_arangodbclient_database_listdatabases, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Database, databases, arginfo_arangodbclient_database_databases, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Database, listUserDatabases, arginfo_arangodbclient_database_listuserdatabases, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Database, getInfo, arginfo_arangodbclient_database_getinfo, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
