// Compléter ici la fonction extractEmails

const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 27, email: "charlie@example.com" }
];

function extractEmails(u) {
  let usersEmail = []

  for (let user of u) {
    usersEmail.push(user.email)
  }
  return usersEmail
}

const result4 = extractEmails(users);

console.log("/ exo 4 \\");
console.log(result4);