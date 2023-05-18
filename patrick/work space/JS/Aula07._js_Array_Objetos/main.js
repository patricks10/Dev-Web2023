//objetos
let aluno = {
    primeiroNome: 'Abraao',
    nota: 8,
    idade: 102,
    altura: 3.15,
    hobbies: ['ping pong', 'Castor de Andrade', 'Futebol'],
    //
    personalidade: 'jogador caro',
    endereco:{
        numeroCasa:34,
        nomeRua: "X",
        estado: "SP"
    }
};

console.log(aluno);
console.log(aluno.hobbies[1]);
console.log(aluno.endereco.nomeRua)

console.clear()
const {
    primeiroNome,
    idade,
    nota   
} = aluno;

console.log(aluno,nota)

console.clear()
//array de objetos
const alunosIOS = [
    {
        nomeAluno: "Higor Fequer",
        idade: 54,
        nota: 9
    },
    {
        nomeAluno: "Marcos",
        idade: 12,
        nota: 8
    },
    {
        nomeAluno: "Thainá Zerbinatti",
        idade: 35,
        nota: 10
    }
]

console.log(alunosIOS)
console.log(alunosIOS[0])
console.log(alunosIOS[0].idade)

console.log(JSON.stringify(alunosIOS))