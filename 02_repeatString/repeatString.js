const repeatString = function(str, num) {
    let result = '';
    if(num > 0){
        for(let i=0; i<num; i++){
            result+=str;
        }
        return result;
    }
    else if(num === 0){
        return result;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
