# All food related functions are here

from main import *
import neighbor

def buy(wid):
    print("Person #" +str(wid)+ ": wants to buy food")
    # Amount of food the person needs to survive the day
    foodNeeded = world[wid].gluttony
    # Checks if the person has enough money to buy food
    if world[wid].money >= foodNeeded * foodPrice:
        world[wid].money -= foodNeeded * foodPrice
        world[wid].food += foodNeeded
        print("Person #" +str(wid)+ ": could buy " +str(foodNeeded)+ " food")
        return True
    else:
        print("Person #" +str(wid)+ ": could NOT buy " +str(foodNeeded)+ " food")
        return False

def eat(wid):
    foodNeeded = world[wid].gluttony
    if world[wid].food >= foodNeeded:
        world[wid].food -= foodNeeded
        print("Person #" +str(wid)+ ": ate " +str(foodNeeded)+ " food")
        return True
    else:
        if buy(wid):
            return True
        elif neighbor.ask(wid, 'food', foodNeeded):
            # The condition above will either be False or a number
            # ( We know that a number has a Tuthly value ;) )
            # If the neighbor HELPED
            print("Person #" +str(wid)+ ": ASKS neighbor for " +str(foodNeeded)+ " food")
            world[wid].food += helpedAmount
            print("Person #" +str(wid)+ ": neighbor HELPED for " +str(foodNeeded)+ " food")
            return True
        else:
            print("Person #" +str(wid)+ ": neighbor dwid NOT help for " +str(foodNeeded)+ " food")
            return False
