# Introduction à HTML & CSS Sélecteurs

## 1. Qu’est-ce que le HTML ?

HTML (HyperText Markup Language) est le langage de base du web.

Il permet de structurer le contenu d’une page : titres, paragraphes, images, liens, tableaux, formulaires, etc.

Une page HTML est composée de balises (ou tags) qui décrivent le rôle du contenu.
### Structure de base d’un document HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma première page</title>
</head>
<body>
    <h1>Bienvenue sur ma page</h1>
    <p>Ceci est un paragraphe en HTML.</p>
</body>
</html>
```

## 2. Les principales balises HTML

| Catégorie       | Balise                                     | Description                                           | Exemple                                             |
| --------------- | ------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------- |
| **Titres**      | `<h1>` à `<h6>`                            | Définissent des titres (du plus grand au plus petit). | `<h2>Titre secondaire</h2>`                         |
| **Texte**       | `<p>`, `<strong>`, `<em>`, `<br>`          | Paragraphes, texte en gras, italique, saut de ligne.  | `<p><strong>Bonjour</strong> le monde !</p>`        |
| **Liens**       | `<a href="">`                              | Crée un lien hypertexte.                              | `<a href="https://example.com">Visiter</a>`         |
| **Images**      | `<img src="" alt="">`                      | Affiche une image.                                    | `<img src="photo.jpg" alt="Photo">`                 |
| **Listes**      | `<ul>`, `<ol>`, `<li>`                     | Listes à puces ou numérotées.                         | `<ul><li>Élément</li></ul>`                         |
| **Tableaux**    | `<table>`, `<tr>`, `<td>`, `<th>`          | Structure tabulaire.                                  | `<table><tr><th>Nom</th><td>Jean</td></tr></table>` |
| **Formulaires** | `<form>`, `<input>`, `<label>`, `<select>` | Interaction utilisateur.                              | `<input type="text" placeholder="Nom">`             |
| **Structure**   | `<header>`, `<nav>`, `<main>`, `<footer>`  | Balises sémantiques modernes.                         | `<header>Menu</header>`                             |

## 3. Introduction au CSS

CSS (Cascading Style Sheets) permet de styliser les pages HTML :

couleurs, polices, marges, disposition, etc.

**Exemple simple**
```html
<style>
  h1 {
    color: darkblue;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: gray;
  }
</style>
```

## 4. Les sélecteurs CSS

Les sélecteurs permettent de cibler les éléments HTML à styliser.

### Sélecteurs de base

| Type          | Exemple     | Sélectionne                             |
| ------------- | ----------- | --------------------------------------- |
| **Balise**    | `p {}`      | Tous les paragraphes `<p>`              |
| **Classe**    | `.intro {}` | Tous les éléments ayant `class="intro"` |
| **ID**        | `#titre {}` | L’élément ayant `id="titre"`            |
| **Universel** | `* {}`      | Tous les éléments de la page            |

**Exemple :**
```html
<p class="intro">Bienvenue</p>
<p id="special">Ceci est important</p>
```
```css
p { color: black; }
.intro { font-style: italic; }
#special { color: red; font-weight: bold; }
```
### Sélecteurs hiérarchiques
| Sélecteur           | Exemple   | Description                                          |
| ------------------- | --------- | ---------------------------------------------------- |
| **Descendant**      | `div p`   | Tous les `<p>` à l’intérieur d’un `<div>`            |
| **Enfant direct**   | `div > p` | Les `<p>` directement enfants d’un `<div>`           |
| **Frère adjacent**  | `h1 + p`  | Le premier `<p>` juste après un `<h1>`               |
| **Frères généraux** | `h1 ~ p`  | Tous les `<p>` suivant un `<h1>` dans le même parent |

### Sélecteurs d’attributs

| Exemple             | Sélectionne                                             |
| ------------------- | ------------------------------------------------------- |
| `[href]`            | Tous les éléments avec un attribut `href`               |
| `[type="text"]`     | Tous les `<input type="text">`                          |
| `[class^="btn"]`    | Tous les éléments dont la classe **commence** par "btn" |
| `[class$="danger"]` | Classe **se terminant** par "danger"                    |
| `[class*="menu"]`   | Classe **contenant** le mot "menu"                      |

### Pseudo-classes

| Sélecteur                     | Description                                   |
| ----------------------------- | --------------------------------------------- |
| `:hover`                      | Quand la souris passe sur un élément          |
| `:focus`                      | Quand un élément est sélectionné (formulaire) |
| `:first-child`, `:last-child` | Premier ou dernier élément enfant             |
| `:nth-child(2)`               | Le 2ᵉ enfant                                  |
| `:not(.active)`               | Tous sauf ceux avec `.active`                 |

**Exemple :**

```css
a:hover {
  color: orange;
  text-decoration: underline;
}
li:nth-child(odd) {
  background-color: #f0f0f0;
}
```

### Pseudo-éléments

| Sélecteur        | Description                        |
| ---------------- | ---------------------------------- |
| `::before`       | Insère du contenu avant un élément |
| `::after`        | Insère du contenu après un élément |
| `::first-line`   | Première ligne du texte            |
| `::first-letter` | Première lettre du texte           |

**Exemple :**

```css
p::first-letter {
  font-size: 2em;
  color: red;
}
```

## 5. Bonnes pratiques
```
✅ Toujours séparer le contenu (HTML) du style (CSS).
✅ Utiliser des classes plutôt que des ID pour la mise en forme.
✅ Penser accessibilité et sémantique.
✅ Organiser le code CSS avec des commentaires et une hiérarchie logique.
```
**Exemple complet**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Exemple HTML + CSS</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }

  header {
    background: #0077cc;
    color: white;
    padding: 15px;
    text-align: center;
  }

  .intro {
    font-size: 18px;
    color: #333;
  }

  a:hover {
    color: red;
  }

  ul li:nth-child(odd) {
    background: #f9f9f9;
  }
</style>
</head>
<body>

<header>
  <h1>Mon site HTML & CSS</h1>
</header>

<p class="intro">Ceci est un exemple de page HTML avec du style CSS.</p>

<ul>
  <li>Accueil</li>
  <li>Services</li>
  <li>Contact</li>
</ul>

<a href="#">Lien d’exemple</a>

</body>
</html>
```
