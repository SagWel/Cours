# Cours sur les Objets en JavaScript
## 1. Qu'est-ce qu'un objet en JavaScript ?

En JavaScript, un objet est une collection de paires clé-valeur. C’est un peu comme un dictionnaire ou un tableau associatif dans d’autres langages.

Chaque clé (ou propriété) est une chaîne de caractères (ou un symbole), et elle est associée à une valeur, qui peut être de n’importe quel type (nombre, chaîne, fonction, tableau, autre objet…).
```js
let personne = {
  nom: "Alice",
  age: 25,
  estEtudiant: true
};
```
## 2. Créer un objet
a. Littéral d'objet (le plus courant)
```js
let voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2020
};
```
b. Avec le constructeur Object()
```js
let utilisateur = new Object();
utilisateur.nom = "Jean";
utilisateur.age = 30;
```
## 3. Accéder aux propriétés
a. Notation par point
```js
console.log(personne.nom); // "Alice"
```
b. Notation par crochets
```js
console.log(personne["age"]); // 25
```
    Utile quand la propriété a un nom dynamique ou non valide :
```js
let clé = "nom";
console.log(personne[clé]); // "Alice"
```
## 4. Modifier ou ajouter des propriétés
```js
personne.age = 26; // modifier
personne.ville = "Paris"; // ajouter
```
## 5. Supprimer une propriété
```js
delete personne.estEtudiant;
```
## 6. Parcourir un objet
a. Avec for...in
```js
for (let clé in personne) {
  console.log(clé + ": " + personne[clé]);
}
```
## 7. Méthodes d’un objet

Une méthode est une fonction stockée dans une propriété d’un objet.
```js
let calculatrice = {
  addition: function(a, b) {
    return a + b;
  }
};

console.log(calculatrice.addition(3, 4)); // 7
```
→ Depuis ES6, on peut raccourcir la syntaxe :
```js
let calculatrice = {
  addition(a, b) {
    return a + b;
  }
};
```
## 8. Objets imbriqués
```js
let utilisateur = {
  nom: "Sophie",
  adresse: {
    rue: "10 rue des Lilas",
    ville: "Lyon"
  }
};
console.log(utilisateur.adresse.ville); // "Lyon"
```

## 9. Le mot-clé this

Dans une méthode, this fait référence à l’objet courant.
```js
let personne = {
  nom: "Lucas",
  saluer() {
    console.log("Bonjour, je suis " + this.nom);
  }
};

personne.saluer(); // "Bonjour, je suis Lucas"
```
## 10. Objets et classes (intro rapide)

Depuis ES6, on peut utiliser la syntaxe class pour créer des objets avec un "modèle" (comme en POO).
```js
class Animal {
  constructor(nom, espece) {
    this.nom = nom;
    this.espece = espece;
  }

  parler() {
    console.log(`${this.nom} est un ${this.espece}`);
  }
}

let chien = new Animal("Rex", "chien");
chien.parler(); // "Rex est un chien"
```
## 11. Fonctions utiles pour les objets
```js
Object.keys(obj);   // Liste des clés
Object.values(obj); // Liste des valeurs
Object.entries(obj); // Liste [clé, valeur]
```