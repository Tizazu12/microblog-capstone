"use strict";

const submitbutton = document.getElementById("submit");

     window.onload = function(){
           submitbutton.onclick = onclickSignUp;
 }

function onclickSignUp() {
  console.log("hi there");
  
  const fullname = document.getElementById('fullname').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const bio = document.getElementById('bio').value;

  
  fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, fullname, bio })
  })
 .then(response => response.json())
 .then(user => {
    console.log(user)
  // Redirect to login page 
    window.location.href = 'login.html';
  })
 .catch(error => {
    errorMessage.textContent = 'Error registering user: ';
  });
}