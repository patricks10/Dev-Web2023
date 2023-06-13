const lista = [17, 43, 8, 4, 97, 56, 29]

lista.forEach(transforma) 

function transforma(number) {
    if(number % 2 === 0) {
        console.log(number + " É par")
    } else {

        console.log(number + " É impar")
    }
}

console.log("")
console.log("")

const lista2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82,
    61]

   let apresentar = lista2.filter((number) => {
        if(number <= 80)
        return number >= 20
    })

    console.log(apresentar)