# Run this code to start your world, your own!
import sys

sys.path.append("./conf")
from config import *

sys.path.append("./src")
import death
import food
import money
import saveData

from random import randint
from time import sleep

# And the creation begins..
for wid in range(0, peopleC):
    newborn = person(wid, randint(1, 99), randint(1, 99))
    world.append(newborn)

sayConfig()

def countAlive():
    aliveC = 0
    for wid in range(0, peopleC):
        if world[wid].alive:
            aliveC += 1
    return aliveC;

def nextDay():
    global day
    print("*** DAY " + str(day) + " ***")

    ### 1) Every alive person pays tax

    # tax_amount = current_money * taxRate
    # taxRate is a number between 0 and 1 exlusive,
    # so they always have the money

    for wid in range(0, peopleC):
        if world[wid].alive:
            money.payTax(wid, dailyTaxMethod)

    ### 2) Every alive person has to eat

    # In each meal, they have to eat as much as what their gluttony is.
    # If their current food stock is less than that, they will try to buy the needed food
    # If they couldn't buy food (they didn't have enough money), they will ask for food from their naighbor.
    # If the neighbor gave them food, and they could feed themselevs ke hichi.
    # If not death.die will be runned
    for wid in range(0, peopleC):
        if world[wid].alive:
            if food.eat(wid) == True:
                print("person #"+str(wid)+": could EAT food")
            else:
                print("person #%s: could NOT EAT food on day %s" % (wid, day))
                death.die(wid, 'starvation')

    day += 1
    print(world)
    return world

while countAlive() > 1:
    nextDay()
    sleep(dayLength)

for person in world:
    if person.alive:
        survivor_wid = person.wid
        print("#### PERSON #%s GUY SURVIVED ####" % (person.wid))
print(world)

saveData.saveSurvivor(survivor_wid)
