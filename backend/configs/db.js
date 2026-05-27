const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/maryamdb')
.then(() => console.log('connected to db'))
.then((err) => console.log(err))