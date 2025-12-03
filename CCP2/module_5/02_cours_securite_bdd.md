# Sécurité des Bases de Données

## Pourquoi la sécurité des bases de données est-elle cruciale ?

**Les bases de données contiennent des informations sensibles :**

    Données personnelles (noms, adresses, e-mails)

    Identifiants de connexion (mots de passe)

    Informations financières (numéros de carte, transactions)

    Données professionnelles (commandes, messages, historiques)

**Si ces données sont mal protégées, elles peuvent être :**

    Volées

    Modifiées

    Supprimées

    Exposées au public

## Principales menaces
a. Injection SQL

    Exploiter une faille pour exécuter des requêtes malveillantes

Exemple dangereux :

```js
// NE PAS FAIRE
const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

```

Un attaquant peut injecter :
```js
' OR '1'='1
```
**b. Fuite de données**

    Mauvais contrôle des accès, stockage en clair des mots de passe

**c. Accès non autorisé**

    Mots de passe faibles, comptes admin sans protection

**d. Vol de sauvegarde**

    Les fichiers de backup mal sécurisés peuvent être volés

## Bonnes pratiques de sécurité

**a. Utiliser des requêtes préparées (paramétrées)**

- Empêche les injections SQL

Exemple sécurisé (Node.js + MySQL) :

```js
con.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);
```

**b. Hasher les mots de passe**

- Ne jamais stocker de mot de passe en clair

Exemple avec bcrypt :

```js
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
```

**c. Gérer les rôles et permissions**

    L'utilisateur de la base ne doit pas être "root"

    Créer un utilisateur SQL avec uniquement les droits nécessaires

**d. Sauvegardes chiffrées**

    Toujours chiffrer les sauvegardes

    Stocker dans un emplacement sécurisé (pas dans un dossier web accessible)

**e. Mises à jour régulières**

    SGBD (MySQL, PostgreSQL, etc.)

    Bibliothèques utilisées

**f. Journalisation et surveillance**

    Garder des logs des accès

    Détecter les requêtes suspectes

## Outils et pratiques recommandés

| Outil/Technique        | Utilité                               |
| ---------------------- | ------------------------------------- |
| `bcrypt`, `argon2`     | Hash sécurisé des mots de passe       |
| `dotenv`               | Stocker les identifiants hors du code |
| `fail2ban`, `iptables` | Bloquer les accès indésirables        |
| `TLS/SSL`              | Sécuriser les connexions à distance   |
| `firewall`             | Restreindre les connexions réseau     |

## Cas pratique : sécuriser une application

**Scénario :**

Un site de recettes qui enregistre les utilisateurs, les commentaires et les recettes.

**Étapes :**

- Créer une base avec un utilisateur SQL restreint
- Utiliser des requêtes préparées
- Hasher les mots de passe
- Créer une route /login et /register sécurisée
- Interdire l'accès à /admin si l'utilisateur n'est pas admin

##  À retenir

| Mauvaise pratique                 | Bonne pratique                      |
| --------------------------------- | ----------------------------------- |
| Mot de passe en clair             | Hash + salt                         |
| Requête SQL avec concaténation    | Requêtes préparées                  |
| Utilisateur root pour l'app       | Utilisateur SQL avec droits limités |
| Pas de journalisation             | Logs et alertes                     |
| Sauvegarde dans `/public/backup/` | Sauvegarde chiffrée et restreinte   |
