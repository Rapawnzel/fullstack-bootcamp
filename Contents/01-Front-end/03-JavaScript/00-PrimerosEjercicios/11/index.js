let ex = prompt(`Escribe "ex1" si quieres ver los alimentos con <300 calorias o "ex2" si quieres saber cuál es el alimento más calórico`);

const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269 
}
let aux = 0;
let alimento = "";


switch (ex){

    case "ex1":
        document.write("Alimentos con menos de 300Kcal: <br>");
        for (let i = 0; i<Object.keys(calorias).length; i++){
            let clave = Object.keys(calorias)[i];
            if (calorias[clave] < 300){
                document.write(clave + "<br>");
            }
        }
    break;

    case "ex2":
        for (let i = 0; i<=Object.keys(calorias).length; i++){
            let clave = Object.keys(calorias)[i];
            if (calorias[clave] > aux){
                aux = calorias[clave];
                alimento = Object.keys(calorias)[i];
            }
        }
        document.write("El alimento más calórico de la lista es:<br>" + alimento);
    break;

    default:
        document.write("No es una opción válida");
}

/*

1. Tengo un objeto con el nombre de algunos alimentos 
como claves y su número de calorías como valores:
const calorias = {
    "ensalada":152,
    "hamburguesa":295,
    "patatas fritas":312,
    "frankfurt": 269 
}

Haced un bucle que imprima en la consola aquellos alimentos con menos de 300 calorías.



2. Usando el mismo objeto del ejercicio anterior, hacer otro bucle que imprima sólo el alimento con más calorías de todos.



*/