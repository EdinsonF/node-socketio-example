
const addNewBtn = document.querySelector('.addNew');
      addNewBtn.addEventListener('click', () => {
        console.log("clic");
        const container = document.querySelector('.App');
        const card = document.querySelector('.card');
        container.style.display = 'flex'; 
        
      });



let datos = {
  user: "",
  title: "",
  post: ""
}

function handleInput(e){
  datos={
    ...datos,
    [e.name]: e.value
  }
  console.log(datos);
}
 
 
const sockClient = io();

const sendForm = () => {

  if(datos.user === "" || datos.title === "" || datos.post ===""){
    console.log("campos vacios");
    let mjs = document.querySelector('.mjs');
    mjs.style.display = "flex";
    setTimeout(() => {
      mjs.style.display = "none";
    }, 2000);
    return;
  }

  sockClient.emit('client:newPost', {
    datos
})
}

sockClient.on('server:newPost', newPost)


sockClient.on('server:loadPost', loadPosts)





