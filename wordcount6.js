const data = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali
`
let arrayToCount = [];
let count = 0;

arrayToCount = data.toUpperCase().split(/[\s\n]/g);

function howMany(str) {
    count = 0;
    arrayToCount.forEach((a) => {
        if (a === str.toUpperCase()) {
            count++
        }
    });
    return count;
}

console.log(howMany('aku'));
console.log(howMany('ingin'));
console.log(howMany('begini'));


