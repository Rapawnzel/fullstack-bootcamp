
function randomElement(arr){
    let item;
        item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

function prtScn(result){
    document.getElementById("result").innerHTML = result;
}

function main(){
        let arr = document.getElementById("pedirNumero").value;
        let element = randomElement(arr);
        prtScn(element);
        return false;
}

/*

¡Buen trabajo! Ahora sabes generar números random entre 1 y X. Utilizando lo que acabas de aprender, 
podrías aplicarlo a un array para obtener un elemento al azar de dicho array.
Ejemplo:
miFuncion([“hola”, “mundo”, “lo estoy”, “petando”])
Debería retornar una de esas strings al azar.

*/