function reverse(arr) {
    let newarr=[];
    
    for(i=arr.length-1;i>=0;i--){
        newarr.push(arr[i]);
        

    }

    return newarr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]