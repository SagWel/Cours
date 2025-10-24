let liste = prompt("Donner une suite de nombres (séparés par des virgules)")

let tableau = liste.split(",").map(Number)

let max = Math.max(...tableau)
let min = Math.min(...tableau)
    

let somme = 0

for (const element of tableau){
    somme += element
}

let moyenne = somme / tableau.length


if (isNaN(moyenne)) {
    alert('Erreur !' + "\n" + 'Merci de faire une entrée dans le format : "1,2,3,4,5,ect ..."')
}
else {
    alert ( "La moyenne est de : " + moyenne + " !" + "\n" +
        "Le plus grand des nombres est : " + max + " !" + "\n" + 
        "Le plus petit des nombres est : " + min + " !")
}