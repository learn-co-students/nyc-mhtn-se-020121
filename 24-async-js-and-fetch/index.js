function sleep(time) {
    const start = new Date()
    while (new Date() - start < time * 1000) {
        // do nothing & block the main thread 
    }
}


// document.querySelector('button').addEventListener('click', () => {
//     console.log("CLICKED !!!")
// })


// translated Ruby code from synch.rb
// console.log("Hello World!")
// console.log("brb, gonna go sleep for a sec")
// // sleep(5)

// console.log("What a nice cat nap that was!")


// setTimeout(() => {
//     console.log('Inside set time out callback')
// }, 5000)



// console.log('before the fetch')

// fetch('https://randomfox.ca/floof/')
//     .then(response => response.json())
//     .then(data => console.log(data));

// console.log('after the fetch')


// fetch('https://randomfox.ca/floof/')
//     .then(response => response.json()) // always takes in the response object as a parameter
//     .then(foxObject => console.log(foxObject))


// what element?
const button = document.querySelector('button#get-fox-btn')

// what event?
// click

// what should happen?
// make fetch request, then display image on page

// event handling
document.body.addEventListener('click', e => {
    // network request
    if (e.target.matches('button#get-fox-btn')) {
        fetch('https://randomfox.ca/floof/')
            .then(response => response.json())
            .then(foxObject => {
                // DOM MANIPULATION
                // const img = document.querySelector('img')
                const img = e.target.nextElementSibling
                img.src = foxObject.image
            })
    }
})