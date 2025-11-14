class Personne {
    constructor(prenom, age) {
        this.prenom = prenom
        this.age = age
    }

    sePresenter() {
        alert(`Bonjour, Je m'appel ${this.prenom} et j'ai ${this.age} ans.`)
    }
}

const presentation = document.querySelector("form")
if (presentation) {
    presentation.addEventListener("submit", (e) => {
        e.preventDefault()
        
        const prenom = document.getElementById("prenom").value.trim()
        const age = document.getElementById("age").value.trim()

        const newbie = new Personne (prenom, age)
        newbie.sePresenter()
    })
}