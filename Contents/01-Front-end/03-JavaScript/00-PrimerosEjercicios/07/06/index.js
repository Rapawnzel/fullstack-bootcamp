let producto = "naranjas - 2€";
let i = 0;

for (let prod of producto){
    switch (prod){
        case '-':
                document.write(producto[i+2] + producto[i+3]);
        default:
            i++;
    }
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