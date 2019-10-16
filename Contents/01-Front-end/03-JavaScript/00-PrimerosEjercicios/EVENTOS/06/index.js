
function game(player1, player2){
    let whoWins = "";
    if (player1 == `Rock`){
        if (player2 == `Paper`){
            whoWins = `Player 2 is the winner`;
        }
        else{
            whoWins = `Player 1 is the winner`;
        }
    }
    else if (player1 == `Paper`){
        if (player2 == `Rock`){
            whoWins = `Player 1 is the winner`;
        }
        else{
            whoWins = `Player 2 is the winner`;
        }
    }
    else{
        if (player2 == `Paper`){
            whoWins = `Player 1 is the winner`;
        }
        else{
            whoWins = `Player 2 is the winner`;
        }
    }
    return whoWins;
}    

function prtScn(whoWins){
    document.getElementById("result").innerHTML = whoWins;
    return true;
}

function main(){
        let numOne = document.getElementById("pedirNumeroUno").value;
        let numTwo = document.getElementById("pedirNumeroDos").value;
        let winner = game(numOne, numTwo);
        prtScn(winner);
        return true;
}

/*

Vamos a programar un árbitro para jugar a piedra-papel-tijeras. 
Escribe una función que acepte dos strings como argumentos. 
Cada uno de esos strings puede ser “piedra”, “papel” o “tijera”. 
El primero de los strings es la elección del jugador 1, y el segundo string es la elección del jugador 2. 
La función retornará un string diciendo qué jugador ha ganado.
Ejemplo:
miFuncion(“piedra”, “tijeras”) → “El jugador 1 gana”
miFuncion(“papel”, “tijeras”) → “El jugador 2 gana”
miFuncion(“piedra”, “papel”) → “El jugador 2 gana”

*/