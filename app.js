const express = require('express');
const app = express();

const {Server} = require('socket.io');
const http = require('http');
const path = require('path');

const server = http.createServer(app);
const io = new Server(server);


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", function(socket)  {
    socket.on("send-location",function(data){
        io.emit("receive-location",{id: socket.id, ...data });  //jitne log connected hain un sab ko data bhej do
    });
    socket.on("disconnect" ,function(){
  io.emit("user-disconnected", socket.id);
});

    console.log("connected");
    
});

app.get('/', (req, res) => {
    res.render('index');
});

//server.listen(3000)
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});