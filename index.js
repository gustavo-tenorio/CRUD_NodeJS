//Express
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

//Body-Parser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set(bodyParser.json());


//Banco de Dados
const connection = require('./database/database');
const Cadastro = require('./Cadastro/Cadastro');

connection.authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso!');
    }).catch((Error)=>{
        console.log(Error);
    });

//Rotas
const cadastroController = require('./Cadastro/CadastroController');
app.use('/',cadastroController);


app.get('/',(req,res)=>{
    res.render('index');
});


//Server
app.listen('3000',(Error)=>{
    if(Error){
        console.log(Error);
    }else{
        console.log('SERVER ON!');
    }
});