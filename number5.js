var even = [];
var odd = [];
var fives = [];
var prime = [];
var x, i;

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even.push(i);
    } else {
        odd.push(i)
    }
    if (i % 5 == 0) { fives.push(i) }
    
    // prima dibawah ini
    x = true;
    if (i != 0) {
        for (var j = 2; j <= i; j++) {
            if (x && (i != j) && (i % j == 0)) {
                x = false;
            }
        }
        if (x) { prime.push(i); }
    }
}
console.log(even);
console.log(odd);
console.log(prime);
