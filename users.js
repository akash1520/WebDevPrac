const express = require('express')
const router = express.Router()

router.get("/:id",(req,res)=>{
    res.send(`hi user ${req.params.id}`)
})

module.exports = router