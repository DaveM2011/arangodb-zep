srcdir = /data/arangodb-zep/ext
builddir = /data/arangodb-zep/ext
top_srcdir = /data/arangodb-zep/ext
top_builddir = /data/arangodb-zep/ext
EGREP = /bin/grep -E
SED = /bin/sed
CONFIGURE_COMMAND = ./configure '--enable-arangodbclient'
CONFIGURE_OPTIONS = '--enable-arangodbclient'
SHLIB_SUFFIX_NAME = so
SHLIB_DL_SUFFIX_NAME = so
ZEND_EXT_TYPE = zend_extension
RE2C = re2c
AWK = awk
shared_objects_arangodbclient = arangodbclient.lo kernel/main.lo kernel/memory.lo kernel/exception.lo kernel/debug.lo kernel/backtrace.lo kernel/object.lo kernel/array.lo kernel/string.lo kernel/fcall.lo kernel/require.lo kernel/file.lo kernel/operators.lo kernel/math.lo kernel/concat.lo kernel/variables.lo kernel/filter.lo kernel/iterator.lo kernel/time.lo kernel/exit.lo arangodbclient/handler.lo arangodbclient/document.lo arangodbclient/exception.lo arangodbclient/documenthandler.lo arangodbclient/adminhandler.lo arangodbclient/aqluserfunction.lo arangodbclient/batch.lo arangodbclient/batchpart.lo arangodbclient/bindvars.lo arangodbclient/clientexception.lo arangodbclient/collection.lo arangodbclient/collectionhandler.lo arangodbclient/connectexception.lo arangodbclient/connection.lo arangodbclient/connectionoptions.lo arangodbclient/cursor.lo arangodbclient/database.lo arangodbclient/defaultvalues.lo arangodbclient/edge.lo arangodbclient/edgedefinition.lo arangodbclient/edgehandler.lo arangodbclient/endpoint.lo arangodbclient/export.lo arangodbclient/exportcursor.lo arangodbclient/foxxhandler.lo arangodbclient/graph.lo arangodbclient/graphhandler.lo arangodbclient/httphelper.lo arangodbclient/httpresponse.lo arangodbclient/querycachehandler.lo arangodbclient/queryhandler.lo arangodbclient/serverexception.lo arangodbclient/statement.lo arangodbclient/tracerequest.lo arangodbclient/traceresponse.lo arangodbclient/transaction.lo arangodbclient/traversal.lo arangodbclient/updatepolicy.lo arangodbclient/urlhelper.lo arangodbclient/urls.lo arangodbclient/user.lo arangodbclient/userhandler.lo arangodbclient/valuevalidator.lo arangodbclient/vertex.lo arangodbclient/vertexhandler.lo
PHP_PECL_EXTENSION = arangodbclient
ARANGODBCLIENT_SHARED_LIBADD =
PHP_MODULES = $(phplibdir)/arangodbclient.la
PHP_ZEND_EX =
all_targets = $(PHP_MODULES) $(PHP_ZEND_EX)
install_targets = install-modules install-headers
prefix = /usr/local
exec_prefix = $(prefix)
libdir = ${exec_prefix}/lib
prefix = /usr/local
phplibdir = /data/arangodb-zep/ext/modules
phpincludedir = /usr/local/include/php
CC = gcc
CFLAGS = -O2 -fvisibility=hidden -Wparentheses -flto -DZEPHIR_RELEASE=1
CFLAGS_CLEAN = $(CFLAGS)
CPP = gcc -E
CPPFLAGS = -DHAVE_CONFIG_H
CXX =
CXXFLAGS =
CXXFLAGS_CLEAN = $(CXXFLAGS)
EXTENSION_DIR = /usr/local/lib/php/extensions/no-debug-non-zts-20160303
PHP_EXECUTABLE = /usr/local/bin/php
EXTRA_LDFLAGS =
EXTRA_LIBS =
INCLUDES = -I/usr/local/include/php -I/usr/local/include/php/main -I/usr/local/include/php/TSRM -I/usr/local/include/php/Zend -I/usr/local/include/php/ext -I/usr/local/include/php/ext/date/lib
LFLAGS =
LDFLAGS =
SHARED_LIBTOOL =
LIBTOOL = $(SHELL) $(top_builddir)/libtool
SHELL = /bin/bash
INSTALL_HEADERS = ext/arangodbclient/php_ARANGODBCLIENT.h
mkinstalldirs = $(top_srcdir)/build/shtool mkdir -p
INSTALL = $(top_srcdir)/build/shtool install -c
INSTALL_DATA = $(INSTALL) -m 644

DEFS = -DPHP_ATOM_INC -I$(top_builddir)/include -I$(top_builddir)/main -I$(top_srcdir)
COMMON_FLAGS = $(DEFS) $(INCLUDES) $(EXTRA_INCLUDES) $(CPPFLAGS) $(PHP_FRAMEWORKPATH)

all: $(all_targets) 
	@echo
	@echo "Build complete."
	@echo "Don't forget to run 'make test'."
	@echo

build-modules: $(PHP_MODULES) $(PHP_ZEND_EX)

build-binaries: $(PHP_BINARIES)

libphp$(PHP_MAJOR_VERSION).la: $(PHP_GLOBAL_OBJS) $(PHP_SAPI_OBJS)
	$(LIBTOOL) --mode=link $(CC) $(CFLAGS) $(EXTRA_CFLAGS) -rpath $(phptempdir) $(EXTRA_LDFLAGS) $(LDFLAGS) $(PHP_RPATHS) $(PHP_GLOBAL_OBJS) $(PHP_SAPI_OBJS) $(EXTRA_LIBS) $(ZEND_EXTRA_LIBS) -o $@
	-@$(LIBTOOL) --silent --mode=install cp $@ $(phptempdir)/$@ >/dev/null 2>&1

libs/libphp$(PHP_MAJOR_VERSION).bundle: $(PHP_GLOBAL_OBJS) $(PHP_SAPI_OBJS)
	$(CC) $(MH_BUNDLE_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS) $(LDFLAGS) $(EXTRA_LDFLAGS) $(PHP_GLOBAL_OBJS:.lo=.o) $(PHP_SAPI_OBJS:.lo=.o) $(PHP_FRAMEWORKS) $(EXTRA_LIBS) $(ZEND_EXTRA_LIBS) -o $@ && cp $@ libs/libphp$(PHP_MAJOR_VERSION).so

install: $(all_targets) $(install_targets)

install-sapi: $(OVERALL_TARGET)
	@echo "Installing PHP SAPI module:       $(PHP_SAPI)"
	-@$(mkinstalldirs) $(INSTALL_ROOT)$(bindir)
	-@if test ! -r $(phptempdir)/libphp$(PHP_MAJOR_VERSION).$(SHLIB_DL_SUFFIX_NAME); then \
		for i in 0.0.0 0.0 0; do \
			if test -r $(phptempdir)/libphp$(PHP_MAJOR_VERSION).$(SHLIB_DL_SUFFIX_NAME).$$i; then \
				$(LN_S) $(phptempdir)/libphp$(PHP_MAJOR_VERSION).$(SHLIB_DL_SUFFIX_NAME).$$i $(phptempdir)/libphp$(PHP_MAJOR_VERSION).$(SHLIB_DL_SUFFIX_NAME); \
				break; \
			fi; \
		done; \
	fi
	@$(INSTALL_IT)

install-binaries: build-binaries $(install_binary_targets)

install-modules: build-modules
	@test -d modules && \
	$(mkinstalldirs) $(INSTALL_ROOT)$(EXTENSION_DIR)
	@echo "Installing shared extensions:     $(INSTALL_ROOT)$(EXTENSION_DIR)/"
	@rm -f modules/*.la >/dev/null 2>&1
	@$(INSTALL) modules/* $(INSTALL_ROOT)$(EXTENSION_DIR)

install-headers:
	-@if test "$(INSTALL_HEADERS)"; then \
		for i in `echo $(INSTALL_HEADERS)`; do \
			i=`$(top_srcdir)/build/shtool path -d $$i`; \
			paths="$$paths $(INSTALL_ROOT)$(phpincludedir)/$$i"; \
		done; \
		$(mkinstalldirs) $$paths && \
		echo "Installing header files:          $(INSTALL_ROOT)$(phpincludedir)/" && \
		for i in `echo $(INSTALL_HEADERS)`; do \
			if test "$(PHP_PECL_EXTENSION)"; then \
				src=`echo $$i | $(SED) -e "s#ext/$(PHP_PECL_EXTENSION)/##g"`; \
			else \
				src=$$i; \
			fi; \
			if test -f "$(top_srcdir)/$$src"; then \
				$(INSTALL_DATA) $(top_srcdir)/$$src $(INSTALL_ROOT)$(phpincludedir)/$$i; \
			elif test -f "$(top_builddir)/$$src"; then \
				$(INSTALL_DATA) $(top_builddir)/$$src $(INSTALL_ROOT)$(phpincludedir)/$$i; \
			else \
				(cd $(top_srcdir)/$$src && $(INSTALL_DATA) *.h $(INSTALL_ROOT)$(phpincludedir)/$$i; \
				cd $(top_builddir)/$$src && $(INSTALL_DATA) *.h $(INSTALL_ROOT)$(phpincludedir)/$$i) 2>/dev/null || true; \
			fi \
		done; \
	fi

PHP_TEST_SETTINGS = -d 'open_basedir=' -d 'output_buffering=0' -d 'memory_limit=-1'
PHP_TEST_SHARED_EXTENSIONS =  ` \
	if test "x$(PHP_MODULES)" != "x"; then \
		for i in $(PHP_MODULES)""; do \
			. $$i; $(top_srcdir)/build/shtool echo -n -- " -d extension=$$dlname"; \
		done; \
	fi; \
	if test "x$(PHP_ZEND_EX)" != "x"; then \
		for i in $(PHP_ZEND_EX)""; do \
			. $$i; $(top_srcdir)/build/shtool echo -n -- " -d $(ZEND_EXT_TYPE)=$(top_builddir)/modules/$$dlname"; \
		done; \
	fi`
PHP_DEPRECATED_DIRECTIVES_REGEX = '^(magic_quotes_(gpc|runtime|sybase)?|(zend_)?extension(_debug)?(_ts)?)[\t\ ]*='

test: all
	@if test ! -z "$(PHP_EXECUTABLE)" && test -x "$(PHP_EXECUTABLE)"; then \
		INI_FILE=`$(PHP_EXECUTABLE) -d 'display_errors=stderr' -r 'echo php_ini_loaded_file();' 2> /dev/null`; \
		if test "$$INI_FILE"; then \
			$(EGREP) -h -v $(PHP_DEPRECATED_DIRECTIVES_REGEX) "$$INI_FILE" > $(top_builddir)/tmp-php.ini; \
		else \
			echo > $(top_builddir)/tmp-php.ini; \
		fi; \
		INI_SCANNED_PATH=`$(PHP_EXECUTABLE) -d 'display_errors=stderr' -r '$$a = explode(",\n", trim(php_ini_scanned_files())); echo $$a[0];' 2> /dev/null`; \
		if test "$$INI_SCANNED_PATH"; then \
			INI_SCANNED_PATH=`$(top_srcdir)/build/shtool path -d $$INI_SCANNED_PATH`; \
			$(EGREP) -h -v $(PHP_DEPRECATED_DIRECTIVES_REGEX) "$$INI_SCANNED_PATH"/*.ini >> $(top_builddir)/tmp-php.ini; \
		fi; \
		TEST_PHP_EXECUTABLE=$(PHP_EXECUTABLE) \
		TEST_PHP_SRCDIR=$(top_srcdir) \
		CC="$(CC)" \
			$(PHP_EXECUTABLE) -n -c $(top_builddir)/tmp-php.ini $(PHP_TEST_SETTINGS) $(top_srcdir)/run-tests.php -n -c $(top_builddir)/tmp-php.ini -d extension_dir=$(top_builddir)/modules/ $(PHP_TEST_SHARED_EXTENSIONS) $(TESTS); \
		TEST_RESULT_EXIT_CODE=$$?; \
		rm $(top_builddir)/tmp-php.ini; \
		exit $$TEST_RESULT_EXIT_CODE; \
	else \
		echo "ERROR: Cannot run tests without CLI sapi."; \
	fi

clean:
	find . -name \*.gcno -o -name \*.gcda | xargs rm -f
	find . -name \*.lo -o -name \*.o | xargs rm -f
	find . -name \*.la -o -name \*.a | xargs rm -f 
	find . -name \*.so | xargs rm -f
	find . -name .libs -a -type d|xargs rm -rf
	rm -f libphp$(PHP_MAJOR_VERSION).la $(SAPI_CLI_PATH) $(SAPI_CGI_PATH) $(SAPI_MILTER_PATH) $(SAPI_LITESPEED_PATH) $(SAPI_FPM_PATH) $(OVERALL_TARGET) modules/* libs/*

distclean: clean
	rm -f Makefile config.cache config.log config.status Makefile.objects Makefile.fragments libtool main/php_config.h main/internal_functions_cli.c main/internal_functions.c stamp-h sapi/apache/libphp$(PHP_MAJOR_VERSION).module sapi/apache_hooks/libphp$(PHP_MAJOR_VERSION).module buildmk.stamp Zend/zend_dtrace_gen.h Zend/zend_dtrace_gen.h.bak Zend/zend_config.h TSRM/tsrm_config.h
	rm -f php7.spec main/build-defs.h scripts/phpize
	rm -f ext/date/lib/timelib_config.h ext/mbstring/oniguruma/config.h ext/mbstring/libmbfl/config.h ext/oci8/oci8_dtrace_gen.h ext/oci8/oci8_dtrace_gen.h.bak
	rm -f scripts/man1/phpize.1 scripts/php-config scripts/man1/php-config.1 sapi/cli/php.1 sapi/cgi/php-cgi.1 ext/phar/phar.1 ext/phar/phar.phar.1
	rm -f sapi/fpm/php-fpm.conf sapi/fpm/init.d.php-fpm sapi/fpm/php-fpm.service sapi/fpm/php-fpm.8 sapi/fpm/status.html
	rm -f ext/iconv/php_have_bsd_iconv.h ext/iconv/php_have_glibc_iconv.h ext/iconv/php_have_ibm_iconv.h ext/iconv/php_have_iconv.h ext/iconv/php_have_libiconv.h ext/iconv/php_iconv_aliased_libiconv.h ext/iconv/php_iconv_supports_errno.h ext/iconv/php_php_iconv_h_path.h ext/iconv/php_php_iconv_impl.h
	rm -f ext/phar/phar.phar ext/phar/phar.php
	if test "$(srcdir)" != "$(builddir)"; then \
	  rm -f ext/phar/phar/phar.inc; \
	fi
	$(EGREP) define'.*include/php' $(top_srcdir)/configure | $(SED) 's/.*>//'|xargs rm -f

prof-gen:
	CCACHE_DISABLE=1 $(MAKE) PROF_FLAGS=-fprofile-generate all

prof-clean:
	find . -name \*.lo -o -name \*.o | xargs rm -f
	find . -name \*.la -o -name \*.a | xargs rm -f 
	find . -name \*.so | xargs rm -f
	rm -f libphp$(PHP_MAJOR_VERSION).la $(SAPI_CLI_PATH) $(SAPI_CGI_PATH) $(SAPI_MILTER_PATH) $(SAPI_LITESPEED_PATH) $(SAPI_FPM_PATH) $(OVERALL_TARGET) modules/* libs/*

prof-use:
	CCACHE_DISABLE=1 $(MAKE) PROF_FLAGS=-fprofile-use all


.PHONY: all clean install distclean test prof-gen prof-clean prof-use
.NOEXPORT:
arangodbclient.lo: /data/arangodb-zep/ext/arangodbclient.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient.c -o arangodbclient.lo 
kernel/main.lo: /data/arangodb-zep/ext/kernel/main.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/main.c -o kernel/main.lo 
kernel/memory.lo: /data/arangodb-zep/ext/kernel/memory.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/memory.c -o kernel/memory.lo 
kernel/exception.lo: /data/arangodb-zep/ext/kernel/exception.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/exception.c -o kernel/exception.lo 
kernel/debug.lo: /data/arangodb-zep/ext/kernel/debug.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/debug.c -o kernel/debug.lo 
kernel/backtrace.lo: /data/arangodb-zep/ext/kernel/backtrace.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/backtrace.c -o kernel/backtrace.lo 
kernel/object.lo: /data/arangodb-zep/ext/kernel/object.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/object.c -o kernel/object.lo 
kernel/array.lo: /data/arangodb-zep/ext/kernel/array.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/array.c -o kernel/array.lo 
kernel/string.lo: /data/arangodb-zep/ext/kernel/string.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/string.c -o kernel/string.lo 
kernel/fcall.lo: /data/arangodb-zep/ext/kernel/fcall.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/fcall.c -o kernel/fcall.lo 
kernel/require.lo: /data/arangodb-zep/ext/kernel/require.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/require.c -o kernel/require.lo 
kernel/file.lo: /data/arangodb-zep/ext/kernel/file.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/file.c -o kernel/file.lo 
kernel/operators.lo: /data/arangodb-zep/ext/kernel/operators.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/operators.c -o kernel/operators.lo 
kernel/math.lo: /data/arangodb-zep/ext/kernel/math.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/math.c -o kernel/math.lo 
kernel/concat.lo: /data/arangodb-zep/ext/kernel/concat.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/concat.c -o kernel/concat.lo 
kernel/variables.lo: /data/arangodb-zep/ext/kernel/variables.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/variables.c -o kernel/variables.lo 
kernel/filter.lo: /data/arangodb-zep/ext/kernel/filter.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/filter.c -o kernel/filter.lo 
kernel/iterator.lo: /data/arangodb-zep/ext/kernel/iterator.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/iterator.c -o kernel/iterator.lo 
kernel/time.lo: /data/arangodb-zep/ext/kernel/time.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/time.c -o kernel/time.lo 
kernel/exit.lo: /data/arangodb-zep/ext/kernel/exit.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/kernel/exit.c -o kernel/exit.lo 
arangodbclient/handler.lo: /data/arangodb-zep/ext/arangodbclient/handler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/handler.zep.c -o arangodbclient/handler.lo 
arangodbclient/document.lo: /data/arangodb-zep/ext/arangodbclient/document.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/document.zep.c -o arangodbclient/document.lo 
arangodbclient/exception.lo: /data/arangodb-zep/ext/arangodbclient/exception.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/exception.zep.c -o arangodbclient/exception.lo 
arangodbclient/documenthandler.lo: /data/arangodb-zep/ext/arangodbclient/documenthandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/documenthandler.zep.c -o arangodbclient/documenthandler.lo 
arangodbclient/adminhandler.lo: /data/arangodb-zep/ext/arangodbclient/adminhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/adminhandler.zep.c -o arangodbclient/adminhandler.lo 
arangodbclient/aqluserfunction.lo: /data/arangodb-zep/ext/arangodbclient/aqluserfunction.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/aqluserfunction.zep.c -o arangodbclient/aqluserfunction.lo 
arangodbclient/batch.lo: /data/arangodb-zep/ext/arangodbclient/batch.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/batch.zep.c -o arangodbclient/batch.lo 
arangodbclient/batchpart.lo: /data/arangodb-zep/ext/arangodbclient/batchpart.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/batchpart.zep.c -o arangodbclient/batchpart.lo 
arangodbclient/bindvars.lo: /data/arangodb-zep/ext/arangodbclient/bindvars.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/bindvars.zep.c -o arangodbclient/bindvars.lo 
arangodbclient/clientexception.lo: /data/arangodb-zep/ext/arangodbclient/clientexception.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/clientexception.zep.c -o arangodbclient/clientexception.lo 
arangodbclient/collection.lo: /data/arangodb-zep/ext/arangodbclient/collection.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/collection.zep.c -o arangodbclient/collection.lo 
arangodbclient/collectionhandler.lo: /data/arangodb-zep/ext/arangodbclient/collectionhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/collectionhandler.zep.c -o arangodbclient/collectionhandler.lo 
arangodbclient/connectexception.lo: /data/arangodb-zep/ext/arangodbclient/connectexception.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/connectexception.zep.c -o arangodbclient/connectexception.lo 
arangodbclient/connection.lo: /data/arangodb-zep/ext/arangodbclient/connection.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/connection.zep.c -o arangodbclient/connection.lo 
arangodbclient/connectionoptions.lo: /data/arangodb-zep/ext/arangodbclient/connectionoptions.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/connectionoptions.zep.c -o arangodbclient/connectionoptions.lo 
arangodbclient/cursor.lo: /data/arangodb-zep/ext/arangodbclient/cursor.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/cursor.zep.c -o arangodbclient/cursor.lo 
arangodbclient/database.lo: /data/arangodb-zep/ext/arangodbclient/database.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/database.zep.c -o arangodbclient/database.lo 
arangodbclient/defaultvalues.lo: /data/arangodb-zep/ext/arangodbclient/defaultvalues.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/defaultvalues.zep.c -o arangodbclient/defaultvalues.lo 
arangodbclient/edge.lo: /data/arangodb-zep/ext/arangodbclient/edge.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/edge.zep.c -o arangodbclient/edge.lo 
arangodbclient/edgedefinition.lo: /data/arangodb-zep/ext/arangodbclient/edgedefinition.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/edgedefinition.zep.c -o arangodbclient/edgedefinition.lo 
arangodbclient/edgehandler.lo: /data/arangodb-zep/ext/arangodbclient/edgehandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/edgehandler.zep.c -o arangodbclient/edgehandler.lo 
arangodbclient/endpoint.lo: /data/arangodb-zep/ext/arangodbclient/endpoint.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/endpoint.zep.c -o arangodbclient/endpoint.lo 
arangodbclient/export.lo: /data/arangodb-zep/ext/arangodbclient/export.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/export.zep.c -o arangodbclient/export.lo 
arangodbclient/exportcursor.lo: /data/arangodb-zep/ext/arangodbclient/exportcursor.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/exportcursor.zep.c -o arangodbclient/exportcursor.lo 
arangodbclient/foxxhandler.lo: /data/arangodb-zep/ext/arangodbclient/foxxhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/foxxhandler.zep.c -o arangodbclient/foxxhandler.lo 
arangodbclient/graph.lo: /data/arangodb-zep/ext/arangodbclient/graph.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/graph.zep.c -o arangodbclient/graph.lo 
arangodbclient/graphhandler.lo: /data/arangodb-zep/ext/arangodbclient/graphhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/graphhandler.zep.c -o arangodbclient/graphhandler.lo 
arangodbclient/httphelper.lo: /data/arangodb-zep/ext/arangodbclient/httphelper.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/httphelper.zep.c -o arangodbclient/httphelper.lo 
arangodbclient/httpresponse.lo: /data/arangodb-zep/ext/arangodbclient/httpresponse.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/httpresponse.zep.c -o arangodbclient/httpresponse.lo 
arangodbclient/querycachehandler.lo: /data/arangodb-zep/ext/arangodbclient/querycachehandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/querycachehandler.zep.c -o arangodbclient/querycachehandler.lo 
arangodbclient/queryhandler.lo: /data/arangodb-zep/ext/arangodbclient/queryhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/queryhandler.zep.c -o arangodbclient/queryhandler.lo 
arangodbclient/serverexception.lo: /data/arangodb-zep/ext/arangodbclient/serverexception.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/serverexception.zep.c -o arangodbclient/serverexception.lo 
arangodbclient/statement.lo: /data/arangodb-zep/ext/arangodbclient/statement.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/statement.zep.c -o arangodbclient/statement.lo 
arangodbclient/tracerequest.lo: /data/arangodb-zep/ext/arangodbclient/tracerequest.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/tracerequest.zep.c -o arangodbclient/tracerequest.lo 
arangodbclient/traceresponse.lo: /data/arangodb-zep/ext/arangodbclient/traceresponse.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/traceresponse.zep.c -o arangodbclient/traceresponse.lo 
arangodbclient/transaction.lo: /data/arangodb-zep/ext/arangodbclient/transaction.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/transaction.zep.c -o arangodbclient/transaction.lo 
arangodbclient/traversal.lo: /data/arangodb-zep/ext/arangodbclient/traversal.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/traversal.zep.c -o arangodbclient/traversal.lo 
arangodbclient/updatepolicy.lo: /data/arangodb-zep/ext/arangodbclient/updatepolicy.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/updatepolicy.zep.c -o arangodbclient/updatepolicy.lo 
arangodbclient/urlhelper.lo: /data/arangodb-zep/ext/arangodbclient/urlhelper.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/urlhelper.zep.c -o arangodbclient/urlhelper.lo 
arangodbclient/urls.lo: /data/arangodb-zep/ext/arangodbclient/urls.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/urls.zep.c -o arangodbclient/urls.lo 
arangodbclient/user.lo: /data/arangodb-zep/ext/arangodbclient/user.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/user.zep.c -o arangodbclient/user.lo 
arangodbclient/userhandler.lo: /data/arangodb-zep/ext/arangodbclient/userhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/userhandler.zep.c -o arangodbclient/userhandler.lo 
arangodbclient/valuevalidator.lo: /data/arangodb-zep/ext/arangodbclient/valuevalidator.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/valuevalidator.zep.c -o arangodbclient/valuevalidator.lo 
arangodbclient/vertex.lo: /data/arangodb-zep/ext/arangodbclient/vertex.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/vertex.zep.c -o arangodbclient/vertex.lo 
arangodbclient/vertexhandler.lo: /data/arangodb-zep/ext/arangodbclient/vertexhandler.zep.c
	$(LIBTOOL) --mode=compile $(CC)  -I. -I/data/arangodb-zep/ext $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS)  -c /data/arangodb-zep/ext/arangodbclient/vertexhandler.zep.c -o arangodbclient/vertexhandler.lo 
$(phplibdir)/arangodbclient.la: ./arangodbclient.la
	$(LIBTOOL) --mode=install cp ./arangodbclient.la $(phplibdir)

./arangodbclient.la: $(shared_objects_arangodbclient) $(ARANGODBCLIENT_SHARED_DEPENDENCIES)
	$(LIBTOOL) --mode=link $(CC) $(COMMON_FLAGS) $(CFLAGS_CLEAN) $(EXTRA_CFLAGS) $(LDFLAGS) -o $@ -export-dynamic -avoid-version -prefer-pic -module -rpath $(phplibdir) $(EXTRA_LDFLAGS) $(shared_objects_arangodbclient) $(ARANGODBCLIENT_SHARED_LIBADD)

