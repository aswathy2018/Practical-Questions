// const express=require ("express")
// const app=express();
// const fs=require("fs")

// const date = new Date().toLocaleString()
// app.listen(3003, ()=>{
//     fs.writeFile("text.txt",date,(err)=>{
//         if(err){
//             console.log("Error")
//         }
//     })
// })

// let fs=require('fs')
// let date=Date().toString()
// fs.writeFile('t&d.file',date,()=>{
//     console.log('okyy')
// })

// let fs = require('fs')
// let date = Date().toString()
// fs.writeFile("date.txt", date, ()=>{
//     console.log("Look at the file of date!!!")
// })

const fs = require('fs')
let data = Date().toString()

fs.writeFile("Date.txt", data, ()=>{
    console.log("........")
})