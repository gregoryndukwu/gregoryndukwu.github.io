const express = require('express');
const app = express();
const port = 3000;

 // I am tell to express load this folder to me
app.use(express.static('public/views')); // same here
//app.set('views', __dirname + "/public/views"); I can remove this
app.use(express.json()); // I am tell express that I am to use json 
//app.use(express.urlencoded()); // When I submit a form, I want access the form date in the URL

// controllers
const dictionary_controller = require('./controllers/dictionaryController');
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/view/index.html");
})
app.get('/find',dictionary_controller.get_defination);

app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
  });