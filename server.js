const express = require('express')
const app = express()
const userRouter = require('./users.js')

app.get("/",(req,res)=>{
    res.download("server.js")
})

app.use("/users",userRouter)

app.listen('3001')