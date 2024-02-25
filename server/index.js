import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import registermodel from "./models/Register.js"
const app=express()

app.use(express.json())
app.use(cors())

app.post("/register",(req,res)=>{
   const {name,email,password}=req.body
   registermodel.findOne({email:email})
    .then(Register=>{
        if(Register){
           return res.json("already have an account")
        }else{
            registermodel.create({name:name,email:email,password:password})
            .then(Register=>res.json(Register))
            .catch(err=>res.json(err))
        }
    }) .catch(err=>res.json(err))
})

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://vicky:test123@cluster0.epdrsry.mongodb.net/registers?retryWrites=true&w=majority');
  console.log("mongodb connect")
}

app.listen(3001,()=>{
    console.log("port 3001 connect")
})
