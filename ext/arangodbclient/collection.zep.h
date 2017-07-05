
extern zend_class_entry *arangodbclient_collection_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Collection);

PHP_METHOD(ArangoDBClient_Collection, __construct);
PHP_METHOD(ArangoDBClient_Collection, createFromArray);
PHP_METHOD(ArangoDBClient_Collection, getDefaultType);
PHP_METHOD(ArangoDBClient_Collection, __clone);
PHP_METHOD(ArangoDBClient_Collection, __toString);
PHP_METHOD(ArangoDBClient_Collection, toJson);
PHP_METHOD(ArangoDBClient_Collection, toSerialized);
PHP_METHOD(ArangoDBClient_Collection, getAll);
PHP_METHOD(ArangoDBClient_Collection, set);
PHP_METHOD(ArangoDBClient_Collection, setId);
PHP_METHOD(ArangoDBClient_Collection, getId);
PHP_METHOD(ArangoDBClient_Collection, setName);
PHP_METHOD(ArangoDBClient_Collection, getName);
PHP_METHOD(ArangoDBClient_Collection, setType);
PHP_METHOD(ArangoDBClient_Collection, getType);
PHP_METHOD(ArangoDBClient_Collection, setStatus);
PHP_METHOD(ArangoDBClient_Collection, getStatus);
PHP_METHOD(ArangoDBClient_Collection, setKeyOptions);
PHP_METHOD(ArangoDBClient_Collection, getKeyOptions);
PHP_METHOD(ArangoDBClient_Collection, setWaitForSync);
PHP_METHOD(ArangoDBClient_Collection, getWaitForSync);
PHP_METHOD(ArangoDBClient_Collection, setJournalSize);
PHP_METHOD(ArangoDBClient_Collection, getJournalSize);
PHP_METHOD(ArangoDBClient_Collection, setIsSystem);
PHP_METHOD(ArangoDBClient_Collection, getIsSystem);
PHP_METHOD(ArangoDBClient_Collection, setIsVolatile);
PHP_METHOD(ArangoDBClient_Collection, getIsVolatile);
PHP_METHOD(ArangoDBClient_Collection, setNumberOfShards);
PHP_METHOD(ArangoDBClient_Collection, getNumberOfShards);
PHP_METHOD(ArangoDBClient_Collection, setShardKeys);
PHP_METHOD(ArangoDBClient_Collection, getShardKeys);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection___construct, 0, 0, 0)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_createfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, values, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setid, 0, 0, 1)
	ZEND_ARG_INFO(0, id)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setname, 0, 0, 1)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_settype, 0, 0, 1)
	ZEND_ARG_INFO(0, type)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setstatus, 0, 0, 1)
	ZEND_ARG_INFO(0, status)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setkeyoptions, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, keyOptions, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setwaitforsync, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setjournalsize, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setissystem, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setisvolatile, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setnumberofshards, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collection_setshardkeys, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, value, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_collection_method_entry) {
	PHP_ME(ArangoDBClient_Collection, __construct, arginfo_arangodbclient_collection___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Collection, createFromArray, arginfo_arangodbclient_collection_createfromarray, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Collection, getDefaultType, NULL, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Collection, __clone, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, toJson, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, toSerialized, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getAll, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, set, arginfo_arangodbclient_collection_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setId, arginfo_arangodbclient_collection_setid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setName, arginfo_arangodbclient_collection_setname, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getName, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setType, arginfo_arangodbclient_collection_settype, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getType, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setStatus, arginfo_arangodbclient_collection_setstatus, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getStatus, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setKeyOptions, arginfo_arangodbclient_collection_setkeyoptions, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getKeyOptions, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setWaitForSync, arginfo_arangodbclient_collection_setwaitforsync, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getWaitForSync, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setJournalSize, arginfo_arangodbclient_collection_setjournalsize, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getJournalSize, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setIsSystem, arginfo_arangodbclient_collection_setissystem, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getIsSystem, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setIsVolatile, arginfo_arangodbclient_collection_setisvolatile, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getIsVolatile, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setNumberOfShards, arginfo_arangodbclient_collection_setnumberofshards, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getNumberOfShards, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, setShardKeys, arginfo_arangodbclient_collection_setshardkeys, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Collection, getShardKeys, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
