const fs = require("fs");
fs.appendFileSync("./hello.txt","\nWelcome!");
const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"});

console.log(data);

const list = fs.readdirSync(".");
console.log(list);