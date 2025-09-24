# Cours : Git & GitHub – Les bases
## Objectifs pédagogiques

Comprendre ce qu’est Git et son rôle dans le développement.

Savoir initialiser un dépôt local et gérer des versions.

Comprendre l’utilité de GitHub pour la collaboration.

Être capable de réaliser les commandes Git de base.

## 1. Introduction à Git et GitHub
Qu’est-ce que Git ?

Git est un logiciel de gestion de versions (VCS : Version Control System).

Il permet de suivre l’évolution d’un projet (code source, documents, etc.).

Il est distribué : chaque développeur a une copie complète de l’historique du projet.

Qu’est-ce que GitHub ?

- GitHub est une plateforme en ligne basée sur Git.

Elle permet :

- D’héberger des dépôts Git.

- De collaborer avec d’autres développeurs.

- D’utiliser des outils supplémentaires (issues, pull requests, actions CI/CD).

## 2. Installation & Configuration
Installation

Télécharger Git : https://git-scm.com
```bash
git --version
```
**Configuration de base**
```bash
git config --global user.name "VotreNom"
git config --global user.email "votre.email@example.com"
git config --list
```
## 3. Concepts clés de Git

- **Repository (repo)** : dossier contenant votre projet et son historique.

- **Commit** : sauvegarde d’un état du projet.

- **Branch (branche)** : version parallèle du code (permet de développer sans casser la version principale).

- **Merge** : fusionner des branches.

- **Remote** : dépôt distant (sur GitHub).

- **Clone / Pull / Push** : télécharger ou envoyer du code entre local et distant.

## 4. Les commandes essentielles
### Initialiser un dépôt
```bash
git init
```

### Vérifier l’état
```bash
git status
```

### Ajouter des fichiers
```bash
git add fichier.txt
git add .   # ajouter tout
```
### Sauvegarder (commit)
```bash
git commit -m "Message clair décrivant la modification"
```
## 5. Travailler avec GitHub
### 5.1 Créer un dépôt distant

- Aller sur GitHub → New repository.

- Donner un nom → MonProjet.

- Copier l’URL du dépôt (HTTPS ou SSH).

### 5.2 Lier le dépôt local au dépôt GitHub
```bash
git remote add origin https://github.com/utilisateur/MonProjet.git
git branch -M main   # renommer la branche principale en main
git push -u origin main
```
### 5.3 Récupérer un projet existant
```bash
git clone https://github.com/utilisateur/MonProjet.git
```
### 5.4 Mettre à jour son projet
```bash
git pull origin main
```

### 5.5 Envoyer ses modifications
```bash
git add .
git commit -m "Ajout d'une nouvelle fonctionnalité"
git push origin main
```

## 6. Branches et collaboration
### Créer une branche
```bash
git branch ma-branche
git checkout ma-branche
# ou directement :
git checkout -b ma-branche
```
### Fusionner une branche
```bash
git checkout main
git merge ma-branche
```

### Supprimer une branche
```bash
git branch -d ma-branche
```
## 7. Bonnes pratiques

- Faire des **commits fréquents** et clairs.

- Utiliser des **branches** pour **chaque nouvelle** fonctionnalité.

- Toujours **pull** avant de **push**.

- Écrire des messages de commit **explicites** :

✅ `"Ajout d’une fonction de login"`

❌ `"update"`, `"test"`, `"fix"`

## 8. Exercices pratiques

- Créez un projet HelloGit :

    - Initialisez un dépôt local.

    - Ajoutez un fichier README.md.

    - Faites un commit.

- Créez un dépôt GitHub et poussez votre projet.

- Créez une nouvelle branche develop, ajoutez une modification et fusionnez-la dans main.


# Git & GitHub – Schémas ASCII

## 1. Cycle de base Git 

```tree
+-----------------+       git add        +-----------------+
|  Working Dir    | ------------------>  |  Staging Area   |
| (vos fichiers)  |                      | (index)         |
+-----------------+                      +-----------------+
        ^                                        |
        |                 git commit             |
        +----------------------------------------+
                             |
                             v
                      +-----------------+
                      |    Repository   |
                      | (commits local) |
                      +-----------------+
```

## 2. Interaction avec GitHub

```tree
+-----------------+         git push        +-----------------+
| Local Repo      | ---------------------> | Remote Repo     |
| (sur votre PC)  |                        | (sur GitHub)    |
+-----------------+ <--------------------- +-----------------+
                  git pull / git clone
```

## 3. Branches et fusion

```tree
           main
            |
    A ---- B ---- C ---- D
            \
             \--- E ---- F   (feature-xyz)

# Fusionner feature-xyz dans main :
git checkout main
git merge feature-xyz
```

## 4. Workflow typique

```bash
[1] git clone <url>      → Récupérer un projet
[2] git status           → Voir l’état des fichiers
[3] git add .            → Préparer les changements
[4] git commit -m "msg"  → Sauvegarder localement
[5] git push origin main → Envoyer sur GitHub
```

## 5. Schéma global du travail en équipe
```bash
Développeur A                GitHub                 Développeur B
--------------                ------                 --------------
 git clone   <--------------- repo --------------->  git clone
 git add
 git commit
 git push   ----------------> repo <---------------  git pull
```
