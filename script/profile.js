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
   //createNewPost(content);

   fetch(apiBaseURL + "/api/posts", {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({
            text: newPostForm.value
        })
    }).then(response => {
        console.log(response);
        //location = "/posts/";  
        
    });
  });


     

  function createNewPost(content){
    retern
       const postHTML = `
         <li>
           <h3>${post.content}</h3>
           <p>By ${post.author}, on ${post.createdAt}</p>
         </li>
       `;
       Post-List.innerHTML ;
  }
   
   
    
    
  

function logoutUser(event){

 console.log("hi)")
  event.preventDefault();

  logout();
}
