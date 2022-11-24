// let acertos = 0;
// let i = 0;
// let x = 0;
// let y = 0
// while (i < 10000) {
//     let x = Math.random()
//     let y = Math.random()
// }
// if (x * x + y * y <= 1.0) {
//     acertos += 1
//     i += 1
// }
// console.log(4 * acertos / 10000)

// acertos <- 0
// i <- 0
// while (i < REP)
//   x <- rand()  (float entre 0 e 1)
//   y <- rand()
//   if x * x + y * y <= 1.0
//     acertos <- acertos + 1
//   i <- i + 1
// print(4 * acertos / REP)

// Teste de construtores
// Transformar esse objeto em uma Constructor Function
// const pessoa = {
//     nome: "Nome Pessoa",
//     idade: 20,
//     andar() {
//         console.log(this.nome + 'andou');
//     }
// }

// function pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//     this.andar = function () {
//         console.log(this.nome + 'andou');
//     }
// }

// const pessoa1 = new pessoa('Vitor', 21);
// const pessoa2 = new pessoa('João', 22);

const comidas = ["Pizza", "Frango", "Carne", "Macarrão", "Banana"];
// Remova o primeiro valor de comidas e coloque em uma variavel
const primeiraComida = comidas.shift();
//Remova o ultimo valor de comidas e coloque em uma variavel
const ultimaComida = comidas.pop();
// Adicione Arroz ao final do array
comidas.push('Arroz');
// Adiocione Peixe e Batata ao inicio do array
comidas.unshift('Peixe', 'Batata');
// Percorra o array comidas e verifique se a comida Bananá faz parte dele
const temBanana = comidas.includes("Banana");
console.log("tem banana? " + temBanana)
console.log(comidas)