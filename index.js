const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});


app.listen('3000',(Error)=>{
    if(Error){
        console.log(Error);
    }else{
        console.log('SERVER ON!');
    }
});