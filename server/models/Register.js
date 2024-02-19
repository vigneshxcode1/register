import mongoose from "mongoose";

const register=new mongoose.Schema({
    name:{
        type:String,
     
    },
    email:{
        type:String,
      
    },
    password:{
        type:String,
       required:true
    }
})

const registermodel= mongoose.model("Register",register)

export default registermodel