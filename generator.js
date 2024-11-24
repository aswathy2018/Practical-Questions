
function* counter(){
    for(i=1;i<=50;i++){
        yield i;
    }
}
const count = counter()
for( let num of count){
    console.log(num)
}

// let counter = (a,b)=>{
//     return a+b
// }

// console.log(counter(2,3))