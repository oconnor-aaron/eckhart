%lex

%%
\s+             /* Skip whitespace */
\;.*            /* Skip comments */
\-?[0-9]+       return 'NUMBER';
\"(\\.|[^"])*\" return 'STRING';
"push"          return 'PUSH';
"add"           return 'ADD';
"jeq"           return 'JEQ';
"jne"           return 'JNE';
"dup"           return 'DUP';
"printstack"    return 'PRINTSTACK';
<<EOF>>         return 'EOF';

/lex

%start expressions

%%
expressions 
    : e EOF
        {}
    | EOF
        {}
    ;

e
    : 'PUSH' e
        {$$ = yy.push($2);}
    | 'JEQ' e
        {$$ = yy.jeq($2);}
    | 'ADD'
        {$$ = yy.add();}
    | 'DUP'
        {$$ = yy.dup();}
    | 'JNE' e
        {$$ = yy.jne($2);}
    | 'NUMBER'
        {$$ = Number(yytext);}
    | 'STRING'
        {$$ = yytext.replace(/"/g, '');}
    | 'PRINTSTACK'
        {$$ = yy.printstack();}
    ;