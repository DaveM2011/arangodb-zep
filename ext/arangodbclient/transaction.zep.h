
extern zend_class_entry *arangodbclient_transaction_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Transaction);

PHP_METHOD(ArangoDBClient_Transaction, __construct);
PHP_METHOD(ArangoDBClient_Transaction, execute);
PHP_METHOD(ArangoDBClient_Transaction, getConnection);
PHP_METHOD(ArangoDBClient_Transaction, setCollections);
PHP_METHOD(ArangoDBClient_Transaction, getCollections);
PHP_METHOD(ArangoDBClient_Transaction, setAction);
PHP_METHOD(ArangoDBClient_Transaction, getAction);
PHP_METHOD(ArangoDBClient_Transaction, setWaitForSync);
PHP_METHOD(ArangoDBClient_Transaction, getWaitForSync);
PHP_METHOD(ArangoDBClient_Transaction, setLockTimeout);
PHP_METHOD(ArangoDBClient_Transaction, getLockTimeout);
PHP_METHOD(ArangoDBClient_Transaction, setParams);
PHP_METHOD(ArangoDBClient_Transaction, getParams);
PHP_METHOD(ArangoDBClient_Transaction, setWriteCollections);
PHP_METHOD(ArangoDBClient_Transaction, getWriteCollections);
PHP_METHOD(ArangoDBClient_Transaction, setReadCollections);
PHP_METHOD(ArangoDBClient_Transaction, getReadCollections);
PHP_METHOD(ArangoDBClient_Transaction, set);
PHP_METHOD(ArangoDBClient_Transaction, __set);
PHP_METHOD(ArangoDBClient_Transaction, get);
PHP_METHOD(ArangoDBClient_Transaction, __get);
PHP_METHOD(ArangoDBClient_Transaction, __isset);
PHP_METHOD(ArangoDBClient_Transaction, __toString);
PHP_METHOD(ArangoDBClient_Transaction, buildTransactionAttributesFromArray);
zend_object *zephir_init_properties_ArangoDBClient_Transaction(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction___construct, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_ARRAY_INFO(0, transactionArray, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setcollections, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, value, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setaction, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setwaitforsync, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setlocktimeout, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setparams, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, value, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setwritecollections, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, value, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_setreadcollections, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, value, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction___set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction___get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction___isset, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_transaction_buildtransactionattributesfromarray, 0, 0, 1)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_transaction_method_entry) {
	PHP_ME(ArangoDBClient_Transaction, __construct, arginfo_arangodbclient_transaction___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Transaction, execute, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getConnection, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Transaction, setCollections, arginfo_arangodbclient_transaction_setcollections, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getCollections, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, setAction, arginfo_arangodbclient_transaction_setaction, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getAction, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, setWaitForSync, arginfo_arangodbclient_transaction_setwaitforsync, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getWaitForSync, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, setLockTimeout, arginfo_arangodbclient_transaction_setlocktimeout, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getLockTimeout, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, setParams, arginfo_arangodbclient_transaction_setparams, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getParams, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, setWriteCollections, arginfo_arangodbclient_transaction_setwritecollections, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getWriteCollections, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, setReadCollections, arginfo_arangodbclient_transaction_setreadcollections, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, getReadCollections, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, set, arginfo_arangodbclient_transaction_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, __set, arginfo_arangodbclient_transaction___set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, get, arginfo_arangodbclient_transaction_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, __get, arginfo_arangodbclient_transaction___get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, __isset, arginfo_arangodbclient_transaction___isset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Transaction, buildTransactionAttributesFromArray, arginfo_arangodbclient_transaction_buildtransactionattributesfromarray, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
