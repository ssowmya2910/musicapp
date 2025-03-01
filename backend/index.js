const express=require("express")

const app=express()

app.listen(3001,()=>{
    console.log("Server started")
})
app.get("/",(req,res)=>{
    res.send("<h1>hiiii<\h1>")
})