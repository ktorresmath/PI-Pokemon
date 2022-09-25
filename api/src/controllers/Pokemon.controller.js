
//const {sequelize} = require('../models/Pokemon.js')

const {Pokemon} = require('../db.js')

const getPokemon = async(req,res) => {
    console.log(Pokemon)
    try{
        const pokemons = await Pokemon.findAll()
        res.json(pokemons)
        console.log(Pokemon)
    }catch(e){
        return res.status(404).json({message:e.message})
    }
}

const createPokemon = async(req, res) => {
    const {name, hp, attack, defense, speed, height,weight} = req.body
    const newPokemon = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
    })
    res.json(newPokemon)
    console.log(newPokemon)
}

module.exports={getPokemon, createPokemon}