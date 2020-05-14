// Everybody pays tax to a random guy! (for no reason :D) Is it socialism or what? :DD
function payMoneyToEachOther(){
    for (var personId = 0; personId < peopleC; personId++) {
        if (world[personId].alive) {
            let guy = findRandomGuy(personId);
            let tax = world[personId].generousness * 100;
            if (world[personId].money >= tax) {
                world[personId].money -= tax;
                world[guy].money += tax;
            }
            else{
                let helpedAmount = askNeighbor(personId, 'money', tax);
                if (helpedAmount === 0) {
                    console.log("Neighbor \#" + whoIsNeighbor(personId) + " DIDN'T HELP person \#" + personId);
                    die(personId, 'poverty');
                }
                else{
                    // These two following lines neutralizes each other (because helpedAmount = tax),
                    // world[personId].money += helpedAmount;
                    // world[personId].money -= tax;
                    world[guy].money += tax;
                    console.log("Neighbor \#" + whoIsNeighbor(personId) + " GAVE $" + tax + " to person \#" + personId);
                }
            }
        }
        else { continue; }
    }
}
