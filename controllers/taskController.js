const Task = require('../models/taskModel')

const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({createdAt: -1})

    res.status(200).json(tasks)
}

const createTask = async (req, res) => {
    const {title, description, status} = req.body

    try {
        const task = await Task.create({title, description, status})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createTask,
    getTasks
}