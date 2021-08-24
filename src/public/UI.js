const container = document.querySelector(".notas");
const counter = document.querySelector('.counter');
let sum = 0;
const uiRender = (post) => {

  const div = document.createElement('div');
        div.setAttribute("class","card")
 
  div.innerHTML=`  
  
      <div class="card-header">
        <h4 class="user">${post.user}</h4>
        <h4 class="card-title">TITULO</h4>
      </div>
      <div class="card-body">
        
        <p class="card-text">
          ${post.post}
        </p>
      </div>
 
  `;

  container.appendChild(div);
}




const newPost = (newPost) => {
  
  sum = sum +1
  counter.innerHTML = `🔔 ${sum}`;

  uiRender(newPost);
}

const loadPosts = posts => {
  sum = posts.length;
  counter.innerHTML = `🔔 ${sum}`;
  posts.forEach(post => {
    uiRender(post); 
  });

}