const unli = require("fs");

unli.unlink("Demo.txt",function(error){
    if(error){
        console.log("Unable..");
    }
})