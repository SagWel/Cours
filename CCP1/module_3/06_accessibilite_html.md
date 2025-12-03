# Accessibilité - html

Accessibilité Web et Balises ARIA
Objectif du cours :

Comprendre comment améliorer l'accessibilité d'une page HTML en utilisant les attributs ARIA, afin de permettre aux personnes en situation de handicap (notamment les utilisateurs de lecteurs d'écran) de naviguer plus facilement.

## 1. Qu'est-ce que l'accessibilité web ?

L'accessibilité web signifie rendre les sites internet utilisables par tout le monde, y compris :

    les personnes aveugles ou malvoyantes,

    les personnes sourdes ou malentendantes,

    les personnes ayant des troubles moteurs ou cognitifs.

L'accessibilité est régie par des normes comme les WCAG (Web Content Accessibility Guidelines).
## 2. Introduction à ARIA (Accessible Rich Internet Applications)

ARIA est un ensemble d'attributs HTML qui :

    enrichissent les éléments HTML avec des informations sémantiques supplémentaires,

    aident les technologies d'assistance (lecteurs d’écran, etc.) à interpréter correctement le contenu.

## 3. Les attributs ARIA essentiels
- aria-label

    - Permet de donner un nom accessible personnalisé à un élément.

    - Usage : lorsqu’un élément n’a pas de texte visible mais doit être identifié par un lecteur d’écran.

    ```html
    <h2 id="titre-formulaire">Formulaire de contact</h2>
    <form aria-labelledby="titre-formulaire">
    <!-- contenu -->
    </form>
    ```
Le lecteur d’écran dira : 

    "Formulaire de contact, formulaire"

- aria-describedby

    - Associe un élément à un ou plusieurs éléments qui fournissent une description complémentaire.

    - Usage : pour donner des informations supplémentaires (ex : aide contextuelle, erreurs, etc.)
    ```html
    <input type="text" id="email" aria-describedby="aide-email">
    <small id="aide-email">Entrez votre adresse email valide.</small>
    ```

Le lecteur d’écran dira :

    "zone de texte, Entrez votre adresse email valide"

## À retenir :
| Attribut ARIA      | Sert à...                     | Utilise un texte | Référence un élément ? |
| ------------------ | ----------------------------- | ---------------- | ---------------------- |
| `aria-label`       | Nom personnalisé              | Oui              | Non                    |
| `aria-labelledby`  | Nom basé sur un autre élément | Non              | Oui                    |
| `aria-describedby` | Description complémentaire    | Non              | Oui                    |

## Bonnes pratiques

    Ne pas utiliser ARIA à la place d’éléments HTML sémantiques (<button>, <label>, <nav>, etc.). Utilisez-les en complément.

    Tester avec un lecteur d’écran (NVDA, VoiceOver, etc.).

    Toujours privilégier les éléments accessibles nativement avant d'ajouter ARIA.

## Exemple complet
```html
<h1 id="page-title">Connexion</h1>

<form aria-labelledby="page-title">
  <label for="identifiant">Identifiant</label>
  <input type="text" id="identifiant" aria-describedby="info-identifiant">
  <small id="info-identifiant">Votre identifiant personnel fourni par l'administration.</small>

  <button type="submit" aria-label="Valider la connexion">
    <svg><!-- icône de validation --></svg>
  </button>
</form>
```
 Ce que "entend" un utilisateur avec un lecteur d’écran :

    "Connexion, formulaire"

    "Identifiant, zone de texte, Votre identifiant personnel fourni par l'administration"

    "Valider la connexion, bouton"

