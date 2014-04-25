exports.dup = function dup(stack) {
  var x = stack.pop();
  stack.push(x);
  stack.push(x);
};