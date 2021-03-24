// write your code here
const url = 'http://localhost:3000/spiceblends'
const ingredientsUrl = 'http://localhost:3000/ingredients'
const updateForm = document.querySelector('form#update-form')
const newIngredientForm = document.querySelector('form#ingredient-form')
const spiceImagesDiv = document.querySelector('div#spice-images')


function displaySpiceBlendDetail(spiceBlendObj) {
    const detailH2 = document.querySelector('h2.title')
    detailH2.textContent = spiceBlendObj.title

    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = spiceBlendObj.image
    detailImg.alt = spiceBlendObj.title

    updateForm.dataset.id = spiceBlendObj.id
    newIngredientForm.dataset.id = spiceBlendObj.id

    const ingredientsUl = document.querySelector('ul.ingredients-list')

    ingredientsUl.innerHTML = ''

    spiceBlendObj.ingredients.forEach(ingredientObject => {
        const li = document.createElement('li')
        li.textContent = ingredientObject.name
        ingredientsUl.append(li)
    })
}


fetch(`${url}/1`)
    .then(response => response.json())
    .then(spiceBlendObj => {
        displaySpiceBlendDetail(spiceBlendObj)
    })


fetch(url)
    .then(response => response.json())
    .then(spiceBlendArray => {
        spiceBlendArray.forEach(spiceObject => {
            const img = document.createElement('img')
            img.src = spiceObject.image
            img.alt = spiceObject.title
            img.dataset.id = spiceObject.id

            spiceImagesDiv.append(img)
        })
    })





/********************** EVENT LISTENERS **********************/

updateForm.addEventListener('submit', event => {
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

})


newIngredientForm.addEventListener('submit', event => {
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
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

})

spiceImagesDiv.addEventListener('click', event => {

    if (event.target.matches('img')) {
        const id = event.target.dataset.id
        console.log(id)

        fetch(`${url}/${id}`)
            .then(response => response.json())
            .then(spiceBlendObject => {
                displaySpiceBlendDetail(spiceBlendObject)
            })


    }
})


