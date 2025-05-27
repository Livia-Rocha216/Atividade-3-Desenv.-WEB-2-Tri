// Comparador Simples

console.log(1 == '1') // Caso 1: é dado como True por serem valores iguais, mesmo que o segundo seja uma string.
console.log(1 != '1') // Caso 2: o mesmo vale para o contrário, aqui é identificado como False já que é desconsiderado o fato de um valor se integer e o outro string.
console.log(0 == false) // Caso 3: aqui é dado como True pois o 0 é associado a algo negativo, enquanto 1 a algo positivo (novamente desconsiderando integer e valor booleano).

// Em resumo, o Comparador Simples vai considerar apenas o valor das variáveis.

// Comparador Estrito

console.log(1 === '1') // Caso 1: é dado como False por um valor ser um integer e o outro string.
console.log(1 !== '1') // Caso 2: e novamente aqui da True já que é considerado o fato de um ser integer e o outro string, sendo considerados diferentes.
console.log(0 === false) // Caso 3: aqui é dado falso já que é considerado o primeiro valor ser integer e o segundo booleano.

// E o Comparador Estrito considera o valor e o tipo das váriaveis.

// (não descobri mais exemplos dscp Felipe :c)