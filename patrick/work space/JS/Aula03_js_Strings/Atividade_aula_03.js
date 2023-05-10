//banana
var banana = " Banana"
console.log(banana.length);
console.log(banana.substring(0,3 ))
console.log(banana.trim())


//morango
var morango = "Morango"
console.log(morango.length);
console.log(morango.substring(0,3))
console.log(morango);
let frutaMaisc = morango.replace('Morango','MORANGO');
console.log(frutaMaisc);


//melancia
var melancia = "Melancia"
console.log(melancia.length);
console.log(melancia.substring(0,3))
console.log(melancia.toLowerCase());


//manga
var manga = "Manga"
console.log(manga.length);
console.log(manga.substring(0,3))


//laranja
var laranja = "Laranja"
console.log(laranja.length)
console.log(laranja.substring(0,3))

//Template String de frutas
console.log(`Lista de frutas recebidas${banana}, ${morango}, ${melancia}, ${manga} e ${laranja}`);