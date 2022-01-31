const express = require('express');
const app = express();
const port = 3000;
var data_store = require('./model/data');

app.set('view engine', 'pug');
app.set('views',__dirname + "/public/views")

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
  let cIndex = req.query.index? parseInt(req.query.index) : -1;
  let correctAnswer = req.query.correctAnswer? parseInt(req.query.correctAnswer) : 0;

  if(cIndex < data_store.questions.length-1) {
      if(req.query.answer != undefined && req.query.answer  == data_store.answers[cIndex]) {
          correctAnswer = correctAnswer + 1;
          
      }
      cIndex++;
      return res.render('index',{question: data_store.questions[cIndex],
        index: cIndex, correctAnswer: correctAnswer});
  } 
  if(correctAnswer == 4) correctAnswer++;
  return res.render('index',{currentScore: correctAnswer, totalQuestions: data_store.questions.length});
})
app.listen(port, () => {
  console.log('Server is Working ${port}')
});