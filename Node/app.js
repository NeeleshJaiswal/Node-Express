// GLOBALS  - NO WINDOW !!!!

// __dirname -npath to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module  - Encapsulated code (only share minimum)(file)
// Every file is module
// process  - info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// setInterval(() => {
//     console.log('hello world');
// }, 1000);

const path = require('path');

console.log(path.sep);