class Card {

    constructor(article) {
        this.article = article
        // this.handleLike = this.handleLike.bind(this)
    }

    handleLike = () => {
        const likesPtag = this.outerDiv.querySelector('p.react-count')
        const likesNum = parseInt(likesPtag.textContent) + 1
        // optimistic rendering
        likesPtag.textContent = `${likesNum} Likes`

        fetch(`http://localhost:3000/articles/${this.outerDiv.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ likes: likesNum })
        })
    }


    handleDelete = () => {
        fetch(`http://localhost:3000/articles/${this.article.id}`, {
            method: 'DELETE'
        })

        this.outerDiv.remove()
    }

    render() {
        this.outerDiv = document.createElement('div')
        this.outerDiv.classList.add('card')
        this.outerDiv.dataset.id = this.article.id

        this.outerDiv.innerHTML = `
            <div class="img-container">
                    <img src="${this.article.image}"
                        alt="${this.article.title}" />
                    <div class="article-title-container">
                        <h4>${this.article.title}</h4>
                    </div>
                </div>
                <div class="content">
                    <p class='author'>Author: ${this.article.author}</p>
                    <div class="scroll">
                        <p class='description'>${this.article.description}</p>
                    </div>
                    <p class="react-count">${this.article.likes} likes</p>
                    <button class="like-button">♥️ Like</button>
                    <button class='delete-button'>X</button>
                </div>`

        const collection = document.querySelector('div#collection')
        collection.append(this.outerDiv)


        const likeBtn = this.outerDiv.querySelector('button.like-button')
        likeBtn.addEventListener('click', this.handleLike)

        const delBtn = this.outerDiv.querySelector('button.delete-button')
        delBtn.addEventListener('click', this.handleDelete)
    }


    static renderAllCards() {
        fetch('http://localhost:3000/articles')
            .then(response => response.json())
            .then(articles => {
                articles.forEach(article => {
                    const card = new Card(article)
                    card.render()
                })
            })
    }


}