// Compléter ici la fonction getPopularProducts

const products = [
  { id: 1, name: "Stylo", purchases: Math.floor(Math.random() * 100) },
  { id: 2, name: "Carnet", purchases: Math.floor(Math.random() * 100) },
  { id: 3, name: "Clé USB", purchases: Math.floor(Math.random() * 100) },
  { id: 4, name: "Chargeur", purchases: Math.floor(Math.random() * 100) }
];

function getPopularProducts(p) {
   let popularProducts = []
    
    for (let product of p) {
        if (product.purchases > 50) {
            popularProducts.push(product.name)
        }
    }
    return popularProducts
}

const result2 = getPopularProducts(products);

console.log("/ exo 2 \\");
console.log(result2);