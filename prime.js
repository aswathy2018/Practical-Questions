function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

let arr = [37, 65, 3, 4, 4, 2, 3, 7, 4, 35];

function findPrimes(arr) {
    return arr.filter(isPrime);
}

let primeNumbers = findPrimes(arr);
console.log(primeNumbers);
