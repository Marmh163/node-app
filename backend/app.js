// const crypto = require('crypto')
// global.crypto= crypto
const express = require('express')
const cors = require("cors")
const userModel = require('./models/user.model')
require('./configs/db')
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}))

app.post('/api/users', async(req , res)=>{
    console.log(req)
    try{
        const result = await userModel.create({...req.body})
        // res.setHeader('Access-Control-Allow-Origin' , 'http://127.0.0.1:5500')
        res.status(201).json({message: 'new user added to db' , result})
    }catch(error){
        console.log(error)
        res.status(422).json({message: error.message})
    }
})


app.listen(8000 , () =>{
    console.log('app listening on port 8000')
})