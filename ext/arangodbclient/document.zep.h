
extern zend_class_entry *arangodbclient_document_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_Document);

PHP_METHOD(ArangoDBClient_Document, __construct);
PHP_METHOD(ArangoDBClient_Document, createFromArray);
PHP_METHOD(ArangoDBClient_Document, __clone);
PHP_METHOD(ArangoDBClient_Document, __toString);
PHP_METHOD(ArangoDBClient_Document, toJson);
PHP_METHOD(ArangoDBClient_Document, toSerialized);
PHP_METHOD(ArangoDBClient_Document, filterHiddenAttributes);
PHP_METHOD(ArangoDBClient_Document, set);
PHP_METHOD(ArangoDBClient_Document, __set);
PHP_METHOD(ArangoDBClient_Document, get);
PHP_METHOD(ArangoDBClient_Document, __get);
PHP_METHOD(ArangoDBClient_Document, __isset);
PHP_METHOD(ArangoDBClient_Document, __unset);
PHP_METHOD(ArangoDBClient_Document, getAll);
PHP_METHOD(ArangoDBClient_Document, getAllForInsertUpdate);
PHP_METHOD(ArangoDBClient_Document, getAllAsObject);
PHP_METHOD(ArangoDBClient_Document, setHiddenAttributes);
PHP_METHOD(ArangoDBClient_Document, getHiddenAttributes);
PHP_METHOD(ArangoDBClient_Document, isIgnoreHiddenAttributes);
PHP_METHOD(ArangoDBClient_Document, setIgnoreHiddenAttributes);
PHP_METHOD(ArangoDBClient_Document, setChanged);
PHP_METHOD(ArangoDBClient_Document, getChanged);
PHP_METHOD(ArangoDBClient_Document, setIsNew);
PHP_METHOD(ArangoDBClient_Document, getIsNew);
PHP_METHOD(ArangoDBClient_Document, setInternalId);
PHP_METHOD(ArangoDBClient_Document, setInternalKey);
PHP_METHOD(ArangoDBClient_Document, getInternalId);
PHP_METHOD(ArangoDBClient_Document, getInternalKey);
PHP_METHOD(ArangoDBClient_Document, getHandle);
PHP_METHOD(ArangoDBClient_Document, getId);
PHP_METHOD(ArangoDBClient_Document, getKey);
PHP_METHOD(ArangoDBClient_Document, getCollectionId);
PHP_METHOD(ArangoDBClient_Document, setRevision);
PHP_METHOD(ArangoDBClient_Document, getRevision);
zend_object *zephir_init_properties_ArangoDBClient_Document(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document___construct, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_createfromarray, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, values, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_tojson, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_toserialized, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_filterhiddenattributes, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, attributes, 0)
	ZEND_ARG_ARRAY_INFO(0, _hiddenAttributes, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document___set, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document___get, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document___isset, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document___unset, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_getall, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_getallasobject, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_sethiddenattributes, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, attributes, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_setignorehiddenattributes, 0, 0, 1)
	ZEND_ARG_INFO(0, ignoreHiddenAttributes)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_setchanged, 0, 0, 1)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_setisnew, 0, 0, 1)
	ZEND_ARG_INFO(0, isNew)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_setinternalid, 0, 0, 1)
	ZEND_ARG_INFO(0, id)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_setinternalkey, 0, 0, 1)
	ZEND_ARG_INFO(0, key)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_document_setrevision, 0, 0, 1)
	ZEND_ARG_INFO(0, rev)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_document_method_entry) {
	PHP_ME(ArangoDBClient_Document, __construct, arginfo_arangodbclient_document___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(ArangoDBClient_Document, createFromArray, arginfo_arangodbclient_document_createfromarray, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_ME(ArangoDBClient_Document, __clone, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, __toString, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, toJson, arginfo_arangodbclient_document_tojson, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, toSerialized, arginfo_arangodbclient_document_toserialized, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, filterHiddenAttributes, arginfo_arangodbclient_document_filterhiddenattributes, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, set, arginfo_arangodbclient_document_set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, __set, arginfo_arangodbclient_document___set, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, get, arginfo_arangodbclient_document_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, __get, arginfo_arangodbclient_document___get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, __isset, arginfo_arangodbclient_document___isset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, __unset, arginfo_arangodbclient_document___unset, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getAll, arginfo_arangodbclient_document_getall, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getAllForInsertUpdate, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getAllAsObject, arginfo_arangodbclient_document_getallasobject, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setHiddenAttributes, arginfo_arangodbclient_document_sethiddenattributes, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getHiddenAttributes, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, isIgnoreHiddenAttributes, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setIgnoreHiddenAttributes, arginfo_arangodbclient_document_setignorehiddenattributes, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setChanged, arginfo_arangodbclient_document_setchanged, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getChanged, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setIsNew, arginfo_arangodbclient_document_setisnew, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getIsNew, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setInternalId, arginfo_arangodbclient_document_setinternalid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setInternalKey, arginfo_arangodbclient_document_setinternalkey, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getInternalId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getInternalKey, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getHandle, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getKey, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getCollectionId, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, setRevision, arginfo_arangodbclient_document_setrevision, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_Document, getRevision, NULL, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
