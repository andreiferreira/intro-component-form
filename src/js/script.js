var firstName = document.querySelector("#input_first-name");
var lastName = document.querySelector("#input_last-name");
var email = document.querySelector("#input_email");
var password = document.querySelector("#input_password");
var form = document.querySelector(".section-form__form___inputs");
var inputs = document.querySelectorAll(".section-form__form___inputs____single-input");
var erroMessage = document.querySelector(".section-form__form__text-error");
var countErrors = 0;

// validates form
function validateForm(event) {
    event.preventDefault();

    countErrors = 0;

    if (firstName.value === "") changeInput(firstName);
    if (lastName.value === "") changeInput(lastName);
    if (email.value === "") changeInput(email);
    if (password.value === "") changeInput(password);

    // there are errors (entries not filled in) and an error message has not been created
    if ((countErrors > 0) && (erroMessage.textContent === "")) {

        erroMessage.innerHTML = "Please fill in all the required fields.";
        erroMessage.classList.add("message-error")

    // if there are no erros (all the entries filled in)
    } if (countErrors === 0) {
        Swal.fire("Your data has been sent!")
        window.setTimeout(function () {
            form.submit();
        }, 2000)
    }

    //checks if the field has been clicked (logically to be filled) by returning the border to its original color
    inputs.forEach(input => input.addEventListener('click', function () {
        input.style.borderColor = "black";
    }))

}

// if the input has not been filled in it changes the border
function changeInput(item) {
    item.style.borderColor = "red";
    countErrors++;
}








