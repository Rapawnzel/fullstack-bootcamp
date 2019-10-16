
function drink(hours){
    let water = Math.floor(hours*0.5);
    return water;
}    

function prtScn(water){
    document.getElementById("result").innerHTML = water + ` litros`;
    return true;
}

function main(){
        let time = document.getElementById("pedirNumero").value;
        let litres = drink(time);
        prtScn(litres);
        return false;
}

/*

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
Write a function that accepts the time in hours as input and returns the number of litres Nathan will drink.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

*/