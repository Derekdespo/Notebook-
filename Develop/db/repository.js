const fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid/v1");
const { networkInterfaces } = require("os");

const asyncReadFile = util.promisify(fs.readFile);
const asyncWriteFile = util.promisify(fs.writeFile);

const dbName = "db/db.json";

class Repository {
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
    // deleteNote(id) {
// get the notes, filter and grab out the one in the id
    // }
}
module.exports = new Repository();