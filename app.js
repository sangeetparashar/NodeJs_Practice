console.log("Hello world");
const fs = require('fs');
const os = require('os');
const user = os.userInfo();
const _ = require('lodash');
var yargs = require('yargs');

//loading our own module
const notes = require('./notes.js');
////const result = notes.add(9,-2);
//console.log(_.isString(12312));

//console.log(_.isString("This is a strnig right?"));

//var filteredArray = ['Sangeet', 1, 2, 3, 1, 2, 424, 'Sangeet'];

//console.log(_.uniq(filteredArray));
//console.log(`Result: ${result}`);

//fs.appendFile('Notes.txt', `\nHello ${user.username}. You are ${notes.age}`, function (err) {
//    if (err) {
//        console.log("Couldn't write to the file!");
//    }
//});


//we are about to create a nodeapp that gets user input inside the command line
const argv = yargs.argv;

var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv); //argv = arguments vector
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    notes.readNote(argv.title);
}
else if (command === 'remove') {
    notes.removeNote (argv.title);
}
else {
    console.log('Command not recognized');
}

