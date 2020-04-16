// Require de Express
const express =require ('express');

// Require de FS
const fs = require ('fs');

// Ejecución de Express
const app = express ();
const port = 3030
// Levantando el Servidor en el puerto 3030
app.listen(port, () => console.log('Server running in ' + port +' port'));


// Ruta Raíz / ➝ Home
app.get('/', function (req, res){
	const textoRespuesta = `Ni Superman, Iron Man o La Mujer Maravilla son tan importantes
	cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas 
	y ellos te sirvan como inspiración para poder cumplir tus objetivos. 
	Recuerda: ¡nunca pares de creer en ti!.`
	res.send (textoRespuesta);
});