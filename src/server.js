// Server variables
const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")
// const data = require("./data.json")
const server = express()

// Server configuration
server.set("view engine", "njk")
server.use(express.static("public"))
server.use(express.urlencoded({extended:true}))
server.use(routes)

// Nunjucks configuration
nunjucks.configure("src/views", {
    express: server,
    autoescape:false,
    noCache:true,
})

// Server listen
server.listen(5000, function() {
    console.log("SERVER IS RUNNING!!")
})



