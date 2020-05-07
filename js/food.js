function eatFood() {
    for (var personId = 0; personId < peopleC; personId++) {
        if (world[personId].food < 10) {
            buyFood(personId);
        }
        else{
            world[personId].food *= 1 - world[personId].gluttony;
        }
    }
    return world;
}

function buyFood(personId) {
    console.log("******** " + personId + " needs to buy food. Money: " + world[personId].money);
    let foodAmount = world[personId].gluttony * 100;
    console.log(`******** ${personId} wanna buy ` + world[personId].gluttony * 100);
    if (world[personId].money > foodAmount * foodPrice) {
        console.log(`******** ${personId} BOUGHT IT.`)
        world[personId].food += foodAmount;
        world[personId].money -= foodAmount * foodPrice;
    }
    else {
        console.log(`******** ${personId} COULDN'T BUY FOOD.`);
        // askNeighbour(personId);
        clearInterval(autoDay);
    }
}
