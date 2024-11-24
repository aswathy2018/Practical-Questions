const express = require('express')
const app = express()

const router = express.Router()

// router.use((req,res,next)=>{
//     console.log("Server is running..");
//     next()
// })

router.get('/', (req,res)=>{
    res.send("I'm okay with this..")
})

router.get('/home',(req,res)=>{
    res.send("Hii every one...")
})

app.use('/all',router)

app.listen(3001,()=>console.log("Loading..."))

