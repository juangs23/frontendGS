// const url2 = 'http://localhost:8787/registrarEvento'
const url2 = 'https://apidespliegue.onrender.com/registrarEvento'


const registrarEvento = () => {

    const serviciosAgenda = document.getElementById('serviciosAgenda').value
    const fechaInicio = document.getElementById('fechaInicio').value
    const fechaFin = document.getElementById('fechaFin').value
    const horaInicio = document.getElementById('horaInicio').value
    const horaFin = document.getElementById('horaFin').value
    const descripcionAgenda = document.getElementById('descripcionAgenda').value
    const nombreEmpleado = document.getElementById('nombreEmpleado').value

    if (serviciosAgenda.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
        
    }

    else if (fechaInicio.length == 0) {
            document.getElementById('fechaAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (fechaFin.length == 0) {
            document.getElementById('horaInicioHelp').innerHTML = 'Dato requerido'  
        }

    else if (horaInicio.length == 0) {
            document.getElementById('horaFinHelp').innerHTML = 'Dato requerido'  
        }


    else if (horaFin.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (descripcionAgenda.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }
    else if (nombreEmpleado.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else {
        let evento = {
            serviciosAgenda: serviciosAgenda,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            horaInicio: horaInicio,
            horaFin: horaFin,
            descripcionAgenda: descripcionAgenda,
            nombreEmpleado: nombreEmpleado
        }
        alert(JSON.stringify(evento));
        fetch(url2, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(evento), //convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        
        .then((res) => res.json()) //obtener respuesta de la peticion
        .then(json => {
            alert(json.msg)
        })
    }

}



if (document.querySelector('#guardarEvento')) { //si el objeto existe
    document.querySelector('#guardarEvento')
    .addEventListener('click', registrarEvento)
}


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'es',
  
      dateClick: function(info){ 
        limpiarFormulario()
        $('#guardarEvento').show()
        $('#botonEditar').hide()
        $('#botonEliminar').hide()
  
        if (info.allDay) {
          $('#fechaInicio').val(info.dateStr)
          $('#fechaFin').val(info.dateStr)
        } else {
          let fechaHora = info.dateStr.split("T")
          $('#fechaInicio').val(fechaHora[0])
          $('#fechaFin').val(fechaHora[0])
          $('#horaInicio').val(fechaHora[1].substring(0,5))
        }
        
        $("#formularioEventos").modal('show');
      
      },

      eventClick: function(info) {
        const evento = info.event;
        
       // traer los datos del evento
      const serviciosAgenda = evento.title;
      const fechaInicio = moment(evento.start).format('YYYY-MM-DD'); 
      const fechaFin = moment(evento.end).format('YYYY-MM-DD'); 
      const horaInicio = evento.extendedProps.horaInicio;
      const horaFin = evento.extendedProps.horaFin;
      const descripcionAgenda = evento.extendedProps.descripcionAgenda;
      const nombreEmpleado = evento.extendedProps.nombreEmpleado;

      // mostrar los datos en el modal
      document.getElementById('serviciosAgenda').value = serviciosAgenda;
      document.getElementById('fechaInicio').value = fechaInicio;
      document.getElementById('fechaFin').value = fechaFin;
      document.getElementById('horaInicio').value = horaInicio;
      document.getElementById('horaFin').value = horaFin;
      document.getElementById('descripcionAgenda').value = descripcionAgenda;
      document.getElementById('nombreEmpleado').value = nombreEmpleado;
  
        $('#guardarEvento').hide()
        $('#botonEditar').show()
        $('#botonEliminar').show()
        $("#formularioEventos").modal('show');


document.getElementById('botonEditar').addEventListener('click', function() {
  const serviciosAgenda = document.getElementById('serviciosAgenda').value;
  const fechaInicio = document.getElementById('fechaInicio').value;
  const fechaFin = document.getElementById('fechaFin').value;
  const horaInicio = document.getElementById('horaInicio').value;
  const horaFin = document.getElementById('horaFin').value;
  const descripcionAgenda = document.getElementById('descripcionAgenda').value;
  const nombreEmpleado = document.getElementById('nombreEmpleado').value;

  const eventoActualizado = { //objeto
      serviciosAgenda: serviciosAgenda,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      horaInicio: horaInicio,
      horaFin: horaFin,
      descripcionAgenda: descripcionAgenda,
      nombreEmpleado: nombreEmpleado
  };

  const urlActualizacion = 'https://apidespliegue.onrender.com/registrarEvento';
  alert(JSON.stringify(eventoActualizado));
  fetch(urlActualizacion, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(eventoActualizado),
      headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  .then((res) => res.json())
  .then(json => {
      
      alert(json.msg); 
      $("#formularioEventos").modal('hide');
  })
  .catch(error => {
      console.error('Error al actualizar el evento:', error);
      
  });
});


// eliminar evento
document.getElementById('botonEliminar').addEventListener('click', function() {
  const serviciosAgenda = document.getElementById('serviciosAgenda').value;


  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Una vez eliminado, no podrás recuperar este evento',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      const urlEliminacion = 'https://apidespliegue.onrender.com/registrarEvento?serviciosAgenda=' + serviciosAgenda;
      fetch(urlEliminacion, {
        method: 'DELETE',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
      .then((res) => res.json())
      .then(json => {
        Swal.fire({
          title: json.msg === 'Eliminación exitosa' ? '¡Eliminado!' : 'Perfecto!',
          text: json.msg,
          icon: json.msg === 'Eliminación exitosa' ? 'success' : 'success'
        });
        if (json.msg === 'Eliminación exitosa') {
          const eventToDelete = calendar.getEventById(serviciosAgenda);
          if (eventToDelete) {
            eventToDelete.remove();
          }
        }

        $("#formularioEventos").modal('hide');
      })
      .catch(error => {
        console.error('Error al eliminar el evento:', error);
      });
    }
  });
});
      }
    });

    // listar
    const listarEvento = async () => {
        try {
          const response = await fetch(url2, {
            method: 'GET',
            mode: 'cors',
            headers: { "Content-type": "application/json; charset=UTF-8" }
          });
          
          const data = await response.json();
          
          const listaEvento = data.msg;
      
          listaEvento.forEach(evento => {
            const nuevoEvento = {
              title: evento.serviciosAgenda,
              start: evento.fechaInicio, 
              end: evento.fechaFin, 
              extendedProps: {
                horaInicio: evento.horaInicio,
                horaFin: evento.horaFin,
                descripcionAgenda: evento.descripcionAgenda,
                nombreEmpleado: evento.nombreEmpleado
              }
            };
      
            calendar.addEvent(nuevoEvento);
          });
        } catch (error) {
          console.error('Error al obtener los eventos:', error);
        }
      }
      
  
    calendar.render();
    listarEvento();
  });

  function limpiarFormulario (){
    $('#serviciosAgenda').val('')
    $('#fechaInicio').val('')
    $('#fechaFin').val('')
    $('#horaInicio').val('')
    $('#horaFin').val('')
    $('#descripcionAgenda').val('')
    $('#nombreEmpleado').val('')
  }
  
