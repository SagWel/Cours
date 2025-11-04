function afficherMessage(message) {
    setTimeout ( () => {
        alert(message)
}, 2000);
};

const exo1Btn = document.getElementById("exo1Btn")
if (exo1Btn) {
    exo1Btn.addEventListener("click", () => {
     afficherMessage("Bonjour DWWM !")   
    })
}

function etapes () {
    setTimeout (() => {
        alert("Étape 1 terminée")
        setTimeout (() => {
            alert("Étape 2 terminée")
            setTimeout (() => {
                alert("Étape 3 terminée")
            }, 1000)
        }, 1000)
    }, 1000)
}

const exo2Btn = document.getElementById("exo2Btn")
if (exo2Btn) {
    exo2Btn.addEventListener("click", etapes)
}

let percent = true

function telechargerFichier () {
    return new Promise((resolve, reject) => { 
        if (percent === true) {
            setTimeout(() => {
                resolve("Fichier téléchargé avec succès")
            }, 2000)
            percent = false
        } else {
            reject("Échec du téléchargement")
            percent = true
        }
    })
}


const exo3Btn = document.getElementById("exo3Btn")
if (exo3Btn) {
    exo3Btn.addEventListener("click", () => {
        telechargerFichier ()
       .then((result)  => {
        alert(result);
       })
       .catch((result) => {
        alert(result);
       })
    })
}

function etape1 () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Étape 1 terminée")
        }, 1000)
    })
}

function etape2 () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Étape 2 terminée")
        }, 1000)
    })
}

function etape3 () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Étape 3 terminée")
        }, 1000)
    })
}

const exo5Btn = document.getElementById("exo5Btn") 
if (exo5Btn) {
    exo5Btn.addEventListener("click", () => {
        etape1()
        .then((result1) => {
            alert(result1)
            etape2()
            .then(((result2) => {
                alert(result2)
                etape3()
                .then((result3) => {
                    alert(result3)
                })
            }))
        })
    })
}

function attendre(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function etape4 () {
    await attendre(1000);
    alert("Étape 1 terminée");
}

async function etape5 () {
    await etape4();
    await attendre(1000);
    alert("Étape 2 terminée");
}

async function etape6 () {
    await etape5();
    await attendre(1000);
    alert("Étape 3 terminée");
}

const exo6Btn = document.getElementById("exo6Btn")
if (exo6Btn) {
    exo6Btn.addEventListener("click", etape6)
}

async function lancerTelechargement () {
    try {
        
    }
}
