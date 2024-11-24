const red = require("fs");

red.readFile("Demo.txt","utf8",function(error,data){
    console.log(data)
})