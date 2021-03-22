/************** GLOBAL VARIABLES **************/
const newsTitle = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const firstCard = document.querySelector('[data-id="1"]')
const toggle = document.querySelector('input#toggle-dark-mode')
const form = document.querySelector('form#article-form')
const collectionDiv = document.querySelector('div#collection')



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
    fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                renderOneCard(article)
            })
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
toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})


form.addEventListener('submit', function (event) {
    event.preventDefault()

    // GET THE USER INPUT FROM THE FORM
    const title = event.target[0].value
    const author = event.target[1].value
    const description = event.target[2].value
    const image = event.target[3].value

    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ title, author, description, image, likes: 0 })
    })
        .then(response => response.json())
        .then(newArticle => {
            renderOneCard(newArticle)
        })

    form.reset()
})


collectionDiv.addEventListener('click', function (event) {
    if (event.target.matches('button.like-button')) {
        const card = event.target.closest('div.card')
        const likesPtag = event.target.previousElementSibling
        const likesNum = parseInt(likesPtag.textContent) + 1
        // optimistic rendering
        likesPtag.textContent = `${likesNum} Likes`

        fetch(`http://localhost:3000/articles/${card.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ likes: likesNum })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    else if (event.target.matches('button.delete-button')) {
        const card = event.target.closest('div.card')


        fetch(`http://localhost:3000/articles/${card.dataset.id}`, {
            method: 'DELETE'
        })

        // optimistic rendering
        card.remove()
    }
})


/************** APP INIT **************/
renderAllCards()
deleteAd()