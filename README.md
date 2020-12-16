# lifeSimulator
## Overview
This program is a pseudo-life zero-player game written in both JavaScript and Python (two separate versions!).
This game wants to show you how our lives can be just a simulation.
It's just an idea. Think how more complicated and detailed programs can be more closer and resemblant to our lives ;)

![Master of puppets, I'm pulling your striiings!](https://raw.githubusercontent.com/liAmirali/lifeSimulator/master/masterofpuppets.jpg)

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
That was hard, right? :)

**Step 3:**
Run the game:
```bash
$ python3 run.py
```
Once in a while check `lifeSimulator/survivors_data.txt` file to see the history of your survivor's data.
```bash
$ cat survivors_data.txt
```
To clear the history:
```bash
$ > survivors_data.txt
```

## Settings
You can change some settings of the game in `lifeSimulator/main.py` file.
There are several configurations to do.
But you can also just skip this part and the following settings will be used:
```python
initfood = 200
initmoney = 200
peopleC = 10
foodPrice = 2
dailyTaxMethod = 'toneighbor'
taxRate = 0.2
```

**What do they each mean?**
`initfood` and `initmoney` are the amount of 'food' and 'money', respectively, that people are gonna start the world with.
`peopleC` is the number of people you're gonna put in your world in the first place.
`foodPrice` is the cost of buying 1 food. Or in other words `food count * foodPrice = money to pay`
`dailyTaxMethod` determines how people are gonna pay the tax.
To be simple about `taxRate`, tax to pay is equal to current money multiplied by 'taxRate'

