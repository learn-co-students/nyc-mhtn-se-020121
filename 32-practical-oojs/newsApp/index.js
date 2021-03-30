/************** GLOBAL VARIABLES **************/
const newsTitle = document.querySelector('h1#news-co')
const allCards = document.querySelectorAll('.card')
const firstCard = document.querySelector('[data-id="1"]')
const toggle = document.querySelector('input#toggle-dark-mode')
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



/************** EVENT LISTENERS  **************/
toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
})



/************** APP INIT **************/
deleteAd()
Card.renderAllCards()