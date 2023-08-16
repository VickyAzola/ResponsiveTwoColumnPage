const form_1 = document.getElementById("form_1")
const inputEmail_1 = document.getElementById("email_1")
const errorMessage_1 = document.getElementById("errorMessage_1");

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   

function validForm_1(event) {
    let formValidation_1 = document.forms["form_1"]["email_1"].value;
    if (formValidation_1 == "" || !form.match(emailFormat)) {
        inputEmail_1.style.borderColor= "#FF5263"
        errorMessage_1.textContent = "Please check your email";
        errorMessage_1.style.marginBottom = ".4rem";
        event.preventDefault()

        form_1.addEventListener("click", function () {
            errorMessage_1.textContent = "";
            inputEmail_1.style.borderColor = "#717985"
            errorMessage_1.style.marginBottom = "0rem";
            event.preventDefault()
        });
    } else {
        errorMessage_1.textContent = ""
        inputEmail_1.style.borderColor= "#3065f8"
        errorMessage_1.style.marginBottom = "0rem";
        alert("Thank you for subscribing!");
        event.preventDefault()
    }
}

const form_2 = document.getElementById("form_2")
const inputEmail_2 = document.getElementById("email_2")
const errorMessage_2 = document.getElementById("errorMessage_2"); 

function validForm_2(event) {
    let formValidation_2 = document.forms["form_2"]["email_2"].value;
    if (formValidation_2 == "" || !form.match(emailFormat)) {
        inputEmail_2.style.borderColor= "#FF5263"
        errorMessage_2.textContent = "Please check your email";
        errorMessage_2.style.marginBottom = ".4rem";
        event.preventDefault()

        form_2.addEventListener("click", function () {
            errorMessage_2.textContent = "";
            inputEmail_2.style.borderColor = "#717985"
            errorMessage_2.style.marginBottom = "0rem";
            event.preventDefault()
        });
    } else {
        errorMessage_2.textContent = ""
        inputEmail_2.style.borderColor= "#3065f8"
        errorMessage_2.style.marginBottom = "0rem";
        alert("Thank you for subscribing!");
        event.preventDefault()
    }
}