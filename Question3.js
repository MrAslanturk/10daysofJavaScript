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


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

 /********

 Bizden istediği girdide verilen string ifadenin sesli ve sessiz harflerinin ayrıştırılması ve sonrasında tek tek alt alta yazılması.

  */
  
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = [];
    
    for(var i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }else{
            consonants += s[i] + '\n';
        }
    }
 console.log(consonants);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

function powerSet(arr) {
  
    var powers = [];
    
    var total = Math.pow(2, arr.length);
    
    for (var i = 0; i < total; i++) {
      
      var tempSet = [];
      
      var num = i.toString(2);
      
      while (num.length < arr.length) { num = '0' + num; }
      
      for (var b = 0; b < num.length; b++) {
        if (num[b] === '1') { tempSet.push(arr[b]); }
      }
      
      powers.push(tempSet);
      
    }
    
    return powers;
    
  }
  
  powerSet([1, 2, 3]);