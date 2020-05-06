function fillRandomProperties(){
    for (var i = 0; i < peopleC; i++) {
        for (var property in world[i]) {
            if (world[i][property] === 'random') {
                world[i][property] = randomDecimal(10);
            }
        }
    }
    return world;
}
// Selects a random guy
function findRandomGuy(personHimself){
    let randomGuyN = randomInt(0, peopleC);
    if(randomGuyN === personHimself){
        findRandomGuy(personHimself);
    }
    return randomGuyN;
}
// This function gives a random integer between min(included) and max(excluded)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// This function gives a random decimal between 1.0... and 9.9...
// decimals parameter determines the number of digits after decimal point
// NOTE: 10 means 1 digit after it, 100 means 2 digts, 1000 means 3 digits and so on.
function randomDecimal(decimals){
    return Math.floor(Math.random() * (10 * decimals - 1 * decimals) + 1 * decimals) / (1 * decimals);
}
