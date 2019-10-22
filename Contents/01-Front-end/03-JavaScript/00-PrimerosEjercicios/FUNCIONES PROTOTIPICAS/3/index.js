const frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."

let palabra = prompt("Introduce una palabra");

let initpos = frase.indexOf(palabra);
if(initpos !== -1){
    document.write(palabra);
}
else{
    document.write("Esta palabra no existe");
}

/*

3.- Tenemos el siguiente string:

const frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, 
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."

Mediante un prompt, preguntad al usuario que escriba una palabra. 
Buscad mediante javascript dicha palabra en el string anterior, 
y guardad en una variable la posición del string en la que se encuentra la palabra. 
Inyectadla con javascript en el DOM.


*/