exports.jne = function jne(stack, counter, arg) {
  var dest = counter;
  var x = stack.pop();
  if (x !== 0) {
    dest = arg - 1;
  }
  return dest;
};