let arr = [3,2,7,4,[8,6,1,9]]

let arr1 = JSON.parse(JSON.stringify(arr))

arr1[0] = 10;
arr1[4][0] = 67;

console.log(arr)
console.log(arr1);