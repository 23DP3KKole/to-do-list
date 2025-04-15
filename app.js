const express = require('express')
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config()

const app = express()
const taskRoutes = require('./routers/tasksRouters')

//middlewear
app.use(express.static(path.join(__dirname, './public')))

app.use(express.json())

//routes
app.use('/api', taskRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Example app listening on port', process.env.PORT)
    })
  })
  .catch((error) =>{
    console.log(error)
  })