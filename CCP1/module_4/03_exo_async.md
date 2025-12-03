# COURS-EXERCICES : Asynchrone en JavaScript

## Thèmes : Callbacks, Promises et Async/Await

Exercice a rendre dans les fichiers 03_exo_async_[prenom].js et 03_exo_async_[prenom].html

### Objectif général

Comprendre les trois façons principales de gérer du code asynchrone :
- Les callbacks
- Les promises
- Le mot-clé async/await

## Partie 1 : Callbacks
### Exercice 1 : Affichage différé

Crée une fonction afficherMessage qui affiche un message après 2 secondes grâce à setTimeout.

Appelle cette fonction avec le message `"Bonjour DWWM !"`.

```js
// À compléter
function afficherMessage(message) {
    // ...
}

afficherMessage("Bonjour DWWM !");
```

## Exercice 2 : Chaînage de callbacks

Crée trois fonctions :
- etape1 : affiche "Étape 1 terminée" après 1 seconde
- etape2 : affiche "Étape 2 terminée" après 1 seconde
- etape3 : affiche "Étape 3 terminée" après 1 seconde

Appelle-les les unes après les autres grâce à des **callbacks imbriqués**.

## Partie 2 : Promises
### Exercice 3 : Promesse résolue

Crée une fonction telechargerFichier() qui renvoie une Promise.

Après 2 secondes, la promesse doit être résolue avec le message `"Fichier téléchargé avec succès"`.

### Exercice 4 : Promesse rejetée

Modifie la fonction précédente pour **rejeter** la promesse 50 % du temps avec un message d’erreur `"Échec du téléchargement"`.


### Exercice 5 : Chaînage de Promises

Crée trois fonctions retournant des promesses (`etape1`, `etape2`, `etape3`) qui se résolvent après 1 seconde chacune.

Enchaîne-les pour afficher les trois messages dans l’ordre.

## Partie 3 : Async / Await
### Exercice 6 : Conversion en async/await

Reprends le code de l’exercice précédent, mais utilise `async/await` pour simplifier la syntaxe.

### Exercice 7 : Gestion d’erreur avec async/await

Modifie la fonction suivante pour qu’elle utilise `try...catch` et affiche un message d’erreur si la promesse échoue.
```js
async function lancerTelechargement() {
    // À compléter
}

telechargerFichier();
```

_Pour simuler une erreur, vous pouvez utiliser `const success = Math.random() > 0.5;`_