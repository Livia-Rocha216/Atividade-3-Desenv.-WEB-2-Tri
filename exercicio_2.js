let peso = 60; // Variável de peso;
let altura = 1.80; // Variável de altura;
let imc = peso / (altura * altura) // Variável IMC que faz o cálculo pra descobrir o IMC uau

if(imc < 18.5){ // SE o imc for menor que 18.5, ele mostra a mensagem de estar abaixo do peso.
    console.log("IMC = ", imc, "- Abaixo do peso.")
}
else if(18.5 <= imc < 25){ // SE o imc for menor que 25 mas maior ou igual a 18.5, mostra a mensagem de peso normal.
    console.log("IMC = ", imc, "- Peso normal.")
}
else if(25 <= imc < 30){ // SE o imc for menor que 30 mas maior ou igual a 25, mostra a mensagem de sobrepeso.
    console.log("IMC = ", imc, "- Sobrepeso.")
}
else if(imc >= 30){ // e por último, SE o imc for maior ou igual a 30, mostra a mensagem de obesidade.
    console.log("IMC = ", imc, "- Obesidade.")
}