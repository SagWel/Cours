// Voici les tableaux
const eleves = [
  { nom: "Alice", note: 12 },
  { nom: "Bob", note: 8 },
  { nom: "Charlie", note: 17 },
];


const produits = [
  { nom: "Pomme", categorie: "Fruit" },
  { nom: "Carotte", categorie: "Légume" },
  { nom: "Banane", categorie: "Fruit" }
];

// Voici les fonctions
function notes() {
  let liste = prompt("Donner vos notes (séparés par des virgules sans espaces)");

  let notes = liste.split(",").map(Number);
  let notesSupp = [];
  console.log(notesSupp);


  for (let note of notes) {
    if (note > 10) {
      notesSupp.push(note);
      console.log(notesSupp);
    }
    
  }

  alert(notesSupp);
}

function elevesNotes() {  
  let somme = 0;
  for (let eleve of eleves) {
    somme += eleve.note;
  }  

  let moyenne = somme / eleves.length;

  let note = 0;
  let bestEleve = "";
  for (let eleve of eleves) {
    if (eleve.note > note) {
        note = eleve.note;
        bestEleve = eleve.nom;
    }
  }

  alert(`La moyenne de la classe est de ${moyenne.toFixed(2)} et la meilleur note vient de ${bestEleve} avec ${note}/20`)
}

function elevesTri() {
    let elevesTri = eleves.toSorted((a, b) => b.note - a.note);
    console.log(elevesTri);
    alert("Résultats dans la console ;)")
}

function tri () {
    let fruits = []
    let legumes = []

    for (let produit of produits) {
        if (produit.categorie === "Fruit")
            fruits.push(produit)
        else if (produit.categorie === "Légume")
            legumes.push(produit)
    }
    console.log(fruits);
    console.log(legumes);
    alert("Résultats dans la console ;)")
}

// Voici le menu
let choix = prompt(`Que souhaitez vous faire ?
  Ne voir que vos notes au dessus de 10 (Max10) ?
  Connaitre la moyenne et la meilleur note de la classe (Moyenne) ?
  Trier les élèves dans l'ordre décroissant de leur note (Notes) ?
  Trier les produits par catégorie (Produits) ?`)

switch (choix) {
  case "Max10":
    notes();
    break;
  case "Moyenne":
    elevesNotes();
    break;
  case "Notes":
    elevesTri();
    break;
  case "Produits":
    tri();
    break;
  default:
    alert("Je n'ai pas compris votre choix ...");
}