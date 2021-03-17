/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost(animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightingObject) {
    renderAnimalSightingPost(animalSightingObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/


/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

// which element am I interested in listening for an
// event on?
// - <h1>
// what type of event do I want to listen for?
// - click
// what should happen?
// - toggle between two colors

header.addEventListener('click', function (event) {
    toggleColor(event.target)
})

/***** Deliverable 2 *****/


// which element am I interested in listening for an
// event on?
// - button
// what type of event do I want to listen for?
// - click
// what should happen?
// - likes should increase on page


const button = document.querySelector('button.like-button')

button.addEventListener('click', function () {

    // const likesPtag = document.querySelector('p.likes')
    // const likesPtag = button.previousElementSibling

    // likes variable from line 24 is in global scope
    // approach 1 - using likes from DOM
    // let currLikes = parseInt(likes.textContent)
    // likes.textContent = `${currLikes + 1} Likes`

    // approach 2 - using likes from traveler object
    likes.textContent = `${traveler.likes++} Likes`
})


/***** Deliverable 3 *****/



// which element am I interested in listening for an
// event on?
// - <form>
// what type of event do I want to listen for?
// - submit!
// what should happen?
// - no page reload!!!!!!!!! create new sighting and display it on the page!


const newSightingForm = document.querySelector('form#new-animal-sighting-form')

newSightingForm.addEventListener('submit', function (event) {
    event.preventDefault() // !!!!!!!!!!!!!!!!!
    // get the user input!
    const species = event.target[0].value
    const video = event.target[1].value
    const photo = event.target[2].value
    const description = event.target[3].value


    // another option # 1
    // const species = event.target.querySelector('input[name="species"]').value
    // const video = event.target.querySelector('input[name="link"]').value
    // const photo = event.target.querySelector('input[name="photo"]').value

    // another option # 2 - using the id or name attribute on the element 
    // you can usee dot notation if the value of the attribute doesn't
    // have any special characters like a dash. Otherwise, use bracket notation
    // const species = event.target["species"].value;
    // const videoLink = event.target["animal-link"].value;
    // const photo = event.target["animal-photo"].value;
    // const description = event.target["sighting-description"].value;
    // const species = event.target.species.value; // ex using dot notation

    const lastIndex = traveler.animalSightings.length - 1
    const newSightingObject = {
        id: traveler.animalSightings[lastIndex].id + 1,
        travelerId: 1, // hard coding in travelerId
        species: species,
        photo: photo,
        link: video,
        description: description
    }

    renderAnimalSightingPost(newSightingObject)

    newSightingForm.reset()

})