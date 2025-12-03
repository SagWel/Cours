# Les middlewares de gestion d’erreur avec Node.js et Express

    En développement avec Express.js, il est fréquent que des erreurs surviennent : routes inexistantes, accès refusés, erreurs de base de données, etc. Pour gérer proprement ces erreurs et éviter que le serveur ne plante, on utilise un middleware de gestion d’erreur.

##  Qu’est-ce qu’un middleware ?

Un middleware est une fonction qui reçoit les objets req, res, et next, et qui agit entre la requête du client et la réponse du serveur.

```js
app.use((req, res, next) => {
  console.log('Une requête est passée ici');
  next();
});
```

## Pourquoi utiliser un middleware d’erreur ?

- Centraliser la gestion des erreurs

- Renvoyer des messages clairs aux clients

- Éviter de répéter try...catch partout

- Ne pas planter le serveur en cas d'erreur

## Structure d’un middleware d’erreur

La **structure spéciale** d’un middleware d’erreur contient **4 arguments** :

```js
function gestionErreur(err, req, res, next) {
  // traitement de l'erreur
}
```

La présence du premier argument `err` permet à Express de l’identifier comme **middleware d’erreur.**

## Exemple simple

```js
import express from 'express';
const app = express();

// Route qui déclenche une erreur
app.get('/', (req, res) => {
  throw new Error('Erreur volontaire !');
});

// Middleware d'erreur
app.use((err, req, res, next) => {
  console.error(err.stack); // log dans la console
  res.status(500).json({ message: 'Une erreur est survenue', error: err.message });
});

app.listen(3000, () => console.log('Serveur en écoute sur le port 3000'));
```

**Exemple avec `try...catch` + `next(err)`**

Si vous utilisez du code **asynchrone**, vous devez capturer l’erreur et appeler `next(err)` :

```js
app.get('/users', async (req, res, next) => {
  try {
    const users = await getUsersFromDB();
    res.json(users);
  } catch (err) {
    next(err); // Transmet l'erreur au middleware d’erreur
  }
});
```

## Ordre des middlewares

L’ordre est important :

    Middleware classiques

    Routes

    Middleware 404

    Middleware d’erreur

```js
// Middleware 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route introuvable' });
});

// Middleware d’erreur
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Erreur interne', error: err.message });
});
```

## middleware d’erreur modulaire
On peut l'externaliser dans un fichier `errorHandler.js` :

```js
// errorHandler.js
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur serveur', error: err.message });
}
```

```js
// app.js
import express from 'express';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
// ... routes ...
app.use(errorHandler);
```

## Bonnes pratiques
| Bonnes pratiques                                                | Explication                               |
| --------------------------------------------------------------- | ----------------------------------------- |
| `next(err)` pour les erreurs asynchrones                        | Obligatoire pour déclencher le middleware |
| Ne pas exposer `err.stack` en production                        | Trop d'infos sensibles                    |
| Toujours avoir un middleware 404                                | Pour gérer les routes inconnues           |
| Séparer le middleware d’erreur dans un fichier                  | Pour plus de clarté                       |
| Utiliser des codes HTTP adaptés (`400`, `403`, `404`, `500`...) | Améliore la compréhension des erreurs     |

## Conclusion

Les middlewares de gestion d’erreur sont essentiels dans un projet Express. Ils permettent une meilleure lisibilité du code, un comportement cohérent en cas d’erreur, et une API plus robuste.