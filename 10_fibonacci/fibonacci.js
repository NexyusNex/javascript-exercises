const fibonacci = function(num) {
    if(num<1) return 'OOPS';
    if(num===0) return 0;
    Number(num);
    var temp1=0, temp2=1, sum=1;
    for(var i=1;i<num;i++){
        sum=temp1 + temp2;
        temp1 = temp2;
        temp2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
