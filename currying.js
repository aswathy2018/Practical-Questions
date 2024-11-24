function cur(a){
    return function (b){
       return a+b
    }
}
console.log(cur(2)(3));


