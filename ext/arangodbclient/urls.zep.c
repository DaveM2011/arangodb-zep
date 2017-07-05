
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


ZEPHIR_INIT_CLASS(ArangoDBClient_Urls) {

	ZEPHIR_REGISTER_CLASS(ArangoDBClient, Urls, arangodbclient, urls, NULL, ZEND_ACC_EXPLICIT_ABSTRACT_CLASS);

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_DOCUMENT"), "/_api/document");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_EDGE"), "/_api/document");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_EDGES"), "/_api/edges");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_GRAPH"), "/_api/gharial");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URLPART_VERTEX"), "vertex");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URLPART_EDGE"), "edge");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_COLLECTION"), "/_api/collection");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_INDEX"), "/_api/index");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_CURSOR"), "/_api/cursor");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_EXPORT"), "/_api/export");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_EXPLAIN"), "/_api/explain");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_QUERY"), "/_api/query");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_EXAMPLE"), "/_api/simple/by-example");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_FIRST_EXAMPLE"), "/_api/simple/first-example");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ANY"), "/_api/simple/any");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_FULLTEXT"), "/_api/simple/fulltext");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_REMOVE_BY_EXAMPLE"), "/_api/simple/remove-by-example");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_REMOVE_BY_KEYS"), "/_api/simple/remove-by-keys");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_UPDATE_BY_EXAMPLE"), "/_api/simple/update-by-example");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_REPLACE_BY_EXAMPLE"), "/_api/simple/replace-by-example");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_LOOKUP_BY_KEYS"), "/_api/simple/lookup-by-keys");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_RANGE"), "/_api/simple/range");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ALL"), "/_api/simple/all");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ALL_KEYS"), "/_api/simple/all-keys");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_NEAR"), "/_api/simple/near");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_WITHIN"), "/_api/simple/within");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_IMPORT"), "/_api/import");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_BATCH"), "/_api/batch");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_TRANSACTION"), "/_api/transaction");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_VERSION"), "/_admin/version");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_SERVER_ROLE"), "/_admin/server/role");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_TIME"), "/_admin/time");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_LOG"), "/_admin/log");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_ROUTING_RELOAD"), "/_admin/routing/reload");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_STATISTICS"), "/_admin/statistics");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ADMIN_STATISTICS_DESCRIPTION"), "/_admin/statistics-description");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_AQL_USER_FUNCTION"), "/_api/aqlfunction");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_USER"), "/_api/user");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_TRAVERSAL"), "/_api/traversal");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_ENDPOINT"), "/_api/endpoint");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_DATABASE"), "/_api/database");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_QUERY_CACHE"), "/_api/query-cache");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_UPLOAD"), "/_api/upload");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_FOXX_INSTALL"), "/_admin/foxx/install");

	zephir_declare_class_constant_string(arangodbclient_urls_ce, SL("URL_FOXX_UNINSTALL"), "/_admin/foxx/uninstall");

	return SUCCESS;

}

