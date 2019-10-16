
function dado(maxNum){
    let random;
        random = Math.floor(Math.random() * maxNum) + 1;
    return random;
}

function prtScn(num){
    document.getElementById("result").innerHTML = num;
}

function main(){
        let numero = document.getElementById("pedirNumero").value;
        let randomNum = dado(numero);
        prtScn(randomNum);
        return false;
}

/*

El objeto window (el contexto global de los navegadores) nos ofrece un maravilloso objeto llamado “Math” 
que nos presenta funciones muy útiles para los programadores. Para llamarlo basta con escribir “Math”. 
Algunas de las funciones más útiles de Math son:
Math.round() para redondear números
Math.random() para generar números aleatorios
Math.min() para encontrar el mínimo de una lista de números
Math.max() para encontrar el máximo de una lista de números
Tu tarea va a consistir en crear una función que genere números al azar entre 1 y 10.
Ahora que has aprendido a crear números random entre 1 y 10 usando el Math.random(), 
vas a hacer una función que genere números random entre 1 y X, donde X será un argumento de tu función.
Ejemplo:
miFuncion(6); //genera números aleatorios entre 1 y 6



*/