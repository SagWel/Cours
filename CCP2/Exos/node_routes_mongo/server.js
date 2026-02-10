require("dotenv").config();
const express = require("express");
const path = require("node:path");
const mongoose = require("mongoose");

const host = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const port = process.env.PORT;

mongoose
  .connect(`mongodb://${host}:${dbPort}/${dbName}`)
  .then(() => {
    console.log("Connexion établie avec la base de donnée MongoDB");
  })
  .catch((error) => console.error("Erreur:", error));

const contactSchema = new mongoose.Schema({
  name: { type: String, require: true },
  topic: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

const utilisateurs = [
  { id: 1, name: "Jean Dupont", role: "Apprenant", email: "jean@test.com" },
  { id: 2, name: "Alice Vasseur", role: "Formatrice", email: "alice@test.com" },
  {
    id: 3,
    name: "Marc Durand",
    role: "Administrateur",
    email: "marc@test.com",
  },
  { id: 4, name: "Sophie Martin", role: "Apprenant", email: "sophie@test.com" },
];

app.use(express.json());
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

app.post("/contact/:id", async (req, res) => {
  const { name, topic, content } = req.body;
  const userId = Number(req.params.id);

  if (!topic || topic.trim() === "" || !content || content.trim() === "") {
    return res.status(404).send(`
            <h1> Erreur</h1>
            <p> Tous les champs sont obligatoires.</p>
            <a href="/contact/${userId}">Réessayer !</a>`);
  }
  try {
    const newContact = new Contact({
      name: name,
      topic: topic,
      content: content,
    });

    await newContact.save();
    console.log(`Données valides reçues et envoyé a notre équipe ;)`);
    res.redirect("/users/:id");
  } catch (error) {
    console.error("Erreur:", error);
    res.statut(500).send("Erreur lors de l'enregistrement");
  }
});

app.get("/api/admin", async (req, res) => {
  const contents = await Contact.find().sort({ date: -1 });
  res.json(contents);
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/HTML/admin.html"));
});

app.post("/admin", async (req, res) => {
  const { name, topic, content } = req.body;

  if (
    !topic ||
    topic.trim() === "" ||
    !content ||
    content.trim() === "" ||
    !name ||
    name.trim() === ""
  ) {
    return res.status(404).send(`
            <div style="text-align:center; width: 100%; max-width: 700px; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-top: 50px; margin-left: 400px">
              <h1> Erreur</h1>
              <p> Tous les champs sont obligatoires.</p>
              <a href="/admin">Réessayer !</a>
            </div>`);
  } else if (!utilisateurs.find((u) => u.name === name)) {
    return res.status(404).send(`
            <div style="text-align:center; width: 100%; max-width: 700px; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-top: 50px; margin-left: 400px">
              <h1> Erreur</h1>
              <p> Utilisateur inconnu.</p>
              <a href="/admin">Réessayer !</a>
            </div>`);
  }
  try {
    const newContact = new Contact({
      name: name,
      topic: topic,
      content: content,
    });

    await newContact.save();
    console.log(`Données valides reçues et envoyé a notre équipe ;)`);
    res.redirect("/admin");
  } catch (error) {
    console.error("Erreur:", error);
    res.statut(500).send("Erreur lors de l'enregistrement");
  }
});

app.get("/admin/delete/:id", (req, res) => {
  res.redirect("/admin");
});

app.delete("/admin/delete/:id", async (req, res) => {
  try {
    const idmsg = req.params.id;
    await Contact.findByIdAndDelete(idmsg);

    res.status(200).json({ success: true, redirectUrl: "/admin" });
  } catch (err) {
    console.error("Erreur:", err);
    res.status(500).json({ success: false });
  }
});

app.get("/admin/edit/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/HTML/modifier.html"));
});

app.put("/admin/edit/:id", async (req, res) => {
  try {
    const idmsg = req.params.id;
    const { topic, content } = req.body;

    if (topic != "" && content != "") {
      await Contact.findByIdAndUpdate(idmsg, {
        topic: topic,
        content: content,
      });
      res.json({ message: "Modifications réussies !" });
    } else if (topic != "") {
      await Contact.findByIdAndUpdate(idmsg, { topic: topic });
      res.json({ message: "Modification du sujet réussie !" });
    } else if (content != "") {
      await Contact.findByIdAndUpdate(idmsg, { content: content });
      res.json({ message: "Modification du message réussie !" });
    }
  } catch {}
});

app.listen(port, () => {
  console.log(`Serveur lancé sur l'URL http://${host}:${port}`);
});
