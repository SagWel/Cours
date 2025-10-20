function identite () {
    let prenom = prompt("Quel est votre nom ? ");
    let age = prompt("Quel âge avez vous ? ");
    let ville = prompt("Dons quelle ville habitez vous ? ");

alert(`Bonjour ${prenom}, vous avez ${age} ans et vous habitez à ${ville}`)
};

const bouton = document.getElementById("exo1");

if (bouton) {
    bouton.addEventListener("click",identite)
};