
function onesOrThrees(a){
    let flag = false;
    for (let i of a){
        if (a[i] == 1 || a[i] == 3){
            flag = true;
            break;
        }
    }
    return flag;
}

let arr = [2, 2, 2, 4, 2];

document.write(onesOrThrees(arr));


/*

8 .-Write a JavaScript function to test if an array of integers of length 20 contains 1 or a 3.

*/