const express = require('express');
const app = express();
const path = require('path');
const conn = require('./db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Tampilkan data
app.get('/', (req, res) => {
  conn.query('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) throw err;
    res.render('index', { rows });
  });
});

// Tampilkan form tambah
app.get('/tambah', (req, res) => {
  res.render('tambah');
});

// Proses simpan
app.post('/simpan', (req, res) => {
  const { nama, alamat, no_hp, hobi } = req.body;
  conn.query('INSERT INTO mahasiswa (nama, alamat, no_hp, hobi) VALUES (?, ?, ?, ?)',
    [nama, alamat, no_hp, hobi],
    (err) => {
      if (err) throw err;
      res.redirect('/');
    });
});

// Form edit
app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  conn.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, rows) => {
    if (err) throw err;
    res.render('edit', { data: rows[0] });
  });
});

// Proses update
app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const { nama, alamat, no_hp, hobi } = req.body;
  conn.query('UPDATE mahasiswa SET nama=?, alamat=?, no_hp=?, hobi=? WHERE id=?',
    [nama, alamat, no_hp, hobi, id],
    (err) => {
      if (err) throw err;
      res.redirect('/');
    });
});

// Proses hapus
app.get('/hapus/:id', (req, res) => {
  conn.query('DELETE FROM mahasiswa WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
