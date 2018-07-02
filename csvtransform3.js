const data = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

var firstArr = [];
var objPropName = [];
var objPropVal = [];
var objArray = [];

firstArr = data.split("\n");

objPropName = firstArr[0].split(", ");

for (var i = 1; i <= (firstArr.length - 1); i++) {
    var tempProp = firstArr[i].split(", ");
    var obj = {};
    for (var j = 0; j <= (tempProp.length - 1); j++) {
        obj[objPropName[j].trim()] = tempProp[j].trim();
    }
    objArray.push(obj);
}

objArray.sort();

