let world = [];
let peopleC = 8;
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
setTimeout(function() {
    createCard(peopleC);
}, 500);
function nextDay() {
    let aliveCount;
    for (var i = 0; i < peopleC; i++) {
        if (world[i].alive) { aliveCount++; }
    }
    if (aliveCount === 1){
        console.log("FOLANI WON.");
        clearInterval(autoDay);
    }
    else {
        eatFood();
        payMoneyToEachOther();
    }
    return world;
}
var autoDay = setInterval(function (){
    // refreshCard();
    // nextDay();
}, 2000);
