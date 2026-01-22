// script for login page
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = document.getElementById("utilisateur").value;

    console.log(query);

    const res = await fetch("/api/users");
    const utilisateurs = await res.json();

    console.log(utilisateurs);

    const user = utilisateurs.find((u) => u.nom === query);

    console.log(user);

    if (user) {
      globalThis.location.href = `/users/${user.id}`;
    } else {
      alert("Utilisateur non trouvé ! Veuillez reesayer ...");
    }
  });
}

// script for user page
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
        `Bonjour et Bienvenu <span>${data.nom}</span> !`;
      document.getElementById("role").innerHTML = data.role;
      document.getElementById("contactLink").href = `/contact/${data.id}`;
    })
    .catch((error) => {
      console.error("Erreur:", error);
      document.getElementById("salutation").innerHTML = "Erreur de chargement";
      document.getElementById("role").innerHTML = "";
    });
}

// script for contact page
if (globalThis.location.pathname.includes("/contact/")) {
  const segments = globalThis.location.pathname.split("/");
  const userId = segments.at(-1);

  fetch(`/api/users/${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Erreur lors de la récupération");
      return response.json();
    })
    .then((data) => {
      document.getElementById("name").value = data.nom;
    })
    .catch((error) => {
      console.error("Erreur:", error);
      alert("Erreur identification utilisateur");
      globalThis.location.href = "/";
    });
}
