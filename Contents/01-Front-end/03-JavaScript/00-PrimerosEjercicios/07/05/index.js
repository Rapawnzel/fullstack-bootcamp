let letras = [];
const string = "pizarra";

//METHOD 1

for (let i = 0; i <= string.length - 1 ; i++){
        if (i%2 == 0){
            letras.push(string[i]);
        }
}
document.write("Letras con posición par: " + letras);


document.write("<br><br> _________________________________________ <br><br>");

//METHOD2

let i = 0;
letras = [];

for (let letra of string){
    if (i%2 == 0){
        letras.push(string[i]);
    }
    i++;
}
document.write("Letras con posición par: " + letras);
