//Importando o Sequelize
const Sequelize = require('sequelize');


//Conexão com o banco de dados, para conectar no seu
//coloque apos o new Sequelize('nome_do_banco','usuario','senha do banco de dados')
const connection = new Sequelize('crud_node','root','110804',{
    
    host:'localhost',   //localhost pois está rodando em sua máquina
    
    dialect:'mysql',    //banco de dados que está utilizando, sqlserver, mssql, etc.
    
    timezone:'-03:00'   //fuso horário do banco de dados
});

module.exports = connection;