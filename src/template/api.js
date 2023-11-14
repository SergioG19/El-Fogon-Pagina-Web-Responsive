//Elaborado por Juan Gonzalez

const API = `http://localhost:3000`;
const formularioReserva = document.getElementById('formularioReserva');

formularioReserva.addEventListener('submit', async e => {
  e.preventDefault();
  let respuesta = '';

  const nombre = e.target.name.value;
  const telefono = e.target.phone.value;
  const personas = e.target.personas.value;
  const fecha = e.target.fecha.value;
  const hora = e.target.hora.value;
  const descripcion = e.target.message.value;

  console.log([nombre, telefono, personas, fecha, hora, descripcion]);

  await fetch(`${API}/reservacion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "nombre": nombre,
      "telefono": telefono,
      "personas": personas,
      "fecha": fecha,
      "hora": hora,
      "descripcion": descripcion
    })
  })
  .then(response => response.json())
  .then(data => {
    respuesta = data.mensaje;
    window.alert(respuesta);
    formularioReserva.reset();
  })

});

export default api;