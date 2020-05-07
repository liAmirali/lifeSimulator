function die(personId, cause) {
    console.log(`RIP.. :(. ${personId} died because of ${cause}.`);
    world[personId].alive = false;
}
