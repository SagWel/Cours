const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = document.getElementById("utilisateur").value;

    console.log(query);

    const res = await fetch("/api/users");
    const utilisateurs = await res.json();

    console.log(utilisateurs);

    const user = utilisateurs.find((u) => u.name === query);

    if (user) {
      globalThis.location.href = `/users/${user.id}`;
    } else {
      alert("Utilisateur non trouvé ! Veuillez reesayer ...");
    }
  });
}

if (
  globalThis.location.pathname.includes("/users/") &&
  !globalThis.location.pathname.includes("/api/")
) {
  const segments = globalThis.location.pathname.split("/");
  const userId = segments.at(-1);

  fetch(`/api/users/${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Erreur lors de la récupération");
      return response.json();
    })
    .then((data) => {
      document.getElementById("salutation").innerHTML =
        `Bonjour et Bienvenu <span>${data.name}</span> !`;
      document.getElementById("role").innerHTML = data.role;
      document.getElementById("contactLink").href = `/contact/${data.id}`;
    })
    .catch((error) => {
      console.error("Erreur:", error);
      document.getElementById("salutation").innerHTML = "Erreur de chargement";
      document.getElementById("role").innerHTML = "";
    });
}

if (globalThis.location.pathname.includes("/contact/")) {
  const segments = globalThis.location.pathname.split("/");
  const userId = segments.at(-1);

  fetch(`/api/users/${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Erreur lors de la récupération");
      return response.json();
    })
    .then((data) => {
      document.getElementById("name").value = data.name;
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Erreur identification utilisateur");
      globalThis.location.href = "/";
    });
}

if (globalThis.location.pathname.endsWith("/admin")) {
  fetch("/api/admin")
    .then((response) => {
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des messages ...");
      return response.json();
    })
    .then((data) => {
      const container = document.getElementById("listeContainer");
      if (!data || data.length === 0) {
        container.innerHTML = `
          <tr>
            <td colspan=5 style="text-align: center">
              <h3>Auncun message à consulter ...</h3>
            </td>
          </tr>`;
      } else {
        container.innerHTML = "";
        data.forEach((msg) => {
          container.insertAdjacentHTML(
            "beforeend",
            `<tr> 
              <td> ${new Date(msg.date).toLocaleDateString("fr-FR")}</td> 
              <td>${msg.topic}</td>
              <td>${msg.content}</td>
              <td>${msg.name}</td>
              <td>
              <div class="btn-container"><a href="/admin/edit/${msg._id}" class="btn-edit">Modifier</a><a href="/admin/delete/${msg._id}" class="btn-delete">Supprimer</a></div>            
              </td>
            </tr>`,
          );
        });
      }
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Erreur affichage données ...");
      globalThis.location.href = "/";
    });

  document.addEventListener("click", async (e) => {
    const deleteBtn = e.target.closest(".btn-delete");

    if (deleteBtn) {
      e.preventDefault();

      const url = deleteBtn.getAttribute("href");
      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const row = deleteBtn.closest("tr");
          if (row) {
            row.style.transition = "opacity 0.3s";
            row.style.opacity = "0";
            setTimeout(() => row.remove(), 300);
          }
          console.log("Message supprimé !");
        } else {
          console.error("Erreur serveur lors de la tentative de suppression");
          alert("Erreur de suppression !");
        }
      } catch (err) {
        console.error("Erreur:", err);
      }
    }
  });
}
