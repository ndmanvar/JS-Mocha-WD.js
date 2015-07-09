test_in_parallel:
	make -j test_firefox test_chrome test_ie

test_firefox:
	BROWSER=firefox ./node_modules/.bin/parallel-mocha tests/*-specs.js

test_chrome:
	BROWSER=chrome ./node_modules/.bin/parallel-mocha tests/*-specs.js

test_internet_explorer:
	BROWSER=internet_explorer ./node_modules/.bin/parallel-mocha tests/*-specs.js