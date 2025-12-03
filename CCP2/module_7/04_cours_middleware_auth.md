# Les Middlewares d’Authentification avec Node.js et Express

## Qu’est-ce qu’un middleware dans Express ?

Un middleware est une fonction qui s’exécute entre la réception d’une requête HTTP et l’envoi de la réponse.

```js
app.use((req, res, next) => {
  console.log("Je suis un middleware");
  next(); // Passe au middleware suivant
});
```

_Pour l’authentification, on va créer un middleware qui vérifie si l’utilisateur est connecté ou autorisé avant d’accéder à certaines routes._

## Pourquoi un middleware d’authentification ?
- Protéger certaines pages ou routes (ex: tableau de bord, profil, admin).

- Vérifier qu’un token, une session, ou un cookie est valide.

- Empêcher les utilisateurs non connectés d’accéder à certaines ressources.

## Exemple simple avec un "token"

Dans cet exemple, on vérifie que l’utilisateur envoie un token d’authentification (fictif ici) dans les en-têtes de la requête.

**Structure minimale**
```sh
- app.js
- authMiddleware.js
```

**authMiddleware.js**
```js
// Middleware d'authentification simple
export function authenticate(req, res, next) {
  const token = req.headers['authorization'];

  if (token === 'mon_token_secret') {
    // L'utilisateur est authentifié
    next(); // Passe à la suite
  } else {
    // Accès refusé
    res.status(401).json({ message: 'Accès non autorisé' });
  }
}
```

**app.js**
```js
import express from 'express';
import { authenticate } from './authMiddleware.js';

const app = express();
const PORT = 3000;

// Route publique
app.get('/public', (req, res) => {
  res.send('Page publique accessible à tous');
});

// Route protégée
app.get('/dashboard', authenticate, (req, res) => {
  res.send('Bienvenue sur le tableau de bord');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

## Test de la route protégée

_Avec Postman, curl ou fetch :_
 - Cet appel fonctionnera :
```bash
curl -H "Authorization: mon_token_secret" http://localhost:3000/dashboard
```
- Celui-ci retournera le message d'erreur :  'Accès non autorisé'
```bash
curl http://localhost:3000/dashboard
```

## Variante avec les sessions

Si vous utilisez `express-session`, le middleware peut vérifier si `req.session.user` existe.

```js
export function isLoggedIn(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: 'Veuillez vous connecter' });
  }
}
```

## Bonnes pratiques
- Ne jamais laisser de routes sensibles sans protection.

- Utiliser des tokens signés (comme JWT) ou des sessions sécurisées.

- Modulariser vos middlewares (1 fichier par type de contrôle).

## Résumé 
| Terme            | Définition simple                                |
| ---------------- | ------------------------------------------------ |
| Middleware       | Fonction qui agit entre la requête et la réponse |
| Authentification | Vérifie l’identité d’un utilisateur              |
| Token / Session  | Moyen de prouver qu’un utilisateur est connecté  |
| `next()`         | Passe au middleware ou à la route suivante       |
