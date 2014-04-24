exports.add = function add(stack) {
  var a = stack.pop();
  var b = stack.pop();
  var r = a + b;
  stack.push(r);
  return stack;
};