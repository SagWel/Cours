# Réaliser les tests unitaires avec des outils d’automatisation des tests unitaires (Node.js & React)
## 1. Qu’est-ce qu’un test unitaire ?

- Un test unitaire est un test automatisé qui vérifie qu’une fonction ou un composant isolé se comporte comme prévu.

- Objectif : s’assurer que le code fonctionne correctement indépendamment du reste du système.

👉 Exemple d’un cas simple :

```js
// addition.js
function addition(a, b) {
  return a + b;
}

module.exports = addition;
```
Test unitaire attendu : vérifier que `addition(2, 3)` retourne `5`.

## 2. Pourquoi automatiser les tests unitaires ?
```
✅ Détection rapide des erreurs.
✅ Gain de temps lors des évolutions du projet.
✅ Sécurité lors du refactoring (réorganisation du code).
✅ Documentation vivante : les tests expliquent comment le code est censé fonctionner.
```

## 3. Outils de tests unitaires populaires
**Pour Node.js**
- **Jest** (le plus utilisé, fourni par Facebook, simple à configurer).
- **Mocha** + **Chai** (souvent utilisés ensemble).

**Pour React**
- **Jest** (intégré avec Create React App).
- **React Testing Library** (RTL) → permet de tester les composants en se rapprochant du comportement réel de l’utilisateur.

## 4. Exemple pratique en Node.js
**Installation**
```bash
npm init -y
npm install --save-dev jest
```

👉 Ajouter dans `package.json` :
```js
"scripts": {
  "test": "jest"
}
```

**Exemple de fonction**

```js
// math.js
function addition(a, b) {
  return a + b;
}

function division(a, b) {
  if (b === 0) throw new Error("Division par zéro interdite");
  return a / b;
}

module.exports = { addition, division };
```
**Exemple de test**
Créer un fichier `math.test.js` :
```js
const { addition, division } = require('./math');

test("addition de 2 + 3 = 5", () => {
  expect(addition(2, 3)).toBe(5);
});

test("division de 10 / 2 = 5", () => {
  expect(division(10, 2)).toBe(5);
});

test("division par zéro doit lancer une erreur", () => {
  expect(() => division(5, 0)).toThrow("Division par zéro interdite");
});
```

👉 Lancer les tests :
```bash
npm test
```

## 5. Exemple pratique en React
**Installation (si projet créé avec CRA ou Vite)**

- CRA (Create React App) → Jest & RTL sont déjà installés.
- Sinon installer manuellement :
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```
**Exemple de composant**
```jsx
// Button.jsx
import React from "react";

export default function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```
**Exemple de test avec React Testing Library**
Créer `Button.test.jsx` :
```jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("le bouton affiche le bon label", () => {
  render(<Button label="Clique-moi" onClick={() => {}} />);
  expect(screen.getByText("Clique-moi")).toBeInTheDocument();
});

test("le bouton déclenche la fonction onClick", () => {
  const mockFn = jest.fn(); // fonction simulée
  render(<Button label="OK" onClick={mockFn} />);
  
  fireEvent.click(screen.getByText("OK"));
  
  expect(mockFn).toHaveBeenCalledTimes(1);
});
```
👉 Lancer :
```bash
npm test
```

## 6. Bonnes pratiques

- **Isoler les tests** → chaque test doit être indépendant.
- **Nommer clairement** les tests (expliquer le comportement attendu).
- **Ne pas tester l’implémentation interne**, mais **le résultat attendu.**
- **Automatiser** l’exécution des tests via CI/CD (GitHub Actions, GitLab CI, Jenkins…).
- **Viser une bonne couverture** (coverage), mais sans viser 100% au détriment de la qualité.

👉 Exemple : lancer Jest avec un rapport de couverture
```bash
npm test -- --coverage
```
## 7. Exercices pratiques
**Exercice 1 (Node.js)**

Écrire une fonction isPalindrome(str) qui retourne true si le mot est un palindrome, false sinon.
Écrire les tests unitaires correspondants.

**Exercice 2 (React)**

Créer un composant Counter avec un bouton + et un bouton -.
Le test doit vérifier que le compteur augmente et diminue correctement.

## Conclusion

- En Node.js, on privilégie Jest pour sa simplicité.
- En React, on utilise Jest + React Testing Library pour tester le rendu et les interactions.
- Les tests unitaires automatisés permettent de coder avec confiance et de déployer plus sereinement.