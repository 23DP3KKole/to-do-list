const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;
const taskRoutes = require('./routers/tasksRouters')

//middlewear
app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/tasks', taskRoutes)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Example app listening on port', PORT)
    })
  })
  .catch((error) =>{
    console.log(error)
  })