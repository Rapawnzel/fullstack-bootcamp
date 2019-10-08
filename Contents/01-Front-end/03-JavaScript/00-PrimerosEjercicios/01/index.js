let type = prompt (`Celsius or Farenheit?`);
let temp1 = prompt (`Temperatura?`);
let temp2;


if (type==`Celsius`){
    temp2=temp1*1.8+32;
    document.write (`${temp1} grados Celsius son ${temp2} en Farenheit`);
}
else {
    if(type==`Farenheit`){
        temp2=(temp1-32)/1.8;
         document.write (`${temp1} grados Farenheit son ${temp2} en Celcius`);
    }
    else{
        document.write (`no has introducido una opción válida`);
    }
}