# Les bases du langage JavaScript
## Objectifs pédagogiques

- À la fin de ce cours, vous serez capable de :
- Déclarer et manipuler des variables en JavaScript.
- Utiliser les opérateurs mathématiques et de comparaison.
- Créer des conditions et des boucles.
- Utiliser les littéraux de gabarits (template literals) pour afficher du texte dynamique.
- Manipuler des tableaux (arrays) et leurs méthodes principales.
- Écrire et appeler des fonctions avec paramètres et arguments.

## 1. Introduction à JavaScript

JavaScript est un langage de programmation exécuté principalement dans le navigateur, permettant :
- d’ajouter de l’interactivité aux pages web ;
- de manipuler le DOM (Document Object Model) ;
- de créer des applications dynamiques côté client (et aussi côté serveur avec Node.js).

JavaScript est **interprété, faiblement typé et orienté objet**.
## 2. Les variables

Une **variable** permet de **stocker une valeur** (nombre, texte, booléen…).
### Déclaration de variable :
```js
let prenom = "Kilian";
const PI = 3.14;
var age = 25;
```

**Différences :**

- `let` : variable modifiable, portée bloc.
- `const` : constante (non modifiable).
- `var` : ancienne syntaxe (à éviter, portée globale ou fonctionnelle).

**Exemples :**
```js
let nom = "Dupont";
let age = 30;
console.log("Nom :", nom);
console.log("Âge :", age);
```
## 3. Les opérateurs mathématiques

| Opérateur | Signification  | Exemple  | Résultat |
| --------- | -------------- | -------- | -------- |
| `+`       | addition       | `5 + 3`  | `8`      |
| `-`       | soustraction   | `10 - 4` | `6`      |
| `*`       | multiplication | `2 * 6`  | `12`     |
| `/`       | division       | `10 / 2` | `5`      |
| `%`       | modulo (reste) | `10 % 3` | `1`      |
| `**`      | puissance      | `2 ** 3` | `8`      |

```js
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

## 4. Les opérateurs de comparaison
| Opérateur | Signification                   | Exemple     | Résultat |
| --------- | ------------------------------- | ----------- | -------- |
| `==`      | égalité (valeur)                | `5 == "5"`  | `true`   |
| `===`     | stricte égalité (valeur + type) | `5 === "5"` | `false`  |
| `!=`      | différence (valeur)             | `5 != "5"`  | `false`  |
| `!==`     | stricte différence              | `5 !== "5"` | `true`   |
| `>`       | supérieur à                     | `10 > 5`    | `true`   |
| `<`       | inférieur à                     | `10 < 5`    | `false`  |
| `>=`      | supérieur ou égal               | `5 >= 5`    | `true`   |
| `<=`      | inférieur ou égal               | `5 <= 4`    | `false`  |

## 5. Les conditions

Les conditions permettent d’exécuter du code seulement si une expression est vraie.

**Exemple :**
```js
let age = 18;

if (age >= 18) {
  console.log("Tu es majeur");
} else {
  console.log("Tu es mineur");
}
```
**Autres formes :**
```js
let heure = 10;

if (heure < 12) {
  console.log("Bonjour");
} else if (heure < 18) {
  console.log("Bon après-midi");
} else {
  console.log("Bonsoir");
}
```
**Opérateur ternaire :**
```js
let message = (age >= 18) ? "Majeur" : "Mineur";
console.log(message);
```
## 6. Les boucles

Les boucles permettent de répéter un bloc de code plusieurs fois.

### Boucle for
```js 
for (let i = 0; i < 5; i++) {
  console.log("Itération :", i);
}
```

### Boucle while
```js
let compteur = 0;
while (compteur < 3) {
  console.log("Compteur :", compteur);
  compteur++;
}
```
### Boucle for...of (pour les tableaux)
```js
let fruits = ["pomme", "banane", "cerise"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

## 7. Les template literals (littéraux de gabarits)

Permettent d’insérer des variables directement dans une chaîne de texte grâce aux backticks (`).

**Exemple :**
```js
let nom = "Alice";
let age = 25;
console.log(`Bonjour ${nom}, tu as ${age} ans.`);
```
Plus pratique que :
```js
console.log("Bonjour " + nom + ", tu as " + age + " ans.");
```
## 8. Les tableaux (Arrays)
Un **tableau** permet de stocker plusieurs valeurs dans une seule variable.
### Déclaration :
```js
let fruits = ["pomme", "banane", "cerise"];
```
### Accès aux éléments :
```js
console.log(fruits[0]); // "pomme"
console.log(fruits.length); // 3
```

### Méthodes utiles :
| Méthode      | Description                             | Exemple                                       |
| ------------ | --------------------------------------- | --------------------------------------------- |
| `push()`     | ajoute un élément à la fin              | `fruits.push("orange")`                       |
| `pop()`      | supprime le dernier élément             | `fruits.pop()`                                |
| `shift()`    | supprime le premier élément             | `fruits.shift()`                              |
| `unshift()`  | ajoute un élément au début              | `fruits.unshift("kiwi")`                      |
| `indexOf()`  | donne l’index d’un élément              | `fruits.indexOf("banane")`                    |
| `includes()` | teste la présence d’un élément          | `fruits.includes("cerise")`                   |
| `forEach()`  | exécute une fonction sur chaque élément | `fruits.forEach(fruit => console.log(fruit))` |

## 9. Les fonctions
Une **fonction** regroupe du code réutilisable.
### Déclaration :
```js
function direBonjour() {
  console.log("Bonjour !");
}
```
### Appel :
```js
direBonjour(); // affiche "Bonjour !"
```
## 10. Fonctions avec arguments et paramètres
**Exemple simple :**
```js
function saluer(prenom) {
  console.log(`Bonjour ${prenom} !`);
}

saluer("Alice");
saluer("Bob");
```
**Exemple avec retour de valeur :**
```js
function addition(a, b) {
  return a + b;
}

let resultat = addition(5, 3);
console.log(resultat); // 8
```
## 11. Résumé global

| Notion    | Exemple clé                        |
| --------- | ---------------------------------- |
| Variable  | `let x = 10;`                      |
| Condition | `if (x > 5) {...}`                 |
| Boucle    | `for (let i=0; i<5; i++) {...}`    |
| Template  | `` `Bonjour ${nom}` ``             |
| Tableau   | `let t = ["a","b","c"];`           |
| Fonction  | `function nom(a,b){ return a+b; }` |
