

function game(player1, player2){
    let arr = ["Rock", "Paper", "Scissors"];
    player2 = arr[Math.floor(Math.random() * arr.length)];

    let whoWins = "";
    if (player1 == `Rock`){
        if (player2 == `Paper`){
            whoWins = `Player 2 is the winner`;
        }
        else if (player2 == `Scissors`){
            whoWins = `Player 1 is the winner`;
        }
        else{
            whoWins = `There's a tie!`;
        }
    }
    else if (player1 == `Paper`){
        if (player2 == `Rock`){
            whoWins = `Player 1 is the winner`;
        }
        else if (player2 == `Scissors`){
            whoWins = `Player 2 is the winner`;
        }
        else{
            whoWins = `There's a tie!`;
        }
    }
    else if (player1 == `Scissors`){
        if (player2 == `Paper`){
            whoWins = `Player 1 is the winner`;
        }
        else if (player2 == `Rock`){
            whoWins = `Player 2 is the winner`;
        }
        else{
            whoWins = `There's a tie!`;
        }
    }
    else{
        whoWins = `Not a valid value`;
    }
    return whoWins;
}    


function prtScn(result){
    document.getElementById("result").innerHTML = result;
}

function main(){
        let num = document.getElementById("pedirNumero").value;
        let element = game(num);
        prtScn(element);
        return false;
}

/*

Ayer hiciste una función a la cual le pasábamos como argumentos las “jugadas” de dos jugadores en 
piedra,papel o tijera, ¿recuerdas?

Tu función hacía algo como ésto...
miFuncion(“piedra”, “tijeras”) → “El jugador 1 gana”
Bien, te toca volver a usar esa función. 
Cópiala y pégala, porque vas a necesitarla de nuevo. Te espero… ¿ya la tienes?

Vas a invocar a esta función, pero el primer argumento va a ser un string al azar generado con la función que 
hiciste en el ejercicio anterior. El segundo argumento va a ser TU jugada. ¿ganarás al ordenador, o perderás?

*/