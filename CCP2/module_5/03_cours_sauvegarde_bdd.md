# Sauvegarde de Bases de Données
## 1. Introduction
Pourquoi sauvegarder une base de données ?

La sauvegarde est une copie de sécurité de vos données. Elle permet de :

    Prévenir les pertes de données (crash, suppression accidentelle, attaque, etc.)

    Restaurer un état antérieur (rollback)

    Migrer ou répliquer une base

    Se conformer à des obligations légales

## 2. Types de sauvegardes
a. Sauvegarde complète (Full backup)

    Copie intégrale de la base de données.

    Exige plus de temps et d’espace disque.

    Exemple : mysqldump -u root -p mydb > sauvegarde.sql

b. Sauvegarde incrémentielle

    Ne sauvegarde que les changements depuis la dernière sauvegarde (complète ou incrémentielle).

    Très rapide et économe en espace.

    Nécessite toutes les sauvegardes précédentes pour restaurer.

c. Sauvegarde différentielle

    Sauvegarde les changements depuis la dernière sauvegarde complète uniquement.

    Plus rapide qu'une complète, mais plus lente qu’une incrémentielle.

## 3. Méthodes de sauvegarde
a. Sauvegarde logique

    Extrait les données sous forme de requêtes SQL (INSERT, CREATE, etc.).

    Portabilité maximale (migration facile).

    Moins performante sur les bases très volumineuses.

Exemples :

    MySQL : mysqldump

    PostgreSQL : pg_dump

b. Sauvegarde physique

    Copie des fichiers du système de gestion de base (SGDB).

    Très rapide, mais dépendante du système.

    Souvent utilisée pour les restaurations rapides ou les environnements à haute disponibilité.

Exemple : copie des fichiers .ibd, .frm, ou .db selon le SGDB.

## 4. Fréquence et politique de sauvegarde
| Type de base           | Fréquence recommandée     | Exemple            |
| ---------------------- | ------------------------- | ------------------ |
| Critique (production)  | Quotidienne ou continue   | e-commerce, banque |
| Moyenne (test/qualité) | Hebdomadaire              | site vitrine       |
| Faible (développement) | Manuelle ou occasionnelle | projet étudiant    |

Stratégie 3-2-1 :

    3 copies des données

    2 supports différents

    1 copie hors site (cloud, autre datacenter)

## 5. Automatiser les sauvegardes
Exemple (Linux + MySQL + cron) :

```bash
# Script : backup.sh
DATE=$(date +%F)
mysqldump -u root -pMOTDEPASSE mydb > /home/user/backups/mydb-$DATE.sql

```

Crontab :
```bash
0 3 * * * /home/user/backup.sh
```
_Sauvegarde chaque jour à 3h du matin_

## 6. Restauration d’une sauvegarde

MySQL :
```bash
mysql -u root -p mydb < sauvegarde.sql
```

PostgreSQL :
```bash
psql -U postgres -d mydb -f sauvegarde.sql
```

## 7. Sauvegarde dans le cloud

Services courants :

    Amazon RDS / S3

    Google Cloud SQL

    Azure Database Backup

    Backblaze / Dropbox / rsync sur serveur distant

_Attention à la sécurité des données : chiffrement, accès restreint, RGPD._

## 8. Bonnes pratiques

    Tester régulièrement les restaurations.

    Surveiller les erreurs de sauvegarde.

    Stocker les sauvegardes hors de la machine principale.

    Chiffrer les sauvegardes contenant des données sensibles.

    Documenter la procédure de sauvegarde / restauration.

## 9. Outils de sauvegarde courants
| Outil                | SGBD compatible | Description                |
| -------------------- | --------------- | -------------------------- |
| `mysqldump`          | MySQL / MariaDB | Export SQL                 |
| `mysqlhotcopy`       | MySQL           | Copie rapide physique      |
| `pg_dump`            | PostgreSQL      | Export SQL                 |
| `Percona XtraBackup` | MySQL           | Sauvegarde physique        |
| `rsync`              | Tous (fichiers) | Sauvegarde fichiers bruts  |
| `pgBackRest`         | PostgreSQL      | Incrémentiel + chiffrement |
