// Voici les fonctions 
function palindrome () {
    let entree = prompt("Entrez une chaine de caractère");

    const regexPonctuation = /[.,\/#!$%\^&\*;:{}='+\-_`~()]/g;

    console.log(entree);
    

    let entree_low = entree.toLowerCase();
    let entree_nettoyee = entree_low.replace(regexPonctuation, "");
    console.log(entree_nettoyee);
    
    let reverse = entree_nettoyee.split("").reverse().join("");
    console.log(reverse);
    
    
    

    if (entree_nettoyee === reverse) {
        alert("C'est un palindrome !");
    } else {
        alert("Ce n'est pas un palindrome !");
    }
};

function factorielle () {
    let nombre = prompt("Entrez un nombre");

        let result = nombre;

    for ( let i = 1; i < nombre; i++ ) {
        result *= (nombre - i);
        console.log(result);
    };

    alert(`La factorielle de ${nombre} est ${result}`);
}

function fibonacciIteratif(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let suite = [0, 1];

  for (let i = 2; i < n; i++) {
    let nouveauTerme = suite[i - 1] + suite[i - 2];
    suite.push(nouveauTerme);
  }

  return suite;
}

function fibonaccirun () {
    let n = prompt("Choisir un nombre")

    alert(fibonacciIteratif(n));
}

function motLong () {
    let p = prompt("Entrez une phrase");

    let Mots = p.split(" ");
    console.log(Mots);
    let maxMot = ""
    
    for (let mot of Mots) {
        if (mot.length > maxMot.length) {
            maxMot = mot;
        }
    };

    alert(`le mot le plus long de la phrase est : ${maxMot}`);
};

function estPremier() {
    let nombre = prompt("Entrez un nombre");
    let premier = true;
    let limite = Math.sqrt(Number(nombre));
  
    if (nombre <= 1) {
        alert(!premier);
    } else if (Number(nombre) === 2) {
        alert(premier);
    } else if (nombre % 2 === 0) {
        alert(!premier);
    } else {
        for (let i = 3; i <= limite; i += 2) {
          if (nombre % i === 0) {
            alert(!premier);
          }
        }
        alert(premier);
    }
}

// Voici le menu
let choix = prompt(`Que souhaitez vous faire ?
    Vérifier si une chaine de caractère est un palindrome (Palindrome) ?
    Calculer la factorielle d'un nombre (Factorielle) ?
    Calculer la suite de Fibonacci (Fibonacci) ?
    Savoir quel est le mot le plus long d'une phrase (Long) ?
    Vérifier si un nombre est premier (Premier) ?`)

switch (choix) {
    case "Palindrome":
        palindrome();
        break;
    case "Factorielle":
        factorielle();
        break;
    case "Fibonacci":
        fibonaccirun();
        break;
    case "Long":
        motLong();
        break;
    case "Premier":
        estPremier();
        break;
    default:
        alert("Je n'ai pas compris votre choix ...");
}