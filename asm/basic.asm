; Count up to a million and print the result.

; Initialize the counter.
push 0

; Increment.
push 1
add

; Compare to target value
dup
push -100000000
add

; If we haven't hit target value, loop.
jne 7
printstack

