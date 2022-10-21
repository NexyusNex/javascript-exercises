let string = 'boy';
const reverseString = function(string) {
    let result = '';
    for(let i = string.length;i>0;i--){
        result = result + string.charAt(string.length-1);
        string = string.slice(0,-1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
