from main import *

def whoIs(wid):
    neighborwid = None
    i = wid + 1
    while True:
        if i >= peopleC - 1:
            i = 0
        if world[i].alive:
            neighborwid = i
            break
        else:
            i += 1
    return neighborwid

def ask(wid, reason, askedAmount):
    neighborwid = whoIs(wid)
    maxPossibleHelp = world[neighborwid].generosity
    if maxPossibleHelp >= askedAmount:
        world[neighborwid][reason] -= askedAmount
        return askedAmount
    else:
        return False
