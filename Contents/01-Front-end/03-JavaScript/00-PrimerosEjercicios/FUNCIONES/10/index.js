function multiples (n){
    if (n % 3 == 0 && n % 7 == 0){
        document.write(`${n} is a multiple of 3 and 7`);
    }
    else if (n % 3 == 0){
        document.write(`${n} is a multiple of 3`);
    }
    else if (n % 7 == 0){
        document.write(`${n} is a multiple of 7`);
    }
    else{
        document.write(`${n} is not a multiple or 3 or 7`);
    }
    return false;
}


let num = prompt(`Number?`);

multiples(num);


/*

10.- Write a JavaScript function to check if a given positive number is a multiple of 3 or a multiple of 7

*/