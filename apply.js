let obj={
    name: "Anoop",
    age: 29
}

let obj2={
    name: "Aswathy",
    age: 22
}

let real=function(n){
    console.log(n+this.name)
}

real.apply(obj,["My name is "])