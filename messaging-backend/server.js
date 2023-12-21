import express from'express'
import mongoose from 'mongoose'

//App config
const app = express()
const port = 9000
const connection_url = 'mongodb+srv://kormichaliq:hf48Mqio2v7GNorW@cluster0.ji4rq2v.mongodb.net/?retryWrites=true&w=majority'
//middlewears

//Database Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//api Endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})