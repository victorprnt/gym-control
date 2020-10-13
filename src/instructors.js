const fs = require("fs")
const data = require("./data.json")
const { age, date } = require("./utils")

// Function show
exports.show = function (req, res) {
    // req.params
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id
    })

    if (!foundInstructor) 
        return res.send("Instructor not found!")

    function since(timestamp) {
        const since = new Date(timestamp)

        return `${since.getMonth()} / ${since.getFullYear()}`
    }

    const instructor = {
        ...foundInstructor, // spread: put inside this object, the infos of indicated object
        birth: age(foundInstructor.birth),
        created_at: Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
        specialization: foundInstructor.specialization.split(",")
    }

    return res.render("instructors/show", { instructor: instructor })
}

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

    fs.writeFile("src/data.json", JSON.stringify(data, null, 2), function (err) {
        if (err)
            return res.send("Write file error")

        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}

//Function Edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        return id == instructor.id
    })

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    if(!foundInstructor)
        return res.send("Instructor not found!")

    return res.render("instructors/edit", { instructor: instructor })
}