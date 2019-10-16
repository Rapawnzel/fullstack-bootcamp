let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let recuento = {};

let frecuenciaMasAlta = 0;
let most;

let least;

for (let element of arr1){
    if (recuento[element] === undefined){
        recuento[element] = 1;
    } else {
        recuento[element] = recuento[element] + 1;
    }
}

for (let item in recuento){
    if(recuento[item] < frecuenciaMasAlta){
        oper (frecuenciaMasAlta, recuento);
    }
    if(recuento[item] > frecuenciaMasAlta){
        oper (frecuenciaMasAlta, recuento);
    }
}

function oper(freq, rec){
    freq = rec[item];
    masAlto = {};
    masAlto[item] = rec[item];
    return masAlto;
}

/*

3. Write a JavaScript program to find the MOST or the LEAST frequent item of an array,
depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

*/