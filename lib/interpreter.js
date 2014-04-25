module.exports = {
  execute: execute
}

var push = require('./instruction/push').push;
var add = require('./instruction/add').add;
var dup = require('./instruction/dup').dup;
var jeq = require('./instruction/jeq').jeq;
var jne = require('./instruction/jne').jne;

var parser = require('../jison/eckhart').parser;
parser.yy = {
  push: doPush,
  add: doAdd,
  dup: doDup,
  jeq: doJeq,
  jne: doJne,
  printstack: function() { console.log(stack); }
}

var stack = [];
var counter = 0;

function execute(code) {
  while (counter < code.length) {
    var instruction = code[counter];
    counter++;
    parser.parse(instruction);
  }
};

function doAdd() {
  add(stack);
};

function doPush(arg) {
  push(stack, arg);
};

function doJeq(arg) {
  counter = jeq(stack, counter, arg);
};

function doJne(arg) {
  counter = jne(stack, counter, arg);
};

function doDup() {
  dup(stack);
};