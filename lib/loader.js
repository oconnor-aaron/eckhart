var fs = require('fs');
var interpreter = require('./interpreter');

function load(path) {
  fs.readFile(path, 'utf-8', function load(err, data) {
    if (err) {
      return console.log(err);
    };
    var code = data.toString().split('\n');
    interpreter.execute(code);
  });
};

var args = process.argv.slice(2);
var path = args[0];
load(path);