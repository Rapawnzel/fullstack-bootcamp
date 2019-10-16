function ageCheck (a){
    if (a >= 20 && a <= 30){
        document.write(`You are in your twenties`);
    }
    else if (a >= 50 && a <= 60){
        document.write(`You are in your fifties`);
    }
    else{
        document.write(`You are not in your twenties or your fifties`);
    }
    return 0;
}


let age = prompt(`What's your age?`);

ageCheck(age);


/*

9.- Write a JavaScript function to check a given person age is within 20 and 30 or 50 and 60.

*/