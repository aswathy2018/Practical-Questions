let arr = [1,4,2,5,4,6,7,8,5,3,6,4,9]

let duplicate = []

for(let i=0 ; i<arr.length ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
        if(arr[i]==arr[j]){
            duplicate.push(arr[j])
        }
    }
}
console.log(duplicate)