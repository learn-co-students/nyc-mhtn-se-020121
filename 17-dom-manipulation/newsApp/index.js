const articlesArray = [
    {
        id: 2,
        title: "Why Buford is Rude",
        author: "A.J. Perlis",
        description: "My dog is rude because he kicks down doors when closed and chooses when to listen",
        image: "images/IMG_4598.jpg",
        likes: 1
    },
    {
        id: 3,
        title: "Local Boy Unmutes Himself",
        author: "Tim Wit",
        description: "In a stunning turn of events, a very competent programmer remembers to press the 'unmute' button before speaking on Zoom.",
        image: "https://images.idgesg.net/images/article/2020/07/zoom-for-home-100852180-large.jpg",
        likes: 6
    },
    {
        id: 4,
        title: "Fluff Daddy",
        author: "F. Diddy",
        description: "Breaking: Puff Daddy changes his name yet again, this time to help promote his line of extremely fluffy coats",
        image: "https://i.redd.it/l0uj355oxv341.jpg",
        likes: 50
    },
    {
        id: 5,
        title: "Earth Spinning",
        author: "Bark Twain",
        description: "Recent studies have led scientists to believe that the Earth is spinning round as we speak.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
        likes: 50
    },
    {
        id: 6,
        title: "Raffy so cute",
        author: "Mr. Rafferty",
        description: "Raffy continues to be a fluffy boy.",
        image: "images/raffy.jpg",
        likes: 27
    },
    {
        id: 7,
        title: "I'm not fat, I'm Fluffy",
        author: "Gabriel Iglesias",
        description: "...and Covid makes me even fluffier",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawkwardyeti.com%2Fwp-content%2Fuploads%2F2017%2F07%2F063017_MaintenanceRequired-1024x841.png&f=1&nofb=1",
        likes: 9000
    }
]



// READ

const newsTitle = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')

// UPDATE
// find the element!
// const firstCard = allCards[0]
const firstCard = document.querySelector('[data-id="1"]')
// const img = firstCard.querySelector('img')
// img.src = "images/raffy.jpg"

const schoolTitle = document.querySelector('p.flatiron')
schoolTitle.style.color = 'blue'


// DELETE
const adCard = document.querySelector('div.ad')
adCard.remove()


// CREATE

// artisinal way
// articlesArray.forEach(function (articleObject) {
//     const outerDiv = document.createElement('div')
//     outerDiv.classList.add('card')
//     outerDiv.dataset.id = articleObject.id

//     const imgDiv = document.createElement('div')
//     imgDiv.classList.add('img-container')

//     const img = document.createElement('img')
//     img.src = articleObject.image
//     img.alt = articleObject.title

//     const articleContainerDiv = document.createElement('div')
//     articleContainerDiv.classList.add('article-title-container')

//     const h4 = document.createElement('h4')
//     h4.textContent = articleObject.title

//     const contentDiv = document.createElement('div')
//     contentDiv.classList.add('content')

//     const authorPtag = document.createElement('p')
//     authorPtag.classList.add('author')
//     authorPtag.textContent = `Author: ${articleObject.author}`

//     const scrollDiv = document.createElement('div')
//     scrollDiv.classList.add('scroll')

//     const descriptionPtag = document.createElement('p')
//     descriptionPtag.classList.add('description')
//     descriptionPtag.textContent = articleObject.description

//     const likesPtag = document.createElement('p')
//     likesPtag.classList.add('react-count')
//     likesPtag.textContent = `${articleObject.likes} likes`

//     const button = document.createElement('button')
//     button.classList.add('like-button')
//     button.textContent = '♥️ Like'

//     contentDiv.append(authorPtag, scrollDiv, likesPtag, button)
//     scrollDiv.append(descriptionPtag)

//     articleContainerDiv.append(h4)
//     imgDiv.append(img, articleContainerDiv)

//     outerDiv.append(imgDiv, contentDiv)

//     const collection = document.querySelector('div#collection')
//     collection.append(outerDiv)
//     console.log(outerDiv)
// })



// artisinal & innerHTML combo
articlesArray.forEach(function (articleObject) {
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
                </div>`

    console.log(outerDiv)
    const collection = document.querySelector('div#collection')
    collection.append(outerDiv)

})