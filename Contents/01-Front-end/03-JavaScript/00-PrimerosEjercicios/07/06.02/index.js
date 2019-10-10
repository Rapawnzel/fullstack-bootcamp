const productos = ["naranjas", "leche", "cereales", "deportivo Ferrari", "sangre de unicornio"];
const precios = ["2€", "1,2€", "4€", "1.000.000€", "0,5€"];
let producto = prompt (`Producto?`);
let control = 0;

for(let i = 0; i < productos.length; i++){
    switch (productos[i]){
        case producto:
            document.write("El precio de " + productos[i] + " es de " + precios[i]);
            control = 1;
    }
}

if (control == 0){
    document.write("Este producto no existe en el inventario");
}


/*
6. Tengo una lista de productos y de precios de la tienda de la esquina:

naranjas - 2€
leche - 1,2 €
cereales - 4€
deportivo Ferrari - 1.000.000 €
sangre de unicornio - 0,5 €

Elegid un producto cualquiera, guardadlo en una variable llamada “producto” como un string. 
Con un switch/case, haced que se imprima en la consola el precio del producto. 

Ejemplo: 

const producto = “cereales”;
//tu codigo aquí
//resultado: en la terminal debería aparecer 4€*/