function findbinary(decimal,result,i) {
    if (decimal==0) {
        return result;
    }
    result= (decimal % 2)*i + result;
    return findbinary(Math.floor(decimal / 2),result,i*10);
}
function sumall(X){
    if (X<=1) {
        return X;
    }

    return X+sumall(X-1);
}

function fib(X) {
    if (X==0 || X==1) {
        return X;
    }

    return fib(X-1)+fib(X-2);
}

for(let i=0;i<8;i++){
    console.log(fib(i)+",");
}