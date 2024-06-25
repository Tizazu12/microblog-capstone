"use strict"
const newPostForm = document.getElementById('new-post-form');
const postButton = document.getElementById('post');
const myPostList = document.getElementById('my-post-list');
const logoutBtn = document.getElementById("logout-btn")

window.onload = function(){
  logoutBtn.addEventListener("click", (event) => {
    logoutUser(event);


  })
}

postButton.addEventListener('click', (e) => {
 e.preventDefault();
  const postContent = document.getElementById('post-content').value;
  
   createNewPost(postContent);
  });



function logoutUser(event){

 console.log("hi)")
  event.preventDefault();

  logout();


  
}