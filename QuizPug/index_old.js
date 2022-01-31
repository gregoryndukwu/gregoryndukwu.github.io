const express = require('express');
const app = express();
const port = 8085;
const pug = require('pug');

///app.set('views', './views');
app.set('view engine', 'pug');

app.get('/',function(req,res) {
    res.render(
        'index', 
        { title: 'Titulo um', messagem: "Testando 123"}
)
    })

    app.get('/sobre',function(req,res) {
        res.render(
            'sobre', 
            { title: 'Titulo um', messagem: "Testando"}
    )
        })
app.listen(port,() => {
    console.log('Server starded at port ' + port);
});