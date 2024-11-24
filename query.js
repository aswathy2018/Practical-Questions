// /?a=5&b=2



const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    const a = +req.query.a
    const b = +req.query.b
    const sum = a+b
    res.send(`Sum: ${sum}`)
})

app.listen(3000, ()=> console.log("Server.."))