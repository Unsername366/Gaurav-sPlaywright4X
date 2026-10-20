let enviornment = "staging";
let baseURL = enviornment === "prod"
? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL);
 

