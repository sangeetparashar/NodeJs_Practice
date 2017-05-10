console.log("Hello world");
const fs = require('fs');
const os = require('os');
const user = os.userInfo();

//loading our own module
const notes = require('./notes.js');
const result = notes.add(9,-2);

console.log(`Result: ${result}`);

fs.appendFile('Notes.txt', `\nHello ${user.username}. You are ${notes.age}`, function (err) {
    if (err) {
        console.log("Couldn't write to the file!");
    }
});
