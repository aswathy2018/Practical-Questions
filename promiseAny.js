const pr1 = new Promise((reject) => setTimeout(reject, 200, 'Its not true..'))
const pr2 = new Promise((resolve) => setTimeout(resolve, 800, 'controlled'))
const pr3 = new Promise((resolve) => setTimeout(resolve, 600, 'Hii guyss'))

Promise.any([pr1, pr2, pr3])

.then((resolve) => console.log(resolve))
.catch((error) => console.log(error))