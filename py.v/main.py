# General variable defenitions are here

# People will live in this
world = []

# General attitude of people
class person:
    alive = True
    food = 200
    money = 200
    def __init__(self, generosity, gluttony):
        self.generosity = generosity
        self.gluttony = gluttony
    def __str__(self):
        return "food=%s, money=%s, alive=%s, generosity=%s, gluttony=%s"\
        % (self.food, self.money, self.alive, self.generosity, self.gluttony) + "\n"
    def __repr__(self):
        return "food=%s, money=%s, alive=%s, generosity=%s, gluttony=%s"\
        % (self.food, self.money, self.alive, self.generosity, self.gluttony) + "\n"

# Number of people to start the life
peopleC = 10

# Days passed
day = 0

# How much should each person pay for 1 food?
foodPrice = 2
