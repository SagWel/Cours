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
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = Number(kilometrage); 
    }

    rouler(distance) {
        this.kilometrage += distance; 
        
        console.log(`Le kilométrage est maintenant de : ${this.kilometrage} km`);
        
        sessionStorage.setItem('kilometrage', this.kilometrage);
        
        this.afficherMessage(`Le kilométrage de la voiture est maintenant de : ${this.kilometrage} km`);
    }

    afficherInfos() {
        this.afficherMessage(`Voiture : ${this.marque} ${this.modele}, ${this.kilometrage} km`);
    }

    afficherMessage(message) {
        const output = document.getElementById("outputMessage");
        if (output) {
            output.innerHTML = `<p class="p-3 bg-blue-100 text-blue-800 rounded-lg">${message}</p>`;
        } else {
            console.warn("Élément #outputMessage manquant : ", message);
        }
    }
}

let v1 = null; 

function newVeichule () {
    return new Promise(resolve => {
        const marque = document.getElementById("marque").value.trim();
        const modele = document.getElementById("modele").value.trim();
        const kilometrage = document.getElementById("kilometrage").value.trim();

        sessionStorage.setItem('marque', marque);
        sessionStorage.setItem('modele', modele);
        sessionStorage.setItem('kilometrage', Number(kilometrage));

        v1 = new Voiture(marque, modele, kilometrage);

        const main = document.querySelector("main");

        if (document.getElementById("roulerBtn")) {
            resolve();
            return;
        }

        const controlDiv = document.createElement("div");
        controlDiv.id = "controlPanel";
        controlDiv.className = "flex flex-col gap-4 mt-8 p-4 border rounded-lg";
        
        const outputDiv = document.createElement("div");
        outputDiv.id = "outputMessage";
        controlDiv.appendChild(outputDiv);

        const roulerGroup = document.createElement("div");
        roulerGroup.className = "flex gap-2 items-center";
        
        const roulerInput = document.createElement("input");
        roulerInput.type = "number";
        roulerInput.placeholder = "KM à parcourir";
        roulerInput.id = "roulerInput";
        roulerInput.className = "p-2 border rounded w-full";
        
        const roulerBtn = document.createElement("button");
        roulerBtn.type = "button";
        roulerBtn.innerHTML = "Rouler";
        roulerBtn.id = "roulerBtn";
        roulerBtn.className = "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors";
        
        roulerGroup.appendChild(roulerInput);
        roulerGroup.appendChild(roulerBtn);
        controlDiv.appendChild(roulerGroup);

        const infosBtn = document.createElement("button");
        infosBtn.type = "button";
        infosBtn.innerHTML = "Infos sur la voiture";
        infosBtn.id = "infosBtn";
        infosBtn.className = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors";
        controlDiv.appendChild(infosBtn);

        main.appendChild(controlDiv);

        resolve(v1);
    });
}
const addVoiture = document.getElementById("formExo2");

if (addVoiture) {
    addVoiture.addEventListener("submit", (e) => {
        e.preventDefault();
        
        newVeichule()
        .then(() => {
            const roulerBtn = document.getElementById("roulerBtn");
            const roulerInput = document.getElementById("roulerInput");

            if (roulerBtn && roulerInput) {
                roulerBtn.addEventListener("click", () => {
                    const km = Number(roulerInput.value);
                    if (km > 0 && v1) {
                        v1.rouler(km);
                        roulerInput.value = '';
                    } else if (v1) {
                        v1.afficherMessage("Veuillez entrer une distance valide.");
                    }
                });
            }

            const infos = document.getElementById("infosBtn");
            if (infos && v1) {
                infos.addEventListener("click", () => {
                    v1.afficherInfos();
                });
            }
        });

        e.target.style.display = 'none';
    });
}

// Exercice 3
class Employe {
    constructor(nom, poste, salaire) {
        this.nom = nom
        this.poste = poste
        this.salaire = salaire
    }

    afficherSalaire () {
        console.log(`${this.nom} gagne ${this.salaire} euros en tant que ${this.poste}.`);
    }
}

class Manager extends Employe {
    constructor(nom, poste, salaire, equipe) {
        super(nom, poste, salaire)
        this.equipe = [equipe]
    }

    afficherEquipe () {
        let phrase = `Equipe de ${this.nom} : `
        for (let membre of this.equipe) {
            phrase += `${membre} `
        }

        console.log(phrase);
        
    }
}

const m1 = new Manager("Claire", "Chef de projet", 4000, ["Léo", "Nina", "Sam"])

m1.afficherSalaire()
m1.afficherEquipe()