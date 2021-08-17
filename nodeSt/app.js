const fs = require("fs");

let startTime = Date.now();
let text = "default";
setTimeout(()=>{
    console.log(Date.now() - startTime, "첫 번째");
}, 5000);
console.log(Date.now() - startTime,"두 번째");