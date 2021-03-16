/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
// console.dir(header)
// header.style.color = 'red'
header.style.color = 'rgba(255,0,0,1)'

/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

// 1. Find the element that we're interested in
const profile = document.querySelector('div#profile')

const img = profile.querySelector('img')
// 2. Actually update the property/ies of that element
img.src = traveler.photo
img.alt = traveler.name

const h2 = profile.querySelector('h2')
h2.textContent = traveler.name

const em = profile.querySelector('em')
em.textContent = traveler.nickname


/***** Deliverable 4 *****/

const ul = document.querySelector('ul#animals')

traveler.animalSightings.forEach(function (animalSightingObject) {
    // console.log(animalSightingObject)

    const li = document.createElement('li')
    li.dataset.id = animalSightingObject.id

    li.innerHTML = `<p>${animalSightingObject.description}</p>
    <img src="${animalSightingObject.photo}" alt="${animalSightingObject.species}"/>
    <a href="${animalSightingObject.link}" target="_blank">Here's a video about the ${animalSightingObject.species} species!</a>`

    ul.append(li)
})



// this works, but not most efficient
// traveler.animalSightings.forEach(function (animalOpject) {
//     ul.innerHTML += `
//     <li>
//         <p>${animalOpject.description}</p>
//         <img src="${animalOpject.photo}" alt="${animalOpject.photo}"/>
//         <a href="${animalOpject.link}" target="_blank">Here's a video about the ${animalOpject.species} species!</a>
//     </li>
//     `
// })


/***** Deliverable 5 *****/
// 1. Find the element that you're interested in deleting
const liToRemove = document.querySelector('[data-id="3"]')

// 2. Actually remove it
liToRemove.remove()
