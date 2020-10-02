const fs = require("fs")
const data = require("./data.json")

// Function create 
exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (const key of keys) {
        if (req.body[key] == "")
            return res.send("Please, fill in all info")
    }

    let { name, avatar, birth, gender, specialization } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id, 
        name, 
        avatar, 
        birth, 
        gender, 
        specialization, 
        created_at
    })

	fs.writeFile("src/data.json", JSON.stringify(data, null, 2), function(err){
        if (err)
            return res.send("Write file error")

        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}