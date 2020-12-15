# Run this code to start your world, your own!

from random import randint
from time import sleep
import death
import food
from main import *

# And the creation begins..
for wid in range(0, peopleC):
    newborn = person(randint(1, 99), randint(1, 99))
    world.append(newborn)
print(world)

def countAlive():
    aliveC = 0
    for wid in range(0, peopleC):
        if world[wid].alive:
            aliveC += 1
    return aliveC;

def nextDay():
    global day

    for wid in range(0, peopleC):
        if world[wid].alive:
            if food.eat(wid) == True:
                print("person #"+str(wid)+": could EAT food")
            else:
                print("person #%s: could NOT EAT food on day %s" % (wid, day))
                death.die(wid, 'starvation')
        else:
            print("Person #"+str(wid)+": was dead already")

    #payMoneyToEachOther()
    day += 1
    print("day " + str(day), world)
    return world

while countAlive() > 1:
    nextDay()
    sleep(1)
