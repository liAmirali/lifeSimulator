// Everybody selects a random person and pay money to him
function payMoneyToEachOther(){
    for (var personId = 0; personId < peopleC; personId++) {
        world[personId].money *= 1 - world[personId].generousness;
        world[findRandomGuy(personId)].money *= 1 + world[personId].generousness;
    }
    return world
}

function askNeighbour(personId) {
    clearInterval()
    let neighbourId;
    if (personId === peopleC - 1){ neighbourId = 0; }
    else { neighbourId = personId + 1; }
    world[personId].money *= 1 + world[neighbourId].generousness;
    world[neighbourId].money *= 1 - world[neighbourId].generousness;
}
