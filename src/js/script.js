var firstName = document.querySelector("#input_first-name");
var lastName = document.querySelector("#input_last-name");
var email = document.querySelector("#input_email");
var password = document.querySelector("#input_password");
var form = document.querySelector(".section-form__form___inputs");
var inputs = document.querySelectorAll(".section-form__form___inputs____single-input");
var mensagemErro = document.querySelector(".section-form__form__text-error");

var countErrors = 0;

function validaForm(event){

    if(firstName.value === "")mudaInput(firstName);
    if(lastName.value === "") mudaInput(lastName);
    if(email.value === "") mudaInput(email);
    if(password.value === "") mudaInput(password);

    if((countErrors > 0) && (mensagemErro === undefined)){
        mensagemErro.innerText = "Por favor, preencha todos os campos";
        mensagemErro.classList.add("mensagem-erro")
    }
    inputs.forEach(input => input.addEventListener('click', function(){
        input.style.borderColor = "black";
    
    }))
    

    event.preventDefault();
}

function mudaInput(item){
    item.style.borderColor = "red";
    countErrors++;
}








