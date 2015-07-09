Parallel tests with Mocha and WD.js
=============

## 1/ Configure your Sauce Labs credentials

```
export SAUCE_USERNAME=<SAUCE_USERNAME>
export SAUCE_ACCESS_KEY=<SAUCE_ACCESS_KEY>
```

## 2/ Install tools

```
npm install -g mocha
```

## 3/ Install local package

In this tutorial directory (there should be a `package.json` file) run:

```
npm install
```

## 4/ Inspect the code

- The browsers are configured in `desireds.js`
- The mocha test suite is in `tutorial-specs.js`
- The parallel runner is in `Makefile`

## 5/ Run tests

```
BROWSER=firefox ./node_modules/.bin/parallel-mocha tests/*-specs.js
BROWSER=internet_explorer ./node_modules/.bin/parallel-mocha tests/*-specs.js
BROWSER=chrome ./node_modules/.bin/parallel-mocha tests/*-specs.js
```

Go [here](https://saucelabs.com/tests) to view the tests.

## 6/ Run tests in parallel

```
make test_in_parallel
```

Go [here](https://saucelabs.com/tests) to view the tests.
