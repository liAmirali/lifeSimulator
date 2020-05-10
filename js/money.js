// Everybody pays tax to a random guy! (for no reason :D)
function payMoneyToEachOther(){
    for (var personId = 0; personId < peopleC; personId++) {
        if (world[personId].alive) {
            let tax = world[personId].generousness * 100;
            if (world[personId].money >= tax) {
                world[personId].money -= tax;
                world[findRandomGuy(personId)].money += tax;
            }
            else{
                let helpedAmount = askNeighbor(personId, 'money', tax);
                if (helpedAmount === 0) {
                    die(personId, 'poverty');
                }
                else{
                    // These two following lines neutralizes each other, so it's better to comment them
                    // world[personId].money += helpedAmount;
                    // world[personId].money -= tax;
                    world[findRandomGuy(personId)].money += tax;
                }
            }
        }
        else { continue; }
    }
}
