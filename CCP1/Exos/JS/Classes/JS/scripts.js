// Exercice 1
class Personne {
    constructor(prenom, age) {
        this.prenom = prenom
        this.age = age
    }

    sePresenter() {
        alert(`Bonjour, Je m'appel ${this.prenom} et j'ai ${this.age} ans.`)
    }
}

const presentation = document.getElementById("formExo1")
if (presentation) {
    presentation.addEventListener("submit", (e) => {
        e.preventDefault()
        
        const prenom = document.getElementById("prenom").value.trim()
        const age = document.getElementById("age").value.trim()

        const newbie = new Personne (prenom, age)
        newbie.sePresenter()
    })
}

// Exercie 2
class Voiture {
    constructor(marque, modele, kilometrage) {
        this.marque = marque
        this.modele = modele
        this.kilometrage = kilometrage
    }

    rouler(distance) {
        this.kilometrage += distance
        alert(`Le kilomètrage de la voiture est maintenant de : ${this.kilometrage}`)
        sessionStorage.setItem('kilometrage', `${this.kilometrage}`)
    }

    afficherInfos() {
        alert(`Voiture : ${this.marque} ${this.modele}, ${this.kilometrage} km`)
    }
}

const addVoiture = document.getElementById("formExo2")
if (addVoiture) {
    addVoiture.addEventListener("submit", (e) => {
        e.preventDefault()
        const marque = document.getElementById("marque").value.trim()
        const modele = document.getElementById("modele").value.trim()
        const kilometrage = document.getElementById("kilometrage").value.trim()

        sessionStorage.setItem('marque', marque)
        sessionStorage.setItem('modele', modele)
        sessionStorage.setItem('kilometrage', Number(kilometrage))

        const main = document.querySelector("main")

        const roulerLabel = document.createElement("label")
        roulerLabel.for = "rouler"
        roulerLabel.innerHTML = "Combien de kilométre roulez-vous ?"
        main.appendChild(roulerLabel)
        const roulerInput = document.createElement("input")
        roulerInput.type = "text"
        roulerInput.name = "rouler"
        roulerInput.id = "rouler"
        main.appendChild(roulerInput)
        const roulerBtn = document.createElement("button")
        roulerBtn.type = "submit"
        roulerBtn.innerHTML = "Rouler"
        main.appendChild(roulerBtn)

        const infosBtn = document.createElement("button")
        infosBtn.type = "button"
        infosBtn.innerHTML = "Infos de la voiture"
        infosBtn.id = "infosBtn"
        main.appendChild(infosBtn)
    })
}

const v1 = new Voiture(`${sessionStorage.getItem('marque')}`, `${sessionStorage.getItem('model')}`, `${sessionStorage.getItem('kilometrage')}`)

const rouler = document.getElementById("rouler")
if (rouler) {
    rouler.addEventListener("submit", (e) => {
        e.preventDefault
        const km = Number(rouler.value.trim())
        v1.rouler(km)
    })
}

const infos = document.getElementById("infosBtn")
if (infos) {
    infos.addEventListener("click", () => {
        v1.afficherInfos()
    })
}