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
        var isIt = true;
        if (Array.isArray(stringComp)) {
            for (var j = 0; j <= stringComp.length; j++) {
                if (pos <= -1) {
                    isIt = false;
                }
            }
        } else {
            var pos = stringIn.indexOf(stringComp);

            if (pos <= -1) {
                isIt = false;
            }
        }
        return isIt;
    }

    random(number) {
        if (number == null) { number = 16 }
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < number; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)); }
        return text;
    }

    slug(slugged, sluggy) {
        if (sluggy == null) { sluggy = '-' }
        return slugged.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '')
            .replace(/\-+/g,sluggy);
    }

    count(toCoun) {
        var arr = toCoun.split("");
        return arr.length;
    }

    countWords(toWor) {
        var arr = toWor.split(" ");
        return arr.length;
    }

    trim(toTrim, trimLeng, addStr) {
        if (trimLeng == null) { trimLeng = 99 }
        if (addStr == null) { addStr = '...' }
        return (toTrim.substr(0, trimLeng) + addStr);
    }

    trimWords(toTrW, trWLeng, addStr) {
        if (trWLeng == null) { trWLeng = 30 }
        if (addStr == null) { addStr = '...' }
        var arr = toTrW.split(" ");
        for (var i = trWLeng; i <= arr.length - 1; i++) { arr.splice(i) };
        return (arr.join(" ") + addStr);
    }

}

Str = new Str;

Str.lower('MAKAN'); // makan
Str.upper('malam'); // MALAM
Str.capitalize('saya ingin makan'); // Saya Ingin Makan
Str.reverse('kasur'); // rusak
Str.contains('Saya ingin makan sate', 'makan'); // true
Str.contains('Saya ingin makan sate', 'rujak'); // false
Str.contains('Saya ingin makan sate', ['sate', 'rujak']); // true
Str.random();   // hef2nCi273c8D2dz
Str.random(6);  // ckS3jP
Str.random(32); // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
Str.slug(title);      // javascript-typescript-dart-bahasa-mana-yang-akan-populer-di-2018
Str.slug(title, '_'); // javascript_typescript_dart_bahasa_mana_yang_akan_populer_di_2018
Str.count('lorem ipsum'); // 11
Str.countWords('lorem ipsum'); // 2
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
Str.trim('Less than 100 characters') // Less than 100 characters

Str.trim(text) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

Str.trim(text, 20) // Lorem ipsum dolor si...

Str.trim(text, 20, '·····') // Lorem ipsum dolor si·····

Str.trimWords('Less than 30 words') // Less than 30 words

Str.trimWords(text) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...

Str.trimWords(text, 3) // Lorem ipsum dolor...

Str.trimWords(text, 3, '·····') // Lorem ipsum dolor·····