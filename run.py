# Run this code to start your world, your own!

from random import randint
from time import sleep
from main import *
import death
import food
import money

# And the creation begins..
for wid in range(0, peopleC):
    newborn = person(wid, randint(1, 99), randint(1, 99))
    world.append(newborn)

def countAlive():
    aliveC = 0
    for wid in range(0, peopleC):
        if world[wid].alive:
            aliveC += 1
    return aliveC;

def nextDay():
    global day
    print("*** DAY " + str(day) + " ***")

    for wid in range(0, peopleC):
        if world[wid].alive:
            money.payTax(wid, dailyTaxMethod)
            if food.eat(wid) == True:
                print("person #"+str(wid)+": could EAT food")
            else:
                print("person #%s: could NOT EAT food on day %s" % (wid, day))
                death.die(wid, 'starvation')
        else:
            print("Person #"+str(wid)+": was dead already")

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
f = open('survivors_data.txt', 'a')
f.write(str(world[survivor_wid].generosity)+","+str(world[survivor_wid].gluttony)+";\n")
f.close()
