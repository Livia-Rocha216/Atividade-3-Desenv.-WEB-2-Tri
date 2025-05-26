let idade = 15; // Variável de idade;
let nome = "Lívia"; // Variável de nome;

function tempo_vivido(){ // Eu criei uma função por achar mais fácil executar o bloco de código inteiro com apenas um comando;
                         // a função pega os valores de idade e faz suas devidas multiplicações pra obter os valores desejados.
    console.log("----------------------") // Decoração :D
    console.log("Nome:", nome)
    console.log("Idade:", idade)
    console.log("Dias vividos:", idade * 365)
    console.log("Minutos vividos:", idade * 525960)
    console.log("Segundos vividos:", idade * 31560000)
    console.log("----------------------") // Decoração :D
}

tempo_vivido() // Puxar a função aqui executa o bloco de código anterior todo.