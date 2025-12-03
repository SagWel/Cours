# Les objets en JavaScript
## Objectifs pédagogiques

À la fin de ce cours, vous serez capable de :
- Comprendre ce qu’est un objet en JavaScript
- Créer, modifier et parcourir des objets
- Utiliser les méthodes d’un objet
- Comprendre la notion de this
- Créer vos propres constructeurs et classes

## 1. Qu’est-ce qu’un objet ?

En JavaScript, un objet est une collection de propriétés.
Chaque propriété est une paire clé/valeur.

Les valeurs peuvent être de tout type : nombre, chaîne, tableau, fonction, autre objet, etc.

```js
const user = {
  firstname: "Alice",
  lastname: "Martin",
  age: 25,
  isAdmin: false
};
```
Ici :

`firstname`, `lastname`, `age` et `isAdmin` sont des clés (ou propriétés)

`"Alice"`, `"Martin"`, `25` et `false` sont leurs valeurs

## 2. Accéder aux propriétés
### a. Avec la notation pointée
```js
console.log(user.firstname);  // "Alice"
```

### b. Avec la notation entre crochets
```js
console.log(user["lastname"]); // "Martin"
```
- La notation entre crochets est utile quand la clé est dynamique :

```js
const key = "age";
console.log(user[key]); // 25
```
## 3. Modifier, ajouter ou supprimer une propriété
### Modifier :
```js
user.age = 26;
```
### Ajouter :
```js
user.email = "alice.martin@example.com";
```
### Supprimer :
```js
delete user.isAdmin;
```

## 4. Parcourir un objet

Avec une boucle `for...in`
```js
for (let key in user) {
  console.log(key + " : " + user[key]);
}
```
    Cela affiche toutes les propriétés et leurs valeurs.

## 5. Les méthodes d’un objet

Une méthode est une `fonction stockée dans une propriété`.

```js
const car = {
  brand: "Peugeot",
  model: "208",
  start: function() {
    console.log("La voiture démarre 🚗");
  }
};

car.start(); // "La voiture démarre 🚗"
```
**Raccourci moderne :**
```js
const car2 = {
  brand: "Renault",
  model: "Clio",
  start() {
    console.log("Démarrage...");
  }
};
```

## 6. Le mot-clé this
`this` représente **l’objet courant** (celui dans lequel on se trouve).
```js
const user = {
  firstname: "Bob",
  lastname: "Durand",
  fullname() {
    return this.firstname + " " + this.lastname;
  }
};

console.log(user.fullname()); // "Bob Durand"
```
## 7. Les objets imbriqués
Un objet peut contenir d’autres objets :
```js
const student = {
  name: "Sarah",
  age: 22,
  address: {
    city: "Lyon",
    zip: "69000"
  }
};

console.log(student.address.city); // "Lyon"
```

## 8. Créer des objets dynamiquement
### Avec un constructeur natif :
```js
const person = new Object();
person.name = "John";
person.age = 30;
```
### Avec une fonction constructeur :
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Anna", 28);
console.log(p1.name); // "Anna"
```
## 9. Les classes (syntaxe moderne ES6)
Les classes sont une écriture plus claire pour créer plusieurs objets similaires.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Bonjour, je m'appelle ${this.name}`);
  }
}

const user1 = new Person("Léo", 21);
user1.greet(); // "Bonjour, je m'appelle Léo"
```

## 10. Les objets et les tableaux
Les objets et les tableaux sont souvent utilisés ensemble.
```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Claire", age: 22 }
];

users.forEach(user => {
  console.log(`${user.name} a ${user.age} ans`);
});
```

## 11. Méthodes utiles de l’objet `Object`

| Méthode               | Description                         | Exemple                |
| --------------------- | ----------------------------------- | ---------------------- |
| `Object.keys(obj)`    | Retourne un tableau des clés        | `Object.keys(user)`    |
| `Object.values(obj)`  | Retourne un tableau des valeurs     | `Object.values(user)`  |
| `Object.entries(obj)` | Retourne un tableau `[clé, valeur]` | `Object.entries(user)` |

## 12. Exemple complet

```js
const book = {
  title: "JavaScript pour les débutants",
  author: "Jean Dupont",
  pages: 250,
  read() {
    console.log(`Lecture de ${this.title} par ${this.author}`);
  }
};

book.read();
```

