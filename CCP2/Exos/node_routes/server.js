const express = require("express");
const path = require("node:path");

const app = express();

const utilisateurs = [
  { id: 1, nom: "Jean Dupont", role: "Apprenant", email: "jean@test.com" },
  { id: 2, nom: "Alice Vasseur", role: "Formatrice", email: "alice@test.com" },
  { id: 3, nom: "Marc Durand", role: "Administrateur", email: "marc@test.com" },
  { id: 4, nom: "Sophie Martin", role: "Apprenant", email: "sophie@test.com" },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/HTML/index.html"));
});

app.get("/api/users", (req, res) => {
  res.json(utilisateurs);
});

app.get("/api/users/:id", (req, res) => {
  const idUtilisateur = Number(req.params.id);
  const utilisateur = utilisateurs.find((u) => u.id === idUtilisateur);

  if (!utilisateur) {
    return res.status(404).json({
      statut: "Erreur",
      message: "Utilisateur non trouvé",
    });
  }
  res.json(utilisateur);
});

app.get("/users/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/HTML/user.html"));
});

app.get("/contact/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/HTML/contact.html"));
});

app.post("/contact/:id", (req, res) => {
  const { nom, topic, content } = req.body;
  const userId = Number(req.params.id);

  if (!topic || topic.trim() === "" || !content || content.trim() === "") {
    return res.status(404).send(`
            <h1> Erreur</h1>
            <p> Tous les champs sont obligatoires.</p>
            <a href="/contact/${userId}">Réessayer !</a>`);
  }

  console.log(`Données valides reçues : ${nom}`);
  res.redirect("/users/:id");
});

app.listen(3000, () => {
  console.log("Serveur lancé sur l'URL http://localhost:3000");
});
