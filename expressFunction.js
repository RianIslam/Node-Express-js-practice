const express = require('express');
const app  = express();

app.get('/',(req,res) => {
    res.send('this is homepage');
});

app.post('/',(req,res){
    res.send('this is body with home page');
});

app.listen(3000,() =>{
    console.log("listening on port 3000")
})