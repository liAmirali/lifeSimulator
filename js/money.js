// Everybody pays money to their neighbour (for no reason :D)
function payMoneyToEachOther(){
    for (var personId = 0; personId < peopleC; personId++) {
        if (world[personId].money > 1e4) {
            world[whoIsNeighbour(personId)].money += world[personId].money / 2;
            world[personId].money /= 2;
        }
        else{
            world[personId].money *= 1 - world[personId].generousness;
            world[1].money *= 1 + world[personId].generousness;
        }
    }
    return world;
}
