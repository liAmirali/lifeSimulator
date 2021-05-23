# All food related functions are here

from config import *
import neighbor
import money

def eat(wid):
    if world[wid].food >= world[wid].gluttony:
        world[wid].food -= world[wid].gluttony
        return True
    else:
        foodNeeded = world[wid].gluttony - world[wid].food
        if money.buy(wid, 'food', foodNeeded):
            eat(wid)
            return True
        elif neighbor.ask(wid, 'food', foodNeeded):
            # The condition above will either be False or a number
            # ( We know that a number has a Tuthly value ;) )
            # If the neighbor HELPED

            # The neighbor.ask() function decreases the neighbor food.
            # I run that function twice in here,
            # so i will add the foodNeeded once to the neighbor
            # so the food won't be decreased from the neighbor twice
            neighborwid = neighbor.whoIs(wid)
            world[neighborwid].food += foodNeeded

            world[wid].food += neighbor.ask(wid, 'food', foodNeeded)
            print("Person #" +str(wid)+ ": neighbor HELPED for " +str(foodNeeded)+ " food")
            eat(wid)
            return True
        else:
            # If the neighbor did NOT help
            print("Person #" +str(wid)+ ": neighbor did NOT help for " +str(foodNeeded)+ " food")
            return False
