let numeros = [];
let numerosPares = [];

for(let i = 1; (i <= 100); i++){
        numeros.push(i);
        if(i%2 == 0){
            numerosPares.push(i);
        }
}
alert ("Números: " + numeros + "    Números Pares: " + numerosPares);



/* Crear otro array que esté vacío (esta vez lo llamaremos “numeros pares”). 
Recorremos en bucle el array del ejercicio anterior (“numeros”) comprobando en cada iteración 
si el número de dicha iteración es par o impar (dicho de otra forma: “si dividimos ese número entre dos, 
el resto es 0?). Si es así, dicho número se añadirá al segundo array (usando la función .push como antes). 
Cuando termine el bucle, haréis un alert() con los números impares.*/