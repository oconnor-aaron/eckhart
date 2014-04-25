exports.add = function add(stack) {
  var a = stack.pop();
  var b = stack.pop();
  if (valid(a,b)) {
    var r = a + b;
    stack.push(r);
  }
  return stack;
};

function valid(a, b) {
  var result = true;
  if (isNaN(a) || isNaN(b)) {
    result = false;
  };
  return result;
};