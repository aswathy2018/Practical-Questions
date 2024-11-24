const user = {
    name: "Alice",
    welcome: function (city, country) {
        console.log(`Welcome, ${this.name}! Enjoy your stay in ${city}`);
    }
};

const guest1 = { name: "Bob" };
const guest2 = { name: "Charlie" };

const welcomeBob = user.welcome.bind(guest1, "Tokyo");
welcomeBob();



// let obj = {
//     name: "Aswathy"
// }

// let obj2 = {
//     name: "Anoop"
// }

// let fn = function(a){
//     console.log(a+this.name)
// }

// let vari = fn.bind(obj2,"My name is ")

// vari()