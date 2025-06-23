const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sherly', // password MySQL kamu
  database: 'db_mahasiswa'
});

conn.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = conn;
