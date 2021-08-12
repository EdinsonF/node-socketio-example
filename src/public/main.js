const sockClient = io();

sockClient.on('ping', () => {
  console.log("escuchando emmit del server");
})