const fs = require("fs");
const path = require("path");

const fichier = path.join(__dirname, "noms.txt");

fs.readFile(fichier, "utf8", (err, data) => {
  if (err) {
    console.error("Erreur : Le fichier 'noms.txt' est introuvable !");
    console.error("Détails :", err.message);
  }

  const noms = data.split("\n");
  const salutations = noms.map((nom) => `Bonjour ${nom.trim()} !`).join("\n");

  fs.writeFile(path.join(__dirname, "salutations.txt"), salutations, (err) => {
    if (err) throw err;
    console.log("Succés ! Le ficheir salutations.txt a été généré.");
  });
});
