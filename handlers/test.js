const file = "../exercises/easy.json";
const fs = require('fs');
const data = fs.readFileSync(file);
console.log(data);