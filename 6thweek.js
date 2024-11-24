const arr = [22,4,7,78,97,65,12]

const sorted = [...arr].sort((a,b)=>b-a)

const secLargest = sorted[1]

const index = arr.indexOf(secLargest)

arr.splice(index,1)

console.log(arr);