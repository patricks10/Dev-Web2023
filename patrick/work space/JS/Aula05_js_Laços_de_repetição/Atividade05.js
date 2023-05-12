// 1)while
let contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}
console.clear()

//2)do-while
let i = 0,
    text = '';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

//3)for
// for (let i = 0; i <= 100;  i + 2){
//     console.log(`Valor = ${i}`);
// } 
