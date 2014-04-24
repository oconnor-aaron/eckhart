module.exports = {
  push: push,
  store: store,
  load: load,
  jumpGt: jumpGt,
  add: add
};

var fs = require('fs');
var util = require('util');
var stack = [];
var code = [];
var counter = 0;
var store = {};
var labels = {};

var parser = require('../jison/eckhart').parser;
parser.yy = module.exports;

function push(val) {
  stack.push(val);
  return stack;
};

function label(label) {
  
};

function add() {
  var x = stack.pop();
  var y = stack.pop();
  
  if (isNaN(x))
    throw new Error(util.format('%s|add: %s is not a number.', counter, x));
  if (isNaN(y))
    throw new Error(util.format('%d|add: %d is not a number.', counter, x));
    
  var r = x + y;
  stack.push(r);
  return stack;
};

function store(id) {
  var x = stack.pop();
  store[id] = x;
  return stack;
};

function load(id) {
  var x = store[id];
  
  if (x === undefined) 
    throw new Error(util.format('%s|load: entry %s does not exist.', counter, x));

  stack.push(x);
  return stack;
};

function jumpGt(pos) {
  if (isNaN(pos))
    throw new Error(util.format('%d|jumpgt: %d is not a valid line number.', counter, pos));
  if (pos < 0 || pos > code.length)
    throw new Error(util.format('%d|jumpgt: %d is out of range.', counter, pos));
    
  var x = stack.pop();
  var y = stack.pop();
  
  if (isNaN(x))
    throw new Error(util.format('%d|jumpgt: %d is not a number.', counter, x));
  if (isNaN(y))
    throw new Error(util.format('%d|jumpgt: %d is not a number.', counter, y));
  
  if (x > y) counter = pos - 2;
  return stack;
};

function execute() {
  code = fs.readFileSync('../asm/loop.asm').toString().split('\n');
  var running = true;
  
  for (counter = 0; counter < code.length; counter++)
  {
    console.log(code[counter]);
    
    try {
      parser.parse(code[counter]);
    } catch (err) {
      console.log(err.message);
      counter = code.length;
    };
  };
};

execute();