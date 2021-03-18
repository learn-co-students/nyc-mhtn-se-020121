/************** GLOBAL VARIABLES **************/
const newsTitle = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const firstCard = document.querySelector('[data-id="1"]')
const toggle = document.querySelector('input#toggle-dark-mode')
const form = document.querySelector('form#article-form')

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

    // NESTED/CLOSURES APPROACH

    const deleteBtn = outerDiv.querySelector('button.delete-button')

    deleteBtn.addEventListener('click', function (event) {
        console.log('clicked!', event.target)
        outerDiv.remove()

    })

    const likeBtn = outerDiv.querySelector('button.like-button')

    likeBtn.addEventListener('click', function (event) {
        console.log('clicked!', event.target)
        const likesPtag = outerDiv.querySelector('p.react-count')
        likesPtag.textContent = `${articleObject.likes++} Likes`
    })
}


/************** EVENT LISTENERS  **************/


toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})


form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('Form submitted!!!')

    // GET THE USER INPUT FROM THE FORM
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



/************** APP INIT **************/
renderAllCards()




// WILL NOT WORK FOR OUR APPLICATION - OUR CARDS ARE BEING CREATED IN MULTIPLE WAYS
// const allDeleteBtns = document.querySelectorAll('.delete-button')

// allDeleteBtns.forEach(function (btn) {
//     btn.addEventListener('click', function (event) {
//         console.log('Clicked!!!!', event.target)
//     })
// })