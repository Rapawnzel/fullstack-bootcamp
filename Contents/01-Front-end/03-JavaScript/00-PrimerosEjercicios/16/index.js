var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let obj = {};

let most;
let least;
let freq = 0;

for (let element of arr1) {
    if(obj[element] === undefined){
        obj[element] = 1;
    }
    else{
        obj[element] = obj[element] + 1;
    }
}

for (let item in obj){
    if (obj[item] > freq){
        freq = obj[item];
        most = {};
        most[item] = obj[item];
    }
}

for (let item in obj){
    if (obj[item] < freq){
        freq = obj[item];
        least = {};
        least[item] = obj[item];
    }
}

/*

3. Write a JavaScript program to find the MOST or the LEAST frequent item of an array,
depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

*/