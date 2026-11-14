/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".newsletter form");
    const email = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function(event) {

    // prevent the page from reloading
    event.preventDefault();

    // retrive the email from the user
    const emailValue = email.value.trim(); 

    if(emailValue === "") {
        message.textContent = "Please enter a valid email address.";

    } else {
        message.textContent = "Thank you! Your email address " + emailValue + " has been added to our mailing list!";
    }

    });

});
