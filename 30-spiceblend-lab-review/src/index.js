// write your code here
const url = 'http://localhost:3000/spiceblends'


fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
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