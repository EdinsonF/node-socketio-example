const container = document.querySelector("#posts");

const uiRender = (post) => {

  const div = document.createElement('div');
        div.setAttribute("class","post")

  div.innerHTML=`
      
        <h1>${post.user}</h1>
        <p>${post.post}</p>
      
  `;

  container.appendChild(div);

}




const newPost = (newPost) => {
  uiRender(newPost);
}

const loadPosts = posts => {
  posts.forEach(post => {
    uiRender(post); 
  });

}