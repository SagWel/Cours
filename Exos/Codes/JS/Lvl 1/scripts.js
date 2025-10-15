
    // Voici les fonctions de lancements
function noms () {
    let nom = prompt("Merci de vous identifier ! Quel est votre nom ?");
    
    alert("Bonjour, " + nom + " ! Jouons avec les nombres !");
};


function choix () {
    let choix = prompt('Que voulez vous faire ? Additioner (jusqu\'au nombre choisi), Comparer, Multiplications (tables jusqu\'à 10) ou Jouez à "Pair ou Impair" ?');
    
    switch (choix) {
        case "Additioner":
            addition();
            break;
        case "Comparer":
            comparateur();
        break;
        case "Paire ou Impaire":
            pair_impaire();
        break;
        case "Multiplications":
            multiplication();
        break;
        default:
            alert("Je n'ai pas compris votre choix ...");
    };
};
                
    // Voici les fonctions pour les choix
function addition () {
    let nombrefin = prompt("Entrez un nombre");
    
    let addition = 0;
    
    for (let i = 1; i <= nombrefin; i++) {
        addition += i;
    }
    
    alert("l'addition des nombres jusqu'à " + nombrefin + " est de : " + addition);
};

function comparateur () {
    let nombre1 = prompt("Entrez un nombre");
    let nombre2 = prompt("Entrez un deuxième nombre");

    if (nombre1 > nombre2) {
        alert(nombre1 + " est superieur à " + nombre2);
    }
    else if (nombre2 > nombre1) {
        alert(nombre2 + " est superieur à " + nombre1);
    }
    else {
        alert("Les deux nombres sont égaux");
    ;}
};


function pair_impair () {
    let nombre = prompt("Entrez un nombre");

    if (nombre % 2  === 0) {
        alert("Ce nombre est pair");
    }
    else {
        alert("Ce nombre est impair");
    };
};

function multiplication () {
    let nombre = prompt("Entrez un nombre");

    alert(nombre + " x 1" + " = " + nombre*1 + "\n" + 
        nombre + " x 2" + " = " + nombre*2 + "\n" +
        nombre + " x 3" + " = " + nombre*3 + "\n" +
        nombre + " x 4" + " = " + nombre*4  + "\n" +
        nombre + " x 5" + " = " + nombre*5 + "\n" +
        nombre + " x 6" + " = " + nombre*6 + "\n" +
        nombre + " x 7" + " = " + nombre*7 + "\n" +
        nombre + " x 8" + " = " + nombre*8 + "\n" +
        nombre + " x 9" + " = " + nombre*9 + "\n" +
        nombre + " x 10" + " = " + nombre*10);
};

noms();
choix();