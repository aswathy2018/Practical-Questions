const fs = require('fs')

let mango = true;

let fruit = new Promise((resolve, reject) => {
    if (mango) {
        fs.readFile("test.txt","utf8",function(error,data){
            console.log(data)
        })
    }
    else{
        reject(" An error occure!!")
    }
})

.then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject))