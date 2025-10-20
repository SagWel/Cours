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
}

const bouton3 = document.getElementById("exo3");

if(bouton3) {
    bouton3.addEventListener("click",comparaison)
}