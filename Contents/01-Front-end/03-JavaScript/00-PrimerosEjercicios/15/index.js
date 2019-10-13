let myColors = ["Red", "Green", "White", "Black"];

    document.write(myColors.join(',') + "<br>");
    document.write(myColors.join('.') + "<br>");
    document.write(myColors.join('+') + "<br><br>");

    let aux = myColors.splice(2,1);
    document.write(aux);

/*

1. Write a simple JavaScript program to join all elements of the following array into a string.
Print in three different ways (depending on a variable). You can use the array function "join".
Sample array : myColors = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"


2. Write a JavaScript program to remove an element of the array 
using the array function SPLICE. 
The element to be removed should be stored in a variable.


*/