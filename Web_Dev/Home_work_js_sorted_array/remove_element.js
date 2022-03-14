//remove a specific element form an array;
function remove(i,arr){
    for(;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.length--;
}
var x=[1,2,4,5,6,7,8];
remove(7,x);
console.log(x);
//remove duplicate elements from a sorted array;
remove_dup=(arr)=>{
    var i=0;
    for(;i<arr.length;i++){
        var j=i+1;
        if(arr[i]==arr[j]){
            while(arr[i]==arr[j] && j<arr.length){
                remove(j,arr);
            }
        }
    }
}

var y=[1,1,1,1,2,4,4,4,4,5,6,7,7,8,8]
remove_dup(y);
console.log(y);