//const add = require('./utils.js');
const getNotes = require('./notes.js');

const fs = require('fs');
//fs.writeFileSync('notes.txt', 'This File was created by Node.js .');
fs.appendFileSync('notes.txt', 'This is an appended example');

console.log(getNotes());