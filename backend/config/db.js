const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'your-username',
  password: 'your-password',
  database: 'hari_coop_db'
});

db.connect((err) => {
  if (err) {
    console.log('DB Connection Failed:', err);
  } else {
    console.log('DB Connected Successfully!');
  }
});

module.exports = db;

