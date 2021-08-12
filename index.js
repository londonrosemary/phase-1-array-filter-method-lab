// Code your solution here
function findMatching(nameArr, driverName) {
    return nameArr.filter(sameNames => driverName.toLowerCase() === sameNames.toLowerCase());
}

function fuzzyMatch(nameArr, testString) {
    return nameArr.filter( match => match.toLowerCase().indexOf(testString.toLowerCase()) === 0);
}

function matchName(dataStructure, testName) {
    return dataStructure.filter( matchingObj => matchingObj.name === testName);
}