const mongoose=require('mongoose')

const schema =mongoose.Schema({
    Name:String,
    Age:Number,
    place:String,
    phone:Number
})
const userModel=mongoose.model("user",schema);
module.exports=userModel;
