# Validation et sécurité des entrées

- Comprendre les risques liés aux entrées utilisateurs.

- Mettre en place une validation des données côté client et côté serveur.

- Protéger vos applications contre les injections (SQL, XSS, etc.).

- Appliquer des bonnes pratiques pour sécuriser les formulaires et API.

## 2 - Pourquoi valider et sécuriser les entrées ?
**Qu'est-ce qu'une "entrée" utilisateur ?**

Ce sont toutes les données que l'utilisateur peut fournir :

- Champs de formulaire (email, mot de passe, commentaire…)

- URL (paramètres GET)

- Corps des requêtes API (POST, PUT…)

- Cookies

**Problème : les utilisateurs ne sont pas toujours fiables**
- Par erreur : mauvaise saisie, champ vide, format incorrect…

- Par malveillance : tentative d’injection SQL, script malveillant (XSS), spam…

**Solution :**
- Validation : s'assurer que les données sont correctes.

- Sécurisation : empêcher l’exploitation des failles potentielles.

## 3 - Validation des données

**Où valider ?**

| Côté                            | Rôle                   | Peut être contourné ? |
| ------------------------------- | ---------------------- | --------------------- |
| Client (HTML, JS)               | Expérience utilisateur |  Oui                 |
| Serveur (Node.js, PHP, Python…) | Sécurité               |  Non                 |

**Exemples de validation :**

- Email valide (ex: exemple@mail.com)

- Mot de passe de 8 caractères minimum

- Champ obligatoire non vide

- Valeur dans une liste autorisée (ex: ["Homme", "Femme", "Autre"])

**Outils en JS :**

- HTML5 : required, pattern, min, max, type="email"…

- JavaScript : RegExp (expressions régulières)

- Librairies : Yup, Validator.js, Joi (Node.js)

## 3 - Sécurisation des entrées
### 3.1 Les attaques classiques
- Injection SQL :
```sql
SELECT * FROM users WHERE username = 'admin' OR '1'='1';
```
_Donne accès à tout, sans mot de passe._

- XSS (Cross-Site Scripting) :

L’utilisateur envoie un script dans un champ :

```html
<script>alert("Hacked")</script>
```
_Ce script est exécuté dans le navigateur d’un autre utilisateur._

- Command Injection :
```bash
input = "test; rm -rf /"
exec("ping " + input)
```

## 4 - Bonnes pratiques de sécurité
### 4.1 Toujours échapper les données affichées
- Ne jamais afficher une entrée utilisateur sans nettoyage :
```js
// Mauvais
<div>${user.comment}</div>

// Bon
<div>${escapeHTML(user.comment)}</div>
```
### 4.2 Nettoyer les données :
- Supprimer les balises HTML, les scripts…

- Utiliser des librairies : DOMPurify, sanitize-html

### 4.3 Utiliser des requêtes préparées
- Avec MySQL + Node :

```js
db.execute("SELECT * FROM users WHERE email = ?", [email])
```

### 4.4 Toujours valider côté serveur
Même si le client valide, un hacker peut forger une requête API.

### 4.5 Limiter les privilèges
- Ne jamais donner un accès total à une base de données

- Utiliser des rôles (admin, user…)

## 5 - Exemple : Formulaire sécurisé en Node.js

```js
// Exemple d’API de connexion avec express-validator
const { check, validationResult } = require('express-validator');

app.post('/login', [
  check('email').isEmail(),
  check('password').isLength({ min: 8 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Ici : vérifier dans la base de données...
});
```

## 6 - Résumé

| Ce qu’il faut faire             | Ce qu’il faut éviter                       |
| ------------------------------- | ------------------------------------------ |
| Valider toutes les entrées      | Faire confiance à l’utilisateur            |
| Sécuriser côté serveur          | Valider uniquement en front                |
| Échapper les données HTML       | Afficher directement les entrées           |
| Utiliser des requêtes préparées | Construire des requêtes avec concaténation |
