/*
Topic : All number types on javascript.
In javascript,numbers are Always of types "number" expect for BigInt type.
there no separate types for integers and floating/ double point numbers in javascript.

1.Integer literals

decimal numbers- most common
*/
let Decimal = 10; // decimal literal
console.log("Decimal:", Decimal);

let binary = 0b1010; // binary literal
console.log("binary:", binary);

let octal = 0o52; // octal literal
console.log("octal:", octal);

let hexadecimal = 0xA; // hexadecimal literal
console.log("hexadecimal:", hexadecimal);
    

// Floating point literals
let float = 10.5; // floating point literal
let float1 = 10.5e2;// floating point literal with exponent
let float2 = -50.1; // floating point literal with negative value
let float3 = .5; // valid but avoid using this type of floating point literal
let float4 = 5.; // valid but avoid using this type of floating point literal

console.log("float:", float);
console.log("float1:", float1);
console.log("float2:", float);
console.log("float3:", float3);
console.log("folat4:", float4);

// Exponential Literals 

let exp1 = 1.5e3;
let exp2 = 4.5e-4;
let exp3 = 34e2;

console.log("exp1:", exp1);
console.log("exp2:", exp2);
console.log("exp3:", exp3);











