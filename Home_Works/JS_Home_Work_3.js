//Exercice1
function equal(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = obj1[key];
      const val2 = obj2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && equal(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
    return true;
  }
  function isObject(object) {
    return object != null && typeof object === 'object';
  }
  //try it
  var a={
    x:2,
    y:{
        t:2
    }
  }
  var b={
      x:2,
      y:{
          r:2
      }
  }
console.log(equal(a,b));
//Exercice 2
function difference(arr1, arr2) {
    var array = [];
    var t = 0;
    var dontexist = true;
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (array[k] != arr1[i]) {
                k++;
            } else {
                dontexist = false;
            }
        }
        if (dontexist) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    array[t] = arr1[i].toString();
                    t++; j = arr2.length;
                }
            }
        }
    }
    return array;
}



//try it
var array1 = [0, 3, 5, 2, 7, 6, 0, 8, 21, 7, 3],
    array2 = [2, 4, 6, 7, 8, 0];
console.log(difference(array1, array2));