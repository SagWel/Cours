# Stockage côté client 

## localStorage

### 1. Introduction

Le LocalStorage est une API du Web Storage fournie par les navigateurs modernes qui permet de stocker des données localement dans le navigateur de l'utilisateur, sous forme de paires clé/valeur. Contrairement aux cookies, les données dans le LocalStorage ne sont pas envoyées au serveur à chaque requête HTTP.

 
### 2. Caractéristiques du LocalStorage

    Capacité : environ 5 Mo par domaine.

    Stockage persistant : les données restent même après la fermeture du navigateur.

    Accessible uniquement via JavaScript côté client.

    Données stockées sous forme de chaînes de caractères (string).

 
### 3. API : les méthodes principales

```js
// Ajouter ou modifier une valeur
localStorage.setItem('cle', 'valeur');
// Récupérer une valeur
let valeur = localStorage.getItem('cle');

// Supprimer une valeur
localStorage.removeItem('cle');

// Supprimer toutes les données
localStorage.clear();

// Obtenir la clé à une position donnée
let cle = localStorage.key(0);

// Obtenir le nombre d'éléments
let taille = localStorage.length;
```

 
### 4. Exemple simple
```js
// Sauvegarde du prénom
localStorage.setItem('prenom', 'Alice');

// Lecture
console.log(localStorage.getItem('prenom')); // Affiche: Alice

// Suppression
localStorage.removeItem('prenom');

// Nettoyage complet
localStorage.clear();
```
 
### 5. Stocker des objets

Le LocalStorage ne supporte que les chaînes de caractères. Il faut donc utiliser JSON.stringify() et JSON.parse() pour stocker et lire des objets.
```js
let utilisateur = { nom: "Dupont", age: 30 };

// Stockage
localStorage.setItem("utilisateur", JSON.stringify(utilisateur));

// Récupération
let donnees = JSON.parse(localStorage.getItem("utilisateur"));
console.log(donnees.nom); // "Dupont"
```
 
### 6. Avantages et inconvénients
**Avantages :**
- Simple à utiliser
- Bon pour les données persistantes non sensibles
- Pas de dépendance serveur

**Inconvénients :**
- Pas sécurisé : les données sont facilement accessibles depuis les outils du navigateur
- Taille limitée (~5 Mo)
- Pas adapté au stockage de données sensibles (ex : mots de passe)

 
### 7. Cas d’usage typiques

- Mémoriser les préférences de l’utilisateur (thème clair/sombre)
- Sauvegarde temporaire de formulaires
- Gestion de sessions simples sans authentification
- Applications déconnectées (offline web apps)

 
### 8. Alternatives

- **SessionStorage** : même API, mais les données sont supprimées à la fermeture de l’onglet.
- **Cookies** : plus petit (4 Ko), mais envoyé au serveur à chaque requête.
- **IndexedDB** : pour un stockage structuré et plus complexe.

 
### 9. Bonnes pratiques

- Toujours vérifier si localStorage est disponible :
```js
if (typeof localStorage !== 'undefined') {
  // OK
}
```
- Gérer les erreurs (ex. : quotas dépassés, parsing JSON)

### 10. Conclusion

Le LocalStorage est un outil puissant et simple pour stocker des données localement. Il est particulièrement utile pour les applications front-end légères qui ne nécessitent pas une base de données serveur.

## sessionStorage
### 1. Qu'est-ce que sessionStorage ?

sessionStorage est un type de stockage local côté client fourni par le navigateur web. Il permet de stocker des données sous forme de paires clé/valeur, comme un objet, temporairement pour la durée de la session de navigation.
Différence avec localStorage :

| Fonctionnalité 	|              sessionStorage   	|        localStorage            |
| ----------------- | --------------------------------- | ------------------------------ |
| Durée de vie 	    | Jusqu'à la fermeture de l'onglet 	| Persistant (même après redémarrage du navigateur)|
|   Portée 	        |              Onglet uniquement 	| Partagée entre tous les onglets du même domaine |
| Capacité typique 	|                             ~5MB 	|                           ~5MB |

 
### 2. Quand l'utiliser ?

Utilisez sessionStorage lorsque :

- Vous devez stocker des données temporaires (par exemple, les étapes d’un formulaire multi-pages).
- Vous ne voulez pas que les données soient partagées entre les onglets.
- Les données ne doivent pas persister après la fermeture de l’onglet.

 
### 3. Méthodes principales de sessionStorage
**sessionStorage.setItem(clé, valeur)**

Ajoute ou met à jour une donnée.
```js
sessionStorage.setItem('nom', 'Alice');
```

**sessionStorage.getItem(clé)**
Récupère une valeur.
```js
let nom = sessionStorage.getItem('nom'); // "Alice"
```
**sessionStorage.removeItem(clé)**
Supprime une clé spécifique.
```js
sessionStorage.removeItem('nom');
 
sessionStorage.clear()
Renvoie le nombre de paires clé/valeur.
console.log(sessionStorage.length);
```
### 4. Exemple complet
```js
// Stockage
sessionStorage.setItem('utilisateur', 'Bob');
sessionStorage.setItem('email', 'bob@example.com');

// Récupération
console.log(sessionStorage.getItem('utilisateur')); // "Bob"

// Suppression
sessionStorage.removeItem('email');

// Vider tout
sessionStorage.clear();
 ```
### 5. Stocker des objets avec JSON
Le sessionStorage ne stocke que des chaînes de caractères. Pour stocker un objet :
```js

let user = { nom: "Claire", age: 30 };

// Enregistrement
sessionStorage.setItem('user', JSON.stringify(user));

// Lecture
let utilisateur = JSON.parse(sessionStorage.getItem('user'));
console.log(utilisateur.nom); // "Claire"
```
 
### 6. Sécurité

- Les données ne sont pas cryptées : ne jamais stocker de mot de passe ou données sensibles.
- Accessible uniquement via JavaScript sur le même domaine.
 
### 7. Cas d'usage concrets
- Stocker l’état d’un formulaire entre plusieurs pages.
- Sauvegarder des filtres ou préférences de tri pendant une session.
- Gérer l’état de connexion temporaire d’un utilisateur.

## Les Cookies en JavaScript

### 1. Qu’est-ce qu’un cookie ?

Un cookie est un petit fichier stocké dans le navigateur d’un utilisateur. Il permet de mémoriser des informations entre les différentes visites d’un site web, comme :
- Un identifiant utilisateur
- Les préférences de langue
- Le contenu d’un panier

 
### 2. Création d’un cookie en JavaScript

Syntaxe de base

document.cookie = "nom=valeur";

Exemple
```js
document.cookie = "utilisateur=Jean";
```
Cela crée un cookie nommé utilisateur avec la valeur Jean.

 
### 3. Ajouter des options à un cookie

On peut définir plusieurs attributs :

- expires: date d’expiration
- max-age: durée de vie en secondes
- path: chemin du cookie (par défaut /)
- domain: domaine concerné
- secure: cookie accessible uniquement via HTTPS
- SameSite: contrôle l'envoi du cookie (Lax, Strict, None)

Exemple avec options

document.cookie = "utilisateur=Jean; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

 
### 4. Lire les cookies
```js
console.log(document.cookie);
```
Cette commande retourne une chaîne de caractères avec tous les cookies du site actuel :
```js
utilisateur=Jean; theme=sombre
```
Pour accéder à un cookie spécifique, on peut faire :
```js
function getCookie(nom) {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let [cle, valeur] = cookies[i].split("=");
    if (cle === nom) return valeur;
  }
  return null;
}

console.log(getCookie("utilisateur")); // "Jean"
```
 
### 5. Modifier un cookie

Il suffit de réutiliser document.cookie avec le même nom :
```js
document.cookie = "utilisateur=Pierre; path=/";
```
 
### 6. Supprimer un cookie

On le supprime en lui assignant une date expirée :
```js
document.cookie = "utilisateur=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```
 
### 7. Limites des cookies

- Taille limitée (~4 Ko par cookie)
- Nombre limité (~20-50 cookies par domaine)
- Accessible en lecture côté client (attention à la sécurité !)

 
### 8. Alternatives modernes

- LocalStorage : plus de capacité, persistance longue
- SessionStorage : persistant jusqu’à la fermeture du navigateur
- IndexedDB : base de données locale

 
### 9. Bonnes pratiques

- Toujours définir path=/ pour garantir l’accès global
- Utiliser Secure et SameSite pour la sécurité
- Ne jamais stocker de données sensibles en clair

 
### 10. Exemple complet
```js
// Créer un cookie
document.cookie = "theme=sombre; max-age=3600; path=/";

// Lire un cookie
let theme = getCookie("theme");

// Modifier un cookie
document.cookie = "theme=clair; max-age=3600; path=/";

// Supprimer un cookie
document.cookie = "theme=; max-age=0; path=/";
```
 

* L’attribut max-age=3600; dans un cookie signifie que le cookie sera valide pendant 3600 secondes, soit 1 heure, à partir du moment où il est créé.

Détail :
- max-age : définit la durée de vie du cookie en secondes
- 3600 : équivaut à 1 heure (60 × 60)

Après ce délai, le navigateur supprimera automatiquement le cookie.