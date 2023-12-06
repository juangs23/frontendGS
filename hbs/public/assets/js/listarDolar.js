const url = 'https://apidespliegue.onrender.com/registarUsuario'
// const url = 'http://localhost:8787/registarUsuario'
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
                // `<td>`+listaDolar[0].valor+`</td>` +

                `<td><button onclick="redireccionarEditar('${objetoUsuario}')">Editar</button></td>`+
                `</tr>` 
                
        })

        
        ObjectId.innerHTML = contenido
    })
})
})
 }