const express=require('express');
const app=express();
const fetch=require('node-fetch')
const bodyParser=require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/compileCode',(req,res)=>{
    // console.log(req.body.codeWritten)
    // console.log(req.body.language)
    // console.log(req.body.inputGiven)

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.jdoodle.com/v1/execute";

    fetch(proxy+url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body:JSON.stringify({
            script: req.body.codeWritten,
            language: req.body.language,
            versionIndex: "0",
            stdin: req.body.inputGiven,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })
    })
    .then(t=>t.json())
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})