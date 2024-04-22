const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  port: 3306,
  user: "sql6700950",
  password: "6bnd24nX9h",
  database: "sql6700950",
});

db.connect((err) => {
    if (err) throw err; // Jika terjadi kesalahan saat menghubungkan
    console.log('Database connected'); // Mencetak pesan ke konsol jika berhasil terhubung
});

module.exports = db