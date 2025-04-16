const express = require('express')
const {
    createTask,
    getTasks,
    deleteTask,
    updateTask
} = require('../controllers/taskController')

const router = express.Router()

router.use(logger)

router.get('/tasks', getTasks)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.patch('/tasks/:id', updateTask)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router