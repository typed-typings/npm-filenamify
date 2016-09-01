/// <reference path="bundle.d.ts" />

import assert = require('assert');
import filenamify = require('filenamify');

assert.equal(typeof filenamify, 'function');
assert.equal(filenamify('hello world'), 'hello world');
