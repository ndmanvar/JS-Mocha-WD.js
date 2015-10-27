wd = require('wd');
require('colors');
var _ = require("lodash");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
// var browser;
chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.configureHttp({
    timeout: 60000,
    retryDelay: 15000,
    retries: 5
});

function beforeEachExample(done) {
    var username = process.env.SAUCE_USERNAME;
    var accessKey = process.env.SAUCE_ACCESS_KEY;
    browser = wd.promiseChainRemote("ondemand.saucelabs.com", 80, username, accessKey);
    if (process.env.VERBOSE) {
        // optional logging
        browser.on('status', function(info) {
            console.log(info.cyan);
        });
        browser.on('command', function(meth, path, data) {
            console.log(' > ' + meth.yellow, path.grey, data || '');
        });
    }
    caps = {};
    caps['browserName'] = '';
    caps['appium-version'] = '1.4.13';
    caps['deviceName'] = 'Android Emulator';
    caps['deviceOrientation'] = 'portrait';
    caps['platformVersion'] = '4.4';
    caps['platformName'] = 'Android';
    caps['app'] = 'http://appium.github.io/appium/assets/ApiDemos-debug.apk';
    caps['name'] = this.currentTest.title;


    browser
        .init({
            browserName: '',
            'appium-version': '1.3',
            platformName: 'Android',
            platformVersion: '4.3',
            deviceName: 'Android Emulator',
            app: 'http://appium.github.io/appium/assets/ApiDemos-debug.apk' // will be set later
        })
        .nodeify(done);
};

function afterEachExample(done) {
    // allPassed = allPassed && (this.currentTest.state === 'passed');
    browser
        .quit()
        .sauceJobStatus(true)
        .nodeify(done);
};

function makeSuite(desc, cb) {
    describe(desc, function() {
        // var browser;

        this.timeout(60000);

        beforeEach(beforeEachExample);
        cb();
        afterEach(afterEachExample);
    });

    after(function(done) {
        done();
    });
};

exports.makeSuite = makeSuite;