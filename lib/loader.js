var fs = require('fs');

function main() {
  var arg = getArg();
  
};

function getArg() {
  var arg = process.argv[2];
  if (arg === undefined) 
    throw new Error("A file name must be provided as an argument!");
  return arg;
};

main();