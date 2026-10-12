
// simple code 
let a = 10
console.log(a);

let b = 25 //- Garbage collector will remove this variable from memory after the execution of the code

// hot code 
for ( let a =0; a < 100000; a++){
    console.log(a);
    badcodeFn();   
}


function badcodeFn(){
    console.log("hello world gaurav");
}