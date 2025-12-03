# La manipulation du DOM en JavaScript

Le DOM (Document Object Model) est une interface qui permet aux scripts d'accéder et de manipuler dynamiquement le contenu, la structure et le style d’un document HTML.
## 1. Sélection des éléments HTML
### 1.1 document.getElementById(id)

Sélectionne un élément par son identifiant.

`const titre = document.getElementById('monTitre');`

### 1.2 document.querySelector(selecteur)

Renvoie le premier élément correspondant au sélecteur CSS.

```js
const paragraphe = document.querySelector('.monParagraphe');
```
### 1.3 document.querySelectorAll(selecteur)

Renvoie tous les éléments correspondants (NodeList).
```js
const boutons = document.querySelectorAll('button');
```
## 2. Modification des éléments HTML
### 2.1 Modifier le texte
```js
titre.textContent = "Nouveau titre";
```
### 2.2 Modifier le HTML interne
```js
paragraphe.innerHTML = "<strong>Nouveau texte</strong>";
```
### 2.3 Modifier les attributs
```js
paragraphe.setAttribute('class', 'nouvelleClasse');
```
### 2.4 Modifier le style
```js
paragraphe.style.color = 'blue';
```
## 3. Création et insertion d’éléments
### 3.1 document.createElement()

Crée un nouvel élément HTML.
```js
const nouveauDiv = document.createElement('div');
```
### 3.2 appendChild()

Ajoute un élément à la fin d’un parent.
```js
document.body.appendChild(nouveauDiv);
```
### 3.3 insertBefore(nouvelElement, elementExistant)

Insère un élément avant un autre élément.
```js
const parent = document.getElementById('conteneur');
const enfant = document.getElementById('ancien');
parent.insertBefore(nouveauDiv, enfant);
```
## 4. Suppression des éléments
### 4.1 removeChild()

Supprime un enfant d’un élément parent.
```js
parent.removeChild(enfant);
```
## 4.2 .remove()

Supprime directement un élément du DOM.
```js
enfant.remove();
```
## 5. Gestion des événements
### 5.1 addEventListener()

Permet d'écouter et de réagir aux événements (clics, clavier, etc.).
```js
bouton.addEventListener('click', function () {
  alert("Vous avez cliqué !");
});
```
### 5.2 Exemples de types d'événements

    click : clic souris

    mouseover : survol

    keydown : touche du clavier pressée

    submit : soumission de formulaire

Exemple avec le clavier :
```js
document.addEventListener('keydown', function (event) {
  console.log(`Touche appuyée : ${event.key}`);
});
```
### Exemple complet
```html
<button id="ajouter">Ajouter un paragraphe</button>
<div id="conteneur"></div>

<script>
  const bouton = document.getElementById('ajouter');
  const conteneur = document.getElementById('conteneur');

  bouton.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = "Nouveau paragraphe ajouté.";
    conteneur.appendChild(p);

    p.addEventListener('click', () => {
      p.remove();
    });
  });
</script>
```

#### Résumé des méthodes essentielles
    Fonction                Rôle

    getElementById()	    Sélection par ID
    querySelector()	        Sélection par sélecteur CSS
    createElement()	        Création d’un nouvel élément
    appendChild()	        Ajout à la fin
    insertBefore()	        Insertion avant un élément existant
    removeChild()/.remove()	Suppression d’un élément
    addEventListener()	    Ajout d’un gestionnaire d’événement