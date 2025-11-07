const submitBtn = document.getElementById("submitBtn")
if (submitBtn) {
    submitBtn.addEventListener("click", () => {
        const input = document.querySelector("input")
        
        const query = input.value

        localStorage.setItem('query', query)

        const container = document.getElementById("resultContainer")

        container.innerHTML = ""
        
        const titleContainer = document.getElementById("titleContainer")

        titleContainer.innerHTML = `<h2>Résultats pour : ${query}</h2>`

        fetch(`https://imdb.iamidiotareyoutoo.com/search?q=[${query}]`)
        .then(res => res.json())
        .then(data => data.description.forEach(element => {
            displayCard(element)
        }))
    function displayCard (element) {
        const card = document.createElement("div")
        card.className = "card"
        const link = document.createElement("a")
        link.href = `https://imdb.com/title/${element["#IMDB_ID"]}`
        link.target = "_blank"
        const img = document.createElement("img")
        img.src = `${element["#IMG_POSTER"]}`
        img.alt = `${element["#TITLE"]} Poster`
        const hover = document.createElement("div")
        hover.className = "hover"
        const title = document.createElement("span")
        title.innerHTML = `${element["#TITLE"]}`
        const btn = document.createElement("button")
        btn.type = "button"
        btn.id = `infosBtn${element["#TITLE"]}`
        btn.innerHTML = "Infos"

        container.appendChild(card)
        card.appendChild(btn)
        card.appendChild(link)
        link.appendChild(img)
        link.appendChild(hover)
        hover.appendChild(title)

    }

    query = ""

    })

    const storageContent = [localStorage.getItem('query'), localStorage.getItem('result')]
    console.log(storageContent);
}

const 