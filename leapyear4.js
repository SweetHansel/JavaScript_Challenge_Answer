function isLeapYear(year) {
    let x = false;
    if (year % 4 != 0) {
        console.log('is not a leap year');
        x = false;
    }
    else if (year % 100 != 0) {
        console.log('is a leap year');
        x = true;
    }
    else if (year % 400 != 0) {
        console.log('is not a leap year');
        x = false;
    }
    else{
        console.log('is a leap year');
        x = true;
    }
    return x;
}

console.log(isLeapYear(2004));
console.log(isLeapYear(2018));
