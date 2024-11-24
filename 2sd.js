let arr = [33,76,99,14,2,4,7,3,5]

let oddNum = arr.filter((num)=> num % 2 !== 0)

let sumOf = oddNum.reduce((acc, val)=>acc+val,0)

console.log(sumOf)


for(let i = 0; i<arr.length; i++){
    if(arr[i]%3==0){
        arr.splice(i,1)
    }
}

console.log(arr)