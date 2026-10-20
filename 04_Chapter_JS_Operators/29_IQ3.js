let responseTime = 800;
let sla = 1000;
let slastatus = responseTime <= sla ? " within SLA" : "SLA breached";

console.log(`Response: ${responseTime}ms -${slastatus}`);

// Template literals - used to replaced the value.
console.log(`what is the SLA Time? - ${sla}`);



