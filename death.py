from main import *

def die(wid, cause):
    print('Person #%s: DIED because of %s.' % (wid, cause))
    world[wid].alive = False

# def checkSurvivor() {
#     if countAlive() == 1
#         let survivedGuy;
#         for (var i = 0; i < peopleC; i++) {
#             if (world[i].alive) { survivedGuy = i; break;}
#         }
#         alert("Person \#" + i + " is the only SURVIVOR from this world!!!");
#         return true;
#     }
#     else {
#         return false;
#     }
# }
