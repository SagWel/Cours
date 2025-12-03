# Les principes du Dev

## Le Principe KISS : Keep It Simple, Stupid (Restez Simple, Stupide)

L'idée en une phrase : La solution la plus simple est souvent la meilleure. Évitez de compliquer inutilement votre code.

Pourquoi c'est important ?
- Compréhension : Un code simple est plus facile à relire, pour vous dans 6 mois ou pour un collègue.

- Débogage : Moins il y a de complexité, plus il est facile de trouver la source d'un bug.

- Maintenance : Ajouter une fonctionnalité dans un code simple est bien plus rapide et moins risqué.

Exemple concret :

**Version compliquée (pas KISS) :**

```js
function estMajeur(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
```

**Version simple (KISS) :**

```js
function estMajeur(age) {
  return age >= 18;
}
```
_La deuxième version fait exactement la même chose, mais en une seule ligne, claire et sans superflu._

**En tant que stagiaire DWWM**: Avant d'écrire une fonction complexe, demandez-vous : "Est-ce qu'il existe un moyen plus simple de faire ça ?". N'ayez pas peur du code "basique", c'est souvent un compliment !

## Le Principe DRY : Don't Repeat Yourself (Ne Vous Répétez Pas)

L'idée en une phrase : Chaque connaissance dans un système doit avoir une représentation unique, non ambiguë et faisant autorité.

Pourquoi c'est important ?

- Éviter les incohérences : Si une règle de calcul est copiée-collée dans 10 fichiers et qu'elle doit changer, il faut la modifier 10 fois. C'est long et source d'erreurs (oubli d'un endroit).
- Maintenance : En corrigeant un bug à un seul endroit, vous le corrigez partout.
- Lisibilité : Le code est plus court et mieux organisé.

**Exemple concret :**

Imaginez que vous devez formater une date au format "JJ/MM/AAAA" à plusieurs endroits dans votre application.

**Version répétitive (pas DRY)** :
```js
// Dans le composant ProfilUtilisateur
const dateInscription = new Date(user.signupDate);
const dateFormatee1 = `${dateInscription.getDate()}/${dateInscription.getMonth() + 1}/${dateInscription.getFullYear()}`;

// Dans le composant ListeArticles
const datePublication = new Date(article.publishDate);
const dateFormatee2 = `${datePublication.getDate()}/${datePublication.getMonth() + 1}/${datePublication.getFullYear()}`;
```

**Version DRY :**
```js
// Une fonction unique pour formater la date
function formaterDate(date) {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

// Utilisation partout dans le code
const dateInscription = formaterDate(user.signupDate);
const datePublication = formaterDate(article.publishDate);
```

_Si demain on veut changer le format pour "AAAA-MM-JJ", une seule modification dans la fonction `formaterDate` suffira._

**En tant que stagiaire DWWM** : Dès que vous vous surprenez à faire un copier-coller de code (même 2-3 lignes), arrêtez-vous ! C'est le signal pour créer une fonction, un composant ou une classe.


## Autres Principes Importants
### YAGNI : You Ain't Gonna Need It (Vous N'en Aurez Pas Besoin)

**L'idée** : N'implémentez des fonctionnalités que lorsque vous en avez réellement besoin, pas quand vous anticipez que vous en aurez besoin.

- **Pourquoi ?** Vous passez du temps à coder des choses qui ne serviront peut-être jamais. Vous alourdissez inutilement le code, le rendant plus complexe à maintenir.
- **Exemple** : Vous créez un formulaire de contact simple. Inutile de prévoir dès le début une base de données complexe pour gérer 10 000 messages par jour si votre client en reçoit 5 par mois. Faites simple aujourd'hui, et complexifiez plus tard, si le besoin se présente.

### Clean Code (Code Propre)

Ce n'est pas un principe unique mais un ensemble de bonnes pratiques pour rendre le code lisible et compréhensible.

- **Noms significatifs** : Utilisez dateDebutCommande au lieu de d1 ou date.
- **Fonctions courtes** : Une fonction devrait faire une seule chose et la faire bien.
- **Commentaires utiles** : Expliquez le "pourquoi" d'une décision complexe, pas le "comment" (le code doit être assez clair pour ça). Un bon test vaut souvent mieux qu'un long commentaire.

### Séparation des Préoccupations (Separation of Concerns)

**L'idée** : Un programme doit être divisé en sections distinctes, chaque section s'occupant d'une tâche spécifique.

- **Pourquoi ?** Cela améliore la modularité et facilite les tests.

- **Exemple en DWWM (Architecture MVC) :**

    - **Modèle (Model)** : Gère les données et la logique métier (accès à la base de données).

    - **Vue (View)** : S'occupe de l'affichage, de l'interface utilisateur (HTML, CSS).

    - **Contrôleur (Controller)** : Fait le lien entre le Modèle et la Vue. Il reçoit les actions de l'utilisateur, demande des données au Modèle, et les envoie à la Vue.

    - Chaque partie a un rôle bien défini et ne doit pas empiéter sur le rôle des autres.

Principe	| But	| À retenir |
------------|-------|-----------|
KISS	| Éviter la complexité inutile.	|"Est-ce que je peux faire plus simple ?"
DRY	 | Éviter la duplication.	|"Je ne copie/colle pas, je crée une fonction/composant."
YAGNI	| Rester focus sur les besoins actuels.	|"Je code pour aujourd'hui, pas pour demain."
Clean Code	| Rendre le code compréhensible.	|"Je donne des noms clairs et je découpe mes fonctions."
Séparation des concerns	| Bien organiser l'architecture.|	"Cette partie du code, elle fait quoi exactement ?"