# Cookies et sessionStorage

## Enoncé :

Dans les fichiers : 
- 04_exo_cookie_session_[prenom].html 
- 04_exo_cookie_session_[prenom].js

### 1 Créez un formulaire de connexion avec :
- un champ username
- un champ password
- un bouton de connexion

### 2 Lors de la soumission du formulaire :

- Enregistrez le nom d’utilisateur dans le `sessionStorage`
- Créez un `cookie` contenant la date de création (par exemple : dateCreation=...)

### 3 Après la connexion :
- Affichez le nom d’utilisateur (récupéré depuis sessionStorage)
- Affichez la date de création du cookie (récupérée depuis document.cookie)

### 4 Ajoutez deux boutons supplémentaires :
- "Clean Cookie" → supprime le cookie
- "Clean Session" → vide le sessionStorage