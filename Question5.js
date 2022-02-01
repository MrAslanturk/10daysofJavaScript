'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar(str) {

// ^ => ilk öğe eşleşmeleri:
// () => içinde yakalanan eşleşen değeri saklar
// [aeiou] => parantez içindeki herhangi bir karakterle eşleşir
// . => herhangi bir karakterle eşleşir:
// + => 1 veya daha fazla olay için (bu, str uzunluğu > 3 sağlar)
// \1 => önceden saklanan eşleşmeyle eşleşir.
    // \2, 2 örnek önce saklanan eşleşen öğeyi arar
    // \3, 3 önce saklanan eşleşen öğeyi arar, vb.

// $ eşleşen öğenin dizinin sonunda olmasını sağlar

//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence
    let re = /^([aeiou]).+\1$/;
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}