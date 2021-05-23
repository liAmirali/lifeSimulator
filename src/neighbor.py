from config import *
import time

def whoIs(wid):
    neighborwid = None
    i = wid + 1
    while True:
        if i == peopleC:
            i = 0
        if world[i].alive:
            neighborwid = i
            break
        else:
            i += 1
    return neighborwid

# Messed up code!
def ask(wid, reason, askedAmount):
    neighborwid = whoIs(wid)
    neighborAsset = None
    if reason == 'food' :
        neighborAsset = world[neighborwid].food
    elif reason == 'money':
        neighborAsset = world[neighborwid].money
    else:
        print("REASON NOT FOUND in neighbor.ask(). --->", reason)

    maxPossibleHelp = world[neighborwid].generosity
    if maxPossibleHelp >= askedAmount and neighborAsset >= askedAmount:
        if reason == 'food' :
            world[neighborwid].food -= askedAmount
        elif reason == 'money':
            world[neighborwid].money -= askedAmount
        return askedAmount
    else:
        return False
