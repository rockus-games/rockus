from os import listdir
from os.path import isfile, join
import json

path = "./assets/items" # Путь папки для чтения

files_dir = listdir(path) # Список считанных объектов

files = [] # Список файлов
folders = [] # Список папок

for f in files_dir: # Цикл по считанным объектам
    if(isfile(join(path, f))): # Если объект - файл
        files.append(f) # Добавляем в список файлов
    else: # Если объект - папка
        folders.append(f) # Добавляем в список папок

data = {} # Словарь с данными для записи в JSON

data["files"] = files # Файлы в виде массива с ключом "files"
data["folders"] = folders # Папки в виде массива с ключом "folders"

json = json.dumps(data, indent = 4, ensure_ascii=False) # Преобразование словаря в JSON

f = open("./data.json", "w", encoding="utf-8") # Открытие файла в режиме записи

f.write(json) # Запись в файл

f.close() # Закрытие файла
