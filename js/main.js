let world = [];
let peopleC = 100;
let person = {
    attraction: 'random',
    generousness: 'random',
    food: 1000,
    gluttony: 'random',
    money: 1000,
//    gotHelp: 0,
};
//let gettingHelp_max = 3;
let foodPrice = 1.5;
for (var i = 0; i < peopleC; i++) {
    world.push(Object.assign({}, person));
}
fillRandomProperties();
console.log(`gluttony: 0 = ${world[0].gluttony} , 1 = ${world[1].gluttony}`)
console.log(`generousness: 0 = ${world[0].generousness} , 1 = ${world[1].generousness}`)
function nextDay() {
    eatFood();
    payMoneyToEachOther();
    console.log(`Money: 0 = ${world[0].money} , 1 = ${world[1].money}`)
    console.log(`Food: 0 = ${world[0].food} , 1 = ${world[1].food}`)
    return world;
}
var autoDay = setInterval(function (){
    nextDay();
}, 10);
