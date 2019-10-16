
function randomGame(){
    let arr = ["Rock", "Paper", "Scissors"];
        item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

function prtScn(result){
    document.getElementById("result").innerHTML = result;
}

function main(){
        let element = randomGame();
        prtScn(element);
        return false;
}

/*

¡Aw yeah! Ya viene la parte práctica: aplicando todos los conocimientos que has adquirido sobre sacar 
elementos random de un array, haz una función que elija “piedra”, “papel” o “tijeras” al azar.
Ejemplo:
miFuncion(); → Devuelve el string “piedra” o “papel” o “tijera” al azar.

*/