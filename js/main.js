// The world is actually an array
let world = [];

// Days passed
let day = 0;

// Number of people who will born at first
let peopleC = 30;

// Human default properties and supplies
// 'random' means that the peroperty value will be filled in random.js
let person = {
    strength: 'random',
    generousness: 'random',
    food: 100,
    gluttony: 'random',
    money: 1000,
    alive: true,
};

// Which properties in person object are about personality or supplis?
let personality = ['strength', 'generousness', 'gluttony'];
let supply = ['food', 'money'];

// How much should each person pay for 1 food?
let foodPrice = 2;

// Sending the humans to the world
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
    if (countAlive() === 1) {
        refreshStat();
        clearInterval(autoDay);
        let survivedGuy;
        for (var i = 0; i < peopleC; i++) {
            if (world[i].alive) { survivedGuy = i; break;}
        }
        alert("Person \#" + i + " survived!!!");
    }
    nextDay();
    refreshStat();
}, 2000);
