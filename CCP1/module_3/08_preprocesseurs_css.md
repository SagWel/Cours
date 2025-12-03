# Les Préprocesseurs CSS
## Objectifs pédagogiques

À la fin de ce cours, vous serez capables de :
- Comprendre le rôle et les avantages d’un préprocesseur CSS
- Identifier les principaux outils existants (SASS, LESS, Stylus)
- Écrire du code CSS moderne et maintenable avec SASS
- Utiliser les variables, les mixins et les imports pour structurer vos styles

## 1. Qu’est-ce qu’un préprocesseur CSS ?

Un préprocesseur CSS est un outil qui étend les fonctionnalités du CSS classique.

Il permet d’écrire du code avec une syntaxe plus puissante et plus structurée, puis de le compiler en CSS standard compréhensible par le navigateur.

**Exemple d’utilisation :**

- Vous écrivez du code en SASS (.scss)
- Le préprocesseur le transforme automatiquement en CSS (.css) utilisable par votre site.

## 2. Pourquoi utiliser un préprocesseur CSS ?

Le CSS de base peut vite devenir difficile à maintenir dans les projets complexes.
Les préprocesseurs ajoutent des fonctionnalités qui facilitent la vie des développeurs :

| Fonctionnalité                | Description                                                 | Exemple                                         |
| ----------------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| 🔢 **Variables**              | Stocker des valeurs réutilisables (couleurs, tailles, etc.) | `$primary-color: #3498db;`                      |
| 🧱 **Imbrication (nesting)**  | Écrire du code plus lisible et hiérarchisé                  | `.menu { li { color: red; } }`                  |
| 🔁 **Mixins**                 | Réutiliser du code CSS en le paramétrant                    | `@mixin button($color) { background: $color; }` |
| ⚙️ **Import**                 | Découper le code en plusieurs fichiers                      | `@import 'header';`                             |
| 🧮 **Fonctions & opérations** | Faire des calculs                                           | `width: (100% / 3);`                            |

## 3. Les principaux préprocesseurs CSS
| Nom             | Extension          | Particularités                                                                       |
| --------------- | ------------------ | ------------------------------------------------------------------------------------ |
| **SASS / SCSS** | `.sass` ou `.scss` | Le plus populaire, intégré dans la plupart des frameworks modernes (Bootstrap, etc.) |
| **LESS**        | `.less`            | Utilisé historiquement par Bootstrap v3, syntaxe proche du CSS                       |
| **Stylus**      | `.styl`            | Très flexible, souvent utilisé avec Node.js                                          |

_Aujourd’hui, SASS (ou SCSS) est le plus utilisé dans les projets web modernes._

## 4. Syntaxe SASS / SCSS

**a. Les variables**
```scss
// Déclaration
$primary-color: #1abc9c;
$font-stack: 'Open Sans', sans-serif;

// Utilisation
body {
  font-family: $font-stack;
  background-color: $primary-color;
}
```
**b. L’imbrication (nesting)**

```scss
nav {
  background: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: yellow;
        }
      }
    }
  }
}
```
_Avantage : le code est plus structuré et lisible._

**c. Les mixins**
Les **mixins** permettent de **réutiliser des blocs de code CSS**, un peu comme des fonctions.

```scss
@mixin bouton($couleur, $radius: 5px) {
  background: $couleur;
  border-radius: $radius;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
}

button {
  @include bouton(#e74c3c, 10px);
}

a.button {
  @include bouton(#3498db);
}
```

**d. Les imports**
Vous pouvez découper vos styles en plusieurs fichiers pour une meilleure organisation.
```bash
/styles
 ├── _variables.scss
 ├── _header.scss
 ├── _footer.scss
 └── main.scss
 ```

 Dans `main.scss` :
```scss
@import 'variables';
@import 'header';
@import 'footer';
```
Les fichiers commençant par `_` ne sont **pas compilés seuls**, ils sont **importés**.

**e. Les fonctions et opérations**
SASS permet de faire des **calculs dynamiques** :

```scss
$gutter: 20px;

.container {
  width: 100% - $gutter * 2;
  padding: $gutter;
}
```
Et aussi des **fonctions prédéfinies**:
```scss
$color: lighten(#3498db, 20%);
```

## 5. Compilation vers CSS
### a. Avec Node.js et npm

- Installer SASS :
```sh
npm install -g sass
```

- Compiler un fichier :
```sh
sass style.scss style.css
```
- Surveiller automatiquement les changements :
```sh
sass --watch style.scss:style.css
```

### b. Dans un projet React / Vite / Webpack
La plupart des frameworks modernes intègrent SASS nativement :
```sh
npm install sass
```
Puis importer dans un composant :
```jsx
import './App.scss';
```

## 6. Exemple complet
Fichier : `style.scss`
```scss
$primary: #2ecc71;
$secondary: #27ae60;

@mixin card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

body {
  background: $primary;
  font-family: 'Open Sans', sans-serif;

  .card {
    @include card;
    h2 {
      color: $secondary;
    }
  }
}
```
Après compilation (`style.css`) :
```css
body {
  background: #2ecc71;
  font-family: 'Open Sans', sans-serif;
}
body .card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}
body .card h2 {
  color: #27ae60;
}
```

## 7. 🧠 Bonnes pratiques

- ✅ Utiliser des **variables** pour toutes les valeurs récurrentes (couleurs, espacements...)
- ✅ Découper le code en **plusieurs fichiers**
- ✅ Éviter trop d’imbrications (maximum 3 niveaux)
- ✅ Utiliser des **mixins et fonctions** pour réduire la duplication
- ✅ Toujours **compiler** en CSS avant la mise en production

## Conclusion

Les **préprocesseurs CSS** comme **SASS** transforment la manière d’écrire du CSS :
- plus **rapide**,
- plus **structuré**,
- plus **professionnel**.

C’est **un outil indispensable** pour tout développeur front-end moderne, surtout dans les projets d’équipe ou à grande échelle.