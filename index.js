const express = require('express');
const app = express();


app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen('3000',(Error)=>{
    if(Error){
        console.log(Error);
    }else{
        console.log('SERVER ON!');
    }
});