"use strict";

const submitbutton = document.getElementById("submit");

     window.onload = function(){
           submitbutton.addEventListener("click", (event) => {
 onclickSignUp(event)
           })
          
 }

function onclickSignUp(e) {
  e.preventDefault();
  console.log("hi there");
  
  const fullname = document.getElementById('fullname').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const bio = document.getElementById('bio').value;

  let bodyData = {
    username: username,
    fullName: fullname,
    password: password
  }

  
  fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/users', {
    method: 'POST',
    body: JSON.stringify(bodyData),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
  })
 .then(response => response.json())
 .then(user => {
    console.log(user)
  // Redirect to login page 
    window.location.href = './login.html';
  })
 .catch(error => {
    errorMessage.textContent = 'Error registering user: ';
  });
}