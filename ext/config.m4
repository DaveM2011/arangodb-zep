PHP_ARG_ENABLE(arangodbclient, whether to enable arangodbclient, [ --enable-arangodbclient   Enable Arangodbclient])

if test "$PHP_ARANGODBCLIENT" = "yes"; then

	

	if ! test "x" = "x"; then
		PHP_EVAL_LIBLINE(, ARANGODBCLIENT_SHARED_LIBADD)
	fi

	AC_DEFINE(HAVE_ARANGODBCLIENT, 1, [Whether you have Arangodbclient])
	arangodbclient_sources="arangodbclient.c kernel/main.c kernel/memory.c kernel/exception.c kernel/debug.c kernel/backtrace.c kernel/object.c kernel/array.c kernel/string.c kernel/fcall.c kernel/require.c kernel/file.c kernel/operators.c kernel/math.c kernel/concat.c kernel/variables.c kernel/filter.c kernel/iterator.c kernel/time.c kernel/exit.c arangodbclient/handler.zep.c
	arangodbclient/document.zep.c
	arangodbclient/exception.zep.c
	arangodbclient/documenthandler.zep.c
	arangodbclient/adminhandler.zep.c
	arangodbclient/aqluserfunction.zep.c
	arangodbclient/batch.zep.c
	arangodbclient/batchpart.zep.c
	arangodbclient/bindvars.zep.c
	arangodbclient/clientexception.zep.c
	arangodbclient/collection.zep.c
	arangodbclient/collectionhandler.zep.c
	arangodbclient/connectexception.zep.c
	arangodbclient/connection.zep.c
	arangodbclient/connectionoptions.zep.c
	arangodbclient/cursor.zep.c
	arangodbclient/database.zep.c
	arangodbclient/defaultvalues.zep.c
	arangodbclient/edge.zep.c
	arangodbclient/edgedefinition.zep.c
	arangodbclient/edgehandler.zep.c
	arangodbclient/endpoint.zep.c
	arangodbclient/export.zep.c
	arangodbclient/exportcursor.zep.c
	arangodbclient/foxxhandler.zep.c
	arangodbclient/graph.zep.c
	arangodbclient/graphhandler.zep.c
	arangodbclient/httphelper.zep.c
	arangodbclient/httpresponse.zep.c
	arangodbclient/querycachehandler.zep.c
	arangodbclient/queryhandler.zep.c
	arangodbclient/serverexception.zep.c
	arangodbclient/statement.zep.c
	arangodbclient/tracerequest.zep.c
	arangodbclient/traceresponse.zep.c
	arangodbclient/transaction.zep.c
	arangodbclient/traversal.zep.c
	arangodbclient/updatepolicy.zep.c
	arangodbclient/urlhelper.zep.c
	arangodbclient/urls.zep.c
	arangodbclient/user.zep.c
	arangodbclient/userhandler.zep.c
	arangodbclient/valuevalidator.zep.c
	arangodbclient/vertex.zep.c
	arangodbclient/vertexhandler.zep.c "
	PHP_NEW_EXTENSION(arangodbclient, $arangodbclient_sources, $ext_shared,, )
	PHP_SUBST(ARANGODBCLIENT_SHARED_LIBADD)

	old_CPPFLAGS=$CPPFLAGS
	CPPFLAGS="$CPPFLAGS $INCLUDES"

	AC_CHECK_DECL(
		[HAVE_BUNDLED_PCRE],
		[
			AC_CHECK_HEADERS(
				[ext/pcre/php_pcre.h],
				[
					PHP_ADD_EXTENSION_DEP([arangodbclient], [pcre])
					AC_DEFINE([ZEPHIR_USE_PHP_PCRE], [1], [Whether PHP pcre extension is present at compile time])
				],
				,
				[[#include "main/php.h"]]
			)
		],
		,
		[[#include "php_config.h"]]
	)

	AC_CHECK_DECL(
		[HAVE_JSON],
		[
			AC_CHECK_HEADERS(
				[ext/json/php_json.h],
				[
					PHP_ADD_EXTENSION_DEP([arangodbclient], [json])
					AC_DEFINE([ZEPHIR_USE_PHP_JSON], [1], [Whether PHP json extension is present at compile time])
				],
				,
				[[#include "main/php.h"]]
			)
		],
		,
		[[#include "php_config.h"]]
	)

	CPPFLAGS=$old_CPPFLAGS

	PHP_INSTALL_HEADERS([ext/arangodbclient], [php_ARANGODBCLIENT.h])

fi
