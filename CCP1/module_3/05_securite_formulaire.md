# Sécurisation des formulaires HTML

## Objectif

Apprendre à protéger et fiabiliser les formulaires HTML en utilisant uniquement des balises et attributs HTML, avant même que les données ne soient envoyées au serveur.

**Attention :**

Le **HTML seul ne suffit pas** à **sécuriser totalement un formulaire**.
Ces techniques visent surtout à **prévenir les erreurs utilisateurs** et à **réduire les failles côté client**.

## 1. Balise de base : `<form>`
```html
<form action="/traitement.php" method="post" autocomplete="off" novalidate>
  ...
</form>
```

**Attributs importants :**
| Attribut             | Rôle                                    | Effet sécurité                                               |
| -------------------- | --------------------------------------- | ------------------------------------------------------------ |
| `method="post"`      | Spécifie la méthode d’envoi des données | Évite d’exposer les données dans l’URL (contrairement à GET) |
| `action="..."`       | Cible du traitement                     | Permet de contrôler où vont les données                      |
| `autocomplete="off"` | Désactive la saisie automatique         | Empêche le navigateur de mémoriser des infos sensibles       |
| `novalidate`         | Désactive la validation HTML5           | À éviter sauf cas précis (tests, API, etc.)                  |

## 2. Les champs de saisie sécurisés

**Exemple :**
```html
<input type="text" name="username" required minlength="3" maxlength="20" pattern="[A-Za-z0-9]+" placeholder="Nom d'utilisateur">
```

**Attributs de sécurité utiles :**

| Attribut                              | Description                 | Intérêt sécurité                                        |
| ------------------------------------- | --------------------------- | ------------------------------------------------------- |
| `required`                            | Champ obligatoire           | Empêche les formulaires incomplets                      |
| `minlength` / `maxlength`             | Limite la longueur du texte | Évite les saisies trop longues (injections, spam)       |
| `pattern`                             | Expression régulière        | Filtre le format attendu (ex. lettres/chiffres)         |
| `type="email"`, `type="number"`, etc. | Type de données attendu     | Aide à la validation automatique                        |
| `placeholder`                         | Indice visuel               | Aide à éviter les erreurs                               |
| `readonly` / `disabled`               | Empêche la modification     | Évite que l’utilisateur change des champs non autorisés |

## 3. Champs sensibles : mots de passe et emails

**Exemple :**
```html
<label for="password">Mot de passe :</label>
<input type="password" id="password" name="password" required minlength="8" maxlength="64" autocomplete="new-password">
```

**Conseils :**

- Utiliser `type="password"` → masque la saisie.
- Ajouter `autocomplete="new-password"` ou `current-password` selon le contexte.
- Toujours limiter la longueur (`minlength`, `maxlength`).

## 4. Validation HTML5 intégrée
Le navigateur applique déjà des **vérifications automatiques** avant l’envoi.

**Exemples :**

```html
<input type="email" required>
<input type="url" required>
<input type="number" min="0" max="100">
<input type="tel" pattern="[0-9]{10}">
```
Si le format n’est pas respecté, le formulaire ne **s’envoie pas** et le navigateur affiche un **message d’erreur natif**.

## 5. Protection de la vie privée

**Attributs utiles :**
| Attribut             | Utilisation                                                  | Exemple                                  |
| -------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `autocomplete="off"` | Empêche l’enregistrement de données personnelles             | `<input type="text" autocomplete="off">` |
| `inputmode`          | Indique le clavier à afficher (mobile)                       | `<input inputmode="numeric">`            |
| `spellcheck="false"` | Désactive la correction orthographique sur données sensibles | `<input spellcheck="false">`             |

## 6. Champs masqués avec prudence

```html
<input type="hidden" name="user_id" value="123">
```
⚠️ Les champs hidden ne sont pas sécurisés !

L’utilisateur peut facilement les modifier via les outils du navigateur.
    
    → À n’utiliser que pour des données non sensibles ou déjà vérifiées côté serveur.

## 7. Empêcher les soumissions involontaires

**Exemple :**
```html
<button type="submit">Envoyer</button>
<button type="reset">Réinitialiser</button>
```
- Bien différencier type="submit" et type="reset".
- Ne pas oublier le type="button" pour les boutons qui ne doivent pas soumettre le formulaire :
```html
<button type="button">Annuler</button>
```
## 8. Accessibilité et fiabilité

- Toujours associer les `<label>` aux champs avec `for="id"`.
- Éviter les champs ambigus sans label.
- Utiliser des messages d’aide via `<small>` ou `aria-describedby`.

**Exemple :**
```html
<label for="email">Email :</label>
<input type="email" id="email" aria-describedby="helpEmail">
<small id="helpEmail">Nous ne partagerons jamais votre adresse.</small>
```

## 9. Exemple complet de formulaire sécurisé
```html
<form action="/register" method="post" autocomplete="off">
  <fieldset>
    <legend>Inscription</legend>

    <label for="username">Nom d'utilisateur :</label>
    <input type="text" id="username" name="username"
           required minlength="3" maxlength="20"
           pattern="[A-Za-z0-9]+"
           placeholder="Ex : user123">

    <label for="email">Email :</label>
    <input type="email" id="email" name="email"
           required autocomplete="off">

    <label for="password">Mot de passe :</label>
    <input type="password" id="password" name="password"
           required minlength="8" maxlength="64"
           autocomplete="new-password">

    <button type="submit">Créer un compte</button>
  </fieldset>
</form>
```

## 10. Bonnes pratiques générales

✅ À faire :

- Utiliser POST pour les formulaires sensibles.
- Ajouter required, pattern, minlength, maxlength.
- Utiliser des label clairs.
- Désactiver autocomplete pour les champs confidentiels.

🚫 À éviter :

- Mettre des données sensibles dans des input hidden.
- Laisser des formulaires avec method="get" pour les identifiants.
- Se fier uniquement à la validation HTML (toujours vérifier côté serveur aussi).

## Résumé visuel
| Risque                      | Solution HTML                                            |
| --------------------------- | -------------------------------------------------------- |
| Données visibles dans l’URL | `method="post"`                                          |
| Saisie trop longue          | `maxlength`                                              |
| Format incorrect            | `pattern`                                                |
| Oubli de champ              | `required`                                               |
| Auto-complétion gênante     | `autocomplete="off"`                                     |
| Champ non modifiable        | `readonly` ou `disabled`                                 |
| Mauvais type de saisie      | `type="email"`, `type="password"`, `type="number"`, etc. |



