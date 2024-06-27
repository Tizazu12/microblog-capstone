
"use strict";

const loginForm = document.querySelector("#login");

loginForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const loginData = {
        username: loginForm.username.value,
        password: loginForm.password.value,
    }

    // Disables the button after the form has been submitted already:
    loginForm.loginButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Login failed");
            }
        })
        .then(data => {
            window.localStorage.setItem("login-data", JSON.stringify(data));
            window.location.href = "./posts/index.html";
        })
        .catch(error => {
            console.error("Error logging in:", error);
            loginForm.loginButton.disabled = false;
        });
};

console.log(localStorage.getItem("login-data"));


