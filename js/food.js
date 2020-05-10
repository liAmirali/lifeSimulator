function eatFood() {
    for (var personId = 0; personId < peopleC; personId++) {
        if (world[personId].alive) {
            if (world[personId].food >= world[personId].gluttony * 100) {
                world[personId].food -= world[personId].gluttony * 100;
            }
            else{
                buyFood(personId);
            }
        }
        else{ continue; }
    }
}

function buyFood(personId) {
    let foodAmount = world[personId].gluttony * 100;
    if (world[personId].money >= foodAmount * foodPrice) {
        world[personId].money -= foodAmount * foodPrice;
        world[personId].food += foodAmount;
    }
    else {
        let helpedAmount = askNeighbor(personId, 'food', foodAmount);
        if (helpedAmount === 0) {
            die(personId, 'starvation');
        }
        else{
            world[personId].food += helpedAmount;
        }
    }
}
