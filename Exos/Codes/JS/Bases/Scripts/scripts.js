function bjr() {
    alert("Bonjour !")
}

function identite () {
    bjr()
    let prenom = prompt("Quel est votre nom ? ");
    let age = prompt("Quel âge avez vous ? ");
    let ville = prompt("Dons quelle ville habitez vous ? ");

alert(`Bonjour ${prenom}, vous avez ${age} ans et vous habitez à ${ville}`)
};

function calcul () {
    bjr()
let first = Number(prompt("Choisir un premier nombre"));
let second = Number(prompt("choisir un deuxième nombre"));

let somme = first + second;
let difference = first - second;
let produit = first * second;
let quotient = Math.trunc(first / second);
let reste = first % second;

alert(`
    la somme des deux nombre est de ${somme}
    la diffèrence entre les deux nombre est de ${difference}
    le produit des deux nombre est de ${produit}
    le quotient des deux nombre est de ${quotient}
    avec un reste de ${reste}`)
};

function comparaison () {
    bjr()
    let first = prompt("choisir un premier nombre");
    let second = prompt("Choisir un deuxième nombre");

    let egalite = first == second;
    let absoluteEgalite = first === second;
    let notEgalite = first != second;
    let notAbsoluteEgalite =  first !== second;

    alert(`
        ${first} est égal à ${second} ? : ${egalite}
        ${first} est strictement égal à ${second} ? : ${absoluteEgalite}
        ${first} est diffèrent de ${second} ? : ${notEgalite}
        ${first} est strictement diffèrent de ${second} ? : ${notAbsoluteEgalite}`            
    )       
};

function classeAge() {
    bjr()
    let age = Number(prompt("Quel âge avez vous ?"));

    if (age >= 18) {
        alert("Vous êtes mineur !");
    } else if (18 < age < 64) {
        alert("Vous êtes un adulte !");
    } else {
        alert("Vous êtes un senior !");
    }
};

function chaudFroid () {
    bjr()
    let temperature = (Number(prompt("Quelle est la température ?")) >= 25 ? "Il fais chaud !" : "Il fais froid !")
    
    alert(temperature)
};

function pair () {
    bjr()
    let max = Number(prompt("Choisir un nombre max"))
    let pair = []


    for (let i = 0; i <= max; i ++ ) {
        if (i % 2 === 0) {
            pair.push(i)
        }
    }

    alert(`les nombre pairs jusqu'à ${max} sont : ${pair}`)
}

function comptage () {
    bjr()
    let max = Number(prompt("Choisir un nombre max"))
    let compteur = 0
    let result = []

    while (compteur <= max) {
        result.push(compteur)
        compteur ++
    }

    alert(`les nombre jusqu'à ${max} sont : ${result}`)
}

function listFruitsCourses () {
    bjr()
    let list = ["Pomme", "Poire", "Raisin"]

    let choix = prompt(`Que voulez vous faire ?
        Afficher la liste (Afficher) ?
        Savoir combien de fruits il y a dans la liste (Combien) ?
        Ajouter un fruit (Ajouter) ?
        Supprimer le premier fruit de la liste (Supprimer) ?`)

    switch (choix) {
        case "Ajouter":
            let fruitAjout = prompt("Quel fruit voulez vous ajouter ?")
            alert(`la liste contient désormais : ${fruitAjout}`)
            list.puch(fruitAjout)
            break;
        case "Supprimer":
            let fruitSupprime = list[0]
            alert(`Vous venez de supprimer ${fruitSupprime} de la liste`)
            list.shift()
            break;
        case "Afficher":
            alert("La liste cxontient : ")
            for (let fruit of list) {
                alert(fruit)
            }
            break;
        case "Combien":
            alert(`La liste contient ${list.length} fruits`)
            break;
        default:
        alert("Je n'ai pas compris votre choix ...")
    }
}

function listNombre () {
    bjr()
    let nombres = prompt("Quels nombres voulez vous mettre dans liste (séparés par des virgules) ?");
    let list = nombres.split(",").map(Number);
    console.log(list)

    let choix = prompt(`Que voulez vous faire avec ces nombres ?
        Supprimer premier et dernier élément (Supprimer) ?
        Rechercher un nombre dans la liste (Recherche) ?
        Savoir ou se trouve un nombre dans la tableau (Index) ?
        Trier le tableau (Tri) ?`);

    switch (choix) {
        case "Supprimer":
            let nombresSuprime =[list[0], list[list.length - 1]];
            list.pop();
            list.shift();
            alert(`Vous venez de supprimer les nombre ${nombresSuprime}`)
            break;
        case "Rechercher":
            let recherche = prompt("Quel nombre recherchez vous ?")
            if (list.includes(Number(recherche)) === true) {
                alert(`Le nombre ${recherche} est bien dans la liste`)
            } else {
                alert(`Le nombre ${recherche} n'est pas dans la liste`)
            }
            break;
        case "Index":
            let index = prompt("De quel nombre chercher vous l'index dans la liste ?")
            alert(`Le nombre ${index} se trouve à l'index ${list.indexOf(Number(index))} dans le tableau`)
            break;
        case "Tri":
            alert(`Voila la liste une fois triée :
                ${list.sort()}`)
    }
}


const bouton1 = document.getElementById("exo1");
const bouton2 = document.getElementById("exo2");
const bouton3 = document.getElementById("exo3");
const bouton4 = document.getElementById("exo4");
const bouton5 = document.getElementById("exo5");
const bouton6 = document.getElementById("exo6");
const bouton7 = document.getElementById("exo7");
const bouton8 = document.getElementById("exo8");
const bouton9 = document.getElementById("exo9");
const bouton10 = document.getElementById("exo10");

if (bouton1) {
    bouton1.addEventListener("click",identite)
};

if (bouton2) {
    bouton2.addEventListener("click",calcul)
};

if(bouton3) {
    bouton3.addEventListener("click",comparaison)
};

if(bouton4) {
    bouton4.addEventListener("click",classeAge)
};

if(bouton5) {
    bouton5.addEventListener("click",chaudFroid)
};

if(bouton6) {
    bouton6.addEventListener("click",pair)
};

if(bouton7) {
    bouton7.addEventListener("click",comptage)
};

if(bouton8) {
    bouton8.addEventListener("click",listFruitsCourses)
};

if(bouton9) {
    bouton9.addEventListener("click",listNombre)
};