// 1- import express
var express= require('express');
require('./connection')
const user=require('./model/user');

// 2- initialisation
var app=express();
// middleware
app.use(express.json());


// 3- api

app.get('/',(req,res)=>{
    res.send("hello");})

    app.get('/login', (req,res)=>{
res.send("login successfully")
    }
)
// get data from database


app.get('/add',async(req,res)=>{
    try {
        const data=await user.find()
            console.log("data from database")
            res.send(data)
        
    } catch (error) {
        
    }
    
})
// connect data to database
app.post('/add',async(req,res)=>{
    try {
        console.log(req.body);
        await user(req.body).save()
        res.send({message:"data added successfuly"})
    
    } catch (error) {
        console.log(error)
    }
})
// delete data fron database
app.delete('/lost/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await user.findByIdAndDelete(req.params.id)
        req.send({message:"data deleted"})
    } 
    catch (error) {
        res.send("not deleted")
        
    }

})
// update data from database 
app.put('/edit/:id',async(req,res)=>{

    try {
        var data= await user.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:'update the database value'})
    } catch (error) {
        res.send("not updated")
        
    }


})

// 4- port
app.listen(3000,()=>{
    console.log("port is running at 3000")
})