
#ifdef HAVE_CONFIG_H
#include "../ext_config.h"
#endif

#include <php.h>
#include "../php_ext.h"
#include "../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"


ZEPHIR_INIT_CLASS(ArangoDBClient_VertexHandler) {

	ZEPHIR_REGISTER_CLASS_EX(ArangoDBClient, VertexHandler, arangodbclient, vertexhandler, arangodbclient_documenthandler_ce, arangodbclient_vertexhandler_method_entry, 0);

	return SUCCESS;

}

PHP_METHOD(ArangoDBClient_VertexHandler, createFromArrayWithContext) {

	zend_long ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_0 = NULL;
	zval *data, data_sub, *options, options_sub;
	zval *this_ptr = getThis();

	ZVAL_UNDEF(&data_sub);
	ZVAL_UNDEF(&options_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &data, &options);



	ZEPHIR_RETURN_CALL_CE_STATIC(arangodbclient_vertex_ce, "createfromarray", &_0, 0, data, options);
	zephir_check_call_status();
	RETURN_MM();

}

