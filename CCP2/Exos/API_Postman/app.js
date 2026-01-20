const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [
  { id: 1, description: "Faire les courses" },
  { id: 2, description: "Apprendre Node.js" },
  { id: 3, description: "Configurer le serveur" },
];

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});

// On liste les ID des tâches
app.get("/tasks", (req, res) => {
  const taskReferences = tasks.map((task) => `/task/${task.id}`);
  res.json(taskReferences);
});

//Détails d'une tâche :
app.get("/task/:id", (req, res) => {
  const taskId = Number.parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});

// Ajouter une donnée dans la liste
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    description: req.body.description,
  };

  tasks.push(newTask);

  res.status(201).json({ message: "Tâche ajoutée avec succès", task: newTask });
});
// Modification d'une tâche
app.put("/task/:id", (req, res) => {
  const taskId = Number.parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (task) {
    task.description = req.body.description;
    res.json({ message: "Tâche mise à jour avec succès", task });
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});
// Suppression d'une Tâche
app.delete("/task/:id", (req, res) => {
  const taskId = Number.parseInt(req.params.id);

  tasks = tasks.filter((task) => task.id !== taskId);

  res.json({ message: "Tâche supprimée avec succès" });
});
