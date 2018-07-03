class Str {
    constructor() { }

    lower(toLow) {
        return toLow.toLowerCase();
    }

    upper(toUp) {
        return toUp.toUpperCase();
    }

    capitalize(toCap) {
        return toCap.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    reverse(toRev) {
        return toRev.split("").reverse().join("");
    }

    contains(stringIn, stringComp) {
        let isIt = false;
        if (Array.isArray(stringComp)) {
            stringComp.forEach((a,b) => {
                let pos = stringIn.indexOf(a);
                    console.log(pos);
                    if (pos >= 0) {
                        isIt = true;
                    }
            });
        } else {
            let pos = stringIn.indexOf(stringComp);
            if (pos >= 0) {
                isIt = true;
            }
        }
        return isIt;
    }

    random(number = 16) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < number; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
        return text;
    }

    slug(slugged, sluggy = '-') {
        return slugged.toString().toLowerCase()
            .replace(/\W/g, '-')
            .replace(/-+/g, '-')
            .replace(/\-+$/g, '')
            .replace(/\-/g, sluggy);
    }

    count(toCoun) {
        let arr = toCoun.split("");
        return arr.length;
    }

    countWords(toWor) {
        let arr = toWor.split(" ");
        return arr.length;
    }

    trim(toTrim, trimLeng = 99, addStr = '...') {
        if (toTrim.length <= trimLeng) { addStr = '' }
        return (toTrim.substr(0, trimLeng) + addStr);
    }

    trimWords(toTrW, trWLeng = 30, addStr = '...') {
        if (toTrW.length <= trWLeng) { addStr = '' }
        let arr = toTrW.split(" ");
        arr.length = trWLeng;
        return arr.join(" ");
    }

}

Str = new Str;
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

console.log(Str.lower('MAKAN'));
console.log(Str.upper('malam'));
console.log(Str.capitalize('saya ingin makan'));
console.log(Str.reverse('kasur'));
console.log(Str.contains('Saya ingin makan sate', 'makan'));
console.log(Str.contains('Saya ingin makan sate', 'rujak'));
console.log(Str.contains('Saya ingin makan sate', ['sate', 'rujak']));
console.log(Str.random());
console.log(Str.random(6));
console.log(Str.random(32));
console.log(Str.slug(title));
console.log(Str.slug(title, '_'));
console.log(Str.count('lorem ipsum'));
console.log(Str.countWords('lorem ipsum'));
console.log(Str.trim('Less than 100 characters'));
console.log(Str.trim(text));
console.log(Str.trim(text, 20));
console.log(Str.trim(text, 20, '·····'));
console.log(Str.trimWords('Less than 30 words'));
console.log(Str.trimWords(text));
console.log(Str.trimWords(text, 3));
console.log(Str.trimWords(text, 3, '·····'));