// Everybody selects a random person and pay money to him
let selectedMan;
function payMoneyToEachOther(){
    for (var i = 0; i < peopleC; i++) {
        world[i].money--;
        selectedMan = findRandomGuy(i);
        world[selectedMan].money++;
    }
    for (var i = 0; i < peopleC; i++) {
        console.log(i + " has " + world[i].money + " dollars")
        if(world[i].money === 0){
            console.log("person number " + i + " died!");
        }
    }
    return world;
}
