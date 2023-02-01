require("dotenv").config()
const {connection}=require("./Config/db")
const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.listen(process.env.PORT,async()=>{
  try{
    await connection
    console.log("connected to DB");
  }
  catch(err){
    console.log(`error:${err}`)
  }
  console.log(`server is listening on port ${process.env.PORT}`);
})
console.log("");