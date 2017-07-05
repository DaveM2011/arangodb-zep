
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


ZEPHIR_INIT_CLASS(ArangoDBClient_DefaultValues) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, DefaultValues, arangodbclient, defaultvalues, NULL, ZEND_ACC_EXPLICIT_ABSTRACT_CLASS);

	zephir_declare_class_constant_long(arangodbclient_defaultvalues_ce, SL("DEFAULT_PORT"), 8529);

	zephir_declare_class_constant_long(arangodbclient_defaultvalues_ce, SL("DEFAULT_TIMEOUT"), 30);

	zephir_declare_class_constant_string(arangodbclient_defaultvalues_ce, SL("DEFAULT_AUTH_TYPE"), "Basic");

	zephir_declare_class_constant_bool(arangodbclient_defaultvalues_ce, SL("DEFAULT_WAIT_SYNC"), 0);

	zephir_declare_class_constant_long(arangodbclient_defaultvalues_ce, SL("DEFAULT_JOURNAL_SIZE"), 33554432);

	zephir_declare_class_constant_bool(arangodbclient_defaultvalues_ce, SL("DEFAULT_IS_VOLATILE"), 0);

	zephir_declare_class_constant_bool(arangodbclient_defaultvalues_ce, SL("DEFAULT_CREATE"), 0);

	zephir_declare_class_constant_string(arangodbclient_defaultvalues_ce, SL("DEFAULT_CONNECTION"), "Keep-Alive");

	zephir_declare_class_constant_bool(arangodbclient_defaultvalues_ce, SL("DEFAULT_VERIFY_CERT"), 0);

	zephir_declare_class_constant_bool(arangodbclient_defaultvalues_ce, SL("DEFAULT_ALLOW_SELF_SIGNED"), 1);

	zephir_declare_class_constant_null(arangodbclient_defaultvalues_ce, SL("DEFAULT_CIPHERS"));

	zephir_declare_class_constant_string(arangodbclient_defaultvalues_ce, SL("DEFAULT_UPDATE_POLICY"), "error");

	zephir_declare_class_constant_string(arangodbclient_defaultvalues_ce, SL("DEFAULT_REPLACE_POLICY"), "error");

	zephir_declare_class_constant_string(arangodbclient_defaultvalues_ce, SL("DEFAULT_DELETE_POLICY"), "error");

	zephir_declare_class_constant_bool(arangodbclient_defaultvalues_ce, SL("DEFAULT_CHECK_UTF8_CONFORM"), 0);

	return SUCCESS;

}

