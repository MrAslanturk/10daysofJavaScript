// 10 Days of Javascript HackerRank

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/

/********************
    Hello world girdisi ile birlikte bizden parameterVariable değişkeninde atanmış olan değerin hello world'den sonra yazılmasını istiyor.
 ******************/
    function greeting(parameterVariable) {
        // This line prints 'Hello, World!' to the console:
        console.log('Hello, World!');
        console.log(parameterVariable);
        // Write a line of code that prints parameterVariable to stdout using console.log:
        
    }
    
    
    function main() {
        const parameterVariable = readLine();
        
        greeting(parameterVariable);
    }
    