# Accessibilité & Éco-conception Web
```
L'accessibilité numérique garantit que les contenus et fonctionnalités d'un site sont utilisables par tous, y compris les personnes ayant des déficiences visuelles, auditives, motrices ou cognitives.
```

https://accessibilite.numerique.gouv.fr/
## 1. Introduction

Le développement web moderne ne consiste pas seulement à produire des sites ou applications qui « fonctionnent ».
Un bon développeur doit prendre en compte :

- **L’accessibilité** → permettre à toutes et tous, y compris les personnes en situation de handicap, d’accéder à l’information et aux services numériques.

- **L’éco-conception** → réduire l’empreinte environnementale des services numériques (sites, applications, API, etc.) tout en améliorant l’expérience utilisateur.

## 2. L’accessibilité numérique
### 2.1 Définition

L’accessibilité numérique consiste à concevoir des sites et applications utilisables par tous les utilisateurs, y compris ceux qui présentent :

- une déficience visuelle (aveugles, malvoyants, daltoniens)
- une déficience auditive
- une déficience motrice
- une déficience cognitive

        ⚖️ En France, c’est encadré par la loi pour une République numérique (2016) et le RGAA (Référentiel Général d’Amélioration de l’Accessibilité).
        Au niveau international, c’est le WCAG (Web Content Accessibility Guidelines) publié par le W3C.

### 2.2 Principes fondamentaux (WCAG 2.1 – version simplifiée)

Un contenu accessible doit respecter les 4 principes POUR :

- **1 - Perceptible**
    - Alternatives textuelles pour les images (balise alt).
    - Sous-titres pour les vidéos.
    - Contraste suffisant entre le texte et l’arrière-plan.
- **2 - Utilisable**
    - Navigation possible au clavier (sans souris).
    - Liens et boutons suffisamment gros.
    - Pas d’éléments clignotants (risque de crise épileptique).
- **3 - Compréhensible**
    - Langage clair et simple.
    - Structure logique avec titres (`<h1>`, `<h2>`, …).
    - Messages d’erreur explicites dans les formulaires.
- **4 - Robuste**
    - Code HTML conforme aux standards.
    - Compatibilité avec les lecteurs d’écran.
    - Tests réguliers sur différents navigateurs et dispositifs d’assistance.

### 2.3 Bonnes pratiques techniques


- **HTML sémantique** : utiliser les bonnes balises (`<header>`, `<nav>`, `<main>`, `<footer>`).

- **Formulaires accessibles** : associer les labels (`<label for="id">`).

- **Navigation** : permettre de « sauter » directement au contenu avec un lien d’évitement.

- **Couleurs** : contraste d’au moins 4,5:1 entre texte et fond.

- **ARIA (Accessible Rich Internet Applications)** : ajouter des rôles (role="navigation", role="button") si besoin.

### 2.4 Outils de test

- **Wave** (extension navigateur)

- **Lighthouse** (Google Chrome)

- **NVDA** (lecteur d’écran gratuit Windows)

- **VoiceOver** (lecteur d’écran intégré sur Mac/iOS)

## 3. L’éco-conception web
### 3.1 Définition

L’éco-conception web consiste à réduire la consommation énergétique et l’impact environnemental d’un site ou d’une application tout en améliorant la performance.
Un site « sobre » est souvent plus rapide, plus efficace et plus agréable à utiliser.

### 3.2 Pourquoi c’est important ?

- Le numérique représente environ **4%** des émissions mondiales de gaz à effet de serre.

- La majorité de cette empreinte vient du stockage et du transfert de données.

- Un site optimisé :

    - se charge plus vite → meilleure expérience utilisateur

    - consomme moins de bande passante

    - est mieux référencé par Google (SEO)

### 3.3 Principes d’éco-conception

- **1 - Réduire le poids des pages**

    - Optimiser les images (formats modernes : WebP, AVIF).

    - Éviter les vidéos en lecture automatique.

    - Supprimer les scripts inutiles.

- **2 - Optimiser le code**

    - Minifier CSS et JS.

    - Charger les scripts de façon asynchrone.

    - Utiliser un code propre et réutilisable.

- **3 - Limiter les requêtes serveur**

    - Utiliser la mise en cache.

    - Regrouper les fichiers CSS/JS.

    - Utiliser un CDN (Content Delivery Network).

- **4 - Design sobre**

    - Interface simple, épurée.

    - Police système plutôt que police externe lourde.

    - Moins d’animations complexes.

- **5 - Hébergement responsable**

    - Choisir un hébergeur « vert » (énergie renouvelable).

    - Déployer sur des serveurs mutualisés plutôt que dédiés si possible.

### 3.4 Outils de mesure

- **EcoIndex** → note environnementale d’un site web. https://www.ecoindex.fr/

- **Website Carbon Calculator** → estimation CO₂ / page vue. https://www.websitecarbon.com/

- **Google PageSpeed Insights** → analyse des performances. https://pagespeed.web.dev/

## 4. Accessibilité & Éco-conception : complémentarité

👉 Ces deux démarches se rejoignent :

- **Accessibilité** : améliorer l’accès pour tous.

- **Éco-conception** : réduire la consommation des ressources.

Exemple :

- Un site léger (éco-conçu) charge plus vite → bénéfice pour les utilisateurs mal connectés.

- Un site bien structuré (accessible) consomme moins de scripts → bénéfice écologique.

## 5. Bonnes pratiques pour les développeurs DWWM

- Toujours utiliser **HTML sémantique**.

- Penser aux **utilisateurs en situation de handicap** dès la maquette.

- Intégrer les tests d’accessibilité dans la phase de développement.

- Optimiser en continu : images, scripts, cache.

- Documenter et sensibiliser l’équipe à ces enjeux.

---
# Schémas

## 1. Accessibilité – Les 4 principes WCAG (POUR)
```
+-------------------------------------------------+
|                Accessibilité                    |
+-------------------------------------------------+
| P = Perceptible   -> Voir/entendre l’info       |
| O = Utilisable    -> Naviguer, interagir        |
| U = Compréhensible-> Facile à lire/comprendre   |
| R = Robuste       -> Compatible outils/lecteurs |
+-------------------------------------------------+
```

## 2. Parcours utilisateur avec et sans accessibilité

```
   [Utilisateur handicapé]
             |
   --------------------------
   |                        |
Sans accessibilité     Avec accessibilité
   |                        |
[Blocage]              [Accès fluide]
(Images sans alt,      (Alt texte, contraste,
formulaires sans label) navigation clavier)

```

## 3. Éco-conception – Cycle d’optimisation
```
        +----------------------+
        |   ÉCO-CONCEPTION     |
        +----------------------+
                |
   -------------------------------
   |       |        |           |
Images   Code     Requêtes    Hébergement
 léger   optimisé  limitées   responsable
   |       |        |           |
   -------------------------------
                |
        [Site plus rapide
        et plus sobre]

```

## 4. Accessibilité & Éco-conception – Complémentarité
```
        +-------------------+
        |   ACCESSIBILITÉ   |
        +-------------------+
                ^
                |
[Inclure tous]  |
                |
                v
        +-------------------+
        |  ÉCO-CONCEPTION   |
        +-------------------+
                ^
                |
[Réduire impact]|
                |
                v
      +---------------------+
      |  WEB RESPONSABLE    |
      +---------------------+

```

## 5. Processus de développement responsable
```
[Idée] 
   |
   v
[Maquettage inclusif]
   |
   v
[Développement accessible]
   |
   v
[Optimisation éco-conçue]
   |
   v
[Test (accessibilité + performance)]
   |
   v
[Déploiement responsable]

```