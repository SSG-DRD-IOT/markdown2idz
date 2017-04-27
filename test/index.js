'use strict';
var path = require('path');
var generate = require('markdown-it-testgen');

describe('markdown-it', function () {
  var md = require('..');

  generate(path.join(__dirname, 'fixtures/markdown-it'), md);
});
