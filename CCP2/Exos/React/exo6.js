// Compléter ici la fonction getProductsWithE

const produits = ["Stylo", "Cahier", "Gomme", "Crayon", "Feutre"];

function getProductsWithE(p) {
    let productsWithE = []

    for (produit of p) {
        if (produit.includes("e")) {
            productsWithE.push(produit)
        }
    }
    return productsWithE
}

const result6 = getProductsWithE(produits);

console.log("/ exo 6 \\");

console.log(result6);