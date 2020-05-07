let world = [];
let peopleC = 10;
let person = {
    strength: 'random',
    generousness: 'random',
    food: 1000,
    gluttony: 'random',
    money: 1000,
    alive: true,
//    gotHelp: 0,
};
//let gettingHelp_max = 3;
let foodPrice = 1.5;
for (var i = 0; i < peopleC; i++) {
    world.push(Object.assign({}, person));
}
fillRandomProperties();
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
// var autoDay = setInterval(function (){
//     nextDay();
// }, 1000);
