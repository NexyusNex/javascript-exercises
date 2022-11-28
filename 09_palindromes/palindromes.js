const palindromes = function (string) {
    var temp = string;
    var array=[];

    for(var i=string.length-1; i>=0;i--){
        array[i]=temp.slice(-1);
        temp=temp.slice(0,-1)
    }

    var comparison='';
    for(var i = 0; i<array.length;i++){
        if(/[a-zA-Z]/.test(array[i])!=true) continue;
        comparison+=array[i];
    }
    
    var reverse = comparison.split("").reverse().join("");
    return reverse.toLowerCase()==comparison.toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
