// Exo 1 
function switchTitle () {
    const title = document.getElementById("titre")
    
    title.innerHTML = "Bienvenue dans la formation DWWM !"
}

const btnexo1 = document.getElementById('exo1');
if (btnexo1) {
    btnexo1.addEventListener('click', switchTitle);
}

// Exo 2
function switchStyle () {
    const p = document.getElementById("message")

    p.style.color = "red"
    p.style.fontWeight = "900"
    p.style.fontSize = "32px"
}

const btnexo2 = document.getElementById('exo2');
if (btnexo2) {
    btnexo2.addEventListener('click', switchStyle);
}

// Exo 3
function changeColor () {
    const li = document.querySelectorAll("li")

    for (let e of li) {
        e.style.color = "blue"
    }
}

const btnexo3 = document.getElementById('exo3');
if (btnexo3) {
    btnexo3.addEventListener('click', changeColor);
}

// Exo 4
function addPara () {
    const container = document.getElementById("containerExo4")
    const newPara = document.createElement("p")

    newPara.innerHTML = "Le DOM est puissant !"

    container.appendChild(newPara)
}

const btnexo4 = document.getElementById('exo4');
if (btnexo4) {
    btnexo4.addEventListener('click', addPara);
}

// Exo 5
function addLi () {
    const ul = document.getElementById("liste")
    const newLi = document.createElement("li")

    newLi.innerHTML = "Fraise"

    ul.appendChild(newLi)
}

const btnexo5 = document.getElementById('exo5');
if (btnexo5) {
    btnexo5.addEventListener('click', addLi);
}

// Exo 6
function deleteLi () {
    const ul = document.getElementById("liste")
    
    ul.children[1].remove()
}

const btnexo6 = document.getElementById('exo6');
if (btnexo6) {
    btnexo6.addEventListener('click', deleteLi);
}

// Exo 7
function addInfos () {
    const container = document.getElementById("resultat")

    container.innerHTML = "Bouton cliqué !"
}

const btnexo7 = document.getElementById('btn');
if (btnexo7) {
    btnexo7.addEventListener('click', addInfos);
}

// Exo 8
function switchColor () {
    const carre = document.getElementById("carre")

    if (carre.style.backgroundColor === "gray") {
        carre.style.backgroundColor = "green"
    } else {
        carre.style.backgroundColor = "gray"
    }
}

const carre = document.getElementById('carre');
if (carre) {
    carre.addEventListener('click', switchColor);
}

// Exo 9
function displayInput () {
    const prenom = document.getElementById("prenom").value
    const para = document.getElementById("resultatExo9")

    para.innerHTML = `Bonjour, ${prenom} !`
}

const display = document.getElementById('afficherExo9');
if (display) {
    display.addEventListener('click', displayInput);
}

// Exo 10
const fruits = ["Pomme", "Banane", "Fraise", "Orange"];

const container = document.getElementById("listeFruits")
const ul = document.createElement("ul")

container.appendChild(ul)

function listing() {
    for (let fruit of fruits) {
        const li = document.createElement("li")
        li.innerHTML = fruit
        ul.appendChild(li)
    }
}

const btnexo10 = document.getElementById('exo10');
if (btnexo10) {
    btnexo10.addEventListener('click', listing);
}

// Exo 11
function add () {
    const compteur = document.getElementById("compteur")

    compteur.innerHTML = Number(compteur.innerHTML) + 1

}

function remove () {
    const compteur = document.getElementById("compteur")

    compteur.innerHTML = Number(compteur.innerHTML) - 1
}

const plus = document.getElementById('plus');
if (plus) {
    plus.addEventListener('click', add);
}

const moins = document.getElementById('moins');
if (moins) {
    moins.addEventListener('click', remove);
}

// Exo 12
function addE () {
    const liste = document.getElementById("liste2")
    const newLi = document.createElement("li")
    const input = document.getElementById("item").value

    newLi.innerHTML = `${input} - <button type=button class=supprimer> X </button>`

    liste.appendChild(newLi)
    input.value = ""

    const boutons = document.querySelectorAll(".supprimer")
    
    for (let bouton of boutons) {
        bouton.addEventListener('click', () => {
            const parent = bouton.parentElement
            parent.remove()
        })
    }
}

const btnAddE = document.getElementById('ajouter')
if (btnAddE) {
    btnAddE.addEventListener('click', addE);
}

// Exo 13
function task () {
    const liste = document.getElementById("taskList")
    const newTask = document.createElement("li")
    const input = document.getElementById("task")

    newTask.innerHTML = `<span>${input.value}</span>  <button type=button class=doneTask> Done </button>  <button type=button class=deleteTask> X </button>` 

    liste.appendChild(newTask)
    input.value = ""

    const done = document.querySelectorAll(".doneTask")

    for (let e of done) {
        e.addEventListener('click', () => {
            const span = e.parentElement.querySelector("span")
            span.style.textDecoration = "line-through"
            e.parentElement.querySelector(".doneTask").remove()
        })
    }

    const deleteBtns = document.querySelectorAll(".deleteTask")

    for (let e of deleteBtns) {
        e.addEventListener('click', () => {
            const parent = e.parentElement
            parent.remove()
        })
    }
}

const btnTask = document.getElementById("addTask")
if (btnTask) {
    btnTask.addEventListener('click', task)
}