let obj = {
    name: "Abhi",
    age: 55,
    city: { country: "India", district: "Thrissur", place: "Kodakara"}
};

let {name, age, city:{country, district, place}} = obj
console.log(district);
