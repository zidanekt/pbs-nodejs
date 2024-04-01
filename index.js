const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./config.js");
const response = require("./response.js");

db.connect((err) => {
  if (err) {
    console.error("Database gagal:", err);
    return;
  }
  console.log("Connection Database Succes");
});

app.use(bodyParser.json());

//Mengambil semua data barang dari database.
app.get("/barang", (req, res) => {
  const sql = "SELECT*FROM barang";
  db.query(sql, (error, result) => {
    response(200, result, "data barang", res);
  });
});

//Mengambil semua data supplier dari database.
app.get("/supplier", (req, res) => {
    const sql = "SELECT*FROM supplier";
    db.query(sql, (error, result) => {
      response(200, result, "data supplier", res);
    });
  });

  //Mengambil semua data pembelian dari database.
app.get("/pembelian", (req, res) => {
    const sql = "SELECT*FROM pembelian";
    db.query(sql, (error, result) => {
      response(200, result, "data pembelian", res);
    });
  });

// Insert data (POST) barang
app.post('/barang', (req, res) => {
  const { barang_id, nama_barang, harga, supplier_id } = req.body;
  const values = { barang_id, nama_barang, harga, supplier_id };

  db.query('INSERT INTO barang SET ?', values, (error, result) => {
      if (error) {
          console.error(error);
          res.status(500).send("Gagal menambahkan data barang.");
      } else {
          res.send("Data produk berhasil ditambahkan.");
      }
  });
});

// Insert data (POST) supplier
app.post('/supplier', (req, res) => {
  const { supplier_id, nama_supplier, alamat } = req.body;
  const values = { supplier_id, nama_supplier, alamat };

  db.query('INSERT INTO supplier SET ?', values, (error, result) => {
      if (error) {
          console.error(error);
          res.status(500).send("Gagal menambahkan data barang.");
      } else {
          res.send("Data produk berhasil ditambahkan.");
      }
  });
});

// Insert data (POST) pembelian
app.post('/pembelian', (req, res) => {
  const { pembelian_id, barang_id, jumlah_barang, total_harga, tanggal_pembelian } = req.body;
  const values = { pembelian_id, barang_id, jumlah_barang, total_harga, tanggal_pembelian };

  db.query('INSERT INTO pembelian SET ?', values, (error, result) => {
      if (error) {
          console.error(error);
          res.status(500).send("Gagal menambahkan data barang.");
      } else {
          res.send("Data produk berhasil ditambahkan.");
      }
  });
});


//Menghapus data mahasiswa
// app.delete("/barang", (req, res) => {
//   const { barang } = req.params;
//   const sql = `DELETE FROM barang WHERE barang_id = '${barang_id}'`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     response(200, result, `Hapus data sukses`, res);
//   });
// });

// //Mengupdate data mahasiswa
// app.put("/mahasiswa/:npm", (req, res) => {
//   const { npm } = req.params;
//   const { nama, alamat } = req.body;
//   const sql = UPDATE tb_mahasiswa SET nama = '${nama}', alamat = '${alamat}' WHERE npm = '${npm}';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     response(200, result, Update data sukses, res);
//   });
// });

app.listen(port, () => {
  console.log(`Runing in port ${port}`);
});