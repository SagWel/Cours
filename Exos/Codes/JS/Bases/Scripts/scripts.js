function bjr() {
    alert("Bonjour !")
}

let prenom = prompt("Quel est votre prénom ? ");
let registeredList = ["Aria", "Robin", "Julie"]
let listFruit = ["Pomme", "Poire", "Raisin"]

function saluer (prenom) {
    alert(`Bonjour ${prenom}`)
}

function identite () {
    saluer(prenom)
    let age = prompt("Quel âge avez vous ? ");
    let ville = prompt("Dons quelle ville habitez vous ? ");

alert(`Bonjour ${prenom}, vous avez ${age} ans et vous habitez à ${ville}`)
};

function calcul () {
    saluer(prenom)
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
    saluer(prenom)
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
    saluer(prenom)
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
    saluer(prenom)
    let temperature = (Number(prompt("Quelle est la température ?")) >= 25 ? "Il fais chaud !" : "Il fais froid !")
    
    alert(temperature)
};

function pair () {
    saluer(prenom)
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
    saluer(prenom)
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
    saluer(prenom)

    let choix = prompt(`Que voulez vous faire ?
        Afficher la liste (Afficher) ?
        Savoir combien de fruits il y a dans la liste (Combien) ?
        Ajouter un fruit (Ajouter) ?
        Supprimer le premier fruit de la liste (Supprimer) ?`)

    switch (choix) {
        case "Ajouter":
            let fruitAjout = prompt("Quel fruit voulez vous ajouter ?")
            alert(`la liste contient désormais : ${fruitAjout}`)
            listFruit.puch(fruitAjout)
            break;
        case "Supprimer":
            let fruitSupprime = listFruit[0]
            alert(`Vous venez de supprimer ${fruitSupprime} de la liste`)
            listFruit.shift()
            break;
        case "Afficher":
            alert("La liste contient : ")
            for (let fruit of listFruit) {
                alert(fruit)
            }
            break;
        case "Combien":
            alert(`La liste contient ${listFruit.length} fruits`)
            break;
        default:
        alert("Je n'ai pas compris votre choix ...")
    }
}

function listNombre () {
    saluer(prenom)
    let nombres = prompt("Quels nombres voulez vous mettre dans liste (séparés par des virgules) ?");
    let listNombre = nombres.split(",").map(Number);
    console.log(listNombre)

    let choix = prompt(`Que voulez vous faire avec ces nombres ?
        Supprimer premier et dernier élément (Supprimer) ?
        Rechercher un nombre dans la liste (Recherche) ?
        Savoir ou se trouve un nombre dans la tableau (Index) ?
        Trier le tableau (Tri) ?`);

    switch (choix) {
        case "Supprimer":
            let nombresSuprime =[listNombre[0], listNombre[listNombre.length - 1]];
            listNombre.pop();
            listNombre.shift();
            alert(`Vous venez de supprimer les nombre ${nombresSuprime}`)
            break;
        case "Rechercher":
            let recherche = prompt("Quel nombre recherchez vous ?")
            if (listNombre.includes(Number(recherche)) === true) {
                alert(`Le nombre ${recherche} est bien dans la liste`)
            } else {
                alert(`Le nombre ${recherche} n'est pas dans la liste`)
            }
            break;
        case "Index":
            let index = prompt("De quel nombre chercher vous l'index dans la liste ?")
            alert(`Le nombre ${index} se trouve à l'index ${listNombre.indexOf(Number(index))} dans le tableau`)
            break;
        case "Tri":
            alert(`Voila la liste une fois triée :
                ${listNombre.sort()}`)
    }
}

function add (first, second) {
    let somme = Number(first) + Number(second);
    
    return somme;
}

function rtrn () {
    saluer(prenom)
    let result = add(prompt("Quel est le premier nombre ?"), prompt("Quel est le deuxième nombre ?"));

    alert(`La somme des deux fais ${result}`);
}

function registered () {
    alert("Les inscrits sont")
    for (prenom of registeredList) {
        alert(prenom)
    }
}

function registration () {
    let prenom = prompt("Confirmez votre prénom ?")
    registeredList.push(prenom)
    alert("Vous êtes bien inscrit !")
    alert("donc")
    registered()
}

function registre () {
    saluer(prenom)

    registered()

    if (confirm("Voulez vous vous inscrire ?")) {
        registration()
    } else {
        alert("Au revoir !")
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
const bouton12 = document.getElementById("exo12");
const bouton13 = document.getElementById("exo13");
const bouton14 = document.getElementById("exo14");


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

if(bouton12) {
    bouton12.addEventListener("click",rtrn)
}

if(bouton13) {
    bouton13.addEventListener("click",registre)
}

if(bouton14) {
    bouton14.addEventListener("click",)
}