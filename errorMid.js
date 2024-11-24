const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    throw new Error("Broken")
})

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Invalid..")
})

app.listen(3004, () => console.log("Server is running on port 3004.."));
