// Une entreprise d’e-commerce vous fournit un tableau de produits. 
// Chaque produit est un objet contenant un nom, un prix, et une catégorie. 
// Votre mission est d’écrire une fonction qui regroupe les produits par catégorie dans un nouvel objet. 
// Chaque clé de cet objet correspondra à une catégorie, et sa valeur sera un tableau de produits appartenant à cette catégorie.

// Fonction à compléter
function groupProductsByCategory(products) {
    const categories = {}

  for (const product of products) {
    (categories[product.category] = (categories[product.category] || [])).push(product.name);
  }

  return categories
}

const stock = [
  { name: 'Stylo', price: 1.5, category: 'Fournitures' },
  { name: 'Cahier', price: 3, category: 'Fournitures' },
  { name: 'Clé USB', price: 10, category: 'Électronique' },
  { name: 'Chargeur', price: 15, category: 'Électronique' },
];

console.log(groupProductsByCategory(stock));