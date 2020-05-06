let world = [];
let peopleC = 100;
let person = {
    attraction: 'random',
    generousness: 'random',
    food: 250,
    gluttony: 'random',
    money: 250,
//    gotHelp: 0,
};
//let gettingHelp_max = 3;
let foodPrice = 1.5;
for (var i = 0; i < peopleC; i++) {
    world.push(Object.assign({}, person));
}
fillRandomProperties();
function nextDay() {
    eatFood();
    payMoneyToEachOther();
    return world;
}
