console.log('Staring notes.js');

var addNote = (title, body) => {
    console.log("adding note", title, body);
}
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