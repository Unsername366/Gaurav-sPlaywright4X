let million = 1_00_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;


// BIGINT

let big =123456789012345678901234567890n;
let big2 = BigInt("1223456789012345678901234567890");
let bugForumNum = BigInt (42);

console.log("BigInt literal:", big);
console.log("BigInt from String:", big2);
console.log("BigInt from Number:", bugForumNum);
console.log("typeof BigInt:", typeof big);
