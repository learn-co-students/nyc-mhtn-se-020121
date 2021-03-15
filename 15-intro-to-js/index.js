// console.log('%cHello World', 'color: red')
// console.log("My name is Michelle") // like put in Ruby




/* A comment */
/******* Primitive Types *******/
// Data types that can't be broken down

// 1. Symbols
// let sym1 = Symbol()

// 2. Undefined
// let raffy

// 3. null
// let raffy = null

// 4. Boolean
// let isCool = true
// let isFun = false

// 5. Number
// let apples = 5
// let grapes = 7.5


// 6. String
// let str1 = 'This is a lovely string!!'
// const str2 = "This is another string I'm creating"
// const str3 = `2 + 2 = ${2 + 2}`

// const str4 = `${str1} ${str2}` // template strings
// const str5 = str1 + str2
// str1 = "Something else"


// 7. BigInt
// represents a number larger than 2^53 - 1
// const someBigNum = 10n
// const anotherBigNum = BigInt(787658976589645)


/******* NOTES *******/
// 2 schools of thought when using const
// (variables declared using const cannot be reassigned)
/*
1. Use const only on variables you know for a fact
shouldn't be changed, i.e. math constants, file version numbers

2. Use const for every variable and change to let when you
realize that the variable needs to be reassigned
*/




/******* Non Primitive Types *******/
// anything in JS that isn't a primitive type is non primitive

const raffy = {
    name: "Raffy",
    age: 9,
    'is-fluffy': true
}

// 2 ways to access values from objects

// raffy.name // dot notation
// raffy["name"] // bracket notation
// raffy['is-fluffy']


// let arr = [1, 2, 3, 4]
// console.log(arr[1])
// arr.push(77)


// let arr = [1, 2, 3, 4]

function isItEven(arrArgument) {
    // function body

    // console.log(arrArgument.length.even) // undefined

    // === vs ==
    if (arrArgument.length % 2 === 0) {
        // debugger // like binding.pry
        console.log("It's even")
        return true
    }
    else {
        console.log("It's odd")
        return false
    }
}

// const isArrEven = isItEven(arr)





let arr = [1, 2, 3, 4]


// arr.forEach(function (val) {
//     // console.log('value: ', val)
//     console.log(val * 2)
//     // console.log('index: ', i)
//     // console.log('arr: ', arr)
// })


// function doubleIt(val) {
//     // console.log('value: ', val)
//     console.log(val * 2)
//     // console.log('index: ', i)
//     // console.log('arr: ', arr)
// }

// arr.forEach(doubleIt)




