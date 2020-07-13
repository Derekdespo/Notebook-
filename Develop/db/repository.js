const fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid/v1");

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
    addNote(note) {

    }
    deleteNote(id) {

    }
}
module.exports = new Repository();