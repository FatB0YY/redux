// не чистая ф-ция
const rndSum = (a) => Math.random + a;

// чистая
const sum = (a, b) => a + b;

// не чистая
let num = 5
const sum2 = (a) => num += a

console.log(rndSum(5));
console.log(rndSum(5));
console.log(rndSum(5));

console.log(sum(1, 2));

console.log(sum2(5));
console.log(sum2(5));