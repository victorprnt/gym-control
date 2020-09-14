const express = require("express")
const routes = express.Router()

// Main page
routes.get("/", function(req, res) {
    return res.render("instructors/index")
})

// === Instructor pages ===
// Instructor registering
routes.get("/create", function(req, res) {
    return res.render("instructors/create")
})


module.exports = routes