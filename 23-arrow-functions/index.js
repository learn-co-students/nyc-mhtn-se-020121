
// foo() // OK
// createPerson('michelle', 4) // error

const doubleIt = num => num * 2

const createPerson = (firstName, age) => ({ name: firstName, age: age })



function foo() {
    console.log('cool')
}

/********************** MAP **********************/
// Transforms an array
// Does not mutate the original array
// Callback should return the transformation

const newArr = nums.map((num) => num * 3)


/********************** FILTER **********************/
// Returns a subarray satisfying a condition
// Does not mutate the original array
// Callback should return a boolean


const filteredArr = nums.filter((num) => num % 2 === 0)


/********************** SORT **********************/
// mutates the original array
// callback should return a number

// sorting an array of numbers
// lowest to highest
// nums.sort((numA, numB) => numA - numB)

// highest to lowest
// nums.sort((numA, numB) => numB - numA)


// sorting an array of strings
// A - Z
// bookTitles.sort((strA, strB) => strA.localeCompare(strB))

// Z - A
// bookTitles.sort((strA, strB) => strB.localeCompare(strA))


// sorting an array of objects by the author property and if the authors are the same, 
// then by the yearRead property
books.sort((obj1, obj2) => {
    if (obj1.author.localeCompare(obj2.author) === 0) {
        return obj1.yearRead - obj2.yearRead
    }
    else {
        return obj1.author.localeCompare(obj2.author)
    }
})

// sorting an array of objects by the yearRead property
// books.sort((obj1, obj2) => obj1.yearRead - obj2.yearRead)