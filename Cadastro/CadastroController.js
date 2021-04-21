const express = require('express');

const router = express.Router();

const Cadastro = require('./Cadastro');

//Salvar informações de cadastro
router.post('/save',(req,res)=>{
    let nome = req.body.nome; 
    let email = req.body.email;
    let idade = req.body.idade;

    if(nome != undefined){
        Cadastro.create({
            nome:nome,
            email:email,
            idade:idade
        }).then(()=>{
            res.redirect('/registros');
        })
    }else{
        res.render('/');
    }
});

//Mostrar todos os cadastros
router.get('/registros',(req,res)=>{
    Cadastro.findAll({raw:true}).then(cadastros =>{res.render('../views/registros.ejs',{cadastros:cadastros})});
});

//Editar cadastros
router.get('/registros/edit/:id',(req,res)=>{
    let id = req.params.id;
    
    Cadastro.findByPk(id).then(cadastros =>{
        if(cadastros != undefined){
            res.render('../views/edit',{cadastros:cadastros});
        }else{
            res.redirect('/registros');
        }
    })
});

//Salvar Update dos cadastros
router.post('/registros/update',(req,res)=>{
    let id = req.body.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let idade = req.body.idade;
            
    Cadastro.update({
        nome: nome,
        email: email,
        idade: idade,
    },{where:
        {id:id}
    }).then(() =>{
            res.redirect('/registros');
        }).catch(Error =>{
            console.log(Error);
        })
});



//Deletar cadastros
router.post('/registros/delete',(req,res) =>{
    let id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){
            Cadastro.destroy({
                where:{
                    id:id
                }
            }).then(()=>{
                res.redirect('/registros');
            });
        }else{
            res.redirect('/registros');
        }
    }else{
        res.redirect('/registros');
    }
});

module.exports = router;