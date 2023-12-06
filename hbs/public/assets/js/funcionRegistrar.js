// const url = 'https://apidespliegue.onrender.com/registarUsuario'
const url = 'http://localhost:8787/registarUsuario'
const urlDolar = 'https://www.datos.gov.co/resource/mcec-87by.json'



const listarUsuario = async() => {

    fetch(urlDolar, {    
        method: 'GET',
        mode: 'cors',       
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaDolar = data //msg es el nombre de la lista retorna con json
        console.log(listaDolar)
        const valorDolar = listaDolar[0].valor;
        document.getElementById('precioDolar').value = valorDolar;
        listaDolar.map(function (dolar) {
            //Configurar el objeto para enviarlo por url
            objetoDolar = Object.keys(dolar).map(key => key + '=' + 
            encodeURIComponent(dolar[key])).join('&');
            console.log(dolar)

    let ObjectId  = document.getElementById('contenido') //Objet del html donde se va a deplegar la info
    let contenido = '' // contiene filas y celdas que se desplegaran en el tbody
    
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
        
    })

    .then((res) => res.json()) //obtner respuesta de  la peticion
    .then(function(data){    // se manipulan los datos obtenidos de la url
        let listaUsuario = data.msg
        console.log(listaUsuario)
        listaUsuario.map(function(usuario){
            // Configurar el objeto para enviar por url
            objetoUsuario = Object.keys(usuario).map(key => key + '=' + encodeURIComponent(usuario[key])).join('&');
            contenido = contenido + `<tr>` +
                `<td>`+usuario.nombres+`</td>` +
                `<td>`+usuario.apellidos+`</td>` +
                `<td>`+usuario.documento+`</td>` +
                `<td>`+usuario.correo+`</td>` +
                `<td>`+usuario.telefono+`</td>` +
                `<td>`+usuario.edad+`</td>` +
                `<td>`+usuario.direccion+`</td>` +
                `<td>`+usuario.precioDolar+`</td>` + 
                `<td>`+listaDolar[0].valor+`</td>` +

                `<td><button onclick="redireccionarEditar('${objetoUsuario}')">Editar</button></td>`+
                `</tr>` 
                
        })

        
        ObjectId.innerHTML = contenido
    })
})
})

    // for(i = 1; i<10; i++){
    //     contenido = contenido + '<tr>' + 
    //     '<td>nombreEmpleado</td>' +
    //     '<td>fechaAgenda</td>' +
    //     '<td>horaInicio</td>' +
    //     '<td>horaFin</td>' +
    //     '<td>descripcionAgenda</td>' +
    //     '<td>estadoAgenda</td>' 
    // }
    
    
} 

const registrarUsuario = () => {
    const nombres = document.getElementById('nombres').value
    const apellidos = document.getElementById('apellidos').value
    const documento = document.getElementById('documento').value
    const correo = document.getElementById('correo').value
    const telefono = document.getElementById('telefono').value
    const edad = document.getElementById('edad').value
    const direccion = document.getElementById('direccion').value
    const precioDolar = document.getElementById('precioDolar').value
    const password = document.getElementById('password').value

    if (nombres.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
        
    }

    else if (apellidos.length == 0) {
            document.getElementById('fechaAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (documento.length == 0) {
            document.getElementById('horaInicioHelp').innerHTML = 'Dato requerido'  
        }

    else if (correo.length == 0) {
            document.getElementById('horaFinHelp').innerHTML = 'Dato requerido'  
        }

    else if (telefono.length == 0) {
            document.getElementById('descripcionAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (edad.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (direccion.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (precioDolar.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }
        
    else if (password.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else {
        let usuario = {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            edad: edad,
            direccion: direccion,
            precioDolar: precioDolar,
            password: password
        }
        alert(JSON.stringify(usuario));
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(usuario), //convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        
        .then((res) => res.json()) //obtener respuesta de la peticion
        .then(json => {
            alert(json.msg)
        })
    }

}

const actualizarUsuario = () => {
    const nombres = document.getElementById('nombres').value
    const apellidos = document.getElementById('apellidos').value
    const documento = document.getElementById('documento').value
    const correo = document.getElementById('correo').value
    const telefono = document.getElementById('telefono').value
    const edad = document.getElementById('edad').value
    const direccion = document.getElementById('direccion').value
    const precioDolar = document.getElementById('precioDolar').value
    const password = document.getElementById('password').value

    if (nombres.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
        
    }

    else if (apellidos.length == 0) {
            document.getElementById('fechaAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (documento.length == 0) {
            document.getElementById('horaInicioHelp').innerHTML = 'Dato requerido'  
        }

    else if (correo.length == 0) {
            document.getElementById('horaFinHelp').innerHTML = 'Dato requerido'  
        }

    else if (telefono.length == 0) {
            document.getElementById('descripcionAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (edad.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (direccion.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (precioDolar.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else if (password.length == 0) {
            document.getElementById('estadoAgendaHelp').innerHTML = 'Dato requerido'  
        }

    else {
        let usuario = {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            edad: edad,
            direccion: direccion,
            precioDolar: precioDolar,
            password: password
        }
        alert(JSON.stringify(usuario));
        fetch(url, {
            method: 'PUT',
            mode: 'cors', // cross origin resource sharing
            body: JSON.stringify(usuario), //convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"} // escabezado de la solicitud
        })
        
        .then((res) => res.json()) //obtener respuesta de la peticion
        .then(json => {
            alert(json.msg)
        })
    }

}

const redireccionarEditar = (objetoUsuario) => {
    document.location.href = 'editar-usuario?usuario='+objetoUsuario
}

const editarUsuario = () => {

    //obetener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    
    // Asignar valores a la caja de texto
    document.getElementById('nombres').value = urlParams.get('nombres')
    document.getElementById('apellidos').value = urlParams.get('apellidos')
    document.getElementById('documento').value = urlParams.get('documento')
    document.getElementById('correo').value = urlParams.get('correo')
    document.getElementById('telefono').value = urlParams.get('telefono')
    document.getElementById('edad').value = urlParams.get('edad')
    document.getElementById('direccion').value = urlParams.get('direccion')
    document.getElementById('precioDolar').value = urlParams.get('precioDolar')
    document.getElementById('password').value = urlParams.get('password')
}

if (document.querySelector('#btnRegistrar')) { //si el objeto existe
    document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarUsuario)
}

if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
    .addEventListener('click', actualizarUsuario ) 
}
