
const addNewBtn = document.querySelector('.addNew');
      addNewBtn.addEventListener('click', () => {
        console.log("clic");
        const container = document.querySelector('.App');
        const card = document.querySelector('.card');
        container.style.display = 'flex'; 
        
      });



let datos = {
  user: "",
  post: ""
}

function handleInput(e){
  datos={
    ...datos,
    [e.name]: e.value
  }
}
 
 
const sockClient = io();

const sendForm = () => {
  sockClient.emit('client:newPost', {
    datos
})
}

sockClient.on('server:newPost', newPost)


sockClient.on('server:loadPost', loadPosts)





