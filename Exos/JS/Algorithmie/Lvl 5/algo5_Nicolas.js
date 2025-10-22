// Voici les fonctions
function anagramme () {
    let mot1 = prompt("Entrez un mot");
    let mot2 = prompt("Entrez un autre mot");

    if (mot1.length === mot2.length) {
        let verif = true
        for (let lettre of mot1) {
            if (mot2.includes(lettre)) {
                verif = true
            } else {
                verif = false;
            }
        }
        if (verif) {
            alert("C'est un anagramme !");
        } else {
            alert("Ce n'est pas un anagramme !");
        }
    } else {
        alert("Ce n'est pas un anagramme !");
    }
}

function compteur () {
    let phrase = prompt("Entrez une phrase")

    let mot = phrase.split(" ")

    alert(`La pharse contient ${mot.length} mots`)
}

function tri () {
    let phrase = prompt("Entrez une phrase")

    let mot = phrase.split(" ")

    let tri = mot.toSorted((a, b) => b.length - a.length)

    alert(tri)

}

function parenthèses () {
    let chaine = prompt("Entrez une chaine de caractère")

    let ouvrant = chaine.replaceAll(/[^(]/g, "")
    let fermant = chaine.replaceAll(/[^)]/g, "")
    console.log(ouvrant);
    console.log(fermant);
    
    

    if (ouvrant.length === fermant.length) {
        alert("C'est ok")
    } else {
        alert("une parenthèse est manquante")
    }

}

function mystere () {
    const mystere = Math.floor(Math.random() * 100) + 1;

    let entree = parseInt(prompt("Entrez un nombre entre 1 et 100"));

    while (entree !== mystere) {
        if (entree < mystere) {
            entree = parseInt(prompt("C'est plus !"));
        } else if (entree > mystere) {
            entree = parseInt(prompt("C'est moins !"));
        }
    }

    alert(`C'est gagné !!! le chiffre mystère était ${mystere}`)
}

// Voici le menu
let choix = prompt(`Que voulez-vous faire ?
    Tester des annagrammes (Anagramme) ?
    Compter les mots d'une phrase (Compteur) ?
    Trier les mots d'une phrase (Tri) ?
    Verifier les parenthèse d'une chaine de caractère (Parenthèse) ?
    Jouer au nombre mistère (Mystere) ?`)

switch (choix) {
    case "Anagramme":
        anagramme();
        break;
    case "Compteur":
        compteur();
        break;
    case "Tri":
        tri();
        break;
    case "Parenthèse":
        parenthèses();
        break;
    case "Mystere":
        mystere();
        break;
    default:
        alert("Choix invalide");
}