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

const bouton2 = document.getElementById("exo2");

if (bouton2) {
    bouton2.addEventListener("click",calcul)
};