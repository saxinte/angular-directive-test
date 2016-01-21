// Karma configuration
// Generated on Thu Jan 21 2016 11:01:48 GMT+0000 (GMT)

module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'js/app.js',
            'js/avatarDirective.js',
            'test/directive.spec.js',
            'views/template.html'
        ],

        // Plugins
        plugins: [
            'karma-chai',
            'karma-mocha',
            'phantomjs',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        preprocessors: {
            'views/template.html':['ng-html2js']
        },

        reporters: ['progress'],

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};
