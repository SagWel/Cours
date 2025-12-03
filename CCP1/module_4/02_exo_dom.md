# Manipulation du DOM
## Niveau 1 – Sélection et modification du DOM
### Exercice 1 – Changer le contenu d’un élément

Objectif : utiliser getElementById et textContent.

#### Enoncé :
Dans un fichier HTML contenant :

```html
<h3 id="titre">Bonjour !</h3>
```

Écris un script JS qui change le texte du titre en "Bienvenue dans la formation DWWM !".

### Exercice 2 – Modifier le style d’un élément

Objectif : utiliser la propriété .style.

#### Enoncé :
Sur cette structure :
```html
<p id="message">Ce texte doit devenir rouge et en gras</p>
```
Écris un script JS qui change la couleur du texte en rouge et la met en gras.

### Exercice 3 – Sélection multiple

Objectif : utiliser querySelectorAll.

#### Enoncé :
Avec ce code :

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```
Écris un script qui met tous les éléments `<li>` en bleu.

## Niveau 2 – Création et suppression d’éléments

### Exercice 4 – Ajouter un élément à la page

Objectif : utiliser createElement et appendChild.

#### Enoncé :
Crée un paragraphe avec le texte :

    "Le DOM est puissant !"
    et ajoute-le à la fin du body.

### Exercice 5 – Ajouter un élément à une liste

Objectif : manipuler un conteneur existant.

#### Enoncé :
À partir de :

```html
<ul id="liste">
  <li>Pomme</li>
  <li>Banane</li>
</ul>
```
Ajoute un nouvel élément `<li>` contenant le texte "Fraise".

### Exercice 6 – Supprimer un élément

Objectif : utiliser remove().

#### Enoncé :
Supprime le deuxième élément `<li>` de la liste ci-dessus.

## Niveau 3 – Gestion des événements
### Exercice 7 – Clic sur un bouton

Objectif : utiliser addEventListener.

#### Enoncé :
Avec :
```html
<button id="btn">Clique-moi</button>
<p id="resultat"></p>
```
Écris un script JS qui affiche **"Bouton cliqué !"** dans le paragraphe après chaque clic.

### Exercice 8 – Changer la couleur d’un bloc au clic

Objectif : modifier dynamiquement les styles.

#### Enoncé :
Avec :
```html
<div id="carre" style="width:100px; height:100px; background-color:gray;"></div>
```
- Quand on clique sur le carré, il devient vert.
- Quand on reclique, il redevient gris.

### Exercice 9 – Afficher le contenu d’un input

Objectif : manipuler la valeur d’un champ de formulaire.

#### Enoncé :
Avec :
```html
<input type="text" id="prenom" placeholder="Entrez votre prénom">
<button id="afficherExo9">Afficher</button>
<p id="resultatExo9"></p>
```
Au clic sur le bouton, affiche dans le paragraphe :

    "Bonjour, [prénom] !"
## Niveau 4 – Manipulations dynamiques avancées
### Exercice 10 – Générer une liste depuis un tableau JS

Objectif : boucles + createElement.

#### Enoncé :
À partir du tableau :
```js
const fruits = ["Pomme", "Banane", "Fraise", "Orange"];
```
Crée dynamiquement une liste `<ul>` avec un `<li>` par fruit.

### Exercice 11 – Compteur interactif

Objectif : gestion d’état avec le DOM.

#### Enoncé :
HTML :
```html
<button id="plus">+</button>
<span id="compteur">0</span>
<button id="moins">-</button>
```
JS :
- Au clic sur “+”, le compteur augmente de 1.
- Au clic sur “–”, il diminue de 1.

### Exercice 12 – Liste dynamique avec suppression

Objectif : créer plusieurs éléments et gérer les événements associés.

#### Enoncé :
Crée une liste à partir d’un champ texte et d’un bouton :
```html
<input id="item" type="text" placeholder="Nouvel élément">
<button id="ajouter">Ajouter</button>
<ul id="liste"></ul>
```
Quand on clique sur “Ajouter”, l’élément saisi apparaît dans la liste avec un bouton “❌” à côté pour le supprimer.

## Niveau 5 – Mini-projet DOM
### Exercice 13 – Mini Todo List

Objectif : synthèse complète (sélection, création, suppression, événements).

#### Enoncé :
- Crée une mini application Todo :
- un champ texte pour ajouter une tâche ;
- une liste des tâches ;
- un bouton pour marquer comme “faite” (avec une classe CSS done qui barre le texte) ;
- un bouton pour supprimer la tâche.