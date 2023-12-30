const reverseString = function(str) {
    let newStr = '';
    let len = str.length;
    for(let i=0; i<len; i++){
        newStr += str[len-1-i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
