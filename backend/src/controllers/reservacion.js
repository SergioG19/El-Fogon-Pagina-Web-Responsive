//Elaborado por Juan Gonzalez

const reservacion = require('../models/reservacion');

class FormularioController {
    enviarFormulario = async (req, res) =>{
        try {
          const { nombre, telefono, personas, fecha, hora, descripcion } = req.body;
          const nuevoFormulario = new reservacion({ nombre, telefono, personas, fecha, hora, descripcion });
          await nuevoFormulario.save();
           res.json({mensaje: 'Reservación Procesada'});
        } catch (error) {
          console.log(error);
          res.status(404).json({mensaje: 'Error al enviar el formulario'})
        }
    };
}

const reservar = new FormularioController();

module.exports = reservar;