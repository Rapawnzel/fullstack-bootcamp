let animal = {
    "Name": "Canela",
    "Type": "Dog",
    "Breed": "Amstaff",
    "Age": "One year",
    "Color": "Light Brown"
}

for (let clave in animal){
    document.write(clave + ": " + animal[clave] + "<br>");
}