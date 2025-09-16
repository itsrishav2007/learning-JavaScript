console.log(" Hello JS");
 x = null;
 y = undefined;
 console.log(x);
 console.log(y);

//we are learning about the data types

//NUMBER TYPES
 age =20;
 price = 100.10;

//on a compiler
age 
'20'
typeof age 
'number'


//STRING TYPES
fullName = "rishav";

//on a compiler
fullName
'rishav'
typeof fullName
'string'

//BOOLEAN TYPES
isFollow = true;

//on a compiler
isFollow
true
typeof isFollow
'boolean'

//UNDEFINED TYPES
let x; 

//on a compiler
x
undefined

// NULL TYPES
let x = null;

//on a compiler
x
null
typeof x
'object'

//bigInt and Symbol
let x = BigInt("123");
let y =Symbol("hello!");

//on a compiler
x
123n           //in the last there always come n.
typeof x
'bigint'
y
Symbol(hello!)
typeof y
'symbol'
