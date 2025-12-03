# Les classes en Javascript 
## Exercice 1 — Classe simple : Créer une classe Personne

### Objectif : Découvrir la syntaxe d’une classe et de son constructeur.

Énoncé :

Crée une classe `Personne` avec :
- un constructeur prenant `prenom` et `age` ;
- une méthode `sePresenter()` qui affiche dans la console :
```
Bonjour, je m'appelle <prenom> et j'ai <age> ans.
```
Exemple :
```js
const p1 = new Personne("Alice", 25);
p1.sePresenter(); // Bonjour, je m'appelle Alice et j'ai 25 ans.
```

## Exercice 2 — Méthodes et mise à jour : Classe Voiture

### Objectif : Manipuler des méthodes et des propriétés internes.

Énoncé :

Crée une classe `Voiture` avec :
- des propriétés `marque`, `modele`, `kilometrage` ;
- une méthode `rouler(distance)` qui augmente le `kilométrage` ;
- une méthode `afficherInfos()` qui affiche :
`"Voiture : <marque> <modele>, <kilometrage> km"`

Exemple :
```js
const v1 = new Voiture("Renault", "Clio", 15000);
v1.rouler(200);
v1.afficherInfos(); // Voiture : Renault Clio, 15200 km
```
## Exercice 3 — Héritage : Classe Employe et Manager

### Objectif : Comprendre l’héritage entre classes (extends, super).

Énoncé :

Crée :
- une classe `Employe` avec `nom`, `poste`, `salaire` ;
- une méthode `afficherSalaire()` ;
- une classe `Manager` qui hérite de `Employe`, ajoute une propriété `equipe` (tableau de noms) et une méthode `afficherEquipe()`.

Exemple :
```js
const m1 = new Manager("Claire", "Chef de projet", 4000, ["Léo", "Nina", "Sam"]);
m1.afficherSalaire(); // Claire gagne 4000 € en tant que Chef de projet.
m1.afficherEquipe();  // Équipe de Claire : Léo, Nina, Sam
```
## Exercice 4 — Encapsulation et getters/setters

### Objectif : Utiliser les accesseurs (get et set).

Énoncé :

Crée une classe CompteBancaire avec :
- une propriété privée `_solde` (par convention) ;
- une méthode `deposer(montant)` ;
- une méthode `retirer(montant)` (vérifie que le solde reste positif) ;
- un getter solde qui retourne le solde actuel.

Exemple :
```js
const c1 = new CompteBancaire();
c1.deposer(100);
c1.retirer(30);
console.log(c1.solde); // 70
```

## Exercice 5 — Polymorphisme : Classe Forme et sous-classes

### Objectif : Appliquer le concept de polymorphisme avec des méthodes redéfinies.

Énoncé :

Crée une classe Forme avec une méthode `surface()` renvoyant "Surface non définie".

Puis crée deux sous-classes :
- `Carre` (avec côté) → redéfinit surface() ;
- `Cercle` (avec rayon) → redéfinit surface().

Exemple :

```js
const f1 = new Carre(4);
console.log(f1.surface()); // 16

const f2 = new Cercle(3);
console.log(f2.surface()); // 28.27 (approx)
```

## Exercice 6 — Classe avec collection d’objets : Bibliotheque

### Objectif : Gérer des objets à l’intérieur d’un autre objet.

Énoncé :

Crée deux classes :
- `Livre` : avec `titre`, `auteur`, `disponible` (booléen) ;
- `Bibliotheque` : avec un tableau livres et des méthodes :
    - `ajouterLivre(livre)`
    - `afficherLivres()`
    - `emprunter(titre)` (passe le livre en non disponible)

Exemple :
```js
const biblio = new Bibliotheque();
biblio.ajouterLivre(new Livre("1984", "George Orwell", true));
biblio.ajouterLivre(new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", true));
biblio.emprunter("1984");
biblio.afficherLivres();
```

## Exercice 7 — Classe statique et utilitaire

### Objectif : Découvrir les méthodes statiques.

Énoncé :

Crée une classe MathUtils avec des méthodes statiques :
- `addition(a, b)`
- `soustraction(a, b)`
- `aireCercle(rayon)`

Exemple :
```js
console.log(MathUtils.addition(5, 3));  // 8
console.log(MathUtils.aireCercle(2));   // 12.56
```

## Exercice 8 — Mini projet : Gestion d’une école

### Objectif : Mobiliser tous les concepts précédents.

Énoncé :

Crée les classes suivantes :
- `Etudiant` : `nom`, `age`, `notes[]`, méthode `moyenne()`.
- `Professeur` : `nom`, `matiere`.
- `Ecole` : contient des tableaux etudiants et professeurs, avec :
    - `ajouterEtudiant(etudiant)`
    - `ajouterProfesseur(professeur)`
    - `afficherEtudiants() et afficherProfesseurs()`