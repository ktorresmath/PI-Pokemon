const { DataTypes, UUID, UUIDV4} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('types',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
             autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING
        }
    })
}