push    0      ; Initialize the accumulator to 0
store   0      ; Store the accumulator at id 0.
push    3      ; Initialize the loop counter to 3.
store   1      ; Store the counter at id 1.

; loop
load    0      ; Load the accumulator.
push    5      ; Push 5 onto the stack. 
add            ; accumulator = accumulator + 5
store   0      ; store the accumulator
push    0      ; push 0 onto stack
load    1      ; load the counter
push    -1     ; push -1 onto the stack
add            ; counter = counter - 1
store   1      ; store the counter.
load    1      ; load the counter.
jumpgt  5      ; if counter > 0, jump to line 5.
; end loop

load    0      ; load the accumulator.