let num=3;

async function isEven(num){
if(num%2==0){
    return 'even'
}else{
    return 'odd'
}

}

async function result() {
    try{
        let result=await isEven(num)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

result()
