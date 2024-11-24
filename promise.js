let mango=true;

let pro=new Promise((resolve,reject)=>{

    if(mango){
        resolve("It's a Mango");
    }

    else{
        reject("Not a mango");
    }

})

.then((resolve) => console.log(resolve))
.catch((reject) => console.log(reject))