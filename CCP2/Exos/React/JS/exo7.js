// Compléter ici la fonction countAboveThreshold

const scores = Array.from({ length: 12 }, () => Math.floor(Math.random() * 101));

function countAboveThreshold(s) {    
    let scoresAboveThreshold = []

    for (let score of s) {
        if (score > 70) {
            scoresAboveThreshold.push(score)
        }
    }
    return scoresAboveThreshold.length
}

const result7 = countAboveThreshold(scores);

console.log("/ exo 7 \\");
console.log(result7);