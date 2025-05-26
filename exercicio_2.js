let peso = 60;
let altura = 1.80;
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("IMC = ", imc, "- Abaixo do peso.")
}
else if(18.5 <= imc < 25){
    console.log("IMC = ", imc, "- Peso normal.")
}
else if(25 <= imc < 30){
    console.log("IMC = ", imc, "- Sobrepeso.")
}
else if(imc >= 30){
    console.log("IMC = ", imc, "- Obesidade.")
}