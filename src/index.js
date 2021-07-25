const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';

    while (expr) {
        result += code_to_char(expr.substring(0, 10));
        expr = expr.substring(10)        
    }

    return result;
}

module.exports = {
    decode
}

function remove_zero(str) {
    if (str[0] != '0') return str;
    return remove_zero(str.substring(1));
}

function code_to_char(int_code) {
    if (int_code[0] == '*') return ' ';

    let morse_code = '';
    int_code = remove_zero(int_code);

    while (int_code) {
        let number = int_code.substring(0, 2);
        if (number == '10') morse_code += '.';
        else if (number == '11') morse_code += '-';
        int_code = int_code.substring(2);
    }
    return MORSE_TABLE[morse_code];
}
