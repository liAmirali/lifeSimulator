# Developed by liamirali: some day on Dec 2020; version idk

# How long should each day be? (in seconds)
dayLength = 1

# Number of people to start the life
peopleC = 10

# Amount of food and money that people will start the world with.
foodinit = 200
moneyinit = 200

# How much money should each person pay for 1 food?
foodPrice = 2

# How should people pay tax every day?
# Possible inputs:
# 0) torandom => Computer selects a random alive guy (and also not himself)
# 1) toneighbor => Computer finds the alive neighbor of 
#    person #wid by neighbor.whoIs(wid) function
dailyTaxMethod = 'toneighbor'
taxRate = 0.2


## *** DO NOT TOUCH THE FOLLOWING CODE ***

# People will live in this
world = []

# General attitude of people
class person:
    alive = True
    food = foodinit 
    money = moneyinit
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

# Days passed
day = 0

# wid of the world's survivor
survivor_wid = None
