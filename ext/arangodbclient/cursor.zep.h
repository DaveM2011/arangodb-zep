
extern zend_class_entry *arangodbclient_cursor_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Cursor);

PHP_METHOD(ArangoDBClient_Cursor, __construct);
PHP_METHOD(ArangoDBClient_Cursor, delete);
PHP_METHOD(ArangoDBClient_Cursor, getCount);
PHP_METHOD(ArangoDBClient_Cursor, getFullCount);
PHP_METHOD(ArangoDBClient_Cursor, getCached);
PHP_METHOD(ArangoDBClient_Cursor, getAll);
PHP_METHOD(ArangoDBClient_Cursor, rewind);
PHP_METHOD(ArangoDBClient_Cursor, current);
PHP_METHOD(ArangoDBClient_Cursor, key);
PHP_METHOD(ArangoDBClient_Cursor, next);
PHP_METHOD(ArangoDBClient_Cursor, valid);
PHP_METHOD(ArangoDBClient_Cursor, add);
PHP_METHOD(ArangoDBClient_Cursor, addFlatFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addDocumentsFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addPathsFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addShortestPathFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addDistanceToFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addCommonNeighborsFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addCommonPropertiesFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addFigureFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addEdgesFromArray);
PHP_METHOD(ArangoDBClient_Cursor, addVerticesFromArray);
PHP_METHOD(ArangoDBClient_Cursor, sanitize);
PHP_METHOD(ArangoDBClient_Cursor, fetchOutstanding);
PHP_METHOD(ArangoDBClient_Cursor, updateLength);
PHP_METHOD(ArangoDBClient_Cursor, url);
PHP_METHOD(ArangoDBClient_Cursor, getStatValue);
PHP_METHOD(ArangoDBClient_Cursor, getMetadata);
PHP_METHOD(ArangoDBClient_Cursor, getExtra);
PHP_METHOD(ArangoDBClient_Cursor, getWarnings);
PHP_METHOD(ArangoDBClient_Cursor, getWritesExecuted);
PHP_METHOD(ArangoDBClient_Cursor, getWritesIgnored);
PHP_METHOD(ArangoDBClient_Cursor, getScannedFull);
PHP_METHOD(ArangoDBClient_Cursor, getScannedIndex);
PHP_METHOD(ArangoDBClient_Cursor, getFiltered);
PHP_METHOD(ArangoDBClient_Cursor, getFetches);
PHP_METHOD(ArangoDBClient_Cursor, getId);
PHP_METHOD(ArangoDBClient_Cursor, setDocumentClass);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor___construct, 0, 0, 3)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_add, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addflatfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_adddocumentsfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addpathsfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addshortestpathfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_adddistancetofromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addcommonneighborsfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addcommonpropertiesfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addfigurefromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addedgesfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_addverticesfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_sanitize, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, rows, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_getstatvalue, 0, 0, 1)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_cursor_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_cursor_method_entry) {
	PHP_ME(ArangoDBClient_Cursor, __construct, arginfo_arangodbclient_cursor___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Cursor, delete, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getCount, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getFullCount, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getCached, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getAll, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, rewind, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, current, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, key, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, next, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, valid, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, add, arginfo_arangodbclient_cursor_add, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addFlatFromArray, arginfo_arangodbclient_cursor_addflatfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addDocumentsFromArray, arginfo_arangodbclient_cursor_adddocumentsfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addPathsFromArray, arginfo_arangodbclient_cursor_addpathsfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addShortestPathFromArray, arginfo_arangodbclient_cursor_addshortestpathfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addDistanceToFromArray, arginfo_arangodbclient_cursor_adddistancetofromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addCommonNeighborsFromArray, arginfo_arangodbclient_cursor_addcommonneighborsfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addCommonPropertiesFromArray, arginfo_arangodbclient_cursor_addcommonpropertiesfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addFigureFromArray, arginfo_arangodbclient_cursor_addfigurefromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addEdgesFromArray, arginfo_arangodbclient_cursor_addedgesfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, addVerticesFromArray, arginfo_arangodbclient_cursor_addverticesfromarray, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, sanitize, arginfo_arangodbclient_cursor_sanitize, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, fetchOutstanding, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, updateLength, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, url, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, getStatValue, arginfo_arangodbclient_cursor_getstatvalue, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Cursor, getMetadata, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getExtra, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getWarnings, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getWritesExecuted, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getWritesIgnored, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getScannedFull, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getScannedIndex, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getFiltered, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getFetches, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, getId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Cursor, setDocumentClass, arginfo_arangodbclient_cursor_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
