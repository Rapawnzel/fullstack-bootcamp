var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let aux = [];

for (i = 0; i < arr1.length; i++){
    let flag = false;
    let j = 0;
    while( flag == false && j < aux.length ){
        if (arr1[i] == aux[j]){
            aux[j+1]++;
            let flag = true;
        }
        else{
            aux.push(arr[1]);
            aux.push("1");
            j++;
        }
    }
}

document.write(aux);

/*

3. Write a JavaScript program to find the MOST or the LEAST frequent item of an array,
depending on a variable type ("most" or "least").
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

*/