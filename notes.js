console.log('Staring notes.js');

const fs = require('fs');


var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }
    catch (e) {
        Console.log("That file doesnt exist yet!");
    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};
var getAll = () => {
    console.log("Getting all notes");
}

var readNote = (title) => {
    console.log("reading title: ", title);
}

var removeNote = (title) => {
    console.log("Removing title: ", title);
}


module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote

};