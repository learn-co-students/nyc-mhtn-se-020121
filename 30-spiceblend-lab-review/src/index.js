// write your code here
const url = 'http://localhost:3000/spiceblends'
const updateForm = document.querySelector('form#update-form')
const newIngredientForm = document.querySelector('form#ingredient-form')


fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        const detailH2 = document.querySelector('h2.title')
        detailH2.textContent = data.title

        const detailImg = document.querySelector('img.detail-image')
        detailImg.src = data.image
        detailImg.alt = data.title

        const ingredientsUl = document.querySelector('ul.ingredients-list')

        data.ingredients.forEach(ingredientObject => {
            const li = document.createElement('li')
            li.textContent = ingredientObject.name
            ingredientsUl.append(li)

        })
    })



updateForm.addEventListener('submit', event => {
    event.preventDefault()

    // get the user input
    const titleInput = event.target.title.value

    fetch(`${url}/1`, {
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

})


