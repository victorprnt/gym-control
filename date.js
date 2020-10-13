function age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
    const day = today.getDate() - birthDate.getDate()


    console.log(today.getFullYear())
    console.log(birthDate.getFullYear())
    console.log(day)

    if (month < 0)
    return age = age - 1
    
    if (month == 0) {
        
        if (day > 0 || day == 0)
        return age
        
        if (day < 0) {
            return age = age - 1
        }
    }
    return age
}


console.log(age(561009979000))