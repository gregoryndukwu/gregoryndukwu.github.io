const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12348765',
  database : 'entries'
});

module.exports = connection;