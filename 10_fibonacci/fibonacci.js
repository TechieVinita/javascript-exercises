const fibonacci = function(n) {
    let count = n;
    let a = 0;
    let b = 1;
    if( typeof n !== 'number'){
        count = parseInt(n);
    }

    if( count < 0) return 'OOPS';
    else if( count === 0) return 0;
    else{
        for(let i=2; i<=count; i++){
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

};

// Do not edit below this line
module.exports = fibonacci;
