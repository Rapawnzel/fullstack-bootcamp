//let cesar = prompt("Cuántas posiciones?")
let palabra = prompt("Palabra?");
let abc = "abcdefghijklmnñopqrstuvwxyz";
let result = "";

for (let i = 0; i<palabra.length; i++){
    for (let j = 0; j<abc.length; j++){
        if(palabra[i] == abc[j]){
            if(j >= 27-7){
                let resto = 27-j;
                result += abc[7-resto];
            }
            else{
                result += abc[j+7];
            }
        }
    }
}
document.write(result);