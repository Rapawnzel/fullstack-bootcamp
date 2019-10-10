const tacos = [" carne", " frijoles", " pimiento verde", " brocoli"]; 5
const sopa = [" fideos", " brocoli", " caldo", " pollo"];3
const pizza = [" masa", " base de tomate", " brocoli", " bacon", " queso"];4
let lista_compra = [];
let maxlength;

//MAXLENGTH OF ARRAYS
if (tacos.length < sopa.length){
    maxlength = sopa.length;
}
else{
    if (tacos.length < pizza.length){
        maxlength = pizza.length;
    }
    else{
        maxlength = tacos.length;
    }
}

//FILL ARRAY
for (i = 0; i < maxlength; i++){
    if ((tacos[i] !== "brocoli") && (i < tacos.length)){
        lista_compra.push(tacos[i]);
    }
    if ((sopa[i] !== "brocoli") && (i < sopa.length)){
        lista_compra.push(sopa[i]);
    }
    if ((pizza[i] !== "brocoli") && (i < pizza.length)){
        lista_compra.push(pizza[i]);
    }
}

//WRITING LIST
for (i = 0; i < lista_compra.length; i++){
    document.write(lista_compra[i] + "<br>");    
}


/*
8. No me gusta el brócoli. 
Tengo unas cuantas listas de ingredientes para recetas que incluyen brócoli entre ellos, por ejemplo:

const tacos = ["carne", "frijoles", "pimiento verde", "brocoli""]
const sopa = ["fideos", "brocoli", "caldo", "pollo"]
const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"]

Finalmente, tengo una lista de la compra donde voy a ir añadiendo los ingredientes que necesito comprar, 
EXCEPTO el brócoli. 

let lista_compra = []

Haced un bucle que recorra el array tacos, 
y en cada iteracción vaya pusheando los ingredientes al array lista_compra 
siempre que dicho ingrediente no sea el "brocoli". 

Luego usad el mismo bucle con los otros 2 arrays. 
Finalmente, imprimid en la consola el array lista_compra después de todo el proceso.
*/