/********************** What is the spread operator and why would I want to use it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"]
}

const pet = {
    fluffy: true,
    mood: "cheerful",
    health: 100
}

// Wrong way to make a copy of Raffy

// Correct way using spread operator

// Combining raffy & pet object























/********************** What about arrays?? **********************/

const redVeggies = ["red cabbage", "red onion", "rhubarb"]
const greenVeggies = ["spinach", "lettuce", "zucchini"]

// Wrong way to make a copy of redVeggies

// Correct (sugared) way using spread operator

// Combining redVeggies & greenVeggies arrays
















/********************** Function Example **********************/
// Spread
function sumThreeNums(x, y, z) {
    console.log(x, y, z)
    return x + y + z
}

const arr = [3, 5, 7]

// const sum = sumThreeNums(3, 5, 7)




























/********************** Rest Parameter **********************/
/* 
- Collects all remaining elements into an array
- Allows us to take an unlimited number of arguments 
 into the function
- Must be the last paramter 
*/
function dynamicSum(num1, num2, num3) {
    const moreArgs = new Array(num1, num2, num3)

    return moreArgs.reduce((acc, currVal) => {
        return acc + currVal
    }, 0)
}

// const sum = dynamicSum(1, 4, 5, 6, 7, 8)
// console.log(sum)






/********************** Rest Operator With Destructuring **********************/
const nums = [0, 1, 2, 3, 4, 5, 6, 7]

const spring = {
    temperature: 'temperate',
    activities: ['running', 'walks', 'hiking', 'gardening'],
    isDaylightSaving: true
}




