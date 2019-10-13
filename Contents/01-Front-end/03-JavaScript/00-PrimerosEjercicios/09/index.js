let pal1 = prompt("Primera palabra?");
let palAux = [];
let j = 0;
let control = 0;


for (let i = pal1.length-1; i >= 0; i--){
    palAux[j] = pal1[i];
    j++;
}

for (let i = 1; i <= pal1.length; i++){
    if(palAux[i] == pal1[i]){
        control++;
    };
}

if (control == pal1.length){
    document.write("${pal1}<br>es un palíndromo");
}
else{
    document.write("${pal1}<br>no es un palíndromo");
}



/*Corrección:

let pal1 = prompt("Primera palabra?");
let palindromo = true;

for( let i = 0; i < pal1.length; i++){
    if(pal1[i] != pal1(pal1.length -1) - i){
        palindromo = false;
    }
}
if (palindromo){
    document.write("${pal1}<br>es un palíndromo");
}
else{
    document.write("${pal1}<br>no es un palíndromo");
};*/