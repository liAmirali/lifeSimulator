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
    for wid in range(0, peopleC):
        if world[wid].alive:
            money.payTax(wid, dailyTaxMethod)

    ### 2) Every alive person has to eat
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
