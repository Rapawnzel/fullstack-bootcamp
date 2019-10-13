array = [
    {"nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador"},
    {"nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia"},
    {"nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey"},
    {"nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon"}
]

//PRINT NAMES:

document.write(["Los nombres de la lista son:<br>"]);

for (let i = 0; i<array.length; i++){
    document.write(array[i]["nombre"] + "<br>");
}

//PRINT NAMES OVER 55YO:

const nuevos_personajes = [];
document.write(["<br> <br>Personas mayores de 55 años:<br>"]);

for (let i = 0; i<array.length; i++){
    if ((array[i])["edad"] > 55){
        nuevos_personajes.push(array[i]["nombre"]);
    }
}
document.write(nuevos_personajes);


/*

6. Tengo un array de objetos, donde cada objeto representa una persona. Mi array es el siguiente:

[
    {"nombre": "Marco Aurelio", "edad": 59, "ocupacion": "emperador"},
    {"nombre": "Ada Lovelace", "edad": 36, "ocupacion": "primera programadora de la historia"},
    {"nombre": "Aragorn, Rey de Gondor", "edad": 210, "ocupacion": "Rey"},
    {"nombre": "Jeff Bezos", "edad": 55, "ocupacion": "Fundador de Amazon"}
]

Haced un bucle que vaya imprimiendo uno a uno los nombres de cada persona en la consola. 

Luego cread un segundo array vacío:

const nuevos_personajes = []

Haced otro bucle que recorra cada persona. Si esa persona tiene menos de 55 años, 
lo pusheamos (recordad la función .push) al nuevo array. 

Finalmente, imprimir el nuevo array en la consola.

*/