# CSS Grid et Flexbox
## Introduction
CSS Grid et Flexbox sont deux techniques de mise en page avancées qui permettent de créer des designs réactifs et flexibles pour les sites web.

Flexbox (Flexible Box) est conçu pour organiser des éléments en ligne ou en colonne et est idéal pour des mises en page d'éléments dynamiques.

CSS Grid est un système de grille bidimensionnel qui permet d’organiser les éléments en lignes et en colonnes simultanément.

## 1 Flexbox : La boîte flexible

Flexbox est principalement utilisé pour aligner des éléments dans une seule direction (horizontale ou verticale).

### 1.1 Propriétés du conteneur Flex,
Pour activer Flexbox, appliquez `display: flex;` sur un conteneur :
```css
.container {
    display: flex;
}
```

Les principales propriétés de `display: flex;` sont :
```css
flex-direction : Définit l’axe principal
.container {
    flex-direction: row; /* Par défaut */
    flex-direction: column;
}
```

justify-content : Alignement sur l’axe principal
```css 
.container {
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
}
```

align-items : Alignement sur l’axe secondaire
```css
.container {
    align-items: center;
    align-items: flex-start;
    align-items: flex-end;
}
```

flex-wrap : Permet aux éléments de passer à la ligne
```css
.container {
    flex-wrap: wrap;
}
```
### 1.2 Propriétés des éléments flexibles,
flex-grow : Permet à un élément de grandir en occupant l’espace disponible
```css
.item {
    flex-grow: 1;
}
```

flex-shrink : Permet à un élément de rétrécir si nécessaire
```css
.item {
    flex-shrink: 1;
}
```

flex-basis : Définit la taille de base d’un élément
```css
.item {
    flex-basis: 200px;
}
```

## 2 CSS Grid : La mise en page en grille,

Grid permet de travailler en deux dimensions : lignes et colonnes.

### 2.1 Création d’une grille,
Pour activer Grid, appliquez display: grid; sur un conteneur :
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
}
```
grid-template-columns : Définit le nombre et la taille des colonnes.

grid-template-rows : Définit le nombre et la taille des lignes.

### 2.2 Positionnement des éléments,
grid-column et grid-row : Positionner un élément dans la grille
```css
.item {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}
```

gap : Ajoute un espacement entre les cellules
```css
.container {
    gap: 10px;
}
```

### 2.3 Justification et alignement,
justify-items : Alignement horizontal des éléments dans les cellules
```css
.container {
    justify-items: center;
}
```

align-items : Alignement vertical des éléments dans les cellules
```css
.container {
    align-items: center;
}
```
justify-content : Positionnement de la grille dans son conteneur
```css
.container {
    justify-content: center;
}
```

## Conclusion
Flexbox est idéal pour l’alignement d’éléments en une seule direction, tandis que CSS Grid est plus adapté aux mises en page complexes en deux dimensions. Maîtriser ces deux outils permet de créer des interfaces modernes et responsives.

## Exercices :
https://flexboxfroggy.com/