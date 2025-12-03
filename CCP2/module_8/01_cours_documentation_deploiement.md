# Documentation & Déploiement pour Développeurs Web
## Partie 1 : La Documentation
###  Pourquoi documenter ?

Documenter un projet web permet de :

    Faciliter la compréhension pour d'autres développeurs (ou vous-même plus tard).

    Transmettre facilement les consignes aux équipes (design, test, maintenance).

    Améliorer la qualité, la sécurité et la maintenabilité du code.

### Types de documentation
#### 1. README.md (obligatoire)

Contient :

    Le nom du projet et sa description

    Les technologies utilisées

    Comment installer et lancer le projet

    Des exemples d’utilisation

    Auteurs, licence, etc.

Exemple :
```md
# MonApp

Application web de gestion de tâches.

## Technologies
- React
- Node.js + Express
- MySQL

## Installation
git clone https://github.com/moncompte/monapp.git
cd monapp
npm install

## Démarrage

npm run dev

```
---

#### 2. **Commentaires dans le code**
- Expliquent les **fonctions complexes**
- Donnent le contexte ou les **règles métier**
- Ne pas commenter le code "évident"

```js
// Cette fonction vérifie si l'utilisateur est administrateur
function isAdmin(user) {
  return user.role === 'admin';
}
```

#### 3. Documentation technique

Un fichier séparé ou un dossier `/docs/` avec :

    Architecture du projet

    Structure des dossiers

    Routes API (avec méthode, URL, params, etc.)

    Modèles de données

    Exemples de requêtes (curl, Postman...)

#### 4. Documentation utilisateur
    Guides simples : "Comment utiliser l'application"

    Captures d’écran

    FAQ ou tutoriels vidéo

### Bonnes pratiques
    Mettre à jour la documentation régulièrement

    Utiliser un langage simple et clair

    Utiliser des outils comme JSDoc, Swagger (pour les API), Sphinx, etc.

    Centraliser dans un wiki ou dans Notion, GitHub Wiki, etc.
## Partie 2 : Le Déploiement

### Objectif

Mettre votre application en ligne pour qu’elle soit accessible aux utilisateurs finaux.

### Étapes générales du déploiement
#### 1. Préparer le projet

    Supprimer les fichiers inutiles

    Mettre à jour .env (ne jamais push les infos sensibles)

    Tester que tout fonctionne en local (npm run build, tests)

#### 2. Choisir une plateforme de déploiement
| Cas                  | Frontend                                           | Backend | BDD |
| -------------------- | -------------------------------------------------- | ------- | --- |
| Simple site statique | GitHub Pages, Netlify, Vercel                      | -       | -   |
| App complète         | Vercel, Render, Railway, DigitalOcean, AWS, Heroku | Oui     | Oui |

### Déploiement d’une app Web complète (Exemple : React + Node.js + MySQL)
**1. Créer un dépôt GitHub**

    Héberger le code source

    Créer un .gitignore pour éviter d’envoyer node_modules, .env, etc.

**2. Configurer la base de données**

    Utiliser une base de données distante (ex : PlanetScale, Railway, Render PostgreSQL, etc.)

    Ou bien installer MySQL/MariaDB sur le serveur (ex : VPS)

**3. Déployer le backend**

    Utiliser Render, Railway ou un VPS

    Ajouter un fichier Procfile ou start dans package.json

    Configurer les variables d’environnement (.env dans Render, Railway…)

**4. Déployer le frontend**

Si c’est React :

```bash
npm run build
```

    Uploader le dossier /build sur :

        Netlify

        Vercel

        Ou via Nginx/Apache sur un VPS

**5. Sécurité et configuration**

    Activer le HTTPS

    Sécuriser les clés/API

    Mettre en place un pare-feu (firewall) si nécessaire

    Activer les logs

### Outils utiles

    Docker : pour packager votre application

    PM2 : pour gérer les processus Node.js

    Nginx : pour le reverse proxy

    CI/CD (GitHub Actions, GitLab CI) : pour automatiser le déploiement

### Exemple simple avec Render (Node.js)

- Créer un compte sur render.com
- Connecter votre repo GitHub
- Créer un "Web Service"
- Indiquer la commande de démarrage :
```bash
npm install && npm run start
```
- Ajouter les variables d’environnement

### Résumé
| Thème         | Bonnes pratiques                                                   |
| ------------- | ------------------------------------------------------------------ |
| Documentation | README clair, commentaires utiles, docs techniques et utilisateurs |
| Déploiement   | Tests, configuration sécurisée, hébergement adapté, CI/CD          |
