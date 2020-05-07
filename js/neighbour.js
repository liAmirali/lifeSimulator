function whoIsNeighbour(personId) {
    let neighbourId;
    for (var i = personId + 1; i != personId; i++) {
        if (i >= peopleC - 1) { i = 0; }
        if (world[i].alive) {
            neighbourId = i;
            console.log("person number " + personId + " selected neighbour number " + neighbourId);
            break;
        }
    }
    return neighbourId;
}

function isNeighbourGenerous(personId) {
    let neighbourId = whoIsNeighbour(personId);
    if (world[neighbourId].alive) {
        if (world[neighbourId].generousness < 0.20) { return false; }
        else if (world[neighbourId].generousness < 0.80) {
            if (randomInt(0, 3) === 0) { return false; }
            else { return true; }
        }
        else { return true; }
    }
    else{ return false; }
}

function askNeighbour(personId, reason){
    let neighbourId = whoIsNeighbour(personId);
    if ( isNeighbourGenerous(personId) ) {
        // console.log(`${personId} asked for ${reason}. He got help!`);
        switch (reason) {
            case 'food':
                let foodAmount = world[neighbourId].generousness * world[neighbourId].food;
                world[personId].food += foodAmount;
                world[neighbourId].food -= foodAmount;
                break;
            case 'money':
                let moneyAmount = world[neighbourId].generousness * world[neighbourId].money;
                world[personId].money += moneyAmount;
                world[neighbourId].money -= moneyAmount;
                break;
        }
    }
    else {
        // console.log(`${personId} asked for ${reason}. He did NOT get help!`);
        die(personId, 'starvation');
    }
}
