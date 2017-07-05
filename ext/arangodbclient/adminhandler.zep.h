
extern zend_class_entry *arangodbclient_adminhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_AdminHandler);

PHP_METHOD(ArangoDBClient_AdminHandler, getServerVersion);
PHP_METHOD(ArangoDBClient_AdminHandler, getServerRole);
PHP_METHOD(ArangoDBClient_AdminHandler, getServerTime);
PHP_METHOD(ArangoDBClient_AdminHandler, getServerLog);
PHP_METHOD(ArangoDBClient_AdminHandler, reloadServerRouting);
PHP_METHOD(ArangoDBClient_AdminHandler, getServerStatistics);
PHP_METHOD(ArangoDBClient_AdminHandler, getServerStatisticsDescription);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_adminhandler_getserverversion, 0, 0, 0)
	ZEND_ARG_INFO(0, details)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_adminhandler_getserverlog, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_adminhandler_getserverstatisticsdescription, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_adminhandler_method_entry) {
	PHP_ME(ArangoDBClient_AdminHandler, getServerVersion, arginfo_arangodbclient_adminhandler_getserverversion, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AdminHandler, getServerRole, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AdminHandler, getServerTime, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AdminHandler, getServerLog, arginfo_arangodbclient_adminhandler_getserverlog, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AdminHandler, reloadServerRouting, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AdminHandler, getServerStatistics, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_AdminHandler, getServerStatisticsDescription, arginfo_arangodbclient_adminhandler_getserverstatisticsdescription, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
