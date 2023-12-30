const sumAll = function(start, end) {
    let sum = 0;
    if(start >= 0 && end >= 0 && Number.isInteger(start) && Number.isInteger(end)){
        if(start <= end){
            for(let i=start; i<=end; i++){
                sum += i;
            }
        }
        else{
            for(let i=end; i<=start; i++){
                sum += i;
            }
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
};

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
