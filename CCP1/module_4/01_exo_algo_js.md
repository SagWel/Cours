# JAVASCRIPT
## Niveau 1 — Bases et logique
Objectif : se familiariser avec les variables, conditions et boucles.

### 1. Bonjour utilisateur
- Demande à l’utilisateur son nom et affiche :
indice : let nom = prompt(); 
prompt(); est une fonction qui prend en  argument, une chaine de caractères  (par exemple une question)
"Bonjour [nom] !"

### 2. Pair ou impair
- Demande un nombre et affiche s’il est pair ou impair.
### 3. Comparateur
- Demande deux nombres et affiche le plus grand des deux. 
### 4. Somme de 1 à N
- Demande un nombre N et calcule la somme des entiers de 1 à N. 
### 5. Table de multiplication
- Demande un nombre et affiche sa table de multiplication (jusqu’à 10). 
## Niveau 2 — Boucles et tableaux
Objectif : manipuler des tableaux, boucler et faire des calculs simples.

### 6. Moyenne d’un tableau
- Crée un tableau de nombres [12, 5, 8, 130, 44]
→ Calcule et affiche la moyenne.

### 7. Recherche d’un élément
- Demande un nom et vérifie s’il est dans le tableau :
["Alice", "Bob", "Charlie", "David"]

### 8. Maximum et minimum
- Trouve le plus grand et le plus petit élément d’un tableau.

### 9. Inverser un tableau
- Écris une fonction qui renvoie un tableau inversé (sans utiliser `.reverse()`).

### 10. Compter les voyelles
- Demande une phrase et compte le nombre de voyelles.

## Niveau 3 — Fonctions et logique avancée
### 11. Palindrome

- Écris une fonction qui vérifie si un mot est un palindrome.

    Ex : “kayak” → ✅, “voiture” → ❌
### 12. Factorielle

Écris une fonction factorielle(n) qui renvoie n!.

### 13. Fibonacci

Génère les n premiers termes de la suite de Fibonacci.

### 14. Mot le plus long

Dans une phrase, trouve le mot le plus long.
Ex : “Les développeurs adorent coder vite” → “développeurs”

### 15. Nombre premier

Écris une fonction estPremier(n) qui renvoie true si n est un nombre premier.

## Niveau 4 — Tableaux d’objets et algorithmes pratiques

Objectif : simuler de vraies manipulations de données.

### 16. Filtrer les notes
```js
const notes = [12, 8, 17, 4, 15];
```
→ Crée un nouveau tableau contenant uniquement les notes supérieures à 10.

### 17. Gestion d’élèves
```js
const eleves = [
  { nom: "Alice", note: 12 },
  { nom: "Bob", note: 8 },
  { nom: "Charlie", note: 17 }
];
```
→ Calcule la moyenne générale et affiche le meilleur élève.
### 18. Tri d’un tableau d’objets

- Trie le tableau eleves par note décroissante.

### 19. Suppression d’un élément

- Supprime un élève du tableau à partir de son nom.

### 20. Regroupement par catégorie
```js
const produits = [
  { nom: "Pomme", categorie: "Fruit" },
  { nom: "Carotte", categorie: "Légume" },
  { nom: "Banane", categorie: "Fruit" }
];
```
→ Regroupe les produits par catégorie.
## Niveau 5 — Défis logiques

Objectif : tester ton raisonnement et tes algorithmes.

### 21. Anagrammes

- Vérifie si deux mots sont des anagrammes (“chien” et “niche”).

### 22. Compteur de mots

- Écris une fonction qui compte le nombre de mots dans une phrase.

### 23. Tri personnalisé

- Trie un tableau de mots par longueur croissante.

### 24. Équilibre des parenthèses

Écris une fonction qui vérifie si les parenthèses d’une chaîne sont bien fermées.
Ex : `"(()())" → ✅, "(()" → ❌`

### 25. Jeu du nombre mystère

- L’ordinateur choisit un nombre entre 1 et 100.

`const mystere = Math.floor(Math.random() * 100) + 1;`
- L’utilisateur doit deviner en recevant les messages “plus grand” / “plus petit”.