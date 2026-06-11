const emailInput = document.getElementById("email-input");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const successCard = document.getElementById("success-card");
const formContainer = document.getElementById("form-container");
const dismissBtn = document.getElementById("dismissBtn");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression used to validate email format

// This project contains line-by-line comments to explain my thought process and show my understanding of DOM manipulation, form validation, and event handling.

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const emailValue = emailInput.value.trim(); // Gets the user's input and removes extra spaces

    errorMessage.textContent = ""; // Clears any previous error message
    emailInput.classList.remove("input-error"); // Removes red styling from the input
    errorMessage.classList.remove("error-message"); // Removes red styling from the error message

    if (emailValue === "") {
        errorMessage.textContent = "Valid email required"; // Displays error message if input is empty
        errorMessage.classList.add("error-message"); // Makes error text red
        emailInput.classList.add("input-error"); // Highlights input field in red
        return; // Stops the function from continuing
    }

    if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = "Enter a valid email address"; // Displays error if email format is incorrect
        errorMessage.classList.add("error-message"); // Makes error text red
        emailInput.classList.add("input-error"); // Highlights input field in red
        return; // Stops the function from continuing
    }

    formContainer.style.display = "none"; // Hides the newsletter form
    successCard.style.display = "block"; // Displays the success message card
});

dismissBtn.addEventListener("click", function () {

    successCard.style.display = "none"; // Hides the success message card
    formContainer.style.display = "block"; // Shows the newsletter form again

    form.reset(); // Clears the email input field

    errorMessage.textContent = ""; // Removes any previous error message
    emailInput.classList.remove("input-error"); // Removes red styling from the input field
    errorMessage.classList.remove("error-message"); // Removes red styling from the error message

});






