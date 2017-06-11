
/* This file was generated automatically by Zephir do not modify it! */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <php.h>

#include "php_ext.h"
#include "arangodbclient.h"

#include <ext/standard/info.h>

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/globals.h"
#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"



zend_class_entry *arangodbclient_handler_ce;
zend_class_entry *arangodbclient_document_ce;
zend_class_entry *arangodbclient_exception_ce;
zend_class_entry *arangodbclient_documenthandler_ce;
zend_class_entry *arangodbclient_adminhandler_ce;
zend_class_entry *arangodbclient_aqluserfunction_ce;
zend_class_entry *arangodbclient_batch_ce;
zend_class_entry *arangodbclient_batchpart_ce;
zend_class_entry *arangodbclient_bindvars_ce;
zend_class_entry *arangodbclient_clientexception_ce;
zend_class_entry *arangodbclient_collection_ce;
zend_class_entry *arangodbclient_collectionhandler_ce;
zend_class_entry *arangodbclient_connectexception_ce;
zend_class_entry *arangodbclient_connection_ce;
zend_class_entry *arangodbclient_connectionoptions_ce;
zend_class_entry *arangodbclient_cursor_ce;
zend_class_entry *arangodbclient_database_ce;
zend_class_entry *arangodbclient_defaultvalues_ce;
zend_class_entry *arangodbclient_edge_ce;
zend_class_entry *arangodbclient_edgedefinition_ce;
zend_class_entry *arangodbclient_edgehandler_ce;
zend_class_entry *arangodbclient_endpoint_ce;
zend_class_entry *arangodbclient_export_ce;
zend_class_entry *arangodbclient_exportcursor_ce;
zend_class_entry *arangodbclient_foxxhandler_ce;
zend_class_entry *arangodbclient_graph_ce;
zend_class_entry *arangodbclient_graphhandler_ce;
zend_class_entry *arangodbclient_httphelper_ce;
zend_class_entry *arangodbclient_httpresponse_ce;
zend_class_entry *arangodbclient_querycachehandler_ce;
zend_class_entry *arangodbclient_queryhandler_ce;
zend_class_entry *arangodbclient_serverexception_ce;
zend_class_entry *arangodbclient_statement_ce;
zend_class_entry *arangodbclient_tracerequest_ce;
zend_class_entry *arangodbclient_traceresponse_ce;
zend_class_entry *arangodbclient_transaction_ce;
zend_class_entry *arangodbclient_traversal_ce;
zend_class_entry *arangodbclient_updatepolicy_ce;
zend_class_entry *arangodbclient_urlhelper_ce;
zend_class_entry *arangodbclient_urls_ce;
zend_class_entry *arangodbclient_user_ce;
zend_class_entry *arangodbclient_userhandler_ce;
zend_class_entry *arangodbclient_valuevalidator_ce;
zend_class_entry *arangodbclient_vertex_ce;
zend_class_entry *arangodbclient_vertexhandler_ce;

ZEND_DECLARE_MODULE_GLOBALS(arangodbclient)

PHP_INI_BEGIN()
	
PHP_INI_END()

static PHP_MINIT_FUNCTION(arangodbclient)
{
	REGISTER_INI_ENTRIES();
	zephir_module_init();
	ZEPHIR_INIT(ArangoDBClient_Handler);
	ZEPHIR_INIT(ArangoDBClient_Document);
	ZEPHIR_INIT(ArangoDBClient_Exception);
	ZEPHIR_INIT(ArangoDBClient_DocumentHandler);
	ZEPHIR_INIT(ArangoDBClient_AdminHandler);
	ZEPHIR_INIT(ArangoDBClient_AqlUserFunction);
	ZEPHIR_INIT(ArangoDBClient_Batch);
	ZEPHIR_INIT(ArangoDBClient_BatchPart);
	ZEPHIR_INIT(ArangoDBClient_BindVars);
	ZEPHIR_INIT(ArangoDBClient_ClientException);
	ZEPHIR_INIT(ArangoDBClient_Collection);
	ZEPHIR_INIT(ArangoDBClient_CollectionHandler);
	ZEPHIR_INIT(ArangoDBClient_ConnectException);
	ZEPHIR_INIT(ArangoDBClient_Connection);
	ZEPHIR_INIT(ArangoDBClient_ConnectionOptions);
	ZEPHIR_INIT(ArangoDBClient_Cursor);
	ZEPHIR_INIT(ArangoDBClient_Database);
	ZEPHIR_INIT(ArangoDBClient_DefaultValues);
	ZEPHIR_INIT(ArangoDBClient_Edge);
	ZEPHIR_INIT(ArangoDBClient_EdgeDefinition);
	ZEPHIR_INIT(ArangoDBClient_EdgeHandler);
	ZEPHIR_INIT(ArangoDBClient_Endpoint);
	ZEPHIR_INIT(ArangoDBClient_Export);
	ZEPHIR_INIT(ArangoDBClient_ExportCursor);
	ZEPHIR_INIT(ArangoDBClient_FoxxHandler);
	ZEPHIR_INIT(ArangoDBClient_Graph);
	ZEPHIR_INIT(ArangoDBClient_GraphHandler);
	ZEPHIR_INIT(ArangoDBClient_HttpHelper);
	ZEPHIR_INIT(ArangoDBClient_HttpResponse);
	ZEPHIR_INIT(ArangoDBClient_QueryCacheHandler);
	ZEPHIR_INIT(ArangoDBClient_QueryHandler);
	ZEPHIR_INIT(ArangoDBClient_ServerException);
	ZEPHIR_INIT(ArangoDBClient_Statement);
	ZEPHIR_INIT(ArangoDBClient_TraceRequest);
	ZEPHIR_INIT(ArangoDBClient_TraceResponse);
	ZEPHIR_INIT(ArangoDBClient_Transaction);
	ZEPHIR_INIT(ArangoDBClient_Traversal);
	ZEPHIR_INIT(ArangoDBClient_UpdatePolicy);
	ZEPHIR_INIT(ArangoDBClient_UrlHelper);
	ZEPHIR_INIT(ArangoDBClient_Urls);
	ZEPHIR_INIT(ArangoDBClient_User);
	ZEPHIR_INIT(ArangoDBClient_UserHandler);
	ZEPHIR_INIT(ArangoDBClient_ValueValidator);
	ZEPHIR_INIT(ArangoDBClient_Vertex);
	ZEPHIR_INIT(ArangoDBClient_VertexHandler);
	return SUCCESS;
}

#ifndef ZEPHIR_RELEASE
static PHP_MSHUTDOWN_FUNCTION(arangodbclient)
{
	zephir_deinitialize_memory(TSRMLS_C);
	UNREGISTER_INI_ENTRIES();
	return SUCCESS;
}
#endif

/**
 * Initialize globals on each request or each thread started
 */
static void php_zephir_init_globals(zend_arangodbclient_globals *arangodbclient_globals TSRMLS_DC)
{
	arangodbclient_globals->initialized = 0;

	/* Memory options */
	arangodbclient_globals->active_memory = NULL;

	/* Virtual Symbol Tables */
	arangodbclient_globals->active_symbol_table = NULL;

	/* Cache Enabled */
	arangodbclient_globals->cache_enabled = 1;

	/* Recursive Lock */
	arangodbclient_globals->recursive_lock = 0;

	/* Static cache */
	memset(arangodbclient_globals->scache, '\0', sizeof(zephir_fcall_cache_entry*) * ZEPHIR_MAX_CACHE_SLOTS);


}

/**
 * Initialize globals only on each thread started
 */
static void php_zephir_init_module_globals(zend_arangodbclient_globals *arangodbclient_globals TSRMLS_DC)
{

}

static PHP_RINIT_FUNCTION(arangodbclient)
{

	zend_arangodbclient_globals *arangodbclient_globals_ptr;
#ifdef ZTS
	tsrm_ls = ts_resource(0);
#endif
	arangodbclient_globals_ptr = ZEPHIR_VGLOBAL;

	php_zephir_init_globals(arangodbclient_globals_ptr TSRMLS_CC);
	zephir_initialize_memory(arangodbclient_globals_ptr TSRMLS_CC);


	return SUCCESS;
}

static PHP_RSHUTDOWN_FUNCTION(arangodbclient)
{
	
	zephir_deinitialize_memory(TSRMLS_C);
	return SUCCESS;
}

static PHP_MINFO_FUNCTION(arangodbclient)
{
	php_info_print_box_start(0);
	php_printf("%s", PHP_ARANGODBCLIENT_DESCRIPTION);
	php_info_print_box_end();

	php_info_print_table_start();
	php_info_print_table_header(2, PHP_ARANGODBCLIENT_NAME, "enabled");
	php_info_print_table_row(2, "Author", PHP_ARANGODBCLIENT_AUTHOR);
	php_info_print_table_row(2, "Version", PHP_ARANGODBCLIENT_VERSION);
	php_info_print_table_row(2, "Build Date", __DATE__ " " __TIME__ );
	php_info_print_table_row(2, "Powered by Zephir", "Version " PHP_ARANGODBCLIENT_ZEPVERSION);
	php_info_print_table_end();

	DISPLAY_INI_ENTRIES();
}

static PHP_GINIT_FUNCTION(arangodbclient)
{
	php_zephir_init_globals(arangodbclient_globals TSRMLS_CC);
	php_zephir_init_module_globals(arangodbclient_globals TSRMLS_CC);
}

static PHP_GSHUTDOWN_FUNCTION(arangodbclient)
{

}


zend_function_entry php_arangodbclient_functions[] = {
ZEND_FE_END

};

zend_module_entry arangodbclient_module_entry = {
	STANDARD_MODULE_HEADER_EX,
	NULL,
	NULL,
	PHP_ARANGODBCLIENT_EXTNAME,
	php_arangodbclient_functions,
	PHP_MINIT(arangodbclient),
#ifndef ZEPHIR_RELEASE
	PHP_MSHUTDOWN(arangodbclient),
#else
	NULL,
#endif
	PHP_RINIT(arangodbclient),
	PHP_RSHUTDOWN(arangodbclient),
	PHP_MINFO(arangodbclient),
	PHP_ARANGODBCLIENT_VERSION,
	ZEND_MODULE_GLOBALS(arangodbclient),
	PHP_GINIT(arangodbclient),
	PHP_GSHUTDOWN(arangodbclient),
	NULL,
	STANDARD_MODULE_PROPERTIES_EX
};

#ifdef COMPILE_DL_ARANGODBCLIENT
ZEND_GET_MODULE(arangodbclient)
#endif
