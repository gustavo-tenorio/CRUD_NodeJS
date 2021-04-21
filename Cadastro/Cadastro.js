const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cadastro = connection.define('cadastro',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    idade:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

Cadastro.sync({force:false});

module.exports = Cadastro;