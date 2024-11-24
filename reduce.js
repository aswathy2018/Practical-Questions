// let arr=[1,-2,3,-4,-5]


// let sum=0
// let arr1=[7,8,9,0]


// let newArr=arr.reduce((acc,val)=>{
//     if(val%2==0){
//         sum=sum+val
//     }
//     return sum
// })
// console.log(newArr)


// let newArr=arr.map((val)=>val*-1)
// console.log(newArr)


// let newArr=arr.filter((val)=>(val%2==0))
// console.log(newArr)


// let newArr=[...arr,...arr1]
// for(i=0;i<newArr.length;i++){
//     if(newArr[i]%3==0){
//         newArr.splice(i,1)
//         i--
//     }
// }
// console.log(newArr)



let arr=[1,23,2,8,5,3]
let largest=0
let sec=0
for(i=0;i<arr.length;i++){
        if(largest<arr[i]){
            sec=largest
            largest=arr[i]
        }else if(arr[i]>sec&arr[i]<largest){
            sec=arr[i]
        }
    }

console.log(sec)



