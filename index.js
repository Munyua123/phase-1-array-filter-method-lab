// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
 if (drivers === name) {
    return `${name}`
 }
return drivers.filter((array) => 
array.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
return drivers.filter((array) => array.startsWith(letters))
}

function matchName(drivers, name) {
    return drivers.filter((array) => 
        array.name === name
    )
}

