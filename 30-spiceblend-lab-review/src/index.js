// write your code here
const url = 'http://localhost:3000/spiceblends'
const ingredientsUrl = 'http://localhost:3000/ingredients'
const updateForm = document.querySelector('form#update-form')
const newIngredientForm = document.querySelector('form#ingredient-form')
const spiceImagesDiv = document.querySelector('div#spice-images')
const ingredientsUl = document.querySelector('ul.ingredients-list')


/********************** RENDER FUNCTIONS **********************/
function renderOneIngredient(ingredientObject) {
    const li = document.createElement('li')
    li.textContent = ingredientObject.name
    ingredientsUl.append(li)
}


function renderAllIngredients(ingredientsArr) {
    ingredientsArr.forEach(ingredientObject => renderOneIngredient(ingredientObject))
}


function displaySpiceBlendDetail(spiceBlendObj) {
    const detailH2 = document.querySelector('h2.title')
    detailH2.textContent = spiceBlendObj.title

    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = spiceBlendObj.image
    detailImg.alt = spiceBlendObj.title

    updateForm.dataset.id = spiceBlendObj.id
    newIngredientForm.dataset.id = spiceBlendObj.id
    ingredientsUl.innerHTML = ''

    renderAllIngredients(spiceBlendObj.ingredients)
}


function renderOneSpiceBlendImg(spiceObject) {
    const img = document.createElement('img')
    img.src = spiceObject.image
    img.alt = spiceObject.title
    img.dataset.id = spiceObject.id

    spiceImagesDiv.append(img)
}


function renderAllSpiceBlends(spiceBlendArray) {
    spiceBlendArray.forEach(spiceObject => {
        renderOneSpiceBlendImg(spiceObject)
    })
}



/********************** FETCH FUNCTIONS **********************/
function getOneSpiceBlend(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(spiceBlendObj => {
            displaySpiceBlendDetail(spiceBlendObj)
        })
}


function getAllSpiceBlends() {
    fetch(url)
        .then(response => response.json())
        .then(spiceBlendArray => renderAllSpiceBlends(spiceBlendArray))

}



/********************** EVENT LISTENERS CALLBACKS **********************/
const handleUpdateFormSubmit = event => {
    event.preventDefault()

    // get the user input
    const titleInput = event.target.title.value

    fetch(`${url}/${event.target.dataset.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: titleInput })
    })
        .then(response => response.json())
        .then(updatedSpiceBlendObj => {
            const detailH2 = document.querySelector('h2.title')
            detailH2.textContent = updatedSpiceBlendObj.title
        })

}


const handleNewIngredientFormSubmit = event => {
    event.preventDefault()

    // get the user input
    const newIngredientInput = event.target['ingredient-name'].value
    const li = document.createElement('li')
    li.textContent = newIngredientInput

    const ingredientsUl = document.querySelector('ul.ingredients-list')
    ingredientsUl.append(li)

    event.target.reset()

    fetch(ingredientsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newIngredientInput,
            spiceblendId: parseInt(event.target.dataset.id)
        })
    })

}


const handleSpiceBlendMenuClick = event => {
    if (event.target.matches('img')) {
        const id = event.target.dataset.id
        getOneSpiceBlend(id)
    }
}



/********************** EVENT LISTENERS **********************/

updateForm.addEventListener('submit', handleUpdateFormSubmit)

newIngredientForm.addEventListener('submit', handleNewIngredientFormSubmit)

spiceImagesDiv.addEventListener('click', handleSpiceBlendMenuClick)



/********************** APP INIT **********************/
getOneSpiceBlend(1)
getAllSpiceBlends()