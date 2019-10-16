
function joinArrays(first, second){
    let joined = [];
    for (let i = 0; i < first.length; i++){
        joined[i] = first[i];
    }
    for (let i = 0; i < second.length; i++){
        joined[first.length+i] = second[i];
    }
    return joined;
}    

function prtScn(joined){
    document.getElementById("result").innerHTML = joined;
    return true;
}

function main(){
        let arr1 = document.getElementById("pedirNumeroUno").value;
        let arr2 = document.getElementById("pedirNumeroDos").value;
        let joinedArray = joinArrays(arr1, arr2);
        prtScn(joinedArray);
        return true;
}

/*

Haz una función que acepte dos arrays como inputs. 
La función devolverá un array con todos los datos de los otros 2 arrays.
Ejemplo:
miFuncion([1,2,3], [4,5,6]) → devolverá [1,2,3,4,5,6]
miFuncion([“hola”, “mundo”], [4,5,6]) → devolverá [“hola”, “mundo”,4,5,6]


*/