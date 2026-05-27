const express = require('express')
require('./configs/db')
const app = express()


app.listen(8000 , () =>{
    console.log('app listening on port 8000')
})