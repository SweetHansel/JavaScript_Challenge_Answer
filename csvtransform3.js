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
    let throwaway = firstArr.shift();

    firstArr.forEach(a => {
        let tempProp = a.split(",");
        let obj = {};
        
        tempProp.forEach((b,c) => obj[objPropName[c].trim()] = b.trim());
        objArray.push(obj);
    });

    objArray.sort((a, b) => {
        if (parseInt(a.PRICE) < parseInt(b.PRICE)) return -1
        if (parseInt(a.PRICE) > parseInt(b.PRICE)) return 1
        return 0
    })

    objArray.forEach(a => a.PRICE = ("Rp" + parseInt(a.PRICE).toString().replace(/\d(?=(\d{3})+$)/g, '$&.')));

    return JSON.stringify(objArray);
}

console.log(csvToJson(data));