let utilisateurs = ["Nicolas"]

let id = prompt("Merci de vous identifier ! Quel est votre nom ?")

if (utilisateurs.includes(id)) {
    alert("Bonjour, " + id + " ! Bon retour parmis nous !")
}
else {
    let inscription = prompt("Bienvenu, " + id + " ! Souhaitez vous vous inscrire ? Oui ou Non ?")
    
    if (inscription.toLowerCase() === "oui") {
        utilisateurs.push(id)
        alert("Merci de votre inscription !")
    }
    else {
        alert("Au revoir !")
    }
}
