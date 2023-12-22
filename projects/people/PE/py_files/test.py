from os import listdir
import json

f = open("../descriptions.json", "r", encoding="utf-8")
data = json.load(f)
f.close()

names = {}
pictures = {}
audios = {}

names_array = listdir("../assets/items")

audio_count = 0
audio_not_found = []
name_count = 0
pictures_count = 0

for i in names_array:
    has_audio = False
    names[i] = data["names"][i] if i in data["names"] else "Описание инструмента"
    name_count += 1
    pictures[i] = []
    for j in listdir("../assets/items/" + i):
        if (".jpg" in j) or (".png" in j) or (".jpeg" in j):
            pictures[i].append("./assets/items/" + i + "/" + j)
            pictures_count += 1
        else:
            audios[i] = "./assets/items/" + i + "/" + j
            audio_count += 1
            has_audio = True
    if not has_audio:
        audios[i] = "Звучание инструмента не найдено"
        audio_not_found.append(i)
        
            
data = {}
data["names"] = names
data["pictures"] = pictures
data["audios"] = audios
json = json.dumps(data, indent = 4, ensure_ascii=False)

print(f"Pictures: {pictures_count} Audios: {audio_count} Audios not found: {len(audio_not_found)} Names: {name_count}")

f = open("../data.json", "w", encoding="utf-8")
f.write(json)
f.close()

f = open("./audio_not_found.txt", "w", encoding="utf-8")
for i in audio_not_found:
    f.write(i + "\n")

f.close()
    
