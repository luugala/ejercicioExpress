const fs = require ('fs');
const listadoHeroes = JSON.parse(fs.readFileSync('/data/heroes.json', 'utf-8'));

app.get('/heroes', function (req, res) {
	res.send(listadoHeroes);
});

module.exports = heroes;