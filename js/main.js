let person = {
    id: -1,
    money: 10
};
let peopleC = 9;
let world = [];
for (var i = 0; i < peopleC; i++) {
    world.push(Object.assign({}, person));
}
var autoDay = setInterval(function(){
    payMoney();
}, 100)
function nextDay(){
    payMoney();
}
// Everybody selects a random person and pay money to him
let selectedMan;
function payMoney(){
    for (var i = 0; i < peopleC; i++) {
        world[i].money--;
        selectedMan = findRandomGuy(i);
        world[selectedMan].money++;
    }
    for (var i = 0; i < peopleC; i++) {
        console.log(i + " has " + world[i].money + " dollars")
        if(world[i].money === 0){
            console.log("person number " + i + " died!");
            clearInterval(autoDay);
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
// This function's random number excludes max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
