let addToy = false;
const url = 'http://localhost:3000/toys'
const newToyForm = document.querySelector('form.add-toy-form')
const collectionDiv = document.querySelector('div#toy-collection')


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

/********************* FETCH FUNCTIONS *********************/
function fetchToys(httpVerb, data, id = null) {
  let fetchUrl = url

  if (httpVerb === 'PATCH') {
    fetchUrl = `${url}/${id}`
  }

  return fetch(fetchUrl, {
    method: httpVerb,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}


/********************* RENDER FUNCTIONS *********************/
function renderOneToy(toy) {
  const div = document.createElement('div')
  div.classList.add('card')

  div.innerHTML = `<h2>${toy.name}</h2>
  <img src='${toy.image}' alt='${toy.name}' class="toy-avatar" />
  <p>${toy.likes} Likes </p>
  <button data-id=${toy.id} class="like-btn">Like <3</button>`

  collectionDiv.append(div)
}


function renderAllToys(toysArray) {
  toysArray.forEach(toy => {
    renderOneToy(toy)
  })
}


function getAllToys() {
  fetch(url)
    .then(response => response.json())
    .then(toysArray => {
      renderAllToys(toysArray)

    })
}

/********************* EVENT LISTENER CALLBACKS *********************/
const handleFormSubmit = event => {
  event.preventDefault()

  const newToyObj = {
    name: event.target.name.value,
    image: event.target.image.value,
    likes: 0
  }

  fetchToys('POST', newToyObj)
    .then(toyObj => renderOneToy(toyObj))

  event.target.reset()
}


const handleLikeBtnClick = event => {
  if (event.target.matches('button.like-btn')) {
    const id = event.target.dataset.id
    const likesPtag = event.target.previousElementSibling
    const likes = parseInt(likesPtag.textContent) + 1
    likesPtag.textContent = `${likes} Likes` // optimistic rendering

    fetchToys('PATCH', { likes }, id) // { likes } is the same as {likes: likes}
      .then(data => {
        console.log('Yay!', data)
      })
  }
}




/********************* EVENT LISTENERS *********************/
newToyForm.addEventListener('submit', handleFormSubmit)
collectionDiv.addEventListener('click', handleLikeBtnClick)



getAllToys()
