
extern zend_class_entry *arangodbclient_vertexhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_VertexHandler);

PHP_METHOD(ArangoDBClient_VertexHandler, createFromArrayWithContext);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_vertexhandler_createfromarraywithcontext, 0, 0, 2)
	ZEND_ARG_INFO(0, data)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_vertexhandler_method_entry) {
	PHP_ME(ArangoDBClient_VertexHandler, createFromArrayWithContext, arginfo_arangodbclient_vertexhandler_createfromarraywithcontext, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
