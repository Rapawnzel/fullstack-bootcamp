
function meQuiere(sino){
    let margarita = "";
    if (sino % 2 == 0){
        margarita = "me quiere";
    }
    else{
        margarita = "no me quiere";
    }
    return margarita;
}    

function prtScn(margarita){
    document.getElementById("result").innerHTML = margarita;
    return true;
}

function main(){
        let num = document.getElementById("pedirNumero").value;
        let par = meQuiere(num);
        prtScn(par);
        return false;
}

/*

¿Recuerdas cuando arrancábamos las hojas de las margaritas diciendo “me quiere”, “no me quiere”, “me quiere”...? 
Vamos a programar una margarita. Tu función recibirá un número como input. 
Si dicho número es par, devolverá el string “me quiere”. Si el número es impar, 
devolverá el string “no me quiere”.

*/