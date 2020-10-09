const express = require("express")
const routes = express.Router()

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

routes.post("/instructors", function (req, res) {
    return res.send("FORM RECEIVED!!!")
})

routes.get("/members", function (req, res) {
    return res.send("MEMBERS!!!")
})


module.exports = routes