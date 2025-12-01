// Compléter ici la fonction summarizeInvoices

const clients = [
  { name: "Anna", invoices: [12, 57, 22] },
  { name: "Luis", invoices: [150, 75] },
  { name: "Eva", invoices: [30, 20, 40] }
];

function summarizeInvoices(c) {
    let summarizeInvoices = []

    for (let client of c) {
        let invoicesSum = 0
        for (let i = 0; i < client.invoices.length; i++) {
            invoicesSum += client.invoices[i]
        }
        summarizeInvoices.push({name: client.name, totalInvoices: invoicesSum})
    }

    return summarizeInvoices
}

const result8 = summarizeInvoices(clients);

console.log("/ exo 8 \\");
console.log(result8);