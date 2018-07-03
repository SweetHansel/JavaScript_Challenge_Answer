
//biasanya diminta reverse per huruf,
function reverseHuruf(str) {
    return str.split("").reverse().join("");
}

//soal minta  reverse per kata.
function reverseKata(str) {
    return str.split(" ").reverse().join(" ");
}

const kalimat = "ibu ratna antar ubi";

console.log("Aslinya : " + kalimat + "\nReverse Per-Huruf :" + reverseHuruf(kalimat) + "\nReverse Per-Kata :" + reverseKata(kalimat));