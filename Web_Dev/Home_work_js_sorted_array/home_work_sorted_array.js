function sort_arr(x){
    for(var i=0;i<x.length-1;i++){
        var j=i+1; 
        for(;j<x.length;j++){
            if(x[i]>x[j]){
               [x[i],x[j]]=[x[j],x[i]]
            }
        }
    }
    return x
}   

var arr=[-3,8,7,6,5,-4,2,1];
console.log(sort_arr(arr));