// plain old javascript objects (POJOs)
function globalIntroduce() {
    return (`Hi, I'm ${this.firstName}`)
}

const greg = {
    firstName: "Greg",
    lastName: "Dwyer",
    introduce: globalIntroduce
}

const annie = {
    firstName: "Annie",
    lastName: "Zheng",
    introduce: globalIntroduce
}

const michelle = {
    firstName: "Michelle",
    familyName: "Rios",
    introduce: globalIntroduce
}

const ian = {
    firstName: "Ian",
    lastName: "Hollander",
    introduce: globalIntroduce
}

// console.log(greg.introduce())
// console.log(annie.introduce())
// console.log(michelle.introduce())

// console.log(michelle.introduce)
// console.log(greg.introduce)

// TRUE or FALSE?
// console.log(michelle.introduce() === greg.introduce())


// TRUE or FALSE?
// console.log(michelle.introduce === greg.introduce)