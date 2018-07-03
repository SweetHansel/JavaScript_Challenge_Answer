const data = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

function csvToJson(csv) {
    let firstArr = [];
    let objPropName = [];
    let objArray = [];

    firstArr = csv.split("\n");

    objPropName = firstArr[0].split(",");

    for (let i = 1; i <= (firstArr.length - 1); i++) {
        let tempProp = firstArr[i].split(",");
        let obj = {};
        for (let j = 0; j <= (tempProp.length - 1); j++) {
            obj[objPropName[j].trim()] = tempProp[j].trim();
        }
        objArray.push(obj);
    }
    objArray.sort(function (a, b) {
        if (parseInt(a.PRICE) < parseInt(b.PRICE)) return -1
        if (parseInt(a.PRICE) > parseInt(b.PRICE)) return 1
        return 0
    })

    for (let j = 0; j <= (objArray.length - 1); j++) {
        objArray[j].PRICE = ("Rp" + parseInt(objArray[j].PRICE).toString().replace(/\d(?=(\d{3})+$)/g, '$&.'));
    }

    return JSON.stringify(objArray);
}

console.log(csvToJson(data));