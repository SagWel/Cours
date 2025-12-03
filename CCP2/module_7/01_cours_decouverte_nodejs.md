# Découverte de Node.js

*source : https://nodejs.org/fr/*

__Exécuter JavaScript Partout__


## Définition :

Node.js est un environnement d'exécution JavaScript libre, open source, multi-plateforme. qui permet aux développeurs de créer des serveurs, des applications web, des outils de lignes de commande et des scripts.

## A propos : 
En tant que moteur d'exécution JavaScript asynchrone orienté événements, Node.js est conçu pour construire des applications réseau évolutives. Dans l'exemple "hello world" suivant, de nombreuses connexions peuvent être gérées simultanément. À chaque connexion, la fonction callback est exécutée, mais s'il n'y a pas de travail à faire, Node.js se met en veille.

```mjs
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```