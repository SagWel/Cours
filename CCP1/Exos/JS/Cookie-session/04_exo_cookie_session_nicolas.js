const form = document.querySelector("form")

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const username = document.getElementById("username").value.trim()

        sessionStorage.setItem('username', username)

        const date = new Date()

        document.cookie = `dateDeCreation=${date}`

        const display = document.getElementById("displayInfos")

        const displayUsername = document.createElement("p")
        displayUsername.innerHTML = `Bienvenu, ${sessionStorage.getItem('username')}`
        display.appendChild(displayUsername)

        const displayDateCreation = document.createElement("p")
        
        
        displayDateCreation.innerHTML = `la ${document.cookie} `
        display.appendChild(displayDateCreation)

        e.target.reset()
    })
}

const cleanCookies = document.getElementById("cleanCookies")
if (cleanCookies) {
    cleanCookies.addEventListener("click", () => {
        document.cookie = "dateDeCreation=; max-age=0"
        console.log(document.cookie);
        
    })
}

const cleanSession = document.getElementById("cleanSession")
if (cleanSession) {
    cleanSession.addEventListener("click", () => {
        sessionStorgae.clear()
        console.log(sessionStorage.getItem('username'));
        
    })
}