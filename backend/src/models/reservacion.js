//Elaborado por Juan Gonzalez

const {Schema, model} = require('mongoose');

const reservacionEsquema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  personas: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

// Crear el modelo de reserva
const reservacion = model('reservacion', reservacionEsquema);

// Exportar el modelo de reserva
module.exports = reservacion;