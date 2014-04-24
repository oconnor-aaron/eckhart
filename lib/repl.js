var readline = require('readline');
var op = require('./op');
var stack = new Array;

var parser = require('../jison/eckhart').parser;
parser.yy = op;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processInput(input) {
  if (input == ':q') {
    running = false;
    rl.close();
  } else {
    try {
      parser.parse(input);
    } catch(err) {
      console.log(err.message);
    };
  };
};

console.log('Eckhart///');

rl.on('line', processInput);