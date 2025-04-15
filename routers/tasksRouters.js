const express = require('express')
const {
    createTask,
    getTasks,
} = require('../controllers/taskController')

const router = express.Router()

router.use(logger)

router.get('/tasks', getTasks)

router.post('/tasks', createTask)

router.delete('tasks/:id', (req, res) =>{
    res.json({mssg: 'DELETE a workout'})
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router