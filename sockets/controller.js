const socketController = (socket) => {
  console.log('Client Connected', socket.id);

  socket.on('disconnect', () => {
    console.log('Client Disconnected', socket.id);
  });

  socket.on('send-msg', (payload, callback) => {
    const id = 123456;
    callback(id);
    socket.broadcast.emit('send-msg', payload);
  });
};
module.exports = { socketController };
