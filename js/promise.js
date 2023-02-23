/*
fetch('https://www.youtube.com/watch?v=clVhRorRQag')
      .then(response => response.json())
    //   .then(json => console.log(json))
      .then(json =>document.write(json))
*/

/*
function loadUsers(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => displayUsers(data))
}

function displayUsers(data){
  console.log('helo');
}
*/
/*
function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUser2(data))
}
*/

/*
function displayUser2(data){
  const ul = document.getElementById('users-list');
  for(const user of data){
    // console.log('This is only user:' + user.name + ' And this is user website '+ user.website + '' + ' This is user name:' + user.username);
    const li = document.createElement('li');
    li.innerText = `${user.name}`;
    ul.appendChild(li);
  }
}
*/
/*

function displayUser2(data){
  const ul = document.getElementById('users-list');
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
*/
function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data));
}

function displayPost(posts){
  const postsContainer = document.getElementById('posts-container');
  for(const post of posts){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
      <h4> posts:-${post.userId} </h4>
      <h4> posts:-${post.title} </h4>
      <h4> posts Description:-${post.body} </h4>
    `;
    postsContainer.appendChild(postDiv);
  }
}
loadPosts();