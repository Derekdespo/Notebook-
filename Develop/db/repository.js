// Global Variables/Dependencies
const fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid/v1");
const { networkInterfaces } = require("os");
// Promise to read and write to/from a file
const asyncReadFile = util.promisify(fs.readFile);
const asyncWriteFile = util.promisify(fs.writeFile);
// variable that hooks to this specific file
const dbName = "db/db.json";
// Class object to hold all the functions needed for the routes
class Repository {
    // Function to get all the existing notes
    getNotes() {
        return asyncReadFile(dbName, "utf8")
        .then((notes) => {
            let returnNotes; 
            try {
                returnNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                returnNotes = []
            }
            return returnNotes;
        })
    }
    // Function to save/add a new note to the db.json file
    addNote(newNote) {
       const noteAdd = {
           title: newNote.title,
           text: newNote.text,
            id: uuidv1()
       }
       return this.getNotes()
       .then(notes => [...notes, noteAdd])
      .then(allNotes => {
        asyncWriteFile("db/db.json", JSON.stringify(allNotes))
        
      }).then(() => noteAdd)
    }
    // Function to delete a note from the db.json file by pulling its id
    // Currently does not work :(
    deleteNote(id) {
// get the notes, filter and grab out the one in the id
return this.getNotes()
.then(notes => (notes.filter(note => note.id !== parseInt(id))))
.then(newNoteSet => asyncWriteFile("db/db.json", JSON.stringify(newNoteSet)))
    }
}
module.exports = new Repository();