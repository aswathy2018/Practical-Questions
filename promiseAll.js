const pr1 = Promise.resolve("One")
const pr2 = Promise.resolve("Two")
const pr3 = Promise.reject("Three")

Promise.all([pr1, pr2, pr3])

.then((success) => console.log(success))
.catch((error) => console.log(error))