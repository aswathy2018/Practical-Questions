const fs = require("fs")

fs.writeFile("Demo.txt","Helloo... How are you..",function(error){
    if(error){
        console.log("Unable to load");
    }
})
