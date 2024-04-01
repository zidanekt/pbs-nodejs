const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "db_pembelian",
});

db.connect((err) => {
    if (err) throw err; // Jika terjadi kesalahan saat menghubungkan
    console.log('Database connected'); // Mencetak pesan ke konsol jika berhasil terhubung
});

module.exports = db