function charCount (c, s){
    let n = 0;
    for (let i of s){
       if (s[i] == c){
            n++;
       }
    }
    return n;
}


let char = prompt(`Char?`);
let str = "123456789";

charCount(char, str);

if (n !== 0){
    document.write(`The char "${char}" appears ${n} times throughout string`);
}
else  document.write(`The char "${char}" doesn't exist on the string`);


/*

12.- Write a JavaScript function to count how many times a specified character is inside a string. 


*/