// const user = {
//     name: "Alice",
//     welcome: function (country) {
//         console.log(`Welcome, ${this.name}! Enjoy your stay in ${country}`);
//     }
// };

// const guest1 = { name: "Bob" };
// const guest2 = { name: "Charlie" };


// user.welcome.call(guest1, "USA");



// const obj={
//     name: "Abhi",
//     age: 19,
//     intro: function(city, country){
//         console.log()
//     }
// }


let person={
    name:'anu'
}

let person2={
    name:'tutu'
}

let fn=function(a){
   console.log(a+this.name)
}

fn.call(person2, "My name is ")
















