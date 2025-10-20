function identite () {
    let prenom = prompt("Quel est votre nom ? ");
    let age = prompt("Quel âge avez vous ? ");
    let ville = prompt("Dons quelle ville habitez vous ? ");

alert(`Bonjour ${prenom}, vous avez ${age} ans et vous habitez à ${ville}`)
};

function calcul () {
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
    let temperature = (Number(prompt("Quelle est la température ?")) >= 25 ? "Il fais chaud !" : "Il fais froid !")
    
    alert(temperature)
};

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