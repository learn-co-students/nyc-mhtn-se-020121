// write your code here
const url = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('div#ramen-menu')
const updateForm = document.querySelector('form#ramen-rating')
const newRamenForm = document.querySelector('form#new-ramen')


function renderOneRamenMenuImg({ image, id }) {

    const parentContainer = document.createElement('div')

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'

    const img = document.createElement('img')
    img.src = image
    img.dataset.id = id

    parentContainer.append(deleteButton, img)
    ramenMenu.append(parentContainer)
}


function loadRamenMenu() {
    fetch(url)
        .then(response => response.json())
        .then(ramenArray => {
            if (ramenArray.length > 0) {
                detailOneRamen(ramenArray[0])
            }
            ramenArray.forEach(ramenObject => renderOneRamenMenuImg(ramenObject))
        })
}

function detailOneRamen({ image, name, restaurant, id, rating, comment }) {
    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = image
    detailImg.alt = name

    const detailH2 = document.querySelector('h2.name')
    detailH2.textContent = name

    const detailH3 = document.querySelector('h3.restaurant')
    detailH3.textContent = restaurant

    updateForm.dataset.id = id

    updateForm[0].value = rating
    updateForm[1].value = comment
}

function fetchOneRamen(id) {
    return fetch(`${url}/${id}`)
        .then(response => response.json())
}
/******************** EVENT LISTENERS ********************/



/******************** EVENT LISTENERS ********************/
ramenMenu.addEventListener('click', event => {

    if (event.target.matches('img')) {
        fetchOneRamen(event.target.dataset.id)
            .then(oneRamenObject => detailOneRamen(oneRamenObject))
    }
    else if (event.target.tagName === 'BUTTON') {

        const id = event.target.nextElementSibling.dataset.id

        fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(response.statusText)
            })
            .then(_ => {
                const delBtnParent = event.target.closest('div')
                delBtnParent.remove()

                const firstRamen = document.querySelector('div#ramen-menu img')
                const firstRamenId = firstRamen.dataset.id

                if (firstRamenId !== id) {
                    fetchOneRamen(firstRamenId)
                        .then(ramenObject => detailOneRamen(ramenObject))
                }
            })
            .catch(error => alert(`The delete was not successful! ${error.message}. Try again later.`))
    }
})

updateForm.addEventListener('submit', event => {
    event.preventDefault()

    // user input
    const updatedValues = {
        rating: event.target.rating.value,
        comment: event.target.comment.value
    }

    fetch(`${url}/${event.target.dataset.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedValues)
    })
    // .then(response => response.json())
    // .then(updatedRamenObj => {
    //     console.log(updatedRamenObj)
    // })
})



newRamenForm.addEventListener('submit', event => {
    event.preventDefault()

    const newRamen = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target['new-comment'].value
    }

    fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRamen)
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(newRamenObj => {
            console.log(newRamenObj)
            renderOneRamenMenuImg(newRamenObj)
            newRamenForm.reset()
        })
        .catch(error => alert(error))
})

loadRamenMenu()

