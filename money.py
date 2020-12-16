from main import *
import neighbor
import randwrld

def buy(wid, what, quantity):
    if what == 'food':
        # Amount of food the person needs to survive the day
        # Checks if the person has enough money to buy food
        if world[wid].money >= quantity * foodPrice:
            world[wid].money -= quantity * foodPrice
            world[wid].food += quantity
            print("Person #" +str(wid)+ ": could buy " +str(quantity)+ " food")
            return True
        else:
            print("Person #" +str(wid)+ ": could NOT buy " +str(quantity)+ " food")
            return False
    else:
        print("UNKOWN THING TO BUY")


# Everybody has to pay money to a random guy! (for no reason :D)
# If someone didn't have the money, he'll be ignored.
def payTax(wid, towho):
    guy = None
    if towho == 'torandom':
        guy = randwrld.randperson(wid)
    elif towho == 'toneighbor':
        guy = neighbor.whoIs(wid)
    else:
        print("UNKNOW PAYMENT DESTIONATION")

    tax = int(world[wid].generosity * taxRate)
    if world[wid].money >= tax:
        world[wid].money -= tax
        world[guy].money += tax
