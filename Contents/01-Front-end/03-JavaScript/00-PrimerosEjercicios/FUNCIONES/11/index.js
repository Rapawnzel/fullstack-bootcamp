function newstr (s){
    let aux =[];
    
    for (let i = s.length-3; i < s.length ; i++){
        aux = aux + s[i];
    }
    s = aux + s + aux;

    document.write(s);

    return false;
}


let str = prompt(`Text?`);

newstr(str);


/*

11.- Write a JavaScript function to create a new string from a given string taking the last 3 characters 
and added at both the front and back. The string length must be 3 or more.

*/