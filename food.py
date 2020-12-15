# All food related functions are here

from main import *
import neighbor

def eat(wid):
    if world[wid].food >= world[wid].gluttony:
        world[wid].food -= world[wid].gluttony
        return True
    else:
        foodNeeded = world[wid].gluttony - world[wid].food
        if money.buy(wid, 'food', foodNeeded):
            return True
        elif neighbor.ask(wid, 'food', foodNeeded):
            # The condition above will either be False or a number
            # ( We know that a number has a Tuthly value ;) )
            # If the neighbor HELPED
            world[wid].food += neighbor.ask(wid, 'food', foodNeeded)
            print("Person #" +str(wid)+ ": neighbor HELPED for " +str(foodNeeded)+ " food")
            return True
        else:
            # If the neighbor did NOT help
            print("Person #" +str(wid)+ ": neighbor did NOT help for " +str(foodNeeded)+ " food")
            return False
