# Asynchrone en JavaScript

Voici un comparatif des différentes méthodes asynchrones en JavaScript, incluant leurs avantages, inconvénients et cas d’usage recommandés :
## 1. Callbacks
**Avantages :**

- Simple à implémenter.
- Bien supporté dans tous les environnements JavaScript.

**Inconvénients :**
-  Callback Hell (imbriquation difficile à lire et à maintenir).
- Gestion d’erreurs compliquée (pas de try/catch).
- Moins lisible avec plusieurs opérations asynchrones.

**Exemple :**

```js
function fetchData(callback) {
  setTimeout(() => {
    callback('Données récupérées');
  }, 1000);
}
fetchData((data) => {
  console.log(data);
});
```

## 2. Promises
**Avantages :**
- Syntaxe plus propre que les callbacks imbriqués.
- Chaining facile (.then()).
- Gestion d’erreurs via .catch().

**Inconvénients :**
- Peut toujours être complexe pour des chaînes longues.
- Moins intuitif que async/await pour certains.

**Exemple :**
```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Données récupérées'), 1000);
  });
}
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
## 3. Async/Await
**Avantages :**
- Syntaxe proche du synchrone, très lisible.
- Gestion d’erreurs via try/catch.
- Idéal pour enchaîner plusieurs appels asynchrones.
**Inconvénients :**
- Doit être utilisé dans une fonction async.
- Pas optimal pour lancer des opérations en parallèle sans précaution.

**Exemple :**

```js
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
## 4. Promise.all / Promise.race / Promise.allSettled

**Avantages :**
- Permet de gérer plusieurs Promises en parallèle.
- Promise.all: attend que toutes réussissent.
- Promise.race: résout ou rejette dès la première terminée.
- Promise.allSettled: attend que toutes se terminent (succès ou erreur).

**Inconvénients :**
- Pas adapté si une seule tâche échouée doit être ignorée (Promise.all échoue totalement).

**Exemple :**
```js
Promise.all([fetchData1(), fetchData2()])
  .then(([data1, data2]) => {
    console.log(data1, data2);
  })
  .catch(error => console.error(error));
```

## 5. Observables (via RxJS)

**Avantages :**
- Idéal pour des flux de données (temps réel, WebSocket, etc.).
- Plus puissant que Promises pour des événements multiples.
- Grande flexibilité avec les opérateurs RxJS.

**Inconvénients :**
- Courbe d’apprentissage plus raide.
- Nécessite une bibliothèque externe (RxJS).

**Exemple :**
```js
import { of } from 'rxjs';
of('Données').subscribe(data => console.log(data));
```

**Conclusion**
| Méthode         | Lisibilité | Contrôle du flux | Parallélisme  | Cas d’usage principal                       |
| --------------- | ---------- | ---------------- | ------------- | ------------------------------------------- |
| **Callbacks**   | ❌          | ❌                | ❌             | Code simple, héritage de l’ancien JS        |
| **Promises**    | ✅          | ✅                | ✅             | Requêtes HTTP, logique séquentielle simple  |
| **Async/Await** | ✅✅         | ✅✅               | ✅ (avec soin) | Tout usage moderne, séquentiel ou mixte     |
| **Promise.all** | ✅          | ✅✅               | ✅✅            | Appels parallèles                           |
| **Observables** | ⚠️         | ✅✅               | ✅✅            | Flux continus, WebSockets, events complexes |
