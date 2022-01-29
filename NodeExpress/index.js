const express = require('express');
const bodyparser = require('body-parser');
const app = express();
var showResult = require('./result');
var result = 0;

app.use(bodyparser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/view/index.html");
})

app.post('/', function (req, res) {
    var value1 = req.body.first;
    var value2 = req.body.second;
    var oper = req.body.operation;
    
    switch (oper) {
        case 'plus':
            result = parseFloat(value1) + parseFloat(value2);
            break;
        case 'menos':
            result = parseFloat(value1) - parseFloat(value2);
            break;
        case 'times':
            console.log(result);
            result = parseFloat(value1) * parseFloat(value2);
            break;
        case 'div':
            result = parseFloat(value1) / parseFloat(value2);
            break;
    }

    showResult.result(req, res, result);

})

app.listen(8084, function () {
    console.log("Server on Port 8083");
});