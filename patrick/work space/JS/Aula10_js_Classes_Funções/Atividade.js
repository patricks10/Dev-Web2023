class Pessoa {
    constructor(nome, dataNascimento) {
      this.nome = nome;
      this.dataNascimento = dataNascimento;
    }
    getIdade() {
      const hoje = new Date();
      const anoAtual = hoje.getFullYear()
      const mesAtual = hoje.getMonth()
      const diaAtual = hoje.getDate()
  
      const anoNascimento = this.dataNascimento.getFullYear()
      const mesNascimento = this.dataNascimento.getMonth()
      const diaNascimento = this.dataNascimento.getDate()
  
      let idade = anoAtual - anoNascimento
  
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
      }
  
      return idade;
    }
  }
  
  Pessoa.prototype.getNiver = function () {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
  
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();
  
    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
      return true
    } else {
      return false
    }
  }
  
  const pessoas = []
  
  pessoas[0] = new Pessoa("Patrick", new Date(2003, 9, 19))
  pessoas[1] = new Pessoa("Gabriel", new Date(2004, 8, 2))
  pessoas[2] = new Pessoa("Sarah", new Date(2007, 4, 16))
  pessoas[3] = new Pessoa("Carol", new Date(2000, 5, 7))
  pessoas[4] = new Pessoa("Bianca", new Date(2001, 2, 27))
  pessoas[5] = new Pessoa("Isaque", new Date(2019, 10, 16))
  pessoas[6] = new Pessoa("Nathalia", new Date(2006, 5, 13))
  pessoas[7] = new Pessoa("Vitoria", new Date(2008, 12, 31))
  pessoas[8] = new Pessoa("Barbara", new Date(2003, 11, 15))
  pessoas[9] = new Pessoa("Julia", new Date(2002, 8, 11)) 
  
  for (let i = 0; i < pessoas.length; i++) {
      const pessoa = pessoas[i]
      const idade = pessoa.getIdade()
      const fezAniversario = pessoa.getNiver() ? "já fez aniversário este ano" : " ainda não fez aniversário este ano"
      console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario}`)
  }