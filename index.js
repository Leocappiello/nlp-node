const esCompromise = require('es-compromise')
const { StopwordsEs, StemmerEs, TokenizerEs } = require('@nlpjs/lang-es');
const { dockStart } = require('@nlpjs/basic');

(async () => {
  const dock = await dockStart();
  const nlp = dock.get('nlp');
  await nlp.train();
})();

//input
let input = "He visto a un programador";
input = "Hola quería saber los horArios de ing mecánica"
//tokenizer
const tokenizer = new TokenizerEs();
inputTokenized = tokenizer.tokenize(input, true)
console.log('tokenizado:',inputTokenized);

//quitar stopwords
let stopwords = new StopwordsEs(); 
let removedStopWords = stopwords.removeStopwords(inputTokenized)
console.log("sin stopwords: ", removedStopWords)

//root words
const stemmer = new StemmerEs();
let rootWords = []
removedStopWords.map((elem) => {
    rootWords.push(stemmer.stemWord(elem))
    //console.log(stemmer.stemWord(elem));
})

console.log(rootWords);

//normalizar, tokenizar y obtener roots
stemmer.stopwords = new StopwordsEs()
console.log(stemmer.tokenizeAndStem(input, false));

