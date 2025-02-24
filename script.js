const express = require('express');
const productRouter = require('./routes/productRoute');
const app = express();


app.use(express.json())

app.get('/', (req, res) =>{
  res.send('Server is running')
})


app.use('/', productRouter)


app.listen(3500,()=>{
    console.log("Server is running");
})