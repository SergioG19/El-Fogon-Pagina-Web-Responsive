//Elaborado por Juan Gonzalez

const express = require('express');
const cors = require('cors');

//INICIALIZACIONES
const app = express();

//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//ROUTES
const contactoRuta = require('./routes/contact');
const reservacionRuta = require('./routes/reservacion');

app.use('/contacto', contactoRuta);
app.use('/reservacion', reservacionRuta);

module.exports = app;