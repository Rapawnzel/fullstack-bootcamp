let palabra = prompt (`Palabra?`);

document.write("tu palabra es: " + palabra + "<br><br>");

document.write("tu palabra invertida es: ");
for (let i=palabra.length-1; i>=0; i--){
    document.write(palabra[i]);
}