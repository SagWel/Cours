# La Documentation pour les Développeurs Web

Comprendre l'importance de la documentation dans un projet Web.

Lire et utiliser une documentation technique (API, framework, bibliothèque...).

Rédiger une documentation claire pour vos propres projets.

Connaître les outils et les formats utilisés pour documenter du code.

## 1. Pourquoi la documentation est-elle essentielle ?

**Définitions :**
    Documentation : Ensemble de textes, fichiers, commentaires ou pages qui expliquent le fonctionnement d’un projet, d’un outil ou d’un morceau de code.

**À quoi ça sert ?**

- Comprendre rapidement un projet (même longtemps après l’avoir codé).

- Travailler en équipe (transmission de connaissances).

- Faciliter la maintenance.

- Aider les utilisateurs ou développeurs à utiliser votre projet.

## 2. Types de documentation

| Type                             | Description                                                                 |
| -------------------------------- | --------------------------------------------------------------------------- |
| **README.md**                    | Présentation générale du projet, instructions d'installation, d'utilisation |
| **Commentaires dans le code**    | Explications sur des morceaux de code complexes ou importants               |
| **Documentation d’API**          | Détail des routes, méthodes, paramètres et retours d’une API                |
| **Wiki** / Documentation interne | Pages explicatives internes à l’équipe ou au projet                         |
| **Changelog**                    | Historique des modifications apportées au projet                            |

## 3. Lire une documentation existante

Quand vous utilisez un framework (React, Flask), une librairie (Axios, Bootstrap) ou une API externe (OpenWeather, Stripe), la documentation officielle est votre meilleure alliée.

**Exemple : Extrait de la doc d’Axios (librairie JS pour faire des requêtes HTTP)**
```js
axios.get('https://api.example.com/users')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
```
**Comment la lire efficacement ?**

- Lisez les exemples avant le texte.

- Recherchez les mots-clés : GET, POST, params, response, status, etc.

- Faites des tests dans un petit projet.

## 4. Comment bien écrire une documentation ?

### A. Un bon README.md (fichier à la racine de tout projet)

```md
# Mon projet web

Une application web de gestion de photos.

## Installation

git clone https://github.com/mon-projet
cd mon-projet
npm install
npm start


## Utilisation
Ouvrir http://localhost:3000 dans le navigateur.

## Technologies

    React

    Node.js

    MySQL
```

### B. Commentaires dans le code

Règle : *"Commenter ce qui n'est pas évident."*

```js
// Vérifie si l'utilisateur est connecté
if (!user.isLoggedIn()) {
  redirectToLogin();
}
``` 

### C. Documentation d’une API (exemple Express.js)
```js
// GET /api/users
// Retourne tous les utilisateurs
app.get('/api/users', (req, res) => {
  res.json(users);
});
```

Ou sous forme Markdown ou Swagger :
```yaml
GET /api/users:
  summary: Récupère tous les utilisateurs
  responses:
    200:
      description: OK
```

## 5. Outils utiles pour la documentation
| Outil                   | Utilité                                                |
| ----------------------- | ------------------------------------------------------ |
| **Markdown** (`.md`)    | Format léger utilisé dans GitHub, GitLab, etc.         |
| **JSDoc**               | Génère de la documentation à partir de commentaires JS |
| **Swagger / OpenAPI**   | Pour documenter des APIs REST de façon interactive     |
| **Sphinx** (Python)     | Documentation de projets Python                        |
| **MkDocs / Docusaurus** | Crée des sites de documentation statiques              |

## 6. Bonnes pratiques
- Commencez votre projet avec un `README.md`
- Mettez à jour votre documentation à chaque évolution du projet
- Privilégiez la clarté et la concision
- Relisez-vous ou demandez à quelqu’un de relire votre doc
- Commentez votre code, mais ne répétez pas l’évidence

## Conclusion

La documentation est aussi importante que le code lui-même. Un bon développeur ne fait pas que coder : il rend son travail compréhensible et maintenable.