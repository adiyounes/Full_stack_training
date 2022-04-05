/*var a="younes";
var b="younot";

function longPre(a,b){
    let pre="";
    var i=0;
    while(i<a.length && i<b.length && a[i]==b[i]){
        pre+=a[i];
        i++;
    }
    return pre;
}

console.log(longPre(a,b));*/
function poly(x,y){
    var text=""+x;
    var text1=""+y;
    var p=true;
    if (text.length != text1.length){
        return false;
    }else{
        var mid= text.length;
        var i=0;
        while(p==true && i<mid){
            if(text[i]==text1[text.length-1-i]){
                i++
            }else{
                p=false;
            }
        }
        return p;
    }
}