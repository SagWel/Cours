let liste = prompt("Donner une suite de nombres (séparés par des virgules)")

let tableau = liste.split(",").map(Number)
let reverse = []

for (let i = tableau.length - 1; i >= 0; i--) {
    reverse.push(tableau[i])
}

alert(reverse)