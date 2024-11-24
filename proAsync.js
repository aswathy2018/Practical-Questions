let mango=true;

let arr= new Promise((resolve,reject)=>{
    if(mango){
        resolve("It's a mango..");
    }
    else{
        reject("Error..");
    }
})

// async function data(){
//     try{
//         let man=await arr;
//         console.log(man);
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// data();

async function data() {
    try{
        let datas = await arr;
        console.log(datas)
    }
    catch(error){
        console.log(error)
    }
}

data()