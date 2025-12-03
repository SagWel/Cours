// Fonction à compléter
function getMostFrequentWords(text) {

    const regex =['les', 'des', 'une','est','elle','pas', 'pour', 'que', 'qui', 'nous', 'vous', 'dans', 'sans', 'avec'];
    
    const fullWords = text.split(/[^a-zA-ZÀ-ÿ]+/)

    const cleanWords = fullWords.filter(word => word.length > 2)
    const lowerWords = cleanWords.map(word => word.toLowerCase())

    const fullOkWords = lowerWords.filter(word => {
        return !regex.includes(word)
    })
    
    const wordCounts = {}

    for (const word of fullOkWords) {
        wordCounts[word] = (wordCounts[word] || 0) + 1
    }

    const wordsArray = Object.keys(wordCounts).map(word => ({
        word: word,
        iteration: wordCounts[word]
    }));

    const sortWords = wordsArray.sort((a, b) => { 
        return b.iteration - a.iteration;
    });

   const mostFrequentWords = sortWords.slice(0, 5)

    return mostFrequentWords
}

const sampleText = `Votre texte ici...`;

console.log("/ Bonus 1 \\");;

console.log(getMostFrequentWords(sampleText));