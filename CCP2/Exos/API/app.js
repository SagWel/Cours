const express = require("express");

const app = express();
const port = 3000;

const users = [
  { id: 1, nom: "Antoine", role: "Dev" },
  { id: 2, nom: "Charlotte", role: "Design" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé ..." });
  }
});

app.listen(port, () => {
  console.log("API Annuaire prête !");
});
