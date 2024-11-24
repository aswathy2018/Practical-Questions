let a1 = new Promise((resolve,reject) => setTimeout(()=>resolve("heyy"),1000))
let a2 = new Promise((resolve, reject) => setTimeout(()=>resolve("heyy3"),2000))
let a3 = new Promise((resolve,reject) => setTimeout(()=>reject("heyy3"),100))

Promise.race([a1, a2, a3])

.then((result) => console.log(result))

.catch((error) => console.log(error))