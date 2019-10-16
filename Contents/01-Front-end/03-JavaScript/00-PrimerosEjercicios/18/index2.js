let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let recuento = {};


for (let element of arr1){
    if (recuento[element] === undefined){
        recuento[element] = 1;
    } else {
        recuento[element] = recuento[element] + 1;
    }
}


function calculaExtremos (direction, frecuencias, comparacion){
    let extremo;
    for (let item in frecuencias){
            if((direction === "up" && frecuencias[item] > comparacion)|| (direction !== "up" && frecuencias[item] < comparacion)){
                comparacion = frecuencias[item];
                extremo = {};
                extremo[item] = frecuencias[item];
            }
     }
    return extremo;
}

let mostleast = prompt("up or down?");

let limite = mostleast === "up" ? 0: arr1.length;

console.log(calculaExtremos (mostleast, recuento, limite));

/*

3. Write a JavaScript program to find the MOST or the LEAST frequent item of an array,
depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

*/