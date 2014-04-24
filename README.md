Eckhart
=======

Eckhart strives to be an interpreter for a simple stack-oriented virtual machine. The interpreter is implemented using the following technologies:
* [node.js](https://github.com/joyent/node)
* [jison](https://github.com/zaach/jison)

###Operations

Instructions are generally operating on the stack. It is clarified below what is expected for a given instruction
as well as what operations take place on the stack when invoking a certain operation.

The state of the stack during the execution of the instructions is indicated in the brackets.

####push
```
Usage:
  push {value}
  
Description:
  Pushes a value onto the top of the stack.

Example:
  push 5
  push "Apple"
  [5, 'Apple']
```
####store
```
Usage:
  store {id}
  
Description:
  Stores a value into memory, binding it to the provided identifier.
  This will overwrite any value already bound to that identifier.
  
Example:
  push 5
  [5]
  store 0   ; 5 is now stored at id 0 and popped off the stack.
  []
```
####load
```
Usage:
  load {id}
  
Load:
  Loads the data assigned to the identifier from memory.
  Calling with an unbound id will result in an error.
  
Example:
  push 5
  [5]
  store 0
  []
  load 0
  [5]
```
