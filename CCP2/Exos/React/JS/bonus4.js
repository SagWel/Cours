// Vous travaillez pour une application de gestion de budget. 
// On vous confie un tableau contenant des transactions sous forme d'objets. 
// Chaque transaction contient un libellé, une catégorie et un montant. 
// Votre objectif : regrouper les transactions par catégorie, puis afficher le total dépensé dans chaque catégorie, dans un nouvel objet.

// Fonction à compléter
function summarizeExpenses(transactions) {
  const categories = {}

  for (const transaction of transactions) {
    (categories[transaction.category] = (categories[transaction.category] || [])).push(transaction)
  }

  const expenses = {}

  for (const [category, transactionsList] of Object.entries(categories)) {
     const totalAmount = transactionsList.reduce((accumulator, transaction) => {
        return accumulator + transaction.amount;
        }, 0);

        expenses[category] = totalAmount
  }

  return expenses
}

const data = [
  { label: 'Supermarché', amount: -50, category: 'Alimentation' },
  { label: 'Café', amount: -4.5, category: 'Alimentation' },
  { label: 'Salaire', amount: 1500, category: 'Revenus' },
  { label: 'Abonnement Netflix', amount: -12, category: 'Divertissement' },
];

console.log(summarizeExpenses(data));