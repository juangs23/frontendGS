const express = require('express')
const path = require('path') //Trabajar con rutas
const hbs = require('hbs') //Incorporar motor de plantillas

const formArray = [];
const app = express()
const port = 8089

// Configuración del middleware para analizar datos POST
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

// Asignar la ubicacion de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
// Ingenieria de las vistas hbs
app.set('view engine', 'hbs')
// Configuracion del directorio que guardara los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials')

app.get('/', (req, res)=>{
    res.render('index', {
        "nombre":"Juan Ortiz",
        "email":"juanes@gmail.com"
    })//Redireccionar hacia el archivo hbs
})

// INICIO GESTION ACCESO *JUANES*
app.get('/ingresar', (req, res)=>{
    res.render('auth/sign-in')
})

app.get('/registrar-usuario', (req, res)=>{
    res.render('auth/sign-up')
})

app.get('/listar-usuarios', (req, res)=>{
    res.render('auth/listarUsuario')
})

app.get('/editar-usuario', (req, res)=>{
    res.render('auth/editarUsuario')
})

app.get('/recuperar-contrasena', (req, res)=>{
    res.render('auth/recoverpw')
})

app.get('/confirmacion', (req, res)=>{
    res.render('auth/confirm-mail')
})

app.get('/perfil', (req, res)=>{
    res.render('auth/user-account-setting')
})

app.get('/restablecer', (req, res)=>{
    res.render('auth/new-password')
})

app.get('/google', (req, res)=>{
    res.render('auth/google')
})

// FIN GESTION ACCESO


// INICIO RUTINA *JUANES*

app.get('/rutinas', (req, res)=>{
    res.render('rutinas');
});

app.get('/nueva-rutina', (req, res)=>{
    res.render('formRutina')
});

app.get('/agenda-servicios', (req, res) => {
    res.render('calendario')
});

app.get('/lista-eventos', (req, res) => {
    res.render('listaEventos')
});

// FIN RUTINAS 



app.get('/plantilla', (req, res)=>{
    res.render('plantilla')
})

app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, () => {
    console.log(`Escuchado por el puerto ${port}`)
})