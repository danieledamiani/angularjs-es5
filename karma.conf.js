var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '../..',
    files: [
      { pattern: __dirname + '/node_modules/angular/angular.js', watched: false },
      __dirname + '/src/index.spec.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['Chrome']
  })
};