const fs = require('fs');

function getNotes () {
    const data = fs.readFileSync('notes.txt', 'utf8');
    return data;
}

module.exports = getNotes;