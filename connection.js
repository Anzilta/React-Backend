// import
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ANZILTA:anzilqwerty@cluster0.i5yommf.mongodb.net/sampledatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connrected to DB")
})
.catch((error)=>{
    console.log("connection failed")
})