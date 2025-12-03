# Les types de données en MySQL

## Introduction

Dans une base de données MySQL, chaque colonne d’une table est définie avec un type de données. Cela permet à MySQL de savoir quel type de valeur peut être stocké dans cette colonne (ex. : nombre entier, texte, date, etc.). Le choix du bon type est essentiel pour optimiser les performances, la cohérence des données et la taille occupée sur le disque.

## 1. Les types numériques
### 1.1. Entiers


|Type	        |Taille (octets) |                 Valeur signée	| Valeur non signée (UNSIGNED) | 
| ----------- | -------------- | ------------------------------ | ---------------------------- |
|TINYINT 	    |              1 |                     -128 à 127 |	                     0 à 255 |
|SMALLINT	    |              2 |              -32 768 à 32 767	|                   0 à 65 535 |
|MEDIUMINT	  |              3 |        -8 388 608 à 8 388 607	|               0 à 16 777 215 |
|INT	        |              4 | -2 147 483 648 à 2 147 483 647 |	           0 à 4 294 967 295 |
|BIGINT	      |              8 |           très grands nombres	|         idem version positive|

*Utilisez UNSIGNED si la valeur ne sera jamais négative (ex. ID auto-incrémenté).*

### 1.2. Décimaux et flottants


|     Type	    |                                          Description |
| ------------- | ---------------------------------------------------- |
| FLOAT	        |          Nombre à virgule flottante simple précision |
| DOUBLE	      |          Nombre à virgule flottante double précision |
| DECIMAL(m, d) | Nombre exact avec m chiffres dont d après la virgule |

*DECIMAL est souvent utilisé pour les montants financiers.*

## 2. Les types chaînes de caractères
### 2.1. Tailles variables

| Type	        |                                          Description |
| ------------- | ---------------------------------------------------- |
|   VARCHAR(n)	|    Chaîne de taille variable (jusqu’à n caractères)  |

*Utilisez VARCHAR pour des données de longueur variable (nom, email)*

### 2.2. Longs textes


| Type	     |             Taille maximale |
| ---------- | --------------------------- |
| TINYTEXT   |	            255 caractères |
| TEXT	     |   65 535 caractères (64 Ko) |
| MEDIUMTEXT |                    	~16 Mo |
| LONGTEXT	 |                       ~4 Go |


## 3. Les types de date et heure


| Type	    |  Format	              |       Exemple          |
| --------- | --------------------- | ---------------------- |
| DATE	    |      YYYY-MM-DD	      |           '2025-06-23' |
| DATETIME  |	YYYY-MM-DD HH:MM:SS	  |  '2025-06-23 10:45:00' |
| TIMESTAMP	|       INT             |        	  '1750668300' |
|   TIME	  |      HH:MM:SS	        |             '10:45:00' |
|   YEAR	  |       YYYY	          |                  2025  |

*TIMESTAMP est utile pour les mises à jour automatiques (timestamps de modification)*

## 4. Les types booléens et énumérations
### 4.1. BOOL / BOOLEAN

Représenté en interne par TINYINT(1)

    0 = FALSE, 1 = TRUE

### 4.2. ENUM

Liste de valeurs prédéfinies
```sql
CREATE TABLE produit (
  taille ENUM('S', 'M', 'L', 'XL')
);
```
*ENUM est pratique pour limiter des choix, mais difficile à modifier à grande échelle.*

## 5. Les types binaires


| Type	       |                                     Description         |
| ------------ | ------------------------------------------------------- |
| BINARY(n)	   |                        Données binaires de taille fixe  |
| VARBINARY(n) |                     	 Données binaires taille variable  |
|       BLOB	 |      Stockage de fichiers binaires (images, docs, etc.) |


## 6. Exemples de déclaration

```sql
CREATE TABLE utilisateurs (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP,
  actif BOOLEAN DEFAULT TRUE
);
```

### Bonnes pratiques

- Choisissez la plus petite taille adaptée (évite le gaspillage de mémoire).
- Utilisez NOT NULL quand la colonne ne doit pas contenir de valeur vide.
- Préférez VARCHAR à TEXT si vous devez faire des recherches ou des index.
- Évitez les ENUM si les valeurs changent souvent.
