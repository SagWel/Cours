// Compléter ici la fonction getAverageCart

const carts = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

function getAverageCart(c) {    
    let cartsSum = 0

    for (let i = 0; i < c.length; i++) {
        cartsSum += c[i]
    }

    const cartsAverage = cartsSum/c.length
    return cartsAverage
}

const result5 = getAverageCart(carts);

console.log("/ exo 5 \\");
console.log(result5);