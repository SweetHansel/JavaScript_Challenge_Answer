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
var arrayToCount = [];
var count = 0;

arrayToCount = data.toUpperCase().split("\n").join(" ").split(" ");

function howMany(str) {
    count = 0;
    for (var i = 0; i <= arrayToCount.length; i++) {
        if((arrayToCount[i]) == str.toUpperCase()){
            count++}
    }
    console.log(count);
}


howMany('aku');
howMany('ingin');
howMany('begini');