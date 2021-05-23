import sqlite3
from config import *

def saveSurvivor(wid):
    if (saveMethod["sqlite"]):
        ### Adding Sqlte3 setup
        # Table scheama: id (Primary key) | generosity (int) | gluttony (int)
        table_name = 'survivors'
        connection = sqlite3.connect("db/lifeSimulator.db")
        cursor = connection.cursor()
        cursor.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name='{table_name}'")
        sqlite_result = cursor.fetchall()
        if len(sqlite_result) == 0:
            cursor.execute(f"""CREATE TABLE {table_name} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                generosity INTEGER,
                gluttony INTEGER)
            """)
        cursor.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name='{table_name}'")
        cursor.execute(f"INSERT INTO {table_name} (generosity, gluttony) VALUES ({world[wid].generosity}, {world[wid].gluttony})")
        connection.commit()
        print(f"Person #{wid} successfully saved as an survivor in SQL DB")

    if (saveMethod["csv"]):
        f = open('db/survivors_data.csv', 'a')
        f.write(str(world[wid].generosity)+","+str(world[wid].gluttony)+";\n")
        f.close()
        print(f"Person #{wid} successfully saved as an survivor in CSV FILE")
