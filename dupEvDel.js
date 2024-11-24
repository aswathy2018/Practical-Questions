let arr = [35, 65, 3, 4, 4, 2, 3, 7, 4, 35];
let newArr = [];
let seenEvens = new Set();

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Check if the number is even
        if (!seenEvens.has(arr[i])) {
            seenEvens.add(arr[i]); // Add to the set if not seen before
            newArr.push(arr[i]);
        }
    } else {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
