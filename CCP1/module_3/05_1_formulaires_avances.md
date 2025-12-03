# Les formulaires HTML avancés
## Objectifs
À la fin de ce module, l’apprenant sera capable de :
- Créer et structurer un formulaire complet avec HTML5.
- Utiliser les champs avancés (`date`, `email`, `range`, `color`, etc.).
- Gérer les sélections, zones de texte et fichiers.
- Comprendre les attributs d’accessibilité et de validation.
- Améliorer l’expérience utilisateur grâce aux attributs modernes.

## Introduction

Les formulaires HTML sont le principal moyen d’interagir avec les utilisateurs :
inscription, connexion, recherche, envoi de message, etc.

HTML5 a considérablement enrichi les types de champs (`input type`) et les attributs, simplifiant les vérifications et l’expérience utilisateur sans nécessiter JavaScript.

## Structure de base d’un formulaire

```html
<form action="/traitement.php" method="post">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required>

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Envoyer</button>
</form>
```

- `<form>` : conteneur du formulaire.
- `action` : URL de traitement (serveur).
- `method` : get ou post.
- `<label>` : décrit le champ pour l’accessibilité.
- `for` : lie le label à l’input correspondant.

## Les champs de saisie (`<input>`)

### Types classiques
| Type       | Description                | Exemple      |
| ---------- | -------------------------- | ------------ |
| `text`     | Texte simple               | Nom, prénom  |
| `password` | Masque le texte            | Mot de passe |
| `email`    | Validation d’adresse email | Email        |
| `number`   | Saisie numérique           | Âge          |
| `tel`      | Numéro de téléphone        | Téléphone    |
| `url`      | URL valide                 | Site web     |

```html
<input type="email" placeholder="exemple@mail.com">
```
### Types HTML5 avancés
| Type                             | Description                   | Exemple             |
| -------------------------------- | ----------------------------- | ------------------- |
| `date`, `time`, `datetime-local` | Sélecteurs de date/heure      | Calendrier intégré  |
| `color`                          | Sélecteur de couleur          | Palette             |
| `range`                          | Curseur numérique             | Volume              |
| `search`                         | Champ optimisé pour recherche | Barre de recherche  |
| `file`                           | Import de fichiers            | Image, PDF          |
| `hidden`                         | Donnée cachée                 | Identifiant interne |


```html
<input type="range" id="volume" name="volume" min="0" max="100" step="10">
<input type="color" id="favcolor" name="favcolor" value="#ff0000">
```

## Zone de texte multi-lignes (`<textarea>`)
Utilisée pour les messages ou commentaires longs.
```html
<label for="message">Votre message :</label>
<textarea id="message" name="message" rows="5" cols="40" placeholder="Écrivez ici..."></textarea>
```
Attributs utiles :
- `rows` / `cols` → taille de la zone
- `maxlength` → limite de caractères
- `placeholder` → texte indicatif
- `required` → champ obligatoire

## Listes déroulantes (`<select>`)
### Sélection simple
```html
<label for="pays">Pays :</label>
<select id="pays" name="pays" required>
  <option value="">--Choisissez--</option>
  <option value="fr">France</option>
  <option value="be">Belgique</option>
  <option value="ch">Suisse</option>
</select>
```
### Sélection multiple
```html
<select name="langues[]" multiple>
  <option value="fr">Français</option>
  <option value="en">Anglais</option>
  <option value="es">Espagnol</option>
</select>
```
### Groupement d’options
```html
<select name="voiture">
  <optgroup label="Marques européennes">
    <option>Renault</option>
    <option>Volkswagen</option>
  </optgroup>
  <optgroup label="Marques asiatiques">
    <option>Toyota</option>
    <option>Hyundai</option>
  </optgroup>
</select>
```

## Boutons et contrôle d’envoi
| Type     | Rôle                               |
| -------- | ---------------------------------- |
| `submit` | Envoie le formulaire               |
| `reset`  | Réinitialise les champs            |
| `button` | Bouton libre (souvent géré par JS) |
```html
<button type="submit">Envoyer</button>
<button type="reset">Annuler</button>
```
## Cases à cocher et boutons radio
### Case à cocher (`checkbox`)
```html
<label>
  <input type="checkbox" name="abonnement" value="oui"> Je souhaite recevoir la newsletter
</label>
```
### Boutons radio (`radio`)
```html
<p>Genre :</p>
<label><input type="radio" name="genre" value="homme"> Homme</label>
<label><input type="radio" name="genre" value="femme"> Femme</label>
```
_Tous les boutons radio partageant le **même `name`** font partie du **même groupe**._

## Attributs avancés utiles
| Attribut                        | Rôle                                         |
| ------------------------------- | -------------------------------------------- |
| `required`                      | Rend le champ obligatoire                    |
| `pattern`                       | Expression régulière de validation           |
| `placeholder`                   | Indication de saisie                         |
| `min`, `max`, `step`            | Limites numériques                           |
| `readonly`                      | Lecture seule                                |
| `disabled`                      | Désactive le champ                           |
| `autocomplete`                  | Active/désactive la suggestion du navigateur |
| `autofocus`                     | Focus automatique à l’ouverture              |
| `multiple`                      | Autorise plusieurs fichiers ou options       |
| `enctype="multipart/form-data"` | Nécessaire pour l’envoi de fichiers          |
## Exemple complet
```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <fieldset>
    <legend>Inscription</legend>

    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required minlength="2" maxlength="30">

    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required>

    <label for="naissance">Date de naissance :</label>
    <input type="date" id="naissance" name="naissance">

    <label for="photo">Photo de profil :</label>
    <input type="file" id="photo" name="photo" accept="image/*">

    <label for="pays">Pays :</label>
    <select id="pays" name="pays" required>
      <option value="">--Choisissez--</option>
      <option value="fr">France</option>
      <option value="be">Belgique</option>
      <option value="ch">Suisse</option>
    </select>

    <label>
      <input type="checkbox" name="conditions" required>
      J’accepte les conditions générales
    </label>

    <button type="submit">Valider</button>
  </fieldset>
</form>
```
## Bonnes pratiques

- ✅ Toujours associer les `<label>` aux champs.
- ✅ Grouper les champs similaires avec `<fieldset>` et `<legend>`.
- ✅ Utiliser les attributs de validation pour limiter les erreurs.
- ✅ Soigner le design et l’ergonomie (Bootstrap, CSS Grid, etc.).
- ✅ Penser **accessibilité (ARIA, tabulation, contraste)**.

