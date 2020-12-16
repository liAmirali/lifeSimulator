# General variable defenitions are here

# People will live in this
world = []

# General attitude of people
class person:
    alive = True
    food = 200
    money = 200
    def __init__(self, wid, generosity, gluttony):
        self.wid = wid
        self.generosity = generosity
        self.gluttony = gluttony
    def __str__(self):
        return "wid= %s, alive=%s, food=%s, money=%s, generosity=%s, gluttony=%s"\
        % (self.wid, self.alive, self.food, self.money, self.generosity, self.gluttony) + "\n"
    def __repr__(self):
        return "wid= %s, alive=%s, food=%s, money=%s, generosity=%s, gluttony=%s"\
        % (self.wid, self.alive, self.food, self.money, self.generosity, self.gluttony) + "\n"

# Number of people to start the life
peopleC = 10

# Days passed
day = 0

# How much should each person pay for 1 food?
foodPrice = 2

# How should people pay tax every day?
# Possible inputs:
# 0) torandom => Computer selects a random alive guy (and also not himself)
# 1) toneighbor => Computer finds the alive neighbor of 
#    person #wid by neighbor.whoIs(wid) function
dailyTaxMethod = 'toneighbor'

survivor_wid = None
