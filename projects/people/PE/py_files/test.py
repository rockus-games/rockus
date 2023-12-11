from os import listdir
from os.path import isfile, join
import json

names ={}
pictures = {}
audios = {}

names_array = listdir("../assets/items")

for i in names_array:
    names[i] = "Описание инструмента"
    pictures[i] = []
    for j in listdir("../assets/items/" + i):
        if (".jpg" in j) or (".png" in j) or (".jpeg" in j):
            pictures[i].append("./assets/items/" + i + "/" + j)
        else:
            audios[i] = "./assets/items/" + i + "/" + j
            
data = {}
data["names"] = names
data["pictures"] = pictures
data["audios"] = audios
json = json.dumps(data, indent = 4, ensure_ascii=False)

f = open("../data.json", "w", encoding="utf-8")
f.write(json)
f.close()
    
