const lovedBooks =   ["Harry Potter and the Sorcerer's Stone", 
                "To Kill a Mockingbird", 
                "Pride and Prejudice",
                "1984",
                "The Little Prince",
                "The Great Gatsby",
                "The Catcher in the Rye", 
                "Animal Farm",
                "The Lord of the Rings",
                "Jane Eyre",
                "Romeo and Juliet", 
                "The Chronicles of Narnia", 
                "The Giver",
                "Moby Dick"]

const hatedBooks =   ["The Shack", 
                "The Lovely Bones", 
                "Congo",
                "Little Women",
                "Brave New World",
                "Love Story",
                "The Secret", 
                "Pride and Prejudice and Zombies",
                "Memoirs of a Geisha"
]

let posBook = lovedBooks.indexOf("1984");

console.log(lovedBooks[posBook]);

if( lovedBooks.indexOf("Moby Dick") == -1 ){
    console.log(`Book doesn't exist`);
}
else{
    console.log(`Book does exist`);
}

let concatBooks = lovedBooks.concat(hatedBooks);

concatBooks.splice(concatBooks.indexOf("The Giver"), 1);

/*

3.- Tenemos el siguiente string:

const frase = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, 
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, 
adarga antigua, rocín flaco y galgo corredor."

Mediante un prompt, preguntad al usuario que escriba una palabra. 
Buscad mediante javascript dicha palabra en el string anterior, 
y guardad en una variable la posición del string en la que se encuentra la palabra. 
Inyectadla con javascript en el DOM.


*/