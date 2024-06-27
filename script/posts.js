/* Posts Page JavaScript */
"use strict";

console.log("Are we connected?");

const postList = document.getElementById('post-list');
const logoutBtn = document.getElementById('logout-btn');
// the base url
const apiBaseUrl = "http://microbloglite.us-east-2.elasticbeanstalk.com";

window.onload = function () {
  init();
  getPost();
}

function getLoginData() {
  const loginJSON = window.localStorage.getItem("login-data");
  return JSON.parse(loginJSON) || {};
}

function getPost() {
  const loginData = getLoginData();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginData.token}`,
    },
  };

  const fullUrlForLogin = apiBaseUrl + "/api/posts";
  console.log(fullUrlForLogin);

  fetch(fullUrlForLogin, options)
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
      displayPosts(posts);
    })
    .catch(error => console.error("Error fetching posts", error));
}

// to display the posts
function displayPosts(posts) {
  // clear it before
  postList.innerHTML = "";
  console.log(posts);
  posts.forEach(post => {
    const postItem = document.createElement("div");
    postItem.classList.add("card","mb-3")
    postItem.innerHTML = `
      <div class="card-body">
        <p class ="card-text">${post.text}</p>
        <pclass="card-text"><small class="text-muted">Posted By: ${post.username},on ${post.createdAt} </small></p>
  
        <div class="Likes:">${post.likes.length} Likes 
            <button onclick="like('${post._id}')">Like</button>
        </div>`;
    
    postList.appendChild(postItem);
  });
}

function init() {
  logoutBtn.addEventListener("click", (event) => {
    logoutUser(event);
  });

  // console.log(window.localStorage.getItem("login-data"))
}

function like(postId){
  fetch(apiBaseURL + "/api/likes", {
      method: "POST",
      headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token
      },
      body: JSON.stringify({
          postId: postId
      })
  }).then(response => {
      console.log(response);
      location = "/posts/";  
  });
}


function logoutUser(event) {
  event.preventDefault();
  logout();
}

function logout() {
  window.localStorage.removeItem("login-data");
  window.location.href = "../login.html"; // Redirect to login page or another appropriate page
}