const form = document.getElementById("maior_que");
const button = document.getElementById("button_");

const operadorX = document.querySelector("#number_X");
const operadorY = document.querySelector("#number_Y");

const mensagemMaior = "O número é maior !!";
const mensagemMenor = "O número não é maior !!";
const mensagem = document.getElementById("message");

button.addEventListener("click", function (e) {
    
    e.preventDefault();
    let number_X = parseInt(operadorX.value);
    let number_Y = parseInt(operadorY.value);
    let ehMaior = operadorX.value> operadorY.value ? true : false;
    
    if (ehMaior) {
        mensagem.innerHTML = mensagemMaior;
    } else {
        mensagem.innerHTML = mensagemMenor;
    }
    
});
