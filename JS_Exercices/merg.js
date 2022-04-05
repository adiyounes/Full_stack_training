function mergesort(array,start,end) {
    if(start<end){
        let mid = (start + end)/2;
        mergesort(array,start,mid);
        mergesort(array,mid+1,end);
        sort(array,start,mid,end);
    }
}

function sort(array,start,mid,end){
    let temp=[];
    let i=start; let j=mid+1; let k=0;

    while (i<=mid && j<=end) {
        if(array[i]<=array[j]){
            temp.push(array[i++]);
        }else{
            temp.push(array[j++]);
        }
    }
    if(i>mid){
        while(j<=end){
            temp.push(array[j++]);
        }
    }else{
        while(i<=mid){
            temp.push(array[i++]);
        }
    }

    for(let l=start;l<=end;l++){
        array[l]=temp[l-start];
    }
    }

var array=[3,7,-3,0,19,1,28,-7,19,02,-12,34,2];
mergesort(array,0,12);
 console.log(array[0]);