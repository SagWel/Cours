const customers = [
  { name: "Alice", orders: [ {}, {}, {} ] },
  { name: "Bob", orders: [ {}, {}, {}, {}, {}, {}, {} ] },
  { name: "Charlie", orders: [ {}, {}, {}, {} ] }
];

function getLoyalCustomers (customers) {
let loyalCustomers = []
  
  for (let customer of customers) {
    if (customer.orders.length > 5) {
      loyalCustomers.push(customer.name)
    }
  }
  return loyalCustomers
}

const result = getLoyalCustomers(customers);
console.log("/ exo 1 \\");

console.log(result);