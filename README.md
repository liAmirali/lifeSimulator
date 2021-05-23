# lifeSimulator
## Overview
lifeSimulator is a pseudo-life zero-player game written Python.
This game wants to show you how our lives can be just a simulation.
It's just an idea. Think how more complicated and detailed programs can be more closer and resemblant to our lives. :)

![Master of puppets, I'm pulling your striiings!](https://raw.githubusercontent.com/liAmirali/lifeSimulator/master/img/masterofpuppets.jpg)

## How to play the game?
Well, you're not supposed to actually play this game. It's a zero-player game. You can just track your world from you terminal window and enjoy. :))))

## Rules of the game:
At the beginning of the game, people will born with a randomized "generosity" and "gluttony" coefficient.
And also with some food and money.
Each day, every alive person hase to pay tax.
And then they have to 

```Python
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
```


## How to run
**Step 1:**
 Clone the git repository or just simply download it from https://github.com/liAmirali/lifeSimulator/archive/master.zip
```bash
$ git clone https://github.com/liamirali/lifeSimulator.git
```
**Step 2:**
Then navigate to lifeSimulator directory
```bash
$ cd lifeSimulator
```
That wasn't hard, ok ik. :)

**Step 3:**
Run the game:
```bash
$ python3 run.py
```
Survivors data will be saved by default both in a CSV file and a SQL Database.
To see the sql table you have install sqlite3 first and then enter the command below:
```bash
$ sqlite db/lifeSimulator.db
```
And then:
```SQL
sqlite> SELECT * FROM survivros;
```
Press Control+D to exit.

To see the CSV file:
```bash
$ cat db/survivors_data.csv
```
To initilize the SQL table:
```bash
$ sqlite db/lifeSimulator.db
```
And then:
```SQL
sqlite> DROP TABLE survivros;
```

To initilize the CSV file:
```bash
$ > db/survivors_data.csv
```

## Configutaions
You can change some configs of the game in `conf/config.py` file.
There are several configurations to do.
But you can also just skip this part and the following configutaions will be used:
```python
dayLength = 1
peopleC = 10
foodinit = 200
moneyinit = 200
foodPrice = 2
dailyTaxMethod = 'toneighbor'
taxRate = 0.4
saveMethod = {
    "sqlite": True,
    "csv": True
}
```

**What do they each mean?**
`foodinit` and `moneyinit` are the amount of 'food' and 'money', respectively, that people will start the world with.
`peopleC` is the number of people you're going to put in your world in the first place.
`foodPrice` is the cost of buying 1 food.
`dailyTaxMethod` determines how people will pay the tax.
The amount of tax to pay for each person is equal to current money multiplied by 'taxRate'.
If `dailyTaxMethod` is assigned to `'toneighbor'`, they will pay it to their neighbor obviously. Neighbor of the person with `wid` is the person with wid+1


## Things you may see in the code
`wid` : wid means world id. Each person will born with a wid specified.
`neighbor`: The nieghbor of the person with `wid` id, is the person with `wid+1` id. And the last person's neigbor is the first person.
`world`: world is just an array which people are living in.
