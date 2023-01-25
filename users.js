const express = require('express')
const router = express.Router()

router.get("/:id",logger, (req,res)=>{
    res.send(`hi user ${req.params.id}`)
})      

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

module.exports = router