
    // Voici les fonctions de lancements

    function identification () {
    let utilisateurs = ["Nicolas"];

let id = prompt("Merci de vous identifier ! Quel est votre nom ?");

if (utilisateurs.includes(id)) {
    alert("Bonjour, " + id + " ! Bon retour parmis nous !" + "\n" + "Cliquez pour commencer à jouer !");
    choix ()
}
else {
    let inscription = prompt("Bienvenu, " + id + " ! Souhaitez vous vous inscrire pour jouer ?" + "\n" + "Oui ou Non ?");
    
    if (inscription.toLowerCase() === "oui") {
        utilisateurs.push(id);
        alert("Merci de votre inscription !" + "\n" + "Cliquez pour commencer à jouer !");
        choix ();
    }
    else {
        alert("Au revoir !");
    }
    }
}

    function choix () {
        let choix = prompt("Que voulez vous faire ? Compter les voyelles d'une phrase, Calculer une moyenne, Inverser une suite de nombre ?" + "\n" + "(compter, moyenne ou reverse)")
        
        switch (choix) {
            case "compter":
                decompo();
                break;
            case "moyenne":
                moyenne();
                break;
            case "reverse":
                reverse();
                break;
            default:
                alert("Je n'ai pas compris votre choix ...");
        }
    }

    // Voici les fonctions pour les choix
function decompo () {
    const voyelles = ["a", "e", "i", "o", "u", "y", "à", "â", "é", "è", "ê", "î", "ï", "ô", "ù", "û", "ü"];
let count = 0;

let entree = prompt("Entrez un mot ou une phrase");

for (const caractere of entree) {
    if (voyelles.includes(caractere.toLowerCase())) {
        count++;
    }
}

alert("Le nombre de voyelles est de : " + count + " !");
}

function moyenne () {
    let liste = prompt("Donner une suite de nombres (séparés par des virgules)");

    let tableau = liste.split(",").map(Number);

    let max = Math.max(...tableau);
    let min = Math.min(...tableau);
        

    let somme = 0;

    for (const element of tableau){
        somme += element;
    }

    let moyenne = somme / tableau.length;


    if (isNaN(moyenne)) {
        alert('Erreur !' + "\n" + 'Merci de faire une entrée dans le format : "1,2,3,4,5,ect ..."');
    }
    else {
        alert ( "La moyenne est de : " + moyenne + " !" + "\n" +
            "Le plus grand des nombres est : " + max + " !" + "\n" + 
            "Le plus petit des nombres est : " + min + " !");
    }
}

function reverse () {
    let liste = prompt("Donner une suite de nombres (séparés par des virgules)");

    let tableau = liste.split(",").map(Number);
    let reverse = [];

    for (let i = tableau.length - 1; i >= 0; i--) {
        reverse.push(tableau[i]);
    };

    alert("Inversé ce donne :"+ "\n" + reverse);
}

identification();