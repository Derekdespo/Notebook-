const router = require("express").Router();
const repo = require("../db/repository");
// Routes
// Get Method
router.get("/notes", function(req, res) {
    repo.getNotes()
    .then((notes) => res.json(notes))
})


// Post Method


// Delete Method







module.exports = router