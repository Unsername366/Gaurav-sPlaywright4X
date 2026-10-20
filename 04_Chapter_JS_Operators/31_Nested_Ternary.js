// Nested Ternary
// When we have multiple conditions
// age = 26
// age > 18 > go goa , age > 25 > drink


let age = 26
let is_gaurav_gonna_drink = ( age > 18 ) ? ( age > 25 ? "Goa & drink" :"No drinks,Only Goa") : "No Goa";
console.log(`gaurav can enjoy ${is_gaurav_gonna_drink}`);



