
function CelsiusToFahrenheit(celsius){
    fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

function FahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

function calculaTemperatura (){
    let type = prompt (`Celsius or Farenheit?`);
    let temp = prompt (`Temperatura?`);

    if (type == `C` || type == `c`){
        document.write(`${temp} grados Celsius son ${CelsiusToFahrenheit(temp)} en Farenheit`);
    }
    else if (type == `F` || type == `f`){
        document.write(`${temp} grados Farenheit son ${FahrenheitToCelsius(temp)} en Celsius`);
    }
    else{
        document.write(`No es válido`);
    }
}
calculaTemperatura();

/*

Write a JavaScript function to test if an array of integers of length 20 contains 1 or a 3.


*/