const { NlpManager } = require('node-nlp')
const { addToAnswer, addToDocument } = require('./fn')
const data = require('./data/utterancesAnswers.json')

//setup trainer
const language = 'es'
const manager = new NlpManager({ languages: [language], forceNER: true, nlu: { log: false } })

//mapping each question with respectly answer
data.utterances.map(elem => {
  elem.questions.map(question => {
    addToDocument(question, manager, language, elem.theme)
  })
  addToAnswer(elem.answers, manager, language, elem.theme)
})

//train
async function loadTrain() {
  await manager.train();
  manager.save();
  const response = await manager.process('es', 'cual horario quimica');
  console.log(response.answer);
}

loadTrain()