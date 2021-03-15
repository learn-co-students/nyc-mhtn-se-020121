function sayHi(name) {
    console.log(`Hi, ${name}`)
    // return `Hi, ${name}`
}

// const retValue= sayHi('Coco')

// console.log(retValue)


function higherOrder(fn) {
    console.log(fn)
    console.log('Inside higherOrder')
    fn('Coco 2')
}


// higherOrder(sayHi)


function higherOrderTwo() {
    function saySomething() {
        console.log('inner function')
    }

    function anotherFunc() {
        console.log('another inner function')
    }

    console.log(saySomething)
    return saySomething
}


// const aFunc = higherOrderTwo() // storing a reference to saySomething
// aFunc() // invoke saySomething
// console.log(aFunc)
// console.log(saySomething)

// no bananas => definition
// bananas => function invocation


function myIterator(fn, arr) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}


const names = ['Coco', 'Raffy', 'Daria', 'Obie', 'George']

// myIterator(sayHi, names)
// myIterator(sayBye, names)


// forEach, map, find, filter
// names.forEach(sayHi)


const nums = [2, 4, 6, 8, 7, 342]
// const anotherArr = [] // error
nums.push(99)
// nums = [2, 4, 6, 8, 7, 342] // error
// nums = []
// const aNum = 2
// aNum += 99 // aNum = aNum + 99 // error

const newArr = nums.map(function (num) {
    // anotherArr.push(num * 2)
    return num * 2
})



// setInterval - invoke a function after x ms

// setInterval(function () {
//     console.log('Inside set interval callback')
// }, 4000)


// setTimeout - invoke a function once after x ms

// setTimeout(function () {
//     console.log('inside set timeout callback')
// }, 5000)




function doMath(x) {
    function multiply(num) {
        return x * num
    }

    return multiply
}


const multi2 = doMath(2)
const multi3 = doMath(3)
const multi4 = doMath(4)

// console.log(multi4(5))
// console.log(multi2(4))


function cohortTracker() {

    const studentArr = []

    function addStudentToCohort(name) {
        studentArr.push(name)
        return studentArr
    }

    return addStudentToCohort
}


const nycChiCohort = cohortTracker() // creating a addStudentToCohort function
const chickenRocks = cohortTracker() // creating another addStudentToCohort function


// console.dir(nycChiCohort)




