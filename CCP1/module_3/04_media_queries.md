# Les Media Queries en CSS

## 1. Introduction

Les **Media Queries** (ou requêtes média) permettent d’adapter le style d’un site web en fonction du support d’affichage :
- taille de l’écran,
- orientation (portrait/paysage),
- type d’appareil (écran, impression, TV…),
- résolution, etc.

Elles sont un pilier du **Responsive Design** : l’adaptation automatique de la mise en page sur **mobile, tablette et ordinateur**.

## 2. Syntaxe générale

```css
@media (condition) {
  /* règles CSS appliquées uniquement si la condition est vraie */
}
```
Exemple simple :
```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
_Ici, le fond devient bleu **uniquement si la largeur de l’écran est inférieure ou égale à 600px** (donc sur mobile)._

## 3. Types de media
| Type     | Description                                        |
| -------- | -------------------------------------------------- |
| `all`    | Par défaut, pour tous les types d’appareils        |
| `screen` | Pour les écrans (ordinateur, smartphone, tablette) |
| `print`  | Pour l’impression (version imprimable d’une page)  |
| `speech` | Pour les lecteurs vocaux                           |

Exemple :
```css
@media print {
  body {
    color: black;
    background: white;
  }
}
```
## 4. Les conditions les plus courantes
**Largeur et hauteur**
| Propriété    | Exemple                      | Signification                   |
| ------------ | ---------------------------- | ------------------------------- |
| `max-width`  | `@media (max-width: 768px)`  | Jusqu’à 768px (mobile/tablette) |
| `min-width`  | `@media (min-width: 1024px)` | À partir de 1024px (bureau)     |
| `max-height` | `@media (max-height: 800px)` | Jusqu’à 800px de hauteur        |
| `min-height` | `@media (min-height: 500px)` | À partir de 500px de hauteur    |
**Astuce :**
- `max-width` = styles pour petits écrans
- `min-width` = styles pour grands écrans

**Orientation**
```css
@media (orientation: portrait) {
  body {
    background: pink;
  }
}
@media (orientation: landscape) {
  body {
    background: lightgreen;
  }
}
```
_Change la couleur selon si l’écran est en mode **portrait** (vertical) ou **paysage** (horizontal)._

**Résolution**
```css
@media (min-resolution: 2dppx) {
  img {
    content: url('image_hd.png');
  }
}
```
_Ici, on charge une image haute définition sur les écrans Retina._

## 5. Combiner plusieurs conditions
```css
@media screen and (min-width: 768px) and (max-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```
**Avec `,` (ou logique -> || ) :**
```css
@media (max-width: 600px), (orientation: portrait) {
  nav {
    display: none;
  }
}
```
_Le `nav` est caché **si l’écran est petit OU en portrait.**_

## 6. Organisation des Media Queries
### Option 1 : Dans un même fichier CSS
```css
/* Styles par défaut */
body { font-size: 18px; }

/* Styles spécifiques mobile */
@media (max-width: 600px) {
  body { font-size: 14px; }
}
```
### Option 2 : Dans des fichiers séparés
```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="mobile.css" media="(max-width: 600px)">
```

## 7. Exemple complet responsive
```css
/* Styles généraux */
body {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 20px;
}

/* Tablette */
@media (max-width: 1024px) {
  body {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 600px) {
  body {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
}
```
- _`Sur PC : 2 colonnes.`_

- _`Sur tablette : 1 colonne.`_

- _`Sur mobile : layout en flex vertical.`_

## 8. Bonnes pratiques

Commencer par le **design mobile** (méthode mobile-first) :
- Écrire les styles pour mobile d’abord.
- Ajouter ensuite des media queries avec min-width pour les écrans plus grands.

```css
/* Mobile first */
body { font-size: 14px; }

/* Tablette */
@media (min-width: 768px) { body { font-size: 16px; } }

/* Bureau */
@media (min-width: 1024px) { body { font-size: 18px; } }
```
- Tester sur plusieurs tailles avec les outils développeur du navigateur (F12 → icône mobile/tablette).
- Utiliser des valeurs relatives (em, %, vh, vw) plutôt que fixes (px).

## 9. Résumé

| Objectif             | Media Query                      |
| -------------------- | -------------------------------- |
| Mobile (≤600px)      | `@media (max-width: 600px)`      |
| Tablette (≤1024px)   | `@media (max-width: 1024px)`     |
| Bureau (≥1024px)     | `@media (min-width: 1024px)`     |
| Orientation portrait | `@media (orientation: portrait)` |
| Impression           | `@media print`                   |
