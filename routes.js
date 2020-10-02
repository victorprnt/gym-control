const express = require("express")
const routes = express.Router()
const instructors = require("./instructors")

// Main page
routes.get("/", function(req, res) {
    return res.redirect("/instructors")
})

routes.get("/instructors", function (req, res) {
    return res.render("instructors/index")
})

// === Instructor pages ===
// Instructor registering
routes.get("/create", function(req, res) {
    return res.render("instructors/create")
})

routes.post("/instructors", instructors.post)

routes.get("/members", function (req, res) {
    return res.send("MEMBERS!!!")
})


module.exports = routes