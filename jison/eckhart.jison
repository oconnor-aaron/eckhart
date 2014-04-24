%lex

%%
\s+             /* Skip whitespace */
\;.*            /* Skip comments */
\-?[0-9]+       return 'NUMBER';
\"(\\.|[^"])*\" return 'STRING';
"push"          return 'PUSH';
"add"           return 'ADD';
"store"         return 'STORE';
"load"          return 'LOAD';
"jumpgt"        return 'JUMPGT';
<<EOF>>         return 'EOF';

/lex

%start expressions

%%
expressions 
    : e EOF
        {console.log($1); return $1;}
    | EOF
        {}
    ;

e
    : 'PUSH' e
        {$$ = yy.push($2);}
    | 'STORE' e
        {$$ = yy.store($2);}
    | 'LOAD' e
        {$$ = yy.load($2);}
    | 'JUMPGT' e
        {$$ = yy.jumpGt($2);}
    | 'ADD'
        {$$ = yy.add();}
    | 'NUMBER'
        {$$ = Number(yytext);}
    | 'STRING'
        {$$ = yytext.replace(/"/g, '');}
    ;