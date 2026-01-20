const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(
    '<h1 style ="text-align: center;">Acceuil via express</h1> <a href=" /Nicolas " style=" margin-left: 47%; text-decoration: none; color: blue; font-weight: 600; font-size: 24px; border: solid 3px blue; ;padding: 5px 10px; border-radius: 10px; ">salutation</a>',
  );
});

app.get("/:nom", (req, res) => {
  const nomUtilisateur = req.params.nom;
  res.end(
    `<h1>Bonjour ${nomUtilisateur}</h1> <h2>Bienvenue sur le back-end !</h2>`,
  );
});

app.listen(port, () => {
  console.log(`Application Express lancée sur http://localhost:${port}`);
});
