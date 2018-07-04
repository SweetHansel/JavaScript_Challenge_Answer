let even = [];
let odd = [];
let fives = [];
let prime = [];
let x, i;

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) even.push(i);
    else odd.push(i);
    if (i % 5 == 0) fives.push(i);

    x = true;
    if (i >= 1) {
        for (let j = 2; j < i; j++) {
            if (x && (i % j == 0)) x = false;
        }
        if (x) prime.push(i);
    }
}
console.log(even);
console.log(odd);
console.log(fives);
console.log(prime);
