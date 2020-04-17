// Require de Express
const express =require ('express');

// Require de FS
const fs = require ('fs');

// Ejecución de Express
const app = express ();
const port = 3030
// Levantando el Servidor en el puerto 3030
app.listen(port, () => console.log('Server running in ' + port +' port'));

const home = require ('./Routes/home');
const heroes= require ('./Routes/heroes');

app.use('/',home)
