const voyelles = ["a", "e", "i", "o", "u", "y", "à", "â", "é", "è", "ê", "î", "ï", "ô", "ù", "û", "ü"];
let count = 0;

let entree = prompt("Entrez un mot ou une phrase");

for (const caractere of entree) {
    if (voyelles.includes(caractere.toLowerCase())) {
        count++;
    }
}

alert("Le nombre de voyelles est de : " + count + " !");