
extern zend_class_entry *arangodbclient_edgedefinition_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_EdgeDefinition);

PHP_METHOD(ArangoDBClient_EdgeDefinition, __construct);
PHP_METHOD(ArangoDBClient_EdgeDefinition, setRelation);
PHP_METHOD(ArangoDBClient_EdgeDefinition, getRelation);
PHP_METHOD(ArangoDBClient_EdgeDefinition, getToCollections);
PHP_METHOD(ArangoDBClient_EdgeDefinition, getFromCollections);
PHP_METHOD(ArangoDBClient_EdgeDefinition, addToCollection);
PHP_METHOD(ArangoDBClient_EdgeDefinition, addFromCollection);
PHP_METHOD(ArangoDBClient_EdgeDefinition, clearToCollection);
PHP_METHOD(ArangoDBClient_EdgeDefinition, clearFromCollection);
PHP_METHOD(ArangoDBClient_EdgeDefinition, transformToArray);
PHP_METHOD(ArangoDBClient_EdgeDefinition, createUndirectedRelation);
PHP_METHOD(ArangoDBClient_EdgeDefinition, createDirectedRelation);
zend_object *zephir_init_properties_ArangoDBClient_EdgeDefinition(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgedefinition___construct, 0, 0, 0)
	ZEND_ARG_INFO(0, relation)
	ZEND_ARG_INFO(0, fromCollections)
	ZEND_ARG_INFO(0, toCollections)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgedefinition_setrelation, 0, 0, 1)
	ZEND_ARG_INFO(0, relation)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgedefinition_addtocollection, 0, 0, 1)
	ZEND_ARG_INFO(0, toCollection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgedefinition_addfromcollection, 0, 0, 1)
	ZEND_ARG_INFO(0, fromCollection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgedefinition_createundirectedrelation, 0, 0, 2)
	ZEND_ARG_INFO(0, relation)
	ZEND_ARG_ARRAY_INFO(0, vertexCollections, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_edgedefinition_createdirectedrelation, 0, 0, 3)
	ZEND_ARG_INFO(0, relation)
	ZEND_ARG_INFO(0, fromCollections)
	ZEND_ARG_INFO(0, toCollections)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_edgedefinition_method_entry) {
	PHP_ME(ArangoDBClient_EdgeDefinition, __construct, arginfo_arangodbclient_edgedefinition___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_EdgeDefinition, setRelation, arginfo_arangodbclient_edgedefinition_setrelation, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, getRelation, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, getToCollections, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, getFromCollections, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, addToCollection, arginfo_arangodbclient_edgedefinition_addtocollection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, addFromCollection, arginfo_arangodbclient_edgedefinition_addfromcollection, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, clearToCollection, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, clearFromCollection, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, transformToArray, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, createUndirectedRelation, arginfo_arangodbclient_edgedefinition_createundirectedrelation, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_EdgeDefinition, createDirectedRelation, arginfo_arangodbclient_edgedefinition_createdirectedrelation, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
