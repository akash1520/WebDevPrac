const express = require('express')
const app = express()


app.get("/api",(req,res)=>{
    res.json({"Users":["user1","user2","user3"]})
})

app.listen('5000',()=>{console.log("server is running on port number 5000")})