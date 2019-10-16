const sistemaSolar = {
    "planetas": [
        {"Nombre": "Mercurio", "temperatura": "700 K"},
        {"Nombre": "Mercurio", "temperatura": "800 K"},
        {"Nombre": "Mercurio", "temperatura": "900 K"},
    ]
}

for (let i of sistemaSolar[`planetas`]){
    document.write(i[`temperatura`]);
}