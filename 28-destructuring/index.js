/********************** What's destructuring & how can I do it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco", "Pepper"],
    fruits: {
        orange: {
            color: "orange"
        },
        apple: {
            color: "green"
        }
    }
}

// original way
const name = raffy.name
const age = raffy.age
const type = raffy.type
const bestFriends = raffy.bestFriends
const color = raffy.fruits.apple.color





/********************** What about destructuring arrays?? **********************/
const cryptoCurrencies = ["bitcoin", "dash", "ethereum", "litecoin", "monero"]
const apples = ["green", "yellow", "purple", ["rainbow", "blue"]]



// original way
// const bc = cryptoCurrencies[0]
// const dash = cryptoCurrencies[1]
// const eth = cryptoCurrencies[2]
// const arr = apples[3]
// const rb = apples[3][0]





/********************** HTML Collections?? Node lists?? **********************/
const liTags = document.getElementsByTagName('li')
const pTags = document.querySelectorAll('p')

// original way
// const firstLi = liTags[0]
// const p1 = pTags[0]




/********************** Function Example #1 **********************/
function getMovieTitles() {
    return ["Rise of the Planet of the Apes", "Dawn of the Planet of the Apes", "War for the Planet of the Apes"]
}

// original way
// const arr = getMovieTitles()
// const value1 = arr[0]
// const value2 = arr[1]
// const value3 = arr[2]







/********************** Function Example #2 **********************/
function shareContactInfo(empObj) {
    const name = empObj.name
    const position = empObj.position
    const cell = empObj.phones.cell
    const work = empObj.phones.work

    return `${name} is an ${position} who can be reached by cell at 
    ${cell} or by landline at ${work}`
}

const e1 = {
    name: "Michelle",
    position: "Instructor",
    phones: {
        cell: "555-987-6543",
        work: "555-345-6789"
    }
}
const e2 = {
    name: "Greg",
    job: "Instructor",
    phones: {
        cell: "555-987-3455",
        work: "555-345-6677"
    }
}

// shareContactInfo(e1)
