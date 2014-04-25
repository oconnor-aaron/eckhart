module.exports = {
  add: iAdd,
  push: iPush,
  printstack: iPrintstack
};

var push = require('./push').push;
var add = require('./add').add;

var stack = [];
var store = {};


// Debug function for printing the stack.
var printstack = function() {
  console.log(stack);
};

function iAdd() {
  add(stack);
};

function iPush(arg) {
  push(stack, arg);
};

function iPrintstack() {
  printstack();
};