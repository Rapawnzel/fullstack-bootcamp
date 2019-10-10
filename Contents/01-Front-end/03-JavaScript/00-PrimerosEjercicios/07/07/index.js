const max_number = prompt (`Cuántas ovejitas vamos a contasr?`);

if (max_number >= 1 ){
    document.write("1 ovejita<br>");
    for(let i = 2; i <= max_number; i++){
        document.write(i + " ovejitas<br>");
    }
}
else{
    document.write("No hay ovejitas :c");
}


/*
7. Vamos a contar ovejitas. Primero fijaremos un número máximo, por ejemplo:

const max_number = 12

Ahora, haced un bucle que imprima en la consola el mensaje:

“1 ovejita…”
“2 ovejitas…”
“3 ovejitas”...
…
etc

Hasta llegar al número máximo de ovejitas. 
NOTA: ¡fijaros que el mensaje que se imprime en la primera iteracción es distinto del resto de mensajes! 
*/