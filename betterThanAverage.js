function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum+= arr[i];
        

    }


    var count = 0;

    for(i=0;i<arr.length;i++){
        if(arr[i]>sum/arr.length){

            count+=1;
        }
        

    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
