let num1 = prompt("Primer número?");
let num2 = prompt("Segundo número?");

if (parseInt(num1) > parseInt(num2)){
    document.write (num1 + " es mayor que " + num2);
}
else if (parseInt(num2) > parseInt(num1)){
    document.write (num2 + " es mayor que " + num1);
}
else{
    document.write (num1 + " y " + num2 + " son iguales");
}