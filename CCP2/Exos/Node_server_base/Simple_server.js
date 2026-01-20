const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf8");

  if (req.url === "/") {
    res.end("<h1>Bienvenu sur le serveur !</h1><h2>Acceuil</h2>");
  } else if (req.url === "/contact") {
    res.end("<h1>Page Contact</h1><h2>Contactez nous à admin@test.com</h2>");
  } else if (req.url == "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write('{"name":"John","age":30,"cars":["Ford", "BMW", "Fiat"]}');
    res.end();
  } else {
    res.statusCode = 404;
    res.end("<h1>404 : Page introuvable !</h1>");
  }
});

server.listen(3000, () => {
  console.log("Serveur lacé sur http://localhost:3000");
});
