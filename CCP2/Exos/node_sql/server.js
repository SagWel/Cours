const express = require("express");
const mysql = require("mysql2");
const session = require("express-session");
const path = require("path");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_sql",
  port: "3306",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "cle_secrete_dwwm",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

  db.execute(sql, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      req.session.loggedin = true;
      req.session.username = username;
      req.session.userId = results[0].id;
      res.redirect("/dashboard");
    } else {
      res.send('Identifiants incorrects. <a href="/">Réessayer</a>');
    }
  });
});

app.get("/dashboard", (req, res) => {
  if (!req.session.loggedin) return res.send("Accès refusé.");
  const sql = `SELECT * FROM posts WHERE user_id = ? ORDER BY id DESC`;
  db.execute(sql, [req.session.userId], (err, results) => {
    if (err) throw err;

    let html = `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Mon Dashboard</title>
                <style>
                    body { 
                        font-family: sans-serif; 
                        background: #f4f7f6; 
                        padding: 20px; 
                    }

                    .container { 
                        max-width: 700px; 
                        margin: auto; 
                    }

                    header { 
                        display: flex; 
                        justify-content: spacebetween; 
                        align-items: center; 
                        border-bottom: 2px solid #4a90e2; 
                    }

                    .form-container { 
                        background: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        margin: 20px 0; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
                    }

                    input, textarea { 
                        width: 100%; 
                        padding: 10px;
                        margin: 10px 0; 
                        border: 1px solid #ddd; 
                        border-radius: 4px; 
                        boxsizing: border-box; 
                    }

                    button { 
                        background: #4a90e2; 
                        color: white;
                        border: none; 
                        padding: 10px 20px; 
                        border-radius: 4px; 
                        cursor: pointer; 
                    }

                    .card { 
                        background: white; 
                        padding: 15px; 
                        borderradius: 8px; 
                        margin-bottom: 10px; 
                        border-left: 5px solid #4a90e2; 
                    }

                    .btn-logout { 
                        color: #e74c3c; 
                        text-decoration: none; 
                        font-weight: bold; 
                    }

                </style>
            </head>
            <body>
                <div class="container">
                    <header>
                        <h1>Session de ${req.session.username}</h1>
                        <a href="/logout" class="btn-logout">Quitter</a>
                    </header>
                    <div class="form-container">
                    <h3>Nouvel Article</h3>
                    <form action="/add-post" method="POST">
                        <input type="text" name="title" placeholder="Titre de l'article" required>

                        <textarea name="content" placeholder="Contenu de l'article" rows="3" required></textarea>

                        <button type="submit">Publier l'article</button>
                    </form>
                </div>
                <h2>Mes publications</h2>`;

    if (results.length > 0) {
      results.forEach((post) => {
        html += `<div class="card"><h3>${post.title}</h3><p>${post.content}</p></div>`;
      });
    } else {
      html += `<p>Aucun article.</p>`;
    }
    html += `</div></body></html>`;
    res.send(html);
  });
});

app.post("/add-post", (req, res) => {
  if (!req.session.loggedin) return res.send("Action interdite.");
  const { title, content } = req.body;
  const userId = req.session.userId;

  const sql = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";

  db.execute(sql, [title, content, userId], (err) => {
    if (err) throw err;
    res.redirect("/dashboard");
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
app.listen(3000, () => console.log("Serveur : http://localhost:3000"));
