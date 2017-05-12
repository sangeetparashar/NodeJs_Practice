//var obj = {
//    name: "Sangeet",
//    age: 23
//};

//var stringObj = JSON.stringify(obj);

//console.log(stringObj);
//console.log(typeof stringObj);

//var personString = '{"name": "Sangeet", "Age": 23}';

//var JSONNN = JSON.parse(personString);

//console.log(typeof JSONNN);
//console.log(JSONNN);


const fs = require('fs');

var originalNote = {
    title: 'SomeTitle',
    body: 'Some body'
}

//convert it into a String called originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

//print the title by converting it into a json object and selecting the title property
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
//test the things so that they are working
console.log(typeof note);
console.log(note.title);
