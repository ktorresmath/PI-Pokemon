const { Router } = require('express');
const { getPokemon, createPokemon } = require('../controllers/Pokemon.controller');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemon', getPokemon
)
router.post('/pokemon', createPokemon)

module.exports = router;
