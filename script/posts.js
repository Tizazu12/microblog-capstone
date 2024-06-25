/* Posts Page JavaScript */
"use strict";

console.log("are we connected")

const postList = document.getElementById('post-list');
const logoutBtn = document.getElementById('logout-btn');
// the base url
const apiBaseUrl = "http://microbloglite.us-east-2.elasticbeanstalk.com";

window.onload = function(){
  init();
  getpost()
}

function getLoginData(){
  const loginJSON = window.localStorage.getItem("login-data");
  return JSON.parse(loginJSON) || {};
}

function getPost() {
  const loginData = getLoginData();
  const options = { 
      method: "GET",
      headers: {
          
          "Content-Type": "application/json",
          Authorization:`Bearer${loginData.token}`,
      },
     
  };

const fullUrlForLogin = apiBaseURL + "/api/posts";
console.log(fullUrlForLogin);

 fetch(fullUrlForLogin, options)
      .then(response => response.json())
      .then(posts => {
        console.log(posts)
          disPlayPosts(posts);
      })      .catch(error => console.error("Error fetching posts", error));

    }   

    // to display the posts

function disPlayPosts(posts){
// clear it before
postList.innerHTML = "";
console.log(posts)
posts.forEach(post => {
  const postItem = document.createElement("li");
  postItem.innerHTML = `
  <div>
    <p>${post.text}</p>
    <p>Posted By: ${post.username}</p>
  
  </div>`;
postList.appendChild(postItem)
});

}

function init(){
logoutBtn.addEventListener("click", (event) => {
    logoutUser(event);

  })

  //console.log(window.localStorage.getItem("login-data"))
}

function logoutUser(event){
  event.preventDefault();
  logout();


  
}