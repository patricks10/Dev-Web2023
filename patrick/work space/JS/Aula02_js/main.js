//Concatenar Strings
var texto1 = "Aula 02 JS - Socorro"

var texto2 = "aula" + " 02 JS " + '- Socorro'

console.log(texto1)

console.log(texto2 + texto1) //apresentar informações

// Caracter de escape
var sober = "Now that I am sober I take back what I said Im \n sittin with this love hangover And boy its hurtin my head Its the middle of October And we just came to an end Im just sorry that there aint no time left You and I were over"

console.log(sober)

// console.clea()

//NAN
var zeroyByzero = 0/0
console.log(zeroyByzero)

var num1 = 8 * null //0
console.log(num1)

var num2 = "5" + 1
console.log(num2)


//Operadores aritiméticos
var ovo1 = 5
var ovo2 = 4
//adição
var adicao = ovo1 + ovo2
console.log( "Resultado da adição é: "  + adicao)
//Subtração
var subtracao = ovo1 - ovo2
console.log(subtracao)
//Divisão
var divisao = ovo1 / ovo2
console.log(divisao)
//Multiplicação
var multiplicacao = ovo1 * ovo2
console.log(multiplicacao)


// precedência dos operadores
//() / * + -
var numero3 = (3+5) /4 +6
console.log(numero3)

var resultado = 3 * (5 + 2)
console.log(resultado)

//operadores de comparação
var compara = ovo1 < ovo2
console.log(compara) //false

//segundo tipo de comparação
var compara2 = ovo1 == ovo2
console.log(compara2)

//terceiro tipo de comparação
var variavel1 = 3
var variavel2 = 3
var compara3 = variavel1 >= variavel2
console.log(compara3)


//operadores lógicos
var variavel3 = 3
var variavel4 = 3
var comparatudo = variavel3 >= variavel4 || variavel3 > variavel4 
                      //true        e        false
console.log(comparatudo)

console.clear()


//operador unários
console.log(typeof 4.5) //nember
console.log(typeof "Texto") // string
console.log(typeof true) //Boolean
console.log(typeof "g") //string


var pipoca1 = "String"
var pipoca1 = 4
console.log(pipoca1)