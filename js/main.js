let world = [];
let peopleC = 10;
let person = {
    id: -1,
    gender: 'random',
    attraction: 'random',
    generousness: 'random',
    food: 50,
    hunger: 50,
    money: 10
};
for (var i = 0; i < peopleC; i++) {
    world.push(Object.assign({}, person));
    world[i].id = i;
}
function nextDay(){
    //buyFood();
    //eatFood();
    payMoneyToEachOther();
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
// This function's random number excludes max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
