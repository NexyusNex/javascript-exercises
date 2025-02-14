const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson)=>{
        oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? oldest : currentPerson;
    })
};

function getAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death-birth;

}

// Do not edit below this line
module.exports = findTheOldest;
