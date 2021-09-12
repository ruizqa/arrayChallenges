function alwaysHungry(arr) {
    let result = "";

    for (i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            result += "yummy "            
        }

    }

    if (result == ""){

        result = "I'm hungry"}

    console.log(result)

    }

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"