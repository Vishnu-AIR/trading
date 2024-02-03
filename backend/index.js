const app = require("./app");
const db = require("./config/db");
require("dotenv").config();
const ws = require('ws');
const Message = require('./models/message.model');

const port = process.env.PORT || 3030;

const server = app.listen(port, () => {
  console.log("Server Listening on Port http://localhost:" + port);
});

const wss = new ws.WebSocketServer({ server });

wss.on('connection', (connection, req) => {

  function notifyAboutOnlinePeople() {
    [...wss.clients].forEach(client => {
      client.send(JSON.stringify({
        online: [...wss.clients].map(c => ({userId:c.userId,username:c.username})),
      }));
    });
  }

  connection.isAlive = true;

  connection.timer = setInterval(() => {
    connection.ping();
    connection.deathTimer = setTimeout(() => {
      connection.isAlive = false;
      clearInterval(connection.timer);
      connection.terminate();
      notifyAboutOnlinePeople();
      console.log('dead');
    }, 1000);
  }, 5000);

  connection.on('pong', () => {
    clearTimeout(connection.deathTimer);
  });

  // read username and id form the cookie for this connection
  // const cookies = req.headers;
  // console.log(cookies);

  // if (cookies) {
  //   const userId  = cookies.split(';')[1].split('=')[1];
  //   const username = cookies.split(';')[0].split('}')[0].split('=')[1];
    
  //   console.log(userId+" -> "+username)
  //   connection.userId = userId;
  //   connection.username = username;
  // }
  
  connection.on('message', async (message) => {
    const messageData = JSON.parse(message.toString());
    const {sender,recipient, text, file} = messageData;
    let filename = null;
    if (file) {
      console.log('size', file.data.length);
      const parts = file.name.split('.');
      const ext = parts[parts.length - 1];
      filename = Date.now() + '.'+ext;
      const path = __dirname + '/uploads/' + filename;
      const bufferData = new Buffer(file.data.split(',')[1], 'base64');
      fs.writeFile(path, bufferData, () => {
        console.log('file saved:'+path);
      });
    }
    if (recipient && (text || file)) {
      console.log(sender);
      //console.log(connection.userId);
      const messageDoc = await Message.create({
        sender,
        recipient,
        text,
        file: file ? filename : null,
      });
      console.log('created message');
      [...wss.clients]
        .filter(c => c.userId === recipient)
        .forEach(c => c.send(JSON.stringify({
          text,
          sender:connection.userId,
          recipient,
          file: file ? filename : null,
          _id:messageDoc._id,
        })));
    }
  });

  // notify everyone about online people (when someone connects)
  notifyAboutOnlinePeople();
});
