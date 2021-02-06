const express = require('express');
const { type } = require('os');
const app  = express();

app.use(express.text())


app.get('/',(req,res) => {
    res.send('this is homepage');
});

app.post('/',(req,res) =>{
    console.log(req.body)
    res.send('this is body with home page');
});

app.listen(3001,() =>{
    console.log("listening on port 3001")
})