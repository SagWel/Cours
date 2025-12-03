# Les Frameworks CSS

## Objectifs pédagogiques

À la fin de ce cours, vous serez capable de :
- Comprendre ce qu’est un framework CSS et à quoi il sert.
- Identifier les principaux frameworks CSS existants.
- Savoir intégrer un framework dans un projet web.
- Adapter et personnaliser un framework selon vos besoins.

## 1. Définition
**Qu’est-ce qu’un framework CSS ?**
Un framework CSS est une boîte à outils préconstruite contenant :
- des styles prédéfinis (boutons, formulaires, grilles, etc.)
- des composants prêts à l’emploi (navbar, modales, cartes…)
- des règles de mise en page responsives
- et souvent, un système de classes utilitaires pour accélérer le développement.

    👉 En résumé, un framework CSS permet de gagner du temps et de standardiser le design des sites web.

## 2. Pourquoi utiliser un framework CSS ?

**✅ Avantages :**
- Gain de temps : plus besoin de tout coder à la main.
- Design cohérent : styles uniformes sur tout le site.
- Responsive design intégré : compatible avec les mobiles et tablettes.
- Communauté et documentation riches : aide et mises à jour fréquentes.
- Compatibilité cross-navigateur : les frameworks gèrent déjà les différences entre navigateurs.

**❌ Inconvénients :**
- Code parfois lourd : vous chargez beaucoup de CSS inutile.
- Uniformisation des sites : les sites peuvent se ressembler.
- Courbe d’apprentissage : il faut apprendre les conventions du framework.
- Dépendance : difficile à modifier sans casser le design.

## 3. Les principaux frameworks CSS

### 3.1 Bootstrap (le plus populaire)
- Créé par Twitter.
- Basé sur un système de grille en 12 colonnes.
- Très complet : boutons, formulaires, modales, carrousels…
- Documentation claire et vaste communauté.

🔗 Site officiel : https://getbootstrap.com

**Exemple :**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

<div class="container text-center">
  <h1 class="text-primary">Bonjour Bootstrap !</h1>
  <button class="btn btn-success">Cliquez-moi</button>
</div>
```

### 3.2 Tailwind CSS (approche moderne "utility-first")

- Ne fournit pas de composants prédéfinis.
- Basé sur des classes utilitaires (ex. `p-4`, `bg-blue-500`, `text-center`).
- Très **flexible et personnalisable**.
- Parfait pour des designs sur mesure.

🔗 Site officiel : https://tailwindcss.com 

**Exemple :**
```html
<div class="bg-blue-500 text-white p-4 text-center rounded-lg">
  Bonjour Tailwind !
</div>
```

### 3.3 Bulma
- 100% en Flexbox.
- Léger et simple à apprendre.
- Syntaxe lisible, proche du langage naturel.
- Pas de dépendance JavaScript.

🔗 Site officiel : https://bulma.io

**Exemple :**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

<section class="section has-background-light">
  <div class="container">
    <h1 class="title is-3 has-text-primary">Bonjour Bulma !</h1>
    <button class="button is-success">Valider</button>
  </div>
</section>
```
### 3.4 Foundation
- Développé par Zurb.
- Très complet, orienté sites professionnels.
- Moins populaire que Bootstrap mais très robuste.

🔗 Site officiel : https://get.foundation

### 3.5 Materialize

- Inspiré du Material Design de Google.
- Styles modernes, animations intégrées.
- Idéal pour des interfaces "Google-like".

🔗 Site officiel : https://materializecss.com

## 4. Intégrer un framework CSS dans un projet
### Méthode 1 : via un CDN

C’est la plus simple :
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

### Méthode 2 : via NPM
Utilisée dans des projets React, Vue, etc. :
```sh
npm install bootstrap
```
Puis import :
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
## 5. 🎨 Personnaliser un framework
### Avec Bootstrap :

- Vous pouvez **surcharger** les classes dans un fichier `custom.css`.
- Ou **utiliser Sass** pour recompiler votre propre version.

### Avec Tailwind :
-Créez un fichier `tailwind.config.js` pour définir vos couleurs, polices et espacements personnalisés.

## 6. Frameworks et responsive design

La plupart des frameworks modernes utilisent :
- des breakpoints (`sm`, `md`, `lg`, `xl`...)
- des **grilles flexibles**
- des **classes responsives** :
Exemple (Bootstrap) :
```html
<div class="col-12 col-md-6">Colonne responsive</div>
```

## 7. 🧠 Bonnes pratiques

Choisissez le framework selon le projet :

- Bootstrap → rapide, complet
    - Tailwind → design sur mesure
    - Bulma → simplicité et légèreté
- **Ne surchargez pas le CSS** inutilement.
- **Documentez vos composants** pour l’équipe.
- **Combinez avec un préprocesseur (SASS)** si besoin d’un thème avancé.

## 8. Exercice pratique (DWWM)

**Objectif** : Créer une page d’accueil responsive avec un framework CSS de votre choix.

**Consignes** :
- Utilisez **Bootstrap** ou **Tailwind CSS**.
- Créez un **header**, un **contenu principal** avec 3 colonnes et un **footer**.
- Ajoutez un **bouton stylisé** et une **carte** avec une image.
- Testez sur mobile et desktop (ou modifiez la taille de fenetre de votre navigateur).

## 9. Conclusion

Les frameworks CSS sont des **alliés puissants** pour accélérer le développement et assurer une cohérence visuelle.

Cependant, il faut savoir les **choisir intelligemment** selon le contexte :
- petits projets → légèreté (Bulma, Skeleton)
- projets pro → robustesse (Bootstrap, Tailwind)
- design personnalisé → Tailwind CSS