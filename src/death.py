from config import *

def die(wid, cause):
    print('Person #%s: DIED because of %s.' % (wid, cause))
    world[wid].alive = False

# def checkSurvivor():
#     if countAlive() == 1:
#         survivedGuy = None
#         for i in range(0, poepleC):
#             if world[i].alive:
#             	survivedGuy = i
#             	break
#         print("Person #" + i + " is the only SURVIVOR from this world!!!")
#         return true
#     else:
#         return false
