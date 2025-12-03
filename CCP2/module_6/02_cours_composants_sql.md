# Les Composants d'Accès aux Données SQL en Node.js
📌 Objectifs pédagogiques

À la fin de ce cours, vous serez capable de :

    Comprendre ce qu’est un composant d’accès aux données (DAO)

    Utiliser une base SQL avec Node.js

    Interagir avec une base MySQL ou PostgreSQL via des bibliothèques comme mysql2, pg ou un ORM comme Sequelize

    Structurer votre code avec un Data Access Layer

## 1. Introduction aux composants d’accès aux données
Qu'est-ce qu'un DAO (Data Access Object) ?

Un composant d’accès aux données est une abstraction qui centralise les opérations d’accès à la base de données.
Il permet de séparer la logique métier de la logique d’accès aux données, selon les principes MVC ou architecture en couches.
Pourquoi les utiliser ?

    Séparation des responsabilités

    Réutilisabilité du code

    Plus facile à maintenir et à tester

    Sécurité (évite les injections SQL si bien utilisé)

## 🛠️ 2. Choix des bibliothèques pour SQL en Node.js
| Bibliothèque | Type              | Bases supportées          | Remarques                  |
| ------------ | ----------------- | ------------------------- | -------------------------- |
| `mysql2`     | Pilote bas niveau | MySQL / MariaDB           | Rapide et simple           |
| `pg`         | Pilote bas niveau | PostgreSQL                | Officiel et stable         |
| `knex.js`    | Query Builder     | MySQL, PostgreSQL, SQLite | Syntaxe fluide             |
| `sequelize`  | ORM               | MySQL, PostgreSQL, SQLite | Abstraction orientée objet |
| `typeorm`    | ORM               | Plusieurs bases           | Compatible avec TS         |

## 3. Exemple simple avec mysql2

a. Installation
```bash
npm install mysql2
```

b. Connexion à la base
```js
// db.js
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog',
});
```

c. Exemple de DAO
```js
// dao/ArticleDAO.js
import { pool } from '../db.js';

export default class ArticleDAO {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM articles');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(article) {
    const { title, content } = article;
    const [result] = await pool.query(
      'INSERT INTO articles (title, content) VALUES (?, ?)',
      [title, content]
    );
    return result.insertId;
  }
}
```

## 4. Exemple avec Sequelize (ORM)
a. Installation
```bash
npm install sequelize mysql2
```

b. Configuration de Sequelize
```js
// db.js
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('blog', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
```

c. Définition d’un modèle
```js
// models/Article.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  }
});
```

d. Utilisation
```js
// services/articleService.js
import { Article } from '../models/Article.js';

export async function createArticle(data) {
  return await Article.create(data);
}

export async function getAllArticles() {
  return await Article.findAll();
}
```

## 5. Bonnes pratiques

    Ne jamais injecter directement des valeurs dans une requête SQL : utilisez des requêtes préparées

    Utiliser une pool de connexions pour optimiser les performances

    Ne pas mettre de requêtes SQL dans les contrôleurs : créez des fichiers DAO ou services

    Pensez à gérer les erreurs et les transactions

## 6. Technique
### 1. Différence entre createConnection() et createPool()
| Méthode              | Description                                   |
| -------------------- | --------------------------------------------- |
| `createConnection()` | Crée **une seule connexion** à la base.       |
| `createPool()`       | Crée un **pool de connexions réutilisables**. |

### 2. Pourquoi préférer createPool() ?
**Avantages du `pool`**
- 1. Meilleures performances

        Le pool garde un certain nombre de connexions ouvertes et réutilisables.

        Il évite les coûts de création/fermeture de connexion à chaque requête.

- 2. Gestion automatique de la concurrence

        Si plusieurs utilisateurs accèdent à votre API en même temps, le pool répartit les connexions disponibles.

        Avec createConnection(), une seule connexion serait partagée → risque de blocage ou crash.

- 3. Scalabilité

        Le pool peut gérer un grand nombre de requêtes simultanées sans créer une connexion à chaque fois.

        On peut configurer des options comme connectionLimit.

- 4. Fiabilité

    Le pool remplace automatiquement une connexion qui a expiré ou échoué.

**Exemple comparatif**

- **createConnection (à éviter en production)**
```js
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'blog'
});

const [rows] = await connection.query('SELECT * FROM articles');
```

- Ici, chaque appel à ce module crée une nouvelle connexion, sauf si vous le gérez vous-même.
- createPool (recommandé)
```js
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'blog',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Utilisation dans un DAO
const [rows] = await pool.query('SELECT * FROM articles');
```

- Le pool réutilise les connexions, optimise les performances et évite les erreurs de surcharge.
- En résumé

| Critère                | `createConnection()` | `createPool()`  |
| ---------------------- | -------------------- | ---------------- |
| Une seule connexion    | ✔                    | ❌                |
| Réutilisation          | ❌                    | ✔                |
| Concurrence            | ❌ (risque élevé)     | ✔                |
| Scalabilité            | ❌                    | ✔                |
| Production recommandée | ❌                    | ✔                |


## Conseil

    En développement ou pour des scripts rapides, createConnection() peut suffire.
    En API web, applications Express, ou projets à plusieurs utilisateurs, utilisez toujours createPool().

## Conclusion

Les composants d’accès aux données sont essentiels pour structurer proprement une application Node.js connectée à une base SQL.
Vous pouvez opter pour un accès direct via mysql2/pg ou utiliser des ORM comme Sequelize pour simplifier la manipulation des données.
