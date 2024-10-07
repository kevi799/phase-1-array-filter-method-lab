// Code your solution here

//function to return the matching list of drivers
function findMatching(drivers, string) {
    return drivers.filter(function(matchList) {
        return matchList.toLowerCase() === string.toLowerCase();
    })
}

//function to return all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, string) {
    return drivers.filter(function(firstLetters) {
        return firstLetters.slice(0, string.length) === string;
    })
}
//function to return each element whose name property matches the provided string argument
function matchName(drivers, string) {
    const driver = [
        {
        "hometown": "",
        "name": ""
    }
];
    return drivers.filter(function(driver){
        return driver.name === string;
    })
}
