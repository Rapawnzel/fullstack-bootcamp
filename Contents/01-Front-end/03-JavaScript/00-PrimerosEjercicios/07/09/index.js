const num = prompt("Número?");
let factor = 1;

for (i = 2; i <= num; i++){
    factor = factor * i;
}

document.write("El factorial de " + num + " es " + factor);    


/*
Partiendo de un número cualquiera, por ejemplo el 7, 
queremos calcular la multiplicación de todos los números que hay por debajo de éste (sin contar el cero). 

Por ejemplo:

1*2*3*4*5*6*7 = 5.040

A este cálculo en matemáticas se le llama factorial. El factorial de 7, como acabamos de ver, es 5040.

Haced un bucle que me calcule el factorial del número 10 y lo imprima en la consola.
*/