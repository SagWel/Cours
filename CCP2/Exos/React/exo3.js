// Compléter ici la fonction sortDeliveriesByStatus

const statuses = ["delivered", "pending", "cancelled"];

const deliveries = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  status: statuses[Math.floor(Math.random() * statuses.length)]
}));

function sortDeliveriesByStatus(d) {
  let deliveredDeliveries = []
  let pendingDeliveries = []
  let cancelledDeliveries = [] 

  for (let delivery of d) {
    if (delivery.status == "delivered") {
        deliveredDeliveries.push(delivery)
    } else if (delivery.status == "pending") {
        pendingDeliveries.push(delivery)
    } else {
        cancelledDeliveries.push(delivery)
    }
  }

  const sortDeliveries = [deliveredDeliveries, pendingDeliveries, cancelledDeliveries]
  return sortDeliveries
}

const result3 = sortDeliveriesByStatus(deliveries);

console.log("/ exo 3 \\");
console.log(result3);