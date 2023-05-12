var notaMarcos = 8;
var notaMinima = 7;
//(if) SE
if(notaMarcos >= notaMinima) {
    console.log("Você está aprovado");
}
console.clear()

//(if-else)
var notaMarcos = 7;
var notaMinima = 7;
if(notaMarcos >= notaMinima) {
    console.log("Você está aprovado");
}else{
    console.log("Você está reprovado")
}

//impar ou par

var imparPar = 10
if(imparPar % 2 == 1){
    console.log("é impar")
}else{
    console.log("é par")
}


//validação encadeada
//primeira validação se é par
//segunda validação número maior que 10
// o número é par e maior que 10
// o número é par porem é menor que 10
var imparPar2 = 10
if(imparPar2 % 2 == 1){
    console.log("é impar")
}else{
    if(imparPar2 > 10){
        console.log("o número é par e maior que 10")
    }else{
        console.log("o número é par porem é menor que 10")
    }
}

//se é maior que 7 apresento "aprovado"
// se é menor que 7 apresenta "reprovado"
// se esta entre 7 e 5 "aprovado por conselho"
if(8 > 7){
    console.log("Aprovado")
}else if(8 < 6.9 && 8 > 5){
    console.log("Aprovado por conselho")
}else{
    console.log("Reprovado")
}


switch
