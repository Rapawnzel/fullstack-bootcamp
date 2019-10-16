

function bool(n1, n2, n3){
    let flag = false;
    if ((n1 == n2 || n2 == n3) && n2 != 4){
        flag = true;
    }

    return flag;
}

let  n1 = prompt ("número 1?");
let  n2 = prompt ("número 2?");
let  n3 = prompt ("número 3?");


document.write(bool(n1,n2,n3));

/*

Crear una función que recibe un array de tres números 
y devuelve true si el primero es igual al segundo o si el segundo es igual al tercero. 
Si el segundo número es 4, siempre devuelve false.

Ejemplo:
miFuncion([1,2,3]) debería retornar false
miFuncion([1,1,3]) debería retornar true
miFuncion([1,4,3]) debería retornar false

*/