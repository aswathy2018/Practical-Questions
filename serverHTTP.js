const http = require("http");

let server=http.createServer((req, res)=>{
    res.end('jutjt');
})
server.listen(3001, ()=>console.log("Server is running"));