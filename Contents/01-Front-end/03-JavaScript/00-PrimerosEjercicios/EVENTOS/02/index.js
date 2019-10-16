

function miFuncion(first, second){
    let divisible = false;
    if (first % second == 0){
        divisible = true;
    }
    return divisible;
}


function prtScn (divisible){
    if (divisible){
        document.write("Son divisibles");
    }
    else{
        document.write("No son divisibles");
    }
}

function main(){
    let firstNum = prompt ("num1?");
    let secondNum = prompt ("num2?");
    let div = miFuncion(firstNum, secondNum);
    prtScn(div);
}

window.onload = main();


/*

Escribe una función que acepte dos números como argumentos. 
La función nos devolverá true si el primer número es divisible por el segundo.
Ejemplo:
miFuncion(20, 2) → true, puesto que 20 es divisible entre 2



*/