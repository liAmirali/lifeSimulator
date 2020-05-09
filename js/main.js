let world = [];
let day = 0;
let peopleC = 20;
let person = {
    strength: 'random',
    generousness: 'random',
    food: 1000,
    gluttony: 'random',
    money: 1000,
    alive: true,
//    gotHelp: 0,
};
let personality = ['strength', 'generousness', 'gluttony'];
let supply = ['food', 'money'];
//let gettingHelp_max = 3;
let foodPrice = 1.5;
for (var i = 0; i < peopleC; i++) {
    world.push(Object.assign({}, person));
}
fillRandomProperties();
function countAlive() {
    let aliveC = 0;
    for (var i = 0; i < peopleC; i++) {
        if (world[i].alive) { aliveC++; }
    }
    return aliveC;
}
setTimeout(function() {
    createFrontend(peopleC);
}, 500);
function nextDay() {
    eatFood();
    payMoneyToEachOther();
    day++;
    return world;
}
var autoDay = setInterval(function (){
    nextDay();
    refreshStat();
}, 2000);
