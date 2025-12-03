# L'Architecture Backend et la Modularité

## Introduction à l’architecture backend

**Qu’est-ce que le backend ?**

    Le backend est la partie "cachée" d’une application web. Il traite les données, les stocke et gère la logique métier. Il interagit avec :

- La base de données

- L’API (interface entre front et back)

- Le système de fichiers

- L’authentification, les rôles, etc.

**Exemple d’architecture simple (Node.js + Express)**

    [ Frontend (HTML/CSS/JS) ]  <--->  [ Backend Node.js ]
                                                |
                                            [ MySQL ]

## Les briques principales d’un projet backend

### 1. Serveur

- Exemple : Express.js sous Node.js

- Reçoit les requêtes HTTP (GET, POST, etc.)

- Envoie des réponses au client

### 2. Contrôleurs (Controllers)

Contiennent la logique des actions

Exemple : créer un utilisateur, récupérer un produit

### 3. Modèles (Models)

- Représentent les données

- Contiennent les requêtes SQL ou ORM vers la base

### 4. Routes

- Font le lien entre les URLs et les fonctions du contrôleur

### 5. Middleware

- Fonctions qui interceptent les requêtes

- Exemple : vérification de token, gestion des erreurs

### 6. Configuration

- Fichiers pour gérer les variables d’environnement, les connexions à la base de données

## La modularité du code

**Pourquoi modulariser ?**

- Séparer les responsabilités
- Faciliter la maintenance
- Réutiliser le code
- Travailler en équipe plus efficacement


## Structure typique d’un projet Node.js modulaire

    /project-root
    │
    ├── /controllers     → logique métier
    ├── /models          → requêtes SQL ou ORM
    ├── /routes          → points d'entrée API
    ├── /middlewares     → vérifications intermédiaires
    ├── /config          → paramètres de l'application
    ├── /utils           → fonctions réutilisables
    ├── /public          → fichiers statiques
    ├── /views           → templates HTML (si nécessaire)
    ├── app.js           → point d'entrée principal
    ├── .env             → variables d’environnement

## Exemple concret

**Exemple : gestion des utilisateurs**

`models/UserModel.js`

```js
import pool from '../config/db.js'

const UserModel = {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM users')
    return rows
  }
}
export default UserModel
```

`controllers/UserController.js`
```js
import UserModel from '../models/UserModel.js'

const UserController = {
  async list(req, res) {
    const users = await UserModel.findAll()
    res.json(users)
  }
}
export default UserController
```

`routes/userRoutes.js`
```js
import express from 'express'
import UserController from '../controllers/UserController.js'

const router = express.Router()
router.get('/', UserController.list)

export default router
```

`app.js`
```js
import express from 'express'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(3000, () => console.log('Serveur lancé sur le port 3000'))
```

## Bonnes pratiques

- Utiliser des noms clairs et cohérents

- Ne pas mélanger les responsabilités (principe de "Separation of Concerns")

- Centraliser la configuration dans un seul fichier

- Ajouter un fichier .env pour les mots de passe et URL de base de données

- Utiliser des middlewares pour la sécurité (auth, CORS, etc.)

## Récapitulatif

| Élément        | Rôle                                       |
| -------------- | ------------------------------------------ |
| **Model**      | Dialogue avec la base de données           |
| **Controller** | Applique la logique métier                 |
| **Route**      | Lie les URLs aux fonctions                 |
| **Middleware** | Intercepte les requêtes pour vérifications |
| **app.js**     | Point d’entrée de l'application            |
