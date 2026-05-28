// const crypto = require('crypto')
// global.crypto= crypto
const express = require('express')
const cors = require("cors")
const userModel = require('./models/user.model')
const { isValidObjectId } = require('mongoose')
require('./configs/db')
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}))

 
app.get('/api/users' , async (req, res) =>{
    try{
        const users = await userModel.find()
        res.status(200).json(users)
    }catch(error){
        res.json(error)

    }
})
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
app.delete('/api/users/:userID' , async (req , res) =>{
    const userID =req.params.userID
    if(isValidObjectId(userID)){
        const result = await userModel.deleteOne({_id : userID})
        if(result.deletedCount>0){
            res.status(200).json({message: 'user removed successfully'})
        }else{
            res.status(404).json({message:'user not found'})
        }
    }else{
        res.status(406).json({message : 'object id is not valid!'})
    }
})

app.listen(8000 , () =>{
    console.log('app listening on port 8000')
})