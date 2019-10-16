
 
function listaClientes (){
    let cli;

    imprimeCliente (cli);
    return false;
} 


function getClientes (){
    let clientes = [{name:`Edward Norton`, amountPurchased: 28.14, age: 65, city:`Barcelona`},
                {name:`Charles Darwin`, amountPurchased: 324.34, age: 42, city:`Madrid`},
                {name:`Steven Tyler`, amountPurchased: 124.94, age: 77, city:`Barcelona`},
                {name:`Michael J`, amountPurchased: 624.74, age: 59, city:`Madrid`},
                {name:`Satoshi`, amountPurchased: 734.14, age: 33, city:`Barcelona`},
                {name:`Bruce Dickinson`, amountPurchased: 424.24, age: 66, city:`Valencia`}
                ]
    return clientes;
} 

function getInfoCliente (objCli){
    let stringCliente = "";
    let j = 0;
    for (let i in objCli){
        stringCliente += Object.keys(objCli)[j] + `: `;
        stringCliente += objCli[`${i}`] + `<br>`;
        j++;
    }
    return stringCliente;
}

    
function imprimeCliente (cliente){
    document.write(getInfoCliente (getClientes(cliente)[0]));
    return false;
}

listaClientes();



/*

13.-  Crear un programa que lista un array de objetos de clientes, 
construindo con las siguientes funciones:

function listaClientes
function getClientes
           devuelve un array de objetos de clientes :
        [   {name:`Edward Norton`,amountPurchased: 28.14, age: 65, city:`Barcelona`},
        {name:`Charles Darwin`,amountPurchased: 324.34, age: 42, city:`Madrid`},
        {name:`Steven Tyler`,amountPurchased: 124.94, age: 77, city:`Barcelona`},
        {name:`Michael J`,amountPurchased: 624.74, age: 59, city:`Madrid`},
        {name:`Satoshi`,amountPurchased: 734.14, age: 33, city:`Barcelona`},
        {name:`Bruce Dickinson`,amountPurchased: 424.24, age: 66, city:`Valencia`}
        ]
function getInfoCliente
        recibe un objeto de cliente y devuelve una string formateada con los datos del cliente que quieres enseñar del cliente. Si el amountPurchased de cada cliente es menor que 200, no se debe incluir en el resultado
function imprimeCliente
        recibe una string formateada y escribe en la pantalla, si el cliente tiene más de 35 años, debe aparecer en azul, sino, en rojo. Si el cliente es de Barcelona, siempre tiene que aparecer en verde.


*/