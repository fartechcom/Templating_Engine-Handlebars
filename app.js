const path = require('path');

// memanggil objek express
const express = require('express');

// modul nodejs untuk mengambil data dari form pada express.js
const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHbs())

app.set('view engine', 'handlebars');

app.set('views', 'views');

// array untuk menyimpan inputan
const mahasiswa = [];

// untuk mengkonvert karakter
app.use(bodyParser.urlencoded({extended: false}));

// mengkoneksikan ke file public/css
app.use(express.static(path.join(__dirname, 'public')));

app.get('/tambah_mhs',(req, res, next) => {
    // merender file tambah-mhs
    res.render('tambah_mhs', {title: 'Tambah Mahasiswa'});
}); 

app.post('/tambah_mhs',(req, res, next) => {
    //  mempush kedalam array products[]
    mahasiswa.push({ nama: req.body.nama });
    res.redirect('/');
}); 

app.use('/',(req,res,next) => {
    // merender file index.pug
    res.render('index', {title: 'Daftar Mahasiswa', mhs: mahasiswa, cek: mahasiswa.length>0});
})

app.listen(3000);