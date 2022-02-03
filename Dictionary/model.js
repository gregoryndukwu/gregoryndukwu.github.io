const sql = require('./db');

exports.Get_Defination = function(word, result){
    sql.query(`SELECT * FROM entries WHERE word='${word}'`,(err, res) => {
        if(err) {
            result(err, null);
            return;
        }

        result(null,res);
    });
};