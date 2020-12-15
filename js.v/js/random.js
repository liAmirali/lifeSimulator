function fillRandomProperties(){
    for (var personId = 0; personId < peopleC; personId++) {
        for (var property in world[personId]) {
            if (world[personId][property] === 'random') {
                world[personId][property] = randomDecimal(100);
            }
        }
    }
    return world;
}
// Selects a random guy
let randomGuyN;
function findRandomGuy(personHimself){
    randomGuyN = randomInt(0, peopleC);
    if(randomGuyN === personHimself || !world[randomGuyN].alive){
        findRandomGuy(personHimself);
    }
    return randomGuyN;
}
// This function gives a random integer between min(included) and max(excluded)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// This function gives a random decimal between 0.00... and 9.99...
// decimals parameter determines the number of digits after decimal point
// NOTE: 10 means 1 digit after it, 100 means 2 digts, 1000 means 3 digits and so on.
function randomDecimal(decimals){
    return Math.floor(Math.random() * decimals) / decimals;
}
