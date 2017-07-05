
extern zend_class_entry *arangodbclient_collectionhandler_ce;

ZEPHIR_INIT_CLASS(ArangoDBClient_CollectionHandler);

PHP_METHOD(ArangoDBClient_CollectionHandler, create);
PHP_METHOD(ArangoDBClient_CollectionHandler, has);
PHP_METHOD(ArangoDBClient_CollectionHandler, count);
PHP_METHOD(ArangoDBClient_CollectionHandler, get);
PHP_METHOD(ArangoDBClient_CollectionHandler, getProperties);
PHP_METHOD(ArangoDBClient_CollectionHandler, figures);
PHP_METHOD(ArangoDBClient_CollectionHandler, getChecksum);
PHP_METHOD(ArangoDBClient_CollectionHandler, getRevision);
PHP_METHOD(ArangoDBClient_CollectionHandler, rename);
PHP_METHOD(ArangoDBClient_CollectionHandler, load);
PHP_METHOD(ArangoDBClient_CollectionHandler, unload);
PHP_METHOD(ArangoDBClient_CollectionHandler, truncate);
PHP_METHOD(ArangoDBClient_CollectionHandler, drop);
PHP_METHOD(ArangoDBClient_CollectionHandler, isValidCollectionId);
PHP_METHOD(ArangoDBClient_CollectionHandler, getAllCollections);
PHP_METHOD(ArangoDBClient_CollectionHandler, getCollectionId);
PHP_METHOD(ArangoDBClient_CollectionHandler, getCollectionName);
PHP_METHOD(ArangoDBClient_CollectionHandler, importFromFile);
PHP_METHOD(ArangoDBClient_CollectionHandler, import);
PHP_METHOD(ArangoDBClient_CollectionHandler, createHashIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, createFulltextIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, createSkipListIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, createPersistentIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, createGeoIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, index);
PHP_METHOD(ArangoDBClient_CollectionHandler, getIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, getIndexes);
PHP_METHOD(ArangoDBClient_CollectionHandler, dropIndex);
PHP_METHOD(ArangoDBClient_CollectionHandler, any);
PHP_METHOD(ArangoDBClient_CollectionHandler, all);
PHP_METHOD(ArangoDBClient_CollectionHandler, getAllIds);
PHP_METHOD(ArangoDBClient_CollectionHandler, byExample);
PHP_METHOD(ArangoDBClient_CollectionHandler, firstExample);
PHP_METHOD(ArangoDBClient_CollectionHandler, fulltext);
PHP_METHOD(ArangoDBClient_CollectionHandler, updateByExample);
PHP_METHOD(ArangoDBClient_CollectionHandler, replaceByExample);
PHP_METHOD(ArangoDBClient_CollectionHandler, removeByExample);
PHP_METHOD(ArangoDBClient_CollectionHandler, removeByKeys);
PHP_METHOD(ArangoDBClient_CollectionHandler, lookupByKeys);
PHP_METHOD(ArangoDBClient_CollectionHandler, range);
PHP_METHOD(ArangoDBClient_CollectionHandler, near);
PHP_METHOD(ArangoDBClient_CollectionHandler, within);
PHP_METHOD(ArangoDBClient_CollectionHandler, createCollectionIfOptions);

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_create, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_has, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_count, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_get, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getproperties, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_figures, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getchecksum, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, withRevisions)
	ZEND_ARG_INFO(0, withData)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getrevision, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_rename, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_load, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_unload, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_truncate, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_drop, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_isvalidcollectionid, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getallcollections, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getcollectionid, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getcollectionname, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_importfromfile, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, importFileName)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_import, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, importData)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_createhashindex, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, fields, 0)
	ZEND_ARG_INFO(0, unique)
	ZEND_ARG_INFO(0, sparse)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_createfulltextindex, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, fields, 0)
	ZEND_ARG_INFO(0, minLength)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_createskiplistindex, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, fields, 0)
	ZEND_ARG_INFO(0, unique)
	ZEND_ARG_INFO(0, sparse)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_createpersistentindex, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, fields, 0)
	ZEND_ARG_INFO(0, unique)
	ZEND_ARG_INFO(0, sparse)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_creategeoindex, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, fields, 0)
	ZEND_ARG_INFO(0, geoJson)
	ZEND_ARG_INFO(0, constraint)
	ZEND_ARG_INFO(0, ignoreNull)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_index, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, type)
	ZEND_ARG_ARRAY_INFO(0, attributes, 1)
	ZEND_ARG_INFO(0, unique)
	ZEND_ARG_ARRAY_INFO(0, indexOptions, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getindex, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, indexId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getindexes, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_dropindex, 0, 0, 1)
	ZEND_ARG_INFO(0, indexHandle)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_any, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_all, 0, 0, 1)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_getallids, 0, 0, 1)
	ZEND_ARG_INFO(0, collection)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_byexample, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_firstexample, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_fulltext, 0, 0, 3)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, attribute)
	ZEND_ARG_INFO(0, query)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_updatebyexample, 0, 0, 3)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, example)
	ZEND_ARG_INFO(0, newValue)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_replacebyexample, 0, 0, 3)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, example)
	ZEND_ARG_INFO(0, newValue)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_removebyexample, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, document)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_removebykeys, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, keys, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_lookupbykeys, 0, 0, 2)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_ARRAY_INFO(0, keys, 0)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_range, 0, 0, 4)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, attribute)
	ZEND_ARG_INFO(0, left)
	ZEND_ARG_INFO(0, right)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_near, 0, 0, 3)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, latitude)
	ZEND_ARG_INFO(0, longitude)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_within, 0, 0, 4)
	ZEND_ARG_INFO(0, collectionId)
	ZEND_ARG_INFO(0, latitude)
	ZEND_ARG_INFO(0, longitude)
	ZEND_ARG_INFO(0, radius)
	ZEND_ARG_ARRAY_INFO(0, options, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_arangodbclient_collectionhandler_createcollectionifoptions, 0, 0, 2)
	ZEND_ARG_INFO(0, collection)
	ZEND_ARG_INFO(0, options)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(arangodbclient_collectionhandler_method_entry) {
	PHP_ME(ArangoDBClient_CollectionHandler, create, arginfo_arangodbclient_collectionhandler_create, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, has, arginfo_arangodbclient_collectionhandler_has, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, count, arginfo_arangodbclient_collectionhandler_count, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, get, arginfo_arangodbclient_collectionhandler_get, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getProperties, arginfo_arangodbclient_collectionhandler_getproperties, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, figures, arginfo_arangodbclient_collectionhandler_figures, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getChecksum, arginfo_arangodbclient_collectionhandler_getchecksum, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getRevision, arginfo_arangodbclient_collectionhandler_getrevision, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, rename, arginfo_arangodbclient_collectionhandler_rename, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, load, arginfo_arangodbclient_collectionhandler_load, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, unload, arginfo_arangodbclient_collectionhandler_unload, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, truncate, arginfo_arangodbclient_collectionhandler_truncate, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, drop, arginfo_arangodbclient_collectionhandler_drop, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, isValidCollectionId, arginfo_arangodbclient_collectionhandler_isvalidcollectionid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getAllCollections, arginfo_arangodbclient_collectionhandler_getallcollections, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getCollectionId, arginfo_arangodbclient_collectionhandler_getcollectionid, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getCollectionName, arginfo_arangodbclient_collectionhandler_getcollectionname, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, importFromFile, arginfo_arangodbclient_collectionhandler_importfromfile, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, import, arginfo_arangodbclient_collectionhandler_import, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, createHashIndex, arginfo_arangodbclient_collectionhandler_createhashindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, createFulltextIndex, arginfo_arangodbclient_collectionhandler_createfulltextindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, createSkipListIndex, arginfo_arangodbclient_collectionhandler_createskiplistindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, createPersistentIndex, arginfo_arangodbclient_collectionhandler_createpersistentindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, createGeoIndex, arginfo_arangodbclient_collectionhandler_creategeoindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, index, arginfo_arangodbclient_collectionhandler_index, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getIndex, arginfo_arangodbclient_collectionhandler_getindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getIndexes, arginfo_arangodbclient_collectionhandler_getindexes, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, dropIndex, arginfo_arangodbclient_collectionhandler_dropindex, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, any, arginfo_arangodbclient_collectionhandler_any, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, all, arginfo_arangodbclient_collectionhandler_all, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, getAllIds, arginfo_arangodbclient_collectionhandler_getallids, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, byExample, arginfo_arangodbclient_collectionhandler_byexample, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, firstExample, arginfo_arangodbclient_collectionhandler_firstexample, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, fulltext, arginfo_arangodbclient_collectionhandler_fulltext, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, updateByExample, arginfo_arangodbclient_collectionhandler_updatebyexample, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, replaceByExample, arginfo_arangodbclient_collectionhandler_replacebyexample, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, removeByExample, arginfo_arangodbclient_collectionhandler_removebyexample, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, removeByKeys, arginfo_arangodbclient_collectionhandler_removebykeys, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, lookupByKeys, arginfo_arangodbclient_collectionhandler_lookupbykeys, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, range, arginfo_arangodbclient_collectionhandler_range, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, near, arginfo_arangodbclient_collectionhandler_near, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, within, arginfo_arangodbclient_collectionhandler_within, ZEND_ACC_PUBLIC)
	PHP_ME(ArangoDBClient_CollectionHandler, createCollectionIfOptions, arginfo_arangodbclient_collectionhandler_createcollectionifoptions, ZEND_ACC_PROTECTED)
	PHP_FE_END
};
