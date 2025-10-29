// -----------------------------------------------------------------------------------------------------------
// Exercice 1
// -----------------------------------------------------------------------------------------------------------

const animal = {
        nom : "U-kie",
        type : "Chat",
        age : 3,
        description () {
            return "Elle s'appelle " + this.nom + ". C'est un " + this.type + " qui a " + this.age + " ans.";
        }
};

alert(animal.description())

// -----------------------------------------------------------------------------------------------------------
// Exercice 2
// -----------------------------------------------------------------------------------------------------------

const objets = [
    { nom: "Pomme", prix: 1, stock: true },
    { nom: "Poire", prix: 2, stock: true },
    { nom: "Banane", prix: 3, stock: false },
];

for (let objet of objets) {
    alert("Le produit : " + objet.nom + " coûte " + objet.prix + " euros.")
}

// -----------------------------------------------------------------------------------------------------------
// Exercice 3
// -----------------------------------------------------------------------------------------------------------

const Voiture = {
    marque: "Citroen",
    modele: "C5",
    annee: 2003,
    info () {
        return this.marque + " " + this.modele + " de " + this.annee;
    }
};

alert(Voiture.info())