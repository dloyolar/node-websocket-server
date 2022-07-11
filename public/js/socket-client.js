// Refs
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');
const boxTexts = document.querySelector('#boxTexts');

const socket = io();

socket.on('connect', () => {
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
});

socket.on('send-msg', (payload) => {
  console.log(payload); // Client recieve payload from server
  boxTexts.insertAdjacentHTML(
    'beforeend',
    `<span style="background-color: yellow">, ${payload.message}</span>`
  );
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  const payload = { message, id: 'ABC123', date: new Date().getTime() };
  socket.emit('send-msg', payload, (id) => {
    console.log('From server', id);
  });
  boxTexts.insertAdjacentHTML(
    'beforeend',
    `<span style="background-color: yellow">, ${payload.message}</span>`
  );
});
