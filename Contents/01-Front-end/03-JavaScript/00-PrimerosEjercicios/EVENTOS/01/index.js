

function miFuncion(numInicial){
    return numInicial * -1;
}

function prtScn (num){
    document.write(`Su contrario es ${num}`);
}

function main(){
    let num = prompt ("Dime un número")
    num = miFuncion(num);
    prtScn(num);
}

window.onload = main();


/*

Escribe una función que acepte un número como argumento. La función retornará el número opuesto. 
Ejemplo:
miFuncion(40) → -40
miFuncion(-70) → 70


*/