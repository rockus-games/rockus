from os import listdir
from os.path import isfile, join
import json

names ={}

names_array = listdir("../assets/items")
for i in names_array:
    names[i] = "Описание инструмента"
data = {}
data["names"] = names
json = json.dumps(data, indent = 4, ensure_ascii=False)

f = open("./data.json", "w", encoding="utf-8")
f.write(json)
f.close()
    
