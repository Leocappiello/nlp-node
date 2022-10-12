function addToDocument(phrase, manager, language, document) {
    manager.addDocument(language, phrase, document)
}

function addToAnswer(phrasesAnswer, manager, language, document) {
    manager.addAnswer(language, document, phrasesAnswer)
}


module.exports = { addToAnswer, addToDocument }