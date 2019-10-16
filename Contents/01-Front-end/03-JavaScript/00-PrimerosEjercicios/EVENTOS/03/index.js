
function diaDeLaSemana(numDia){
    let dia;
    switch (numDia){
        case `1` : 
            dia = `It's Sunday`;
            break;
        case `2`: 
            dia = `It's  Monday`;
            break;
        case `3`: 
            dia = `It's Tuesday`;
            break;
        case `4`: 
            dia = `It's Wednesday`;
            break;
        case `5`: 
            dia = `It's Thursday`;
            break;
        case `6`: 
            dia = `It's Friday`;
            break;
        case `7`: 
            dia = `It's Saturday`;
            break;
        default:
            dia = `It's Not a day of the week`;
    }
    return dia;
}

function prtScn(day){
    document.getElementById("result").innerHTML = day;
}

function main(){
        let numero = document.getElementById("pedirNumero").value;
        let diaText = diaDeLaSemana(numero);
        prtScn(diaText);
        return false;
}

/*

Escribe una función que reciba un número y devuelva el día de la semana asociado.
 
Ejemplo:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"


*/