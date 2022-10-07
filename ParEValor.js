//par nome/valor
const saudacao = 'opa'; // contexto lexico 1

function exec() {
  const saudacao = 'fala'; // contexto lexico 2
  return saudacao
}

// objetos são grupos alinhados de parews nome/valor
const cliente = {
    nome: 'Junior',
    idade: 27,
    peso: 119,
    endereco:{
        logradouro: 'rua muito legal',
        numero: 242,
    }
}

console.log(saudacao)
console.log(exec())
 console.log(cliente)