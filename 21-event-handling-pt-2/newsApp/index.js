/************** Global Variables **************/
const newsTitle = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const firstCard = document.querySelector('[data-id="1"]')

/************** HELPER FUNCTIONS  **************/
function changeSchoolTitleColor() {
    const schoolTitle = document.querySelector('p.flatiron')
    schoolTitle.style.color = 'blue'
}

function deleteAd() {
    const adCard = document.querySelector('div.ad')
    adCard.remove()
}

function renderAllCards() {
    articlesArray.forEach(function (articleObject) {
        renderOneCard(articleObject)
    })
}

function renderOneCard(articleObject) {
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('card')
    outerDiv.dataset.id = articleObject.id

    outerDiv.innerHTML = `
            <div class="img-container">
                    <img src="${articleObject.image}"
                        alt="${articleObject.title}" />
                    <div class="article-title-container">
                        <h4>${articleObject.title}</h4>
                    </div>
                </div>
                <div class="content">
                    <p class='author'>Author: ${articleObject.author}</p>
                    <div class="scroll">
                        <p class='description'>${articleObject.description}</p>
                    </div>
                    <p class="react-count">${articleObject.likes} likes</p>
                    <button class="like-button">♥️ Like</button>
                    <button class='delete-button'>X</button>
                </div>`

    const collection = document.querySelector('div#collection')
    collection.append(outerDiv)
}


/************** EVENT LISTENERS  **************/

// Deliverable 1: When a user clicks the dark mode toggle in the header, change the app between light and dark mode

// What elements do we want to listen for events on? (button, form, checkbox, etc)
// toggle or button represents a toggle in the header
// What kind of event are we listening for? (click, submit, scroll, etc)
// click
// What do we want to happen? (what function do we want to run)
// change theme

const toggle = document.querySelector('input#toggle-dark-mode')

toggle.addEventListener('click', function () {
    // const body = document.querySelector('body')

    // if (body.className !== 'dark-mode') {
    //     body.className = 'dark-mode'
    // }
    // else {
    //     body.className = ''
    // }

    // if (body.className === 'dark-mode') {
    //     body.className = ''
    // }
    // else {
    //     body.className = 'dark-mode'
    // }

    document.body.classList.toggle('dark-mode')
})




// Deliverable: 
// When a user submits the form, add a new article card 
// to the page using the data from the form

// 1. <form>
// 2. submit
// 3. create a new article card with the user's input data


const form = document.querySelector('form#article-form')

form.addEventListener('submit', function (event) {
    event.preventDefault() // ALWAYS!
    console.log('Form submitted!!!')

    // GET THE USER INPUT FROM THE FORM
    console.dir(event.target)

    const inputFieldOne = event.target[0].value
    const inputFieldTwo = event.target[1].value
    const inputFieldThree = event.target[2].value
    const inputFieldFour = event.target[3].value

    const newArticleObject = {
        title: inputFieldOne,
        author: inputFieldTwo,
        description: inputFieldThree,
        image: inputFieldFour,
        likes: 0,
        id: articlesArray[articlesArray.length - 1].id + 1
    }

    articlesArray.push(newArticleObject)

    renderOneCard(newArticleObject)
    form.reset()
})



/********* APP INIT *********/
renderAllCards()