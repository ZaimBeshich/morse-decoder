const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let numArr = expr.match(/.{1,10}/g);
    let morsArr = [];
    let result = [];
    let MORSE_TABLE_ARR = Object.entries(MORSE_TABLE);
    for (let i = 0; i <= numArr.length - 1; i++) {
        let str = numArr[i].replace(/11/g, "-")
            .replace(/10/g, ".")
            .replace(/\*{10}/, " ")
            .replace(/00/g, "")
        morsArr.push(str);
    }
    for (let prop of morsArr) {
        if (prop == " ") {
            result.push(prop);
        } else {
            for (let key in MORSE_TABLE) {
                if (key == prop) {
                    result.push(MORSE_TABLE[key])
                }
            }
        }
    }
    return result.join("");
}

module.exports = {
    decode
}