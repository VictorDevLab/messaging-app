import express from'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
//App config
const app = express()
const port = 9000
const connection_url = 'mongodb+srv://kormichaliq:hf48Mqio2v7GNorW@cluster0.ji4rq2v.mongodb.net/?retryWrites=true&w=majority'
const pusher = new Pusher({
  appId: "1728655",
  key: "5d51f511d895aad858db",
  secret: "1cc9cc8f1d701818646a",
  cluster: "ap2",
  useTLS: true
});
//middlewears
app.use(express.json())
app.use(Cors())
//Database Config
mongoose.connect(connection_url)
//api Endpoints
const db = mongoose.connection
db.once("open", () => { 
    console.log("DB Connected")
    const msgCollection = db.collection("messagingmessages")
    const changeStream = msgCollection.watch()
    changeStream.on('change', change => {
        console.log(change)
        if(change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
}) } else {
            console.log('Error trigerring Pusher')
        }
}) })
app.get('/', (req, res) => {
  res.send('Hello World!') 
})
app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage)
      .then(data => res.status(201).send(data))
      .catch(err => res.status(500).send(err));
});
app.get('/messages/sync', (req, res) => {
  Messages.find()
      .then(data => {
          res.status(200).send(data);
      })
      .catch(err => {
          res.status(500).send(err);
      });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})