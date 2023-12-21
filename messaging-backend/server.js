import express from'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Messages from './dbMessages.js'
//App config
const app = express()
const port = 9000
const connection_url = 'mongodb+srv://kormichaliq:hf48Mqio2v7GNorW@cluster0.ji4rq2v.mongodb.net/?retryWrites=true&w=majority'
//middlewears
app.use(express.json())
app.use(Cors())
//Database Config
mongoose.connect(connection_url)
//api Endpoints
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