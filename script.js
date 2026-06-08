
const emailInput = document.getElementById("email-input");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const successCard = document.getElementById("success-card");
const formContainer = document.getElementById("form-container");
const dismissBtn = document.getElementById("dismissBtn");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {
event.preventDefault();

const emailValue = emailInput.value.trim();
errorMessage.textContent = "";
emailInput.classList.remove("input-error");
errorMessage.classList.remove("error-message");

if (emailValue === "") {
    errorMessage.textContent = "Valid email required";
    errorMessage.classList.add("error-message");
    emailInput.classList.add("input-error");
    return;
}

if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = "Enter a valid email address";
    errorMessage.classList.add("error-message");
    emailInput.classList.add("input-error");
    return;
}

formContainer.style.display = "none";
successCard.style.display = "block";



});

dismissBtn.addEventListener("click", function () {
 successCard.style.display = "none";
 formContainer.style.display = "block";

 


 form.reset();
 errorMessage.textContent = "";
 emailInput.classList.remove("input-error");
 errorMessage.classList.remove("error-message");


});
