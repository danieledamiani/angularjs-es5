var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '../..',
    files: [
      __dirname + '/node_modules/angular/angular.js',
      __dirname + '/node_modules/angular-mocks/angular-mocks.js',
      __dirname + '/src/*.js',
      __dirname + '/src/app/**/*.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['Chrome']
  })
};