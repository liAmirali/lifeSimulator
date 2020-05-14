function die(personId, cause) {
    console.log(`Person \#${personId} DIED because of ${cause}.`);
    world[personId].alive = false;
}

function checkSurvivor() {
    if (countAlive() === 1) {
        refreshStat();
        let survivedGuy;
        for (var i = 0; i < peopleC; i++) {
            if (world[i].alive) { survivedGuy = i; break;}
        }
        alert("Person \#" + i + " is the only SURVIVOR from this world!!!");
        return true;
    }
    else {
        return false;
    }
}
