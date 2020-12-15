function whoIsNeighbor(personId) {
    let neighborId;
    for (var i = personId + 1; i != personId; i++) {
        if (i >= peopleC - 1) { i = 0; }
        if (world[i].alive) {
            neighborId = i;
            break;
        }
    }
    return neighborId;
}

function askNeighbor(personId, reason, askedAmount) {
    let neighborId = whoIsNeighbor(personId);
    let maxPossibleHelp = world[neighborId].generousness * 100;
    if (maxPossibleHelp >= askedAmount) {
        world[neighborId][reason] -= askedAmount;
        return askedAmount;
    }
    else{
        return 0;
    }
}
