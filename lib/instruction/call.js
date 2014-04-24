module.exports = {
  add: iAdd,
  push: iPush,
  printstack: iPrintstack
};

var push = require('./push').push;
var add = require('./add').add;

// Debug function for printing the stack.
var printstack = function() {
  console.log(stack);
};

// We will keep the stack here for now. This cannot be permanent if we intend to include any kind of concurrency.
var stack = [];

function iAdd() {
  add(stack);
};

function iPush(arg) {
  push(stack, arg);
};

function iPrintstack() {
  printstack();
};