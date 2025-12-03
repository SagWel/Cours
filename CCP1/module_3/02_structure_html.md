# La structure HTML d’une page web

## 1. Introduction à HTML (rappel)
HTML (HyperText Markup Language) est le langage de base du web.
Il permet de structurer le contenu d’une page (titres, paragraphes, images, liens, tableaux, formulaires, etc.).

_HTML ne gère pas le style (c’est le rôle du CSS) ni le comportement (c’est le rôle du JavaScript)._

## 2. Structure minimale d’une page HTML
Voici la structure de base que toute page HTML doit contenir :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma première page</title>
</head>
<body>
  <h1>Bienvenue sur ma page web</h1>
  <p>Ceci est un paragraphe de texte.</p>
</body>
</html>
```
**Explication**
| Élément                  | Rôle                                                                 |
| ------------------------ | -------------------------------------------------------------------- |
| `<!DOCTYPE html>`        | Indique que le document est en HTML5                                 |
| `<html lang="fr">`       | Racine du document, définit la langue principale                     |
| `<head>`                 | Contient les métadonnées (titre, encodage, liens CSS, scripts, etc.) |
| `<meta charset="UTF-8">` | Indique l’encodage des caractères (UTF-8 = universel)                |
| `<meta name="viewport">` | Permet l’adaptation sur mobile                                       |
| `<title>`                | Titre affiché dans l’onglet du navigateur                            |
| `<body>`                 | Contient tout le contenu visible de la page                          |

## 3. Les grandes zones sémantiques d’une page

HTML5 a introduit des balises sémantiques, qui donnent du sens au contenu pour les navigateurs, moteurs de recherche et lecteurs d’écran.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon premier site</title>
</head>
<body>
  <header>
    <h1>Nom du site</h1>
    <nav> <!-- Dans certains  cas on peut retrouver les balises nav dans le header -->
      <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article principal</h2>
      <p>Contenu de l’article...</p>
    </article>

    <section>
      <h3>Section secondaire</h3>
      <p>Détails ou explications supplémentaires.</p>
    </section>

    <aside> <!-- la balise aside peut se situer en menu lateral principal comme secondaire (voir certains sites) -->
      <h3>Menu latéral</h3>
      <p>Liens ou informations complémentaires.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 MonSite - Tous droits réservés</p>
  </footer>
</body>
```

**Description des balises :**
| Balise      | Rôle                                                     |
| ----------- | -------------------------------------------------------- |
| `<header>`  | En-tête du site ou d’une section (logo, titre, menu)     |
| `<nav>`     | Contient la navigation principale (liens vers les pages) |
| `<main>`    | Contenu principal unique de la page                      |
| `<article>` | Contenu indépendant (article, post, fiche produit...)    |
| `<section>` | Regroupe des contenus liés thématiquement                |
| `<aside>`   | Informations secondaires (publicités, liens, menus)      |
| `<footer>`  | Pied de page (mentions légales, contacts, copyright)     |

## 4. Exemple complet avec structure et style

Voici une page HTML complète avec un peu de style intégré :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Structure HTML5</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      display: grid;
      grid-template-areas:
        "header header"
        "aside main"
        "footer footer";
      grid-template-columns: 200px 1fr;
      min-height: 100vh;
    }
    header { grid-area: header; background: #004080; color: white; padding: 1em; }
    nav ul { list-style: none; display: flex; gap: 1em; margin: 0; padding: 0; }
    aside { grid-area: aside; background: #f0f0f0; padding: 1em; }
    main { grid-area: main; padding: 1em; }
    footer { grid-area: footer; background: #222; color: white; text-align: center; padding: 0.5em; }
  </style>
</head>
<body>
  <header>
    <h1>Mon Site Web</h1>
    <nav>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <aside>
    <h3>Menu latéral</h3>
    <ul>
      <li><a href="#">Profil</a></li>
      <li><a href="#">Paramètres</a></li>
      <li><a href="#">Aide</a></li>
    </ul>
  </aside>

  <main>
    <article>
      <h2>Bienvenue</h2>
      <p>Voici un exemple de structure HTML5 bien organisée et lisible.</p>
    </article>
  </main>

  <footer>
    &copy; 2025 Mon Site Web
  </footer>
</body>
</html>
```
---
```html
L'élément <aside> (en français, « aparté ») représente une partie d'un document dont le contenu n'a qu'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d'encadrés ou de boîtes de légende.
```


**source :** _`https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/aside`_

---

## 5. Bonnes pratiques
- ✅ Toujours indiquer la langue du document (`<html lang="fr">`).
- ✅ Utiliser les balises sémantiques à bon escient.
- ✅ Un seul `<main>` par page.
- ✅ Ne pas abuser des `<div>` sans signification.
- ✅ Vérifier la validité du code sur https://validator.w3.org/

## 6. Ressources annexes
- https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content
- https://validator.w3.org/
- https://www.w3schools.com/html/html5_semantic_elements.asp