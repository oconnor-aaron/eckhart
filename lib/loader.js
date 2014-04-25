var fs = require('fs');

var parser = require('../jison/eckhart').parser;
parser.yy = require('./instruction/call');

function load(path) {
  fs.readFile(path, 'utf-8', function execute(err, data) {
    if (err) {
      return console.log(err);
    };
    var code = data.toString().split('\n');
    var counter = 0;
    
    for (i = 0; i < code.length; i++) {
      
    };
  });
};

var args = process.argv.slice(2);
var path = args[0];
load(path);