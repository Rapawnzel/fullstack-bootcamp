

function divide(n){
    function calculaNeg(m){
        return m*-1
    }
    let n2 = calculaNeg(n);
    return n2/100;
}

let num = prompt ("num?");

num = divide(num);

/*

n/100?

*/