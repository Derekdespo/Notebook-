// Dependencies
const router = require("express").Router();
const repo = require("../db/repository");
const dbName = require("../db/db.json")
// Routes
// Get Method
router.get("/notes", function(req, res) {
    repo.getNotes()
    .then((notes) => res.json(notes))
})


// Post Method
router.post("/notes", function(req, res) {
    repo.addNote(req.body)
    .then((notes) => {
        console.log(notes)
        res.json(notes)})
})

// Delete Method
router.delete("/notes", function(req, res) {
    repo.deleteNote()
    .then((notes) => {
        console.log(notes)
        res.json(notes)})
})






module.exports = router