
extern zend_class_entry *arangodbclient_statement_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Statement);

PHP_METHOD(ArangoDBClient_Statement, __construct);
PHP_METHOD(ArangoDBClient_Statement, getConnection);
PHP_METHOD(ArangoDBClient_Statement, execute);
PHP_METHOD(ArangoDBClient_Statement, explain);
PHP_METHOD(ArangoDBClient_Statement, validate);
PHP_METHOD(ArangoDBClient_Statement, __invoke);
PHP_METHOD(ArangoDBClient_Statement, __toString);
PHP_METHOD(ArangoDBClient_Statement, bind);
PHP_METHOD(ArangoDBClient_Statement, getBindVars);
PHP_METHOD(ArangoDBClient_Statement, setQuery);
PHP_METHOD(ArangoDBClient_Statement, getQuery);
PHP_METHOD(ArangoDBClient_Statement, setResultType);
PHP_METHOD(ArangoDBClient_Statement, setCount);
PHP_METHOD(ArangoDBClient_Statement, getCount);
PHP_METHOD(ArangoDBClient_Statement, setFullCount);
PHP_METHOD(ArangoDBClient_Statement, getFullCount);
PHP_METHOD(ArangoDBClient_Statement, setCache);
PHP_METHOD(ArangoDBClient_Statement, getCache);
PHP_METHOD(ArangoDBClient_Statement, setBatchSize);
PHP_METHOD(ArangoDBClient_Statement, getBatchSize);
PHP_METHOD(ArangoDBClient_Statement, buildData);
PHP_METHOD(ArangoDBClient_Statement, getCursorOptions);
PHP_METHOD(ArangoDBClient_Statement, setDocumentClass);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement___construct, 0, 0, 2)
	ZEND_ARG_OBJ_INFO(0, connection, ArangoDBClient\\Connection, 0)
	ZEND_ARG_ARRAY_INFO(0, data, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement___invoke, 0, 0, 1)
	ZEND_ARG_INFO(0, args)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_bind, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setquery, 0, 0, 1)
	ZEND_ARG_INFO(0, query)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setresulttype, 0, 0, 1)
	ZEND_ARG_INFO(0, resultType)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setcount, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setfullcount, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setcache, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setbatchsize, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_statement_setdocumentclass, 0, 0, 1)
	ZEND_ARG_INFO(0, classs)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_statement_method_entry) {
	PHP_ME(ArangoDBClient_Statement, __construct, arginfo_arangodbclient_statement___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Statement, getConnection, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Statement, execute, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, explain, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, validate, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, __invoke, arginfo_arangodbclient_statement___invoke, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, bind, arginfo_arangodbclient_statement_bind, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, getBindVars, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, setQuery, arginfo_arangodbclient_statement_setquery, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, getQuery, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, setResultType, arginfo_arangodbclient_statement_setresulttype, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, setCount, arginfo_arangodbclient_statement_setcount, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, getCount, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, setFullCount, arginfo_arangodbclient_statement_setfullcount, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, getFullCount, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, setCache, arginfo_arangodbclient_statement_setcache, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, getCache, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, setBatchSize, arginfo_arangodbclient_statement_setbatchsize, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, getBatchSize, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Statement, buildData, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Statement, getCursorOptions, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ArangoDBClient_Statement, setDocumentClass, arginfo_arangodbclient_statement_setdocumentclass, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
