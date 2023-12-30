const removeFromArray = function(arr, ...arg) {
    let newArr = [];
    label : for(let i=0; i<arr.length; i++){
        for(let j=0; j<arg.length; j++){
            if(arr[i] === arg[j]){
                continue label;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
