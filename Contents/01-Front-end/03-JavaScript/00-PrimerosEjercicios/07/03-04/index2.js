const animales=["elefante", "perro", "ballena"];
const peso=[5000, 50, 20000];
let i = 0;


//Opción más óptima pero desordenada


for (let animal of animales){
    if (animal == "perro"){
        document.write(animal + " pesa " + peso[i] + "kg<br>");
    }
    if(peso[i] > "1000"){
        document.write("Animales Grandes: " + animales[i] + "<br>");
    }
    i++;
}




document.write("<br><br> _________________________________________ <br><br>");

i = 0;



//Opción ordenada, menos óptima

for (let animal of animales){
    if (animal == "perro"){
        document.write(animal + " pesa " + peso[i] + "kg<br>");
    }
    i++;
}

i = 0;

for(let p of peso){
    if(p > "1000"){
        document.write("Animales Grandes: " + animales[i] + "<br>");
    }
    i++;
}


/* 

4. Usando los mismos arrays del ejercicio anterior. Haced un bucle que recorra el 	listado de pesos. 
En cada iteracción, comprobar si el peso es superior a 1000. 
Si lo es, imprimir en la pantalla un título “Animales Grandes” y el animal correspondiente.
*/