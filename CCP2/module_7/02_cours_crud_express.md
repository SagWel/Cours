# Créer un serveur avec Express.js

*source : https://www.cril.univ-artois.fr/~boussemart/express/chapter01.html#travail-%C3%A0-r%C3%A9aliser*

Express.js est un framework minimaliste pour node.js. Il permet de créer facilement une application web. Son côté minimaliste le rend peu pratique pour créer des application de taille un importante. Nous allons nous en servir pour développer des applications jouant un rôle de serveur de données pour nos applications React.js

node.js est une plateforme logicielle (runtime environment) construite sur l’interpréteur JavaScript V8.

    Elle respecte les spécification ECMAScript.
    Elle permet d’exécuter du code JavaScript, mais aussi de bâtir facilement un serveur web, grâce à une bibliothèque intégrée : HTTP.

Express est un framework JavaScript minimaliste qui permet d’accélérer le développement d’un serveur node.js. En offrant de nombreuses de fonctionnalités, il simplifie ainsi l’écriture du serveur. En particulier, il permet de gérer aisément le routage et offre de nombreuses fonctionnalités supplémentaires à l’objet HTTP utilisé avec node.js.

## 1 - Fichiers et répertoires utiles

```bash
mkdir server
cd server
npm init -y
npm install express
touch server.js
```

    Remarquez l’utilisation de la commande npm. Cet outil sera régulièrement utilisé en ligne de commande. Vous trouvez ici la liste des commandes possibles.
    La commande npm init -y génère un fichier JSON contenant des valeurs par défaut.
    La commande npm install express ajoute le package express à votre application.
    Remarque : la commande npm install sans précision du package permet d’installer l’ensemble des packages qui apparaissent dans l’entrée dependencies du fichier package.json.

## 2 - Le fichier server.js

Copiez le code suivant dans votre fichier server.js :

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
```

Lancez le serveur : node server.js. Entrez l’URL suivante dans votre navigateur web :

`http://localhost:8000`

Le message “Hello world!!” apparaît : votre serveur fonctionne.

Commentaires :

    La commande res.set permet de fixer la valeur d’un champ de l’entête HTTP transmis au client.
    La commande res.send permet de transmettre une réponse au client. Essayez l’URL suivante :

`http://localhost:8000/xx`

Le message “cannot GET /xx” apparaît, indicant que votre serveur ne reconnait pas votre requête.

## 3 - HTTP

Le protocole HTTP définit le mode de communication entre le client (votre navigateur) et le serveur (votre application Express). Il définit le format des requêtes pouvant être émises par le client. Elles peuvent être décomposées en deux éléments :

    le verbe, encore appelé méthode. Ici notre client n’utilisera que les verbes suivants :
        POST : pour envoyer des données au serveur.
        PUT/PATCH : pour modifier ou remplacer des données stockées sur le serveur.
        GET : pour obtenir des données du serveur.
        DELETE : pour supprimer des données stockées sur le serveur.
    l’URI
        identifie le serveur en précisant le domaine.
        indique le port utilisé : 80 par défaut.
        précise la méthode utilisée : GET par défaut.
        donne le chemin associé au verbe : / par défaut. Exemples
    L’URL http://localhost:8000 définit une requête GET. localhost est le domaine, :8000 donne le port utilisé. Aucune autre information n’étant spécifiée, le chemin par défaut est /.
    L’URL http://localhost:8000/xx transmet une requête GET avec le chemin /xx.


## 4 - Améloration du serveur

-  Arrêtez votre application (ctrl-C).

- Saisissez la commande suivante : npm install cors morgan nodemon.

- Créez le fichier router.js.

- Modifiez le fichier server.js comme suit :

```js
const express = require("express");
const router = require('./router');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(router); // Requests processing will be defined in the file router
app.listen(port, () => console.log('Server app listening on port ' + port));
```

**Explications :**

    Le package morgan permet de définir les informations que le serveur affiche dans la console à chaque fois qu’il reçoit une requête HTTP. Ce package est particulièrement utile en phase de développement de votre serveur.
    Le package cors permet de configurer comment des applications web définies sur un autre domaine peuvent accéder aux ressources de votre serveur. Ce mécanisme est appelé CORS pour Cross-Origin Resource Sharing, d’où le nom de ce package. Faire appel à ce package sans lui passer d’arguments permet d’autoriser tous les accès à votre ressource. Pour des exemples d’utilisation plus élaborés, vous pouvez consulter cette page.
    Le package body-parser permet de décomposer les requêtes HTTP POST, PATCH, etc. afin de pouvoir extraire les infoirmations tranmises dans des formulaires. Ces informations apparaissent dans le champ req.body.
    L’instruction app.use(router) permet de définir les routes dans le fichier router.js.

- Modifiez l’entrée scripts de votre fichier package.json comme suit :
```json
    "scripts": {
        "start": "nodemon server.js",
    }
```
*dans l'exemple std_app ce script le mot start est remplacé par dev*

Saisissez la commande npm start. Ceci déclenche la commande nodemon server.js. Nodemon est un utilitaire qui relance le serveur à chaque modification.

- Avant de relancer votre serveur, il vous faut définir votre router. Recopiez le code suivant dans votre fichier router.js :

```js
const express = require("express");
const router = express.Router();

module.exports = router;
```

- Relancez votre serveur. Remarquez que la requête http://localhost:8000 reçoit un message d’erreur.

- Saisissez votre première méthode dans le fichier router.js:

```js
router
   .get("/", (req, res) => {
       res.json("Hello world!!");
   });
```

Ce code se compose de plusieurs parties qu’il convient de bien comprendre :

    .get est une méthode de l’objet router qui permet de répondre aux requêtes GET. Comme les autres méthode permettant de répondre aux différentes requêtes (POST,, PUT, …), cette méthode comprend deux arguments.
    "/" est le premier argument de la méthode router.get, il définit le chemin auquelle le routeur réagit.
    (req,res) => {...} est le deuxième argument. Il donne la fonction middleware qui sera déclenchée par le routeur lorsque qu’une requête HTTP constituée de la bonne méthode et du bon chemin sera envoyée au serveur. Cette fonction middleware comprend deux arguments :
        req : un objet Javascript qui contient les informations sur la requête envoyée par le client.
        res : un objet JavaScript qui contient les informations retournées au client par le serveur. Vous pouvez maintenant définir successivement l’ensemble des requêtes auxquelles votre serveur doit savoir répondre. Attention, si plusieurs méthodes répondent à la même requête, seule la première sera exécutée.
    Enfin, la méthode res.json permet de retourner des données au format JSON

- Remarquez que la requête http://localhost:8000/xx reçoit encore un message d’erreur. Ajoutez la méthode suivante au routeur afin que celui-ci retourne le statut HTTP approprié au client :

```js
router
   .use((req, res) => {
           res.status(404);
           res.json({
               error: "Page not found"
           });
       });
```
    Le terme use signifie que la fonction middleware est exécutée quelque soit la méthode HTTP utilisée. Ici, le premier argument (le chemin) n’est pas précisé . En conséquence, cette méthode sera exécutée systématiquement lorsqu’elle sera atteinte. Elle doit donc être la dernière de la liste : si aucune méthode du routeur n’a déclenché sa fonction middleware, alors le routeur retourne le message Not found avec un statut d’erreur 404.

Le serveur doit respecter les codes de réponse HTTP, ce qui permet au client de réagir corretcement en fonction du code qu’il reçoit.

## 5 - Stockage des données

Le rôle d’un serveur est d’échanger des données avec un client. Le serveur que nous définissons ici doit donc gérer des données, les transmettre, les modifier, etc. en fonction des échanges avec ses clients.

Pour gérer efficacement les données, un serveur doit utiliser une système de gestion de bases de données (SGBD). Le but de ce chapitre étant d’expliquer le fonctionnement du serveur et de détailler les échanges avec le client, nous allons ici simplifier la partie gestion des données en utilisant un tableau. Evidemment, l’utilisation d’un tableau n’aurait aucun sens dans une application réelle, car à chaque redémarrage du serveur les données seront remises à zéro. Le dialogue entre le serveur et une base de données sera l’objet d’un autre chapitre.

- Dans le fichier router.js, créez un tableau avec quelques données basiques :

```js
const persons=[
    {id:0,name:'John'},
    {id:1,name:'Jane'}
];
```

*Nous utilisons ici un tableau d’objets JavaScript. Remarquez l’emploi du mot clé const au lieu de let.*

- Créez une route qui retourne l’ensemble des personnes. Le chemin est /persons.

```js
router
    .get("/persons",(req,res)=>{
            res.json(persons);
        })

```
Dans une application réelle, cette méthode ne serait sans doute pas implémentée car un serveur a pour vocation de contenir un très grand nombre de données. Son rôle est donc de ne transmettre au client que les données dont il a besoin, au moment où le client les lui demande.

- Créez une route qui retourne une unique personne

```js
function getPerson(id) {
    return persons.find(p => p.id === +id);
}
...
router
    .get("/persons/:id",(req,res)=>{
            res.json(getPerson(req.params.id));
        })
```

- Remarquez que la fonction getPerson utilise la méthode find définie sur les tableaux JavaScript. Dans une application réelle, la fonction getPerson exécute une requête vers une base de données.
- Remarquez le paramètre :id dans le chemin de la méthode GET. Cette notation permet de définir des paramètres au chemin reconnu par la méthode GET.

- Créez une route qui permet d’ajouter une nouvelle personne. Il vous faut pour cela l’aide du package body-parser tel que cela a été expliqué précédemment. Vous pouvez devez ajouter une méthode post pour insérer une personne dans le tableau :

```js
function insertPerson(p) {
    p.id = persons.length;
    persons.push(p);
    return p;
}
...
.post('/person',
        (req, res) => {
            const p = insertPerson(req.body);
            res.status(201)
                .set('Location', '/persons/' + p.id)
                .json(p);
        })
```



- req.body est un objet JavaScript contenant les données transmises au serveur.

- L’id de la personne est géré par le serveur, inutile de le lui transmettre.

- Les recommandations concernant la gestion d’une requête POST par le serveur se trouvent ici.

- Dans notre cas, le serveur retourne un statut 201, conformément aux codes de réponse HTTP.
    - il faut également indiquer l’URL permettant d’obtenir les nouvelles données.
    - Cette URL est donnée dans la partie Location de l’entête à l’aide de la commande res.set.
    - Enfin, la nouvelle valeur est retournée au serveur. Même si ce n’est pas obligatoire, cela évite au client d’effectuer une nouvelle requête.

- Pour tester la nouvelle fonctionnalité de votre routeur, vous avez plusieurs possibilités :

    - Vous pouvez envoyer une requête POST en ligne de commande à l’aire de l’application CURL
    - Vous pouvez utiliser l’application postman
    - Vous pouvez utiliser l’ extension API tester de votre navigateur. Par exemple celui de Chrome ou encore celui de Firefox


- Créez une route qui permet de supprimer une personne
```js
function removePerson(id) {
    persons = persons.filter(p => p.id !== +id);
}
...
.delete('/person/:id',
        (req, res) => {
            removePerson(req.params.id);
            res
                .status(204)
                .end();
        })
```

- Remarquez l’usage de la méthode filter définie sur les tableaux JavaScript.

- Remarquez également le champ req.params qui permet d’obtenir la valeur de l’id envoyé par le client.

- Remarquez enfin que le serveur retourne un statut 204 pour signaler que les données ont bien été supprimées. D’autres codes sont possibles :
    - 202 si la requête DELETE est considérée comme une demande de suppression, sans effet immédiat.
    - 200 en cas de succès, si le servceur retourne également des données au client.


- Créez une route qui permet de modifier une personne
```js
function updatePerson(person) {
    persons = persons.map(p => p.id === +person.id ? person : p);
}
...
.patch('/person/:id',
        (req, res) => {
            updatePerson(req.body);
            res
                .status(200)
                .json(req.body);
        })
```

- Remarquez l’usage de la méthode map définie sur les tableaux JavaScript.
- On retourne ici un code de succès (200), accompagné des données après modification. Le fait de retourner ces données n’est pas obligatoire.

## 6 - Gestion de versions

Au cours du temps, les fonctionnalités d’un serveur peuvent être ammenées évoluer. Comme le code qui gère les routes a été séparé du code de base de votre serveur, vous pouvez très facilement gérer différentes versions de votre serveur.

Suivant les principes de la gestion sémantique des versions, un numéro de version se compose de trois valeurs séparées par des points :

- Le numéro de version majeur : lorsque la nouvelle version n’est pas rétrocompatible
- Le numéro de version mineur : lorsque la nouvelle version est rétrocompatible (ajout de fonctionnalités par exemple)
- Le numéro de correctif : lors de la correction d’un bug rétrocompatible

Pour créer la version 1.0.0 de votre serveur, vous devez redéfinir le chemin qui permet d’accéder au fichier router.js :
```js
const routerV100 = require('./router100');
...
app.use('/1.0.0',routerV100)
```

Ainsi, le fichier router100.js contient l’ensemble des routes gérées par votre serveur. Pour solliciter le serveur, il faut maintenant ajouter le numéro de version à l’URL. Par exemple, pour extraire l’ensemble des personnes : http://localhost:8000/1.0.0/persons.

Pour gérer un correctif de cette première version, on crée un fichier router101.js. Le code du serveur devient :

```js
const routerV100 = require('./router100');
const routerV101 = require('./router101');
...
app.use('/1.0.0',routerV100)
app.use('/1.0.1',routerV101)
```

Ainsi, les utilisateurs de la version 1.0.0 ne sont pas pénalisés, mais ils peuvent passer à la version 1.0.1 à partir de l’URL http://localhost:8000/1.0.1.

**Petits exercices d’application :**

- Créez une version 1.0.0 de votre serveur et testez-la
- Créez une version 1.0.1 de votre serveur, dans laquelle la tableau persons contient des données différentes.
- Vérifiez que les deux versions de votre serveur ne renvoient pas les mêmes données.
- Remarquez que lorsqu’on sollicite le serveur sans indiquer de numéro de version, on n’obtient pas l’erreur 404 que l’on est en droit d’attendre.  Corrigez ce problème. Aucune indication ne vous est donnée ici, à vous de trouver seul la solution.
- On aimerait disposer d’une version par défaut, qui sera la version 1.0.1. Autrement dit, l’URL http://localhost:8000/persons doit retourner les personnes de la version 1.0.1. Un nouvelle fois, aucune indication ne vous est fournie pour trouver la solution.

## 7 - Isolation de la source de données

La source de données actuelle est votre tableau persons. Cette source de données est distincte de votre serveur, nous verrons plus tard comment remplacer ce tableau par une base de données. Pour le moment, vous allez juste déplacer le code lié aux données dans un répertoire différent de celui qui gère les requêtes des clients :

- Créez un répertoire server/db

- Créez un fichier server/db/data.js

- Déplacez le code directement lié aux données dans data.js :
    - le tableau persons
    - les fonctions getPerson, insertPerson, removePerson et updatePerson dans data.js.

- Dans data.js, ajoutez la ligne qui suit, qui permet d’exporter les fonctions utiles au routeur :

```js 
module.exports = {getPerson, insertPerson, updatePerson, removePerson};
```
- Dans router.js, importez ces fonctions :
```js
const data = require('./db/data');
```
Ainsi, vous créez un objet JavaScript data dont les champs sont les fonctions exportées depuis data.js. Dans le routeur, pour extraire la personne 1, par exemple, on écrit donc :
```js
data.getPerson(1)
```

**Remarque :** le tableau personnes n’ayant pas été exporté, il n’est pas accessible directement. Pour récupérer l’ensemble des personnes, il faut écrire une fonction getPersons.

