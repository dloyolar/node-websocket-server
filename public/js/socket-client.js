// Refs
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
  console.log('Connected');

  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  console.log('Disconnect from server');
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = { message, id: 'ABC123', date: new Date().getTime() };
  socket.emit('send-msg', payload);
});
