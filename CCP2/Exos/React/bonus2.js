// Vous devez développer un générateur de numéros de Loto en JavaScript. 
// La fonction retournera 5 numéros aléatoires distincts entre 1 et 49, triés dans l’ordre croissant, suivis d’un numéro complémentaire entre 1 et 10. 
// Aucun numéro ne doit être répété.

// Fonction à compléter
function generateLotoNumbers() {
  const numbers = []

  while (numbers.length < 5) {
    const number = Math.floor(Math.random() * (49 - 1 + 1) + 1)
    if (!numbers.includes(number)) {
        numbers.push(number)
    }
  }

  const sortNumbers = numbers.sort( (a, b)=> {
    return a - b
  })


  while(sortNumbers.length < 6) {
    const compNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    if (!sortNumbers.includes(compNumber)) {
        sortNumbers.push(compNumber)
    }
  }

  return `Les numéros sont ${sortNumbers[0]} - ${sortNumbers[1]} - ${sortNumbers[2]} - ${sortNumbers[3]} - ${sortNumbers[4]} et le numéro complémentaire ${sortNumbers[5]} !`
}

console.log(generateLotoNumbers());

