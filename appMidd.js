const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log("Hii guyss..")
    next();
})

app.get('/', (req,res)=>{
    res.send('Server gotted')
})

app.listen(3003, ()=>console.log("Server is running.."))