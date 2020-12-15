from main import *
from random import randint

def randperson(personHimself):
    randwid = randint(0, peopleC-1)
    if randwid == personHimself or not world[randwid].alive:
        randperson(personHimself)
    return randwid
